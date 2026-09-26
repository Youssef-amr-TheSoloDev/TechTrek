const loadBtn = document.getElementById('loadBtn');
const grid = document.getElementById('productGrid');
const statusMsg = document.getElementById('statusMessage');
const counter = document.getElementById('productCounter');
const emptyResult = document.getElementById('emptyResult');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sortSelect');

let allProducts = [];
let filteredProducts = [];
let isLoading = false;

function showStatus(text, type = '') {
  statusMsg.textContent = text;
  statusMsg.className = 'status-message';
  if (type) statusMsg.classList.add(type);
}

function hideStatus() {
  statusMsg.className = 'status-message';
  statusMsg.textContent = '';
}

function renderProducts(products) {
  if (!products || products.length === 0) {
    grid.innerHTML = '';
    emptyResult.style.display = 'block';
    counter.textContent = 'Showing 0 products';
    return;
  }
  emptyResult.style.display = 'none';
  counter.textContent = `Showing ${products.length} product${products.length > 1 ? 's' : ''}`;

  grid.innerHTML = products.map(p => {
    const thumbnail = p.thumbnail || 'https://dummyjson.com/image/i/products/1/thumbnail.jpg';
    const discount = p.discountPercentage ? `${Math.round(p.discountPercentage)}% off` : '';
    const price = p.price?.toFixed(2) ?? '0.00';
    const originalPrice = p.price ? (p.price / (1 - (p.discountPercentage || 0) / 100)).toFixed(2) : '';
    return `
      <div class="product-card" data-id="${p.id}">
        <img src="${thumbnail}" alt="${p.title}" loading="lazy">
        <div class="card-body">
          <h3>${p.title}</h3>
          <span class="category-tag">${p.category || 'uncategorized'}</span>
          <div class="price">$${price} ${originalPrice ? `<small>$${originalPrice}</small>` : ''}</div>
          ${discount ? `<span class="discount-badge">${discount}</span>` : ''}
          <div class="stock-info">${p.availabilityStatus || 'In stock'} · ${p.stock ?? ''} left</div>
        </div>
      </div>
    `;
  }).join('');

    
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
        const id = card.dataset.id;
        if (id) window.location.href = `product.html?id=${id}`;
        });
    });
}

async function fetchProducts() {
  if (isLoading) return;
  isLoading = true;
  showStatus('Loading products...', 'loading');
  loadBtn.disabled = true;

  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    if (!data.products || !Array.isArray(data.products)) throw new Error('Invalid data');

    allProducts = data.products;
    populateCategories(allProducts);
    applyFiltersAndRender();
    showStatus(`Loaded ${allProducts.length} products`, '');
  } catch (err) {
    console.error(err);
    showStatus(`Error: ${err.message || 'Failed to load products'}`, 'error');
    grid.innerHTML = '';
    counter.textContent = 'No products';
  } finally {
    isLoading = false;
    loadBtn.disabled = false;
    setTimeout(hideStatus, 3000);
  }
}


function populateCategories(products) {
  const cats = new Set(products.map(p => p.category).filter(Boolean));
  categoryFilter.innerHTML = '<option value="all">All categories</option>';
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c.charAt(0).toUpperCase() + c.slice(1);
    categoryFilter.appendChild(opt);
  });
}

function applyFiltersAndRender() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortSelect.value;

  let result = [...allProducts];

  if (search) {
    result = result.filter(p => p.title.toLowerCase().includes(search));
  }

  if (category !== 'all') {
    result = result.filter(p => p.category === category);
  }

  if (sort === 'asc') {
    result.sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (sort === 'desc') {
    result.sort((a, b) => (b.price || 0) - (a.price || 0));
  }

  filteredProducts = result;
  renderProducts(result);
}

loadBtn.addEventListener('click', fetchProducts);

searchInput.addEventListener('input', () => {
  if (allProducts.length) applyFiltersAndRender();
});

categoryFilter.addEventListener('change', () => {
  if (allProducts.length) applyFiltersAndRender();
});

sortSelect.addEventListener('change', () => {
  if (allProducts.length) applyFiltersAndRender();
});

async function loadSingleProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const container = document.getElementById('singleProductContainer');
  if (!container || !id) return;

  container.innerHTML = '<p>Loading product...</p>';
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) throw new Error('Product not found');
    const product = await response.json();

    container.innerHTML = `
      <div class="single-product-wrapper">
        <h2>${product.title}</h2>
        <div class="detail-row">
          <div style="flex:1; min-width:200px;">
            <img src="${product.thumbnail || 'https://dummyjson.com/image/i/products/1/thumbnail.jpg'}" alt="${product.title}" style="width:100%; max-height:300px; object-fit:contain; background:#fafafa; border-radius:20px;">
          </div>
          <div class="detail-col">
            <p><span class="label">Category:</span> ${product.category}</p>
            <p><span class="label">Price:</span> $${product.price?.toFixed(2)}</p>
            ${product.discountPercentage ? `<p><span class="label">Discount:</span> ${product.discountPercentage}%</p>` : ''}
            <p><span class="label">Rating:</span> ${product.rating ?? '—'}</p>
            <p><span class="label">Stock:</span> ${product.stock ?? '—'} (${product.availabilityStatus || ''})</p>
            <p><span class="label">Brand:</span> ${product.brand || '—'}</p>
            <p><span class="label">Description:</span><br> ${product.description || '—'}</p>
            <p style="margin-top:0.5rem"><span class="label">Return policy:</span> ${product.returnPolicy || '—'}</p>
            <p><span class="label">Warranty:</span> ${product.warrantyInformation || '—'}</p>
          </div>
        </div>
        <div style="margin-top:1.5rem;">
          <a href="index.html" style="display:inline-block; background:#000; color:white; padding:0.5rem 1.8rem; border-radius:40px; text-decoration:none; font-weight:500;">← Back to catalog</a>
        </div>
      </div>
    `;
  } catch (err) {
    container.innerHTML = `<p style="color:#b00020;">❌ ${err.message}</p>`;
  }
}

if (window.location.pathname.includes('product.html')) {
  document.addEventListener('DOMContentLoaded', loadSingleProduct);
} else {
  grid.innerHTML = '';
  counter.textContent = 'Press "Load Products" to start';
  emptyResult.style.display = 'none';
}
