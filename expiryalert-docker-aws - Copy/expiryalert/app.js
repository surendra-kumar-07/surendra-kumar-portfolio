(() => {
  "use strict";
  const STORAGE_KEY = "expiryalert.products.v1";
  const $ = (id) => document.getElementById(id);
  const form = $("productForm");
  const fields = ["name", "category", "expiryDate", "quantity", "value", "notes"];
  let products = loadProducts();

  function loadProducts() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) ? parsed.filter(isValidStoredProduct) : [];
    } catch (error) {
      console.warn("Could not read saved inventory.", error);
      return [];
    }
  }
  function isValidStoredProduct(p) {
    return p && typeof p.id === "string" && typeof p.name === "string" &&
      typeof p.category === "string" && /^\d{4}-\d{2}-\d{2}$/.test(p.expiryDate) &&
      Number.isFinite(Number(p.quantity)) && Number(p.quantity) > 0 &&
      Number.isFinite(Number(p.value)) && Number(p.value) >= 0;
  }
  function saveProducts() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
      return true;
    } catch (error) {
      showError("Could not save data in this browser. Check available storage.");
      return false;
    }
  }
  function todayISO() {
    const d = new Date();
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 10);
  }
  function dayDifference(dateString) {
    const a = new Date(`${todayISO()}T00:00:00`);
    const b = new Date(`${dateString}T00:00:00`);
    return Math.round((b - a) / 86400000);
  }
  function statusOf(p) {
    const days = dayDifference(p.expiryDate);
    if (days < 0) return { key: "expired", label: `Expired ${Math.abs(days)}d ago` };
    if (days <= 7) return { key: "soon", label: days === 0 ? "Expires today" : `In ${days} day${days === 1 ? "" : "s"}` };
    return { key: "safe", label: `In ${days} days` };
  }
  function money(value) {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(value);
  }
  function dateLabel(date) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }
  function esc(value) {
    return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }
  function iconFor(category) {
    return ({ Food: "🥫", Medicine: "💊", Household: "🧴", "Personal care": "🧼", Other: "📦" })[category] || "📦";
  }
  function showError(message = "") { $("formError").textContent = message; }
  function resetForm() {
    form.reset();
    $("productId").value = "";
    $("quantity").value = "1";
    $("value").value = "0";
    $("formTitle").textContent = "Add a product";
    $("saveBtn").textContent = "＋ Add product";
    $("cancelEdit").classList.add("hidden");
    showError("");
  }
  function getFilteredProducts() {
    const term = $("search").value.trim().toLowerCase();
    const filter = $("statusFilter").value;
    return products.filter(p => {
      const matchesText = `${p.name} ${p.category} ${p.notes || ""}`.toLowerCase().includes(term);
      const status = statusOf(p).key;
      return matchesText && (filter === "all" || status === filter || (filter === "safe" && status === "safe"));
    }).sort((a, b) => a.expiryDate.localeCompare(b.expiryDate));
  }
  function render() {
    const expired = products.filter(p => statusOf(p).key === "expired");
    const soon = products.filter(p => statusOf(p).key === "soon");
    const risk = products.filter(p => statusOf(p).key !== "safe").reduce((sum, p) => sum + Number(p.quantity) * Number(p.value), 0);
    $("totalCount").textContent = products.length;
    $("soonCount").textContent = soon.length;
    $("expiredCount").textContent = expired.length;
    $("riskValue").textContent = money(risk);
    $("todayLabel").textContent = new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
    $("year").textContent = new Date().getFullYear();

    const visible = getFilteredProducts();
    $("visibleCount").textContent = `${visible.length} item${visible.length === 1 ? "" : "s"}`;
    $("productList").innerHTML = visible.map(p => {
      const status = statusOf(p);
      const total = Number(p.quantity) * Number(p.value);
      return `<article class="product-item">
        <div class="product-icon" aria-hidden="true">${iconFor(p.category)}</div>
        <div class="product-main"><div class="product-title">${esc(p.name)}</div>
          <div class="product-meta">${esc(p.category)} · Qty ${Number(p.quantity)}<br>Expiry: ${dateLabel(p.expiryDate)}${p.notes ? `<br>${esc(p.notes)}` : ""}</div>
        </div>
        <div class="product-right"><span class="status ${status.key}">${status.label}</span>
          <div class="product-value">${money(total)}</div>
          <div class="item-actions"><button class="text-button" data-action="edit" data-id="${esc(p.id)}">Edit</button><button class="text-button delete" data-action="delete" data-id="${esc(p.id)}">Delete</button></div>
        </div></article>`;
    }).join("");
    $("emptyState").style.display = visible.length ? "none" : "block";
    $("productList").style.display = visible.length ? "flex" : "none";
  }
  function validateForm(data) {
    if (!data.name) return "Enter a product name.";
    if (data.name.length > 80) return "Product name must be 80 characters or fewer.";
    if (!["Food", "Medicine", "Household", "Personal care", "Other"].includes(data.category)) return "Choose a valid category.";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.expiryDate) || Number.isNaN(new Date(`${data.expiryDate}T00:00:00`).getTime())) return "Choose a valid expiry date.";
    if (data.quantity === "" || !Number.isInteger(Number(data.quantity)) || Number(data.quantity) < 1 || Number(data.quantity) > 100000) return "Quantity must be a whole number from 1 to 100,000.";
    if (data.value === "" || !Number.isFinite(Number(data.value)) || Number(data.value) < 0 || Number(data.value) > 100000000) return "Unit value must be between ₹0 and ₹100,000,000.";
    if (data.notes.length > 500) return "Notes must be 500 characters or fewer.";
    return "";
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(fields.map(key => [key, $(key).value.trim()]));
    const error = validateForm(data);
    if (error) { showError(error); return; }
    const id = $("productId").value;
    const product = { id: id || (globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`), ...data,
      quantity: Number(data.quantity), value: Number(data.value), updatedAt: new Date().toISOString() };
    const previous = products;
    products = id ? products.map(p => p.id === id ? product : p) : [product, ...products];
    if (!saveProducts()) { products = previous; return; }
    resetForm(); render();
  });
  $("productList").addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const product = products.find(p => p.id === button.dataset.id);
    if (!product) return;
    if (button.dataset.action === "delete") {
      if (!confirm(`Delete "${product.name}" from your inventory?`)) return;
      const previous = products;
      products = products.filter(p => p.id !== product.id);
      if (saveProducts()) render(); else products = previous;
    } else {
      $("productId").value = product.id;
      fields.forEach(key => $(key).value = product[key] ?? "");
      $("formTitle").textContent = "Edit product";
      $("saveBtn").textContent = "Save changes";
      $("cancelEdit").classList.remove("hidden");
      showError("");
      $("name").focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
  $("cancelEdit").addEventListener("click", resetForm);
  $("search").addEventListener("input", render);
  $("statusFilter").addEventListener("change", render);
  $("exportBtn").addEventListener("click", () => {
    const headers = ["Name", "Category", "Expiry date", "Quantity", "Unit value INR", "Total value INR", "Status", "Notes"];
    const rows = products.map(p => [p.name, p.category, p.expiryDate, p.quantity, p.value, Number(p.quantity) * Number(p.value), statusOf(p).label, p.notes || ""]);
    const csv = [headers, ...rows].map(row => row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\r\n");
    const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "expiryalert-inventory.csv"; a.click();
    URL.revokeObjectURL(url);
  });
  render();
})();