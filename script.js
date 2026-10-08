/* =========================================================
   RBXSTORE.ID - SCRIPT.JS
   ========================================================= */

"use strict";

/* =========================================================
   CONFIG
   ========================================================= */

const STORE_NAME = "RBXSTORE.ID";
const WHATSAPP_NUMBER = "6282169942899";
const REPORT_EMAIL = "callvinlionel50@gmail.com";
const DISCOUNT_THRESHOLD = 30000;
const DISCOUNT_RATE = 0.05;

const STORAGE_KEYS = {
  cart: "rbxstore_cart",
  nightMode: "rbxstore_night_mode",
  language: "rbxstore_language"
};


/* =========================================================
   PRODUCT DATA
   ========================================================= */

const products = {

  robux: {
    title: "Robux - Roblox",
    game: "Roblox",
    description: "Robux untuk berbagai kebutuhan di Roblox.",
    products: [
      { id: "robux-50", name: "50 Robux", price: 11000 },
      { id: "robux-80", name: "80 Robux", price: 16000 },
      { id: "robux-150", name: "150 Robux", price: 29000 },
      { id: "robux-300", name: "300 Robux", price: 53000 },
      { id: "robux-500", name: "500 Robux", price: 82000 },
      { id: "robux-750", name: "750 Robux", price: 115500 },
      { id: "robux-1000", name: "1.000 Robux", price: 160000 }
    ]
  },

  "steal-an-egg": {
    title: "Steal An Egg - Roblox",
    game: "Steal An Egg",
    description: "Produk dan jasa untuk game Steal An Egg.",
    products: [
      {
        id: "sae-money",
        name: "x2 Money SAE",
        price: 45000
      },
      {
        id: "sae-growth",
        name: "x2 Growth Speed SAE",
        price: 51000
      },
      {
        id: "sae-egg",
        name: "Limited Egg SAE",
        price: 14000
      },
      {
        id: "sae-joki",
        name: "Joki Speed Steal An Egg",
        price: 200,
        type: "joki"
      }
    ]
  },

  "toilet-tower-defense": {
    title: "Toilet Tower Defense - Roblox",
    game: "Toilet Tower Defense",
    description: "Gems Toilet Tower Defense dengan harga terjangkau.",
    products: [
      {
        id: "ttd-10000",
        name: "10.000 Gems",
        price: 650
      },
      {
        id: "ttd-100000",
        name: "100.000 Gems",
        price: 3000
      },
      {
        id: "ttd-500000",
        name: "500.000 Gems",
        price: 10000
      },
      {
        id: "ttd-1000000",
        name: "1.000.000 Gems",
        price: 17000
      }
    ]
  },

  "mobile-legends": {
    title: "Mobile Legends",
    game: "Mobile Legends",
    description: "Diamond Mobile Legends untuk kebutuhan top up.",
    products: [
      {
        id: "ml-100",
        name: "100 Diamonds",
        price: 30000
      },
      {
        id: "ml-300",
        name: "300 Diamonds",
        price: 92000
      },
      {
        id: "ml-500",
        name: "500 Diamonds",
        price: 165000
      },
      {
        id: "ml-1000",
        name: "1.000 Diamonds",
        price: 310000
      }
    ]
  },

  "99-night": {
    title: "99 Night In The Forest - Roblox",
    game: "99 Night In The Forest",
    description: "Diamond 99 Night In The Forest.",
    products: [
      {
        id: "night-20",
        name: "20 Diamonds",
        price: 15000
      },
      {
        id: "night-100",
        name: "100 Diamonds",
        price: 45000
      },
      {
        id: "night-250",
        name: "250 Diamonds",
        price: 99000
      },
      {
        id: "night-700",
        name: "700 Diamonds",
        price: 269000
      }
    ]
  },

  "free-fire": {
    title: "Free Fire",
    game: "Free Fire",
    description: "Diamond Free Fire dengan berbagai pilihan nominal.",
    products: [
      {
        id: "ff-70",
        name: "70 Diamonds",
        price: 10000
      },
      {
        id: "ff-100",
        name: "100 Diamonds",
        price: 14000
      },
      {
        id: "ff-200",
        name: "200 Diamonds",
        price: 27000
      },
      {
        id: "ff-310",
        name: "310 Diamonds",
        price: 42000
      },
      {
        id: "ff-520",
        name: "520 Diamonds",
        price: 67000
      },
      {
        id: "ff-740",
        name: "740 Diamonds",
        price: 90000
      },
      {
        id: "ff-1060",
        name: "1.060 Diamonds",
        price: 130000
      }
    ]
  }
};


/* =========================================================
   CUSTOM PRODUCTS
   ========================================================= */

const customProducts = {
  robux: {
    id: "custom-robux",
    name: "Custom Robux",
    game: "Roblox",
    max: 10000,
    unitPrice: null
  },

  "mobile-legends": {
    id: "custom-ml",
    name: "Custom Diamonds",
    game: "Mobile Legends",
    max: 10000,
    unitPrice: null
  },

  "free-fire": {
    id: "custom-ff",
    name: "Custom Diamonds FF",
    game: "Free Fire",
    max: 10000,
    unitPrice: null
  }
};


/* =========================================================
   LANGUAGE DATA
   ========================================================= */

const translations = {

  id: {
    home: "Beranda",
    categories: "Kategori",
    about: "Tentang Kami",
    report: "Laporkan Masalah",
    share: "Bagikan Toko",
    night: "Night Mode",
    language: "Bahasa",
    cart: "Keranjang",
    buy: "Beli via WhatsApp",
    add: "Tambah ke Keranjang",
    continue: "Lanjutkan ke Toko",
    close: "Tutup",
    back: "Kembali ke Toko",
    custom: "Custom Pembelian",
    customTitle: "PESANAN KHUSUS",
    nameOrder: "Nama Pesanan",
    gameName: "Nama Game",
    directBuy: "Beli langsung via WhatsApp",
    subtotal: "Subtotal",
    discount: "Diskon 5%",
    total: "Total",
    emptyCart: "Keranjang kamu masih kosong.",
    reportButton: "Kirim Laporan",
    selectGame: "Pilih Game",
    menu: "Menu"
  },

  en: {
    home: "Home",
    categories: "Categories",
    about: "About Us",
    report: "Report Problem",
    share: "Share Store",
    night: "Night Mode",
    language: "Language",
    cart: "Cart",
    buy: "Buy via WhatsApp",
    add: "Add to Cart",
    continue: "Continue to Store",
    close: "Close",
    back: "Back to Store",
    custom: "Custom Purchase",
    customTitle: "CUSTOM ORDER",
    nameOrder: "Order Name",
    gameName: "Game Name",
    directBuy: "Buy directly via WhatsApp",
    subtotal: "Subtotal",
    discount: "5% Discount",
    total: "Total",
    emptyCart: "Your cart is empty.",
    reportButton: "Send Report",
    selectGame: "Select Game",
    menu: "Menu"
  },

  fil: {
    home: "Home",
    categories: "Mga Kategorya",
    about: "Tungkol sa Amin",
    report: "I-report ang Problema",
    share: "Ibahagi ang Store",
    night: "Night Mode",
    language: "Wika",
    cart: "Cart",
    buy: "Bumili sa WhatsApp",
    add: "Idagdag sa Cart",
    continue: "Magpatuloy sa Store",
    close: "Isara",
    back: "Bumalik sa Store",
    custom: "Custom na Pagbili",
    customTitle: "CUSTOM ORDER",
    nameOrder: "Pangalan ng Order",
    gameName: "Pangalan ng Game",
    directBuy: "Direktang bumili sa WhatsApp",
    subtotal: "Subtotal",
    discount: "5% Discount",
    total: "Total",
    emptyCart: "Walang laman ang cart mo.",
    reportButton: "Ipadala ang Report",
    selectGame: "Pumili ng Game",
    menu: "Menu"
  },

  zh: {
    home: "首页",
    categories: "分类",
    about: "关于我们",
    report: "报告问题",
    share: "分享商店",
    night: "夜间模式",
    language: "语言",
    cart: "购物车",
    buy: "通过 WhatsApp 购买",
    add: "加入购物车",
    continue: "继续进入商店",
    close: "关闭",
    back: "返回商店",
    custom: "自定义购买",
    customTitle: "自定义订单",
    nameOrder: "订单名称",
    gameName: "游戏名称",
    directBuy: "直接通过 WhatsApp 购买",
    subtotal: "小计",
    discount: "5% 折扣",
    total: "总计",
    emptyCart: "购物车为空。",
    reportButton: "发送报告",
    selectGame: "选择游戏",
    menu: "菜单"
  },

  es: {
    home: "Inicio",
    categories: "Categorías",
    about: "Sobre Nosotros",
    report: "Informar Problema",
    share: "Compartir Tienda",
    night: "Modo Noche",
    language: "Idioma",
    cart: "Carrito",
    buy: "Comprar por WhatsApp",
    add: "Añadir al Carrito",
    continue: "Continuar a la Tienda",
    close: "Cerrar",
    back: "Volver a la Tienda",
    custom: "Compra Personalizada",
    customTitle: "PEDIDO PERSONALIZADO",
    nameOrder: "Nombre del Pedido",
    gameName: "Nombre del Juego",
    directBuy: "Comprar directamente por WhatsApp",
    subtotal: "Subtotal",
    discount: "5% de Descuento",
    total: "Total",
    emptyCart: "Tu carrito está vacío.",
    reportButton: "Enviar Informe",
    selectGame: "Seleccionar Juego",
    menu: "Menú"
  }

};


/* =========================================================
   STATE
   ========================================================= */

let cart = loadCart();
let currentLanguage = localStorage.getItem(STORAGE_KEYS.language) || "id";
let currentCategory = null;
let currentProduct = null;


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function exists(selector) {
  return !!document.querySelector(selector);
}


/* =========================================================
   FORMAT CURRENCY
   ========================================================= */

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Number(value) || 0);
}


/* =========================================================
   STORAGE
   ========================================================= */

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.cart);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Gagal membaca cart:", error);
    return [];
  }
}


function saveCart() {
  localStorage.setItem(
    STORAGE_KEYS.cart,
    JSON.stringify(cart)
  );
}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initIntro();
  initNavigation();
  initMenu();
  initCart();
  initCategories();
  initForms();
  initShare();
  initNightMode();
  initLanguage();

  updateCartUI();
  applyLanguage();

});


/* =========================================================
   INTRO
   ========================================================= */

function initIntro() {

  const intro = $("#introScreen");

  if (!intro) {
    return;
  }

  /*
    Intro:
    - muncul
    - tunggu sekitar 2 detik
    - fade out
  */

  setTimeout(() => {
    intro.classList.add("intro-hidden");

    setTimeout(() => {
      intro.style.display = "none";

      const promo = $("#promoOverlay");

      if (promo) {
        promo.classList.add("show");
      }

    }, 350);

  }, 2300);
}


/* =========================================================
   PROMO MODAL
   ========================================================= */

function closePromo() {

  const promo = $("#promoOverlay");

  if (!promo) {
    return;
  }

  promo.classList.remove("show");
}


function continueToStore() {
  closePromo();
  showPage("home");
}


if (exists("#closePromo")) {
  $("#closePromo").addEventListener("click", closePromo);
}

if (exists("#continueToStore")) {
  $("#continueToStore").addEventListener(
    "click",
    continueToStore
  );
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function showPage(pageName) {

  const pages = $$("[data-page-content]");

  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const target = document.querySelector(
    `[data-page-content="${pageName}"]`
  );

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  closeSideMenu();
  closeCartDrawer();

  if (pageName === "category") {
    renderCategoryPage();
  }

  if (pageName === "product") {
    renderProductPage();
  }
}


function initNavigation() {

  $$("[data-page]").forEach((button) => {

    button.addEventListener("click", () => {

      const page = button.dataset.page;

      if (page) {
        showPage(page);
      }

    });

  });

}


/* =========================================================
   MENU
   ========================================================= */

function initMenu() {

  const menuButton = $("#menuButton");
  const closeMenu = $("#closeMenu");
  const backdrop = $("#menuBackdrop");

  if (menuButton) {
    menuButton.addEventListener(
      "click",
      openSideMenu
    );
  }

  if (closeMenu) {
    closeMenu.addEventListener(
      "click",
      closeSideMenu
    );
  }

  if (backdrop) {
    backdrop.addEventListener(
      "click",
      closeSideMenu
    );
  }

}


function openSideMenu() {

  const menu = $("#sideMenu");
  const backdrop = $("#menuBackdrop");

  if (menu) {
    menu.classList.add("open");
  }

  if (backdrop) {
    backdrop.classList.add("show");
  }

  document.body.classList.add("menu-open");
}


function closeSideMenu() {

  const menu = $("#sideMenu");
  const backdrop = $("#menuBackdrop");

  if (menu) {
    menu.classList.remove("open");
  }

  if (backdrop) {
    backdrop.classList.remove("show");
  }

  document.body.classList.remove("menu-open");
}


/* =========================================================
   CATEGORIES
   ========================================================= */

function initCategories() {

  $$(".category-card").forEach((card) => {

    card.addEventListener("click", () => {

      const category = card.dataset.category;

      if (!category) {
        return;
      }

      currentCategory = category;

      showPage("category");

      renderCategoryPage();

    });

  });


  if (exists("#customPurchaseButton")) {

    $("#customPurchaseButton").addEventListener(
      "click",
      () => showPage("custom")
    );

  }

}


/* =========================================================
   CATEGORY PAGE
   ========================================================= */

function renderCategoryPage() {

  if (!currentCategory) {
    return;
  }

  const category = products[currentCategory];

  if (!category) {
    return;
  }

  const title = $("#categoryPageTitle");
  const description = $("#categoryPageDescription");
  const grid = $("#productGrid");

  if (title) {
    title.textContent = category.title;
  }

  if (description) {
    description.textContent = category.description;
  }

  if (!grid) {
    return;
  }

  grid.innerHTML = "";

  category.products.forEach((product) => {

    const card = createProductCard(
      product,
      currentCategory
    );

    grid.appendChild(card);

  });

  /*
    Custom product khusus
  */

  if (customProducts[currentCategory]) {

    const custom = customProducts[currentCategory];

    const customCard = document.createElement("article");

    customCard.className = "product-card custom-product-card";

    customCard.innerHTML = `
      <div class="product-card-icon">✦</div>

      <div class="product-card-body">
        <span class="product-badge">CUSTOM</span>

        <h3>${custom.name}</h3>

        <p>
          Tentukan jumlah sendiri.
          Maksimal ${custom.max.toLocaleString("id-ID")}.
        </p>

        <div class="product-price">
          Menunggu informasi
        </div>

        <button
          class="product-buy-btn"
          type="button"
          data-custom-category="${currentCategory}"
        >
          Custom
        </button>
      </div>
    `;

    grid.appendChild(customCard);

  }

  /*
    Joki SAE
  */

  if (currentCategory === "steal-an-egg") {

    const jokiCard = grid.querySelector(
      '[data-product-id="sae-joki"]'
    );

    if (jokiCard) {
      // Tidak diperlukan aksi tambahan.
    }

  }

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product, category) {

  const card = document.createElement("article");

  card.className = "product-card";

  card.dataset.productId = product.id;

  const isJoki = product.type === "joki";

  card.innerHTML = `
    <div class="product-card-icon">
      ${isJoki ? "⚡" : "🎮"}
    </div>

    <div class="product-card-body">

      <h3>${product.name}</h3>

      ${
        isJoki
          ? `<p>Rp ${formatNumber(product.price)} / jam</p>`
          : `<p>Produk ${products[category].game}</p>`
      }

      <div class="product-price">
        ${
          isJoki
            ? formatRupiah(product.price) + " / jam"
            : formatRupiah(product.price)
        }
      </div>

      <div class="product-card-actions">

        <button
          type="button"
          class="product-detail-btn"
          data-product-detail="${product.id}"
          data-category="${category}"
        >
          Detail
        </button>

        <button
          type="button"
          class="product-buy-btn"
          data-product-buy="${product.id}"
          data-category="${category}"
        >
          Beli
        </button>

      </div>

    </div>
  `;

  return card;
}


/* =========================================================
   NUMBER FORMAT
   ========================================================= */

function formatNumber(value) {

  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0
  }).format(Number(value) || 0);

}


/* =========================================================
   PRODUCT EVENTS
   ========================================================= */

document.addEventListener("click", (event) => {

  const detailButton =
    event.target.closest("[data-product-detail]");

  const buyButton =
    event.target.closest("[data-product-buy]");

  const customButton =
    event.target.closest("[data-custom-category]");


  if (detailButton) {

    const id = detailButton.dataset.productDetail;
    const category = detailButton.dataset.category;

    openProductModal(id, category);

  }


  if (buyButton) {

    const id = buyButton.dataset.productBuy;
    const category = buyButton.dataset.category;

    openProductModal(id, category);

  }


  if (customButton) {

    const category = customButton.dataset.customCategory;

    openCustomProduct(category);

  }

});


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProductModal(productId, category) {

  const categoryData = products[category];

  if (!categoryData) {
    return;
  }

  const product = categoryData.products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return;
  }

  currentProduct = {
    ...product,
    category,
    game: categoryData.game
  };

  const modal = $("#productModal");
  const content = $("#modalProductContent");

  if (!modal || !content) {
    /*
      Kalau HTML tidak mempunyai modal,
      langsung buka WhatsApp.
    */

    buyProductDirect(product, categoryData.game);
    return;
  }

  const isJoki = product.type === "joki";

  content.innerHTML = `
    <div class="modal-product">

      <div class="modal-product-icon">
        ${isJoki ? "⚡" : "🎮"}
      </div>

      <span class="product-badge">
        ${categoryData.game}
      </span>

      <h2>${product.name}</h2>

      ${
        isJoki
          ? `
            <p>
              Harga jasa:
              <strong>${formatRupiah(product.price)}</strong>
              per jam.
            </p>

            <div class="quantity-selector">
              <button
                type="button"
                id="jokiMinus"
              >−</button>

              <input
                id="jokiHours"
                type="number"
                min="1"
                max="1000"
                value="1"
              >

              <button
                type="button"
                id="jokiPlus"
              >+</button>
            </div>

            <div class="modal-total">
              Total:
              <strong id="jokiTotal">
                ${formatRupiah(product.price)}
              </strong>
            </div>
          `
          : `
            <p>
              ${categoryData.description}
            </p>

            <div class="modal-total">
              Harga:
              <strong>
                ${formatRupiah(product.price)}
              </strong>
            </div>
          `
      }

      <div class="modal-actions">

        <button
          type="button"
          class="btn-secondary"
          id="modalAddCart"
        >
          ${translations[currentLanguage].add}
        </button>

        <button
          type="button"
          class="btn-primary"
          id="modalBuyNow"
        >
          ${translations[currentLanguage].buy}
        </button>

      </div>

    </div>
  `;

  modal.classList.add("show");

  initModalButtons();
}


function initModalButtons() {

  const addButton = $("#modalAddCart");
  const buyButton = $("#modalBuyNow");

  if (addButton) {

    addButton.addEventListener(
      "click",
      () => {

        if (
          currentProduct &&
          currentProduct.type === "joki"
        ) {

          const hours =
            getJokiHours();

          addToCart({
            ...currentProduct,
            quantity: hours,
            unitPrice: currentProduct.price,
            customLabel: `${hours} jam`
          });

        } else {

          addToCart({
            ...currentProduct,
            quantity: 1,
            unitPrice: currentProduct.price
          });

        }

        closeProductModal();

      }
    );

  }


  if (buyButton) {

    buyButton.addEventListener(
      "click",
      () => {

        if (
          currentProduct &&
          currentProduct.type === "joki"
        ) {

          const hours =
            getJokiHours();

          const item = {
            ...currentProduct,
            quantity: hours,
            unitPrice: currentProduct.price,
            customLabel: `${hours} jam`
          };

          buyProductDirect(
            item,
            currentProduct.game
          );

        } else {

          buyProductDirect(
            currentProduct,
            currentProduct.game
          );

        }

        closeProductModal();

      }
    );

  }


  const minus = $("#jokiMinus");
  const plus = $("#jokiPlus");
  const hoursInput = $("#jokiHours");

  if (minus) {

    minus.addEventListener(
      "click",
      () => {

        const current =
          Number(hoursInput.value) || 1;

        hoursInput.value =
          Math.max(1, current - 1);

        updateJokiTotal();

      }
    );

  }


  if (plus) {

    plus.addEventListener(
      "click",
      () => {

        const current =
          Number(hoursInput.value) || 1;

        hoursInput.value =
          Math.min(1000, current + 1);

        updateJokiTotal();

      }
    );

  }


  if (hoursInput) {

    hoursInput.addEventListener(
      "input",
      () => {

        let value =
          Number(hoursInput.value) || 1;

        value =
          Math.max(1, Math.min(1000, value));

        hoursInput.value = value;

        updateJokiTotal();

      }
    );

  }

}


function getJokiHours() {

  const input = $("#jokiHours");

  if (!input) {
    return 1;
  }

  let hours =
    Number(input.value) || 1;

  hours =
    Math.max(1, Math.min(1000, hours));

  return hours;
}


function updateJokiTotal() {

  if (!currentProduct) {
    return;
  }

  const hours =
    getJokiHours();

  const total =
    currentProduct.price * hours;

  const output =
    $("#jokiTotal");

  if (output) {
    output.textContent =
      formatRupiah(total);
  }

}


function closeProductModal() {

  const modal = $("#productModal");

  if (modal) {
    modal.classList.remove("show");
  }

}


document.addEventListener("click", (event) => {

  if (
    event.target.matches(
      "#closeProductModal, [data-close-product-modal]"
    )
  ) {

    closeProductModal();

  }

});


/* =========================================================
   PRODUCT PAGE
   ========================================================= */

function renderProductPage() {

  if (!currentProduct) {
    return;
  }

  const detail =
    $("#productDetail");

  if (!detail) {
    return;
  }

  detail.innerHTML = `
    <div class="product-detail-inner">

      <span class="product-badge">
        ${currentProduct.game}
      </span>

      <h1>${currentProduct.name}</h1>

      <div class="product-detail-price">
        ${
          currentProduct.type === "joki"
            ? formatRupiah(currentProduct.price) + " / jam"
            : formatRupiah(currentProduct.price)
        }
      </div>

      <p>
        Produk resmi dari ${STORE_NAME}.
      </p>

    </div>
  `;

}


/* =========================================================
   DIRECT BUY
   ========================================================= */

function buyProductDirect(product, game) {

  if (!product) {
    return;
  }

  const quantity =
    Number(product.quantity) || 1;

  const unitPrice =
    Number(product.unitPrice ?? product.price) || 0;

  const subtotal =
    unitPrice * quantity;

  const message = buildWhatsAppMessage({
    game,
    product: product.name,
    quantity,
    unitPrice,
    subtotal,
    customLabel: product.customLabel
  });

  openWhatsApp(message);

}


/* =========================================================
   CART
   ========================================================= */

function initCart() {

  const cartButton = $("#cartButton");
  const closeCart = $("#closeCart");
  const whatsappButton = $("#cartWhatsAppButton");

  if (cartButton) {
    cartButton.addEventListener(
      "click",
      openCartDrawer
    );
  }

  if (closeCart) {
    closeCart.addEventListener(
      "click",
      closeCartDrawer
    );
  }

  if (whatsappButton) {
    whatsappButton.addEventListener(
      "click",
      checkoutCart
    );
  }

}


function addToCart(item) {

  if (!item) {
    return;
  }

  const quantity =
    Number(item.quantity) || 1;

  const unitPrice =
    Number(item.unitPrice ?? item.price) || 0;

  const existing = cart.find(
    (cartItem) =>
      cartItem.id === item.id &&
      cartItem.customLabel === item.customLabel
  );

  if (existing) {

    existing.quantity += quantity;

  } else {

    cart.push({
      id: item.id,
      name: item.name,
      game: item.game,
      category: item.category,
      quantity,
      unitPrice,
      customLabel: item.customLabel || ""
    });

  }

  saveCart();
  updateCartUI();
  showToast("Produk berhasil ditambahkan ke keranjang.");

}


function removeFromCart(index) {

  if (
    index < 0 ||
    index >= cart.length
  ) {
    return;
  }

  cart.splice(index, 1);

  saveCart();
  updateCartUI();

}


function changeCartQuantity(index, change) {

  const item = cart[index];

  if (!item) {
    return;
  }

  item.quantity += change;

  if (item.quantity <= 0) {

    cart.splice(index, 1);

  }

  saveCart();
  updateCartUI();

}


/* =========================================================
   CART CALCULATION
   ========================================================= */

function calculateCart() {

  const subtotal = cart.reduce(
    (sum, item) => {

      const price =
        Number(item.unitPrice) || 0;

      const quantity =
        Number(item.quantity) || 0;

      return sum + price * quantity;

    },
    0
  );

  const discount =
    subtotal > DISCOUNT_THRESHOLD
      ? Math.round(subtotal * DISCOUNT_RATE)
      : 0;

  const total =
    subtotal - discount;

  return {
    subtotal,
    discount,
    total
  };

}


/* =========================================================
   CART UI
   ========================================================= */

function updateCartUI() {

  const cartCount = $("#cartCount");
  const cartItems = $("#cartItems");
  const emptyCart = $("#emptyCart");
  const cartSummary = $("#cartSummary");

  const subtotalElement =
    $("#cartSubtotal");

  const discountRow =
    $("#cartDiscountRow");

  const discountElement =
    $("#cartDiscount");

  const totalElement =
    $("#cartTotal");

  const totalQuantity =
    cart.reduce(
      (sum, item) =>
        sum + (Number(item.quantity) || 0),
      0
    );


  if (cartCount) {
    cartCount.textContent =
      totalQuantity;
  }


  if (!cartItems) {
    return;
  }


  if (cart.length === 0) {

    cartItems.innerHTML = "";

    if (emptyCart) {
      emptyCart.style.display = "block";
    }

    if (cartSummary) {
      cartSummary.style.display = "none";
    }

    return;

  }


  if (emptyCart) {
    emptyCart.style.display = "none";
  }

  if (cartSummary) {
    cartSummary.style.display = "block";
  }


  cartItems.innerHTML = "";


  cart.forEach((item, index) => {

    const itemElement =
      document.createElement("div");

    itemElement.className =
      "cart-item";

    const itemTotal =
      item.unitPrice * item.quantity;

    itemElement.innerHTML = `
      <div class="cart-item-info">

        <strong>
          ${item.name}
        </strong>

        <span>
          ${item.game || ""}
        </span>

        ${
          item.customLabel
            ? `<small>${item.customLabel}</small>`
            : ""
        }

        <span>
          ${formatRupiah(item.unitPrice)}
          × ${item.quantity}
        </span>

      </div>

      <div class="cart-item-actions">

        <button
          type="button"
          data-cart-minus="${index}"
        >
          −
        </button>

        <span>
          ${item.quantity}
        </span>

        <button
          type="button"
          data-cart-plus="${index}"
        >
          +
        </button>

        <button
          type="button"
          data-cart-remove="${index}"
          aria-label="Hapus"
        >
          ×
        </button>

      </div>

      <strong class="cart-item-total">
        ${formatRupiah(itemTotal)}
      </strong>
    `;

    cartItems.appendChild(itemElement);

  });


  const totals =
    calculateCart();


  if (subtotalElement) {
    subtotalElement.textContent =
      formatRupiah(totals.subtotal);
  }


  if (discountRow) {
    discountRow.style.display =
      totals.discount > 0
        ? "flex"
        : "none";
  }


  if (discountElement) {
    discountElement.textContent =
      "-" + formatRupiah(totals.discount);
  }


  if (totalElement) {
    totalElement.textContent =
      formatRupiah(totals.total);
  }

}


/* =========================================================
   CART BUTTON EVENTS
   ========================================================= */

document.addEventListener("click", (event) => {

  const minus =
    event.target.closest("[data-cart-minus]");

  const plus =
    event.target.closest("[data-cart-plus]");

  const remove =
    event.target.closest("[data-cart-remove]");


  if (minus) {

    const index =
      Number(minus.dataset.cartMinus);

    changeCartQuantity(index, -1);

  }


  if (plus) {

    const index =
      Number(plus.dataset.cartPlus);

    changeCartQuantity(index, 1);

  }


  if (remove) {

    const index =
      Number(remove.dataset.cartRemove);

    removeFromCart(index);

  }

});


/* =========================================================
   CART DRAWER
   ========================================================= */

function openCartDrawer() {

  const drawer = $("#cartDrawer");

  if (drawer) {
    drawer.classList.add("open");
  }

}


function closeCartDrawer() {

  const drawer = $("#cartDrawer");

  if (drawer) {
    drawer.classList.remove("open");
  }

}


/* =========================================================
   CART CHECKOUT
   ========================================================= */

function checkoutCart() {

  if (cart.length === 0) {

    showToast(
      "Keranjang masih kosong."
    );

    return;

  }

  const totals =
    calculateCart();

  let message =
    `Halo ${STORE_NAME}, saya ingin melakukan pembelian:%0A%0A`;

  cart.forEach((item, index) => {

    const itemTotal =
      item.unitPrice * item.quantity;

    message +=
      `${index + 1}. ${item.name}%0A`;

    message +=
      `Game: ${item.game || "-"}%0A`;

    if (item.customLabel) {
      message +=
        `Detail: ${item.customLabel}%0A`;
    }

    message +=
      `Jumlah: ${item.quantity}%0A`;

    message +=
      `Harga satuan: ${formatRupiah(item.unitPrice)}%0A`;

    message +=
      `Total item: ${formatRupiah(itemTotal)}%0A%0A`;

  });


  message +=
    `Subtotal: ${formatRupiah(totals.subtotal)}%0A`;


  if (totals.discount > 0) {

    message +=
      `Diskon 5%: -${formatRupiah(totals.discount)}%0A`;

  }


  message +=
    `Total pembayaran: ${formatRupiah(totals.total)}%0A%0A`;

  message +=
    `Mohon diproses. Terima kasih.`;


  openWhatsAppEncoded(message);

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function buildWhatsAppMessage({
  game,
  product,
  quantity,
  unitPrice,
  subtotal,
  customLabel
}) {

  const discount =
    subtotal > DISCOUNT_THRESHOLD
      ? Math.round(subtotal * DISCOUNT_RATE)
      : 0;

  const total =
    subtotal - discount;


  let message =
    `Halo ${STORE_NAME}, saya ingin membeli:%0A%0A`;

  message +=
    `Game: ${game || "-"}%0A`;

  message +=
    `Produk: ${product || "-"}%0A`;

  if (customLabel) {

    message +=
      `Detail: ${customLabel}%0A`;

  }

  message +=
    `Jumlah: ${quantity}%0A`;

  message +=
    `Harga satuan: ${formatRupiah(unitPrice)}%0A`;

  message +=
    `Subtotal: ${formatRupiah(subtotal)}%0A`;


  if (discount > 0) {

    message +=
      `Diskon 5%: -${formatRupiah(discount)}%0A`;

  }


  message +=
    `Total: ${formatRupiah(total)}%0A%0A`;

  message +=
    `Mohon diproses. Terima kasih.`;


  return message;
}


function openWhatsApp(message) {

  openWhatsAppEncoded(
    encodeURIComponent(message)
  );

}


function openWhatsAppEncoded(message) {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   CUSTOM PRODUCTS
   ========================================================= */

function openCustomProduct(category) {

  if (!customProducts[category]) {
    return;
  }

  currentCategory = category;

  showPage("custom");

  const gameSelect =
    $("#customGame");

  if (gameSelect) {

    /*
      Kalau dropdown memiliki value
      yang sama dengan category, pilih.
    */

    const gameMap = {
      robux: "Roblox",
      "mobile-legends": "Mobile Legends",
      "free-fire": "Free Fire"
    };

    const target =
      gameMap[category];

    if (target) {

      const option =
        [...gameSelect.options].find(
          (item) =>
            item.textContent.trim()
              .toLowerCase() ===
            target.toLowerCase()
        );

      if (option) {
        gameSelect.value =
          option.value;
      }

    }

  }

}


/* =========================================================
   CUSTOM FORM
   ========================================================= */

function initForms() {

  const customForm =
    $("#customPurchaseForm");

  const customGame =
    $("#customGame");

  if (customForm) {

    customForm.addEventListener(
      "submit",
      handleCustomPurchase
    );

  }


  if (customGame) {

    customGame.addEventListener(
      "change",
      updateCustomGameFields
    );

    updateCustomGameFields();

  }


  const reportForm =
    $("#reportForm");

  if (reportForm) {

    reportForm.addEventListener(
      "submit",
      handleReport
    );

  }

}


function updateCustomGameFields() {

  const select =
    $("#customGame");

  const gameNameGroup =
    $("#customGameNameGroup");

  if (!select) {
    return;
  }

  const selectedText =
    select.options[
      select.selectedIndex
    ]?.textContent?.trim() || "";

  const isOther =
    selectedText.toLowerCase() === "other";


  if (gameNameGroup) {

    gameNameGroup.style.display =
      isOther
        ? "block"
        : "none";

  }

}


function handleCustomPurchase(event) {

  event.preventDefault();

  const gameSelect =
    $("#customGame");

  const orderName =
    $("#customOrderName");

  const gameName =
    $("#customGameName");


  if (!gameSelect || !orderName) {
    return;
  }


  const selectedOption =
    gameSelect.options[
      gameSelect.selectedIndex
    ];

  const selectedGame =
    selectedOption
      ? selectedOption.textContent.trim()
      : "";


  if (!selectedGame) {

    showToast(
      "Silakan pilih game terlebih dahulu."
    );

    return;

  }


  if (!orderName.value.trim()) {

    showToast(
      "Silakan isi nama pesanan."
    );

    orderName.focus();

    return;

  }


  let finalGame =
    selectedGame;


  if (
    selectedGame.toLowerCase() === "other"
  ) {

    if (
      !gameName ||
      !gameName.value.trim()
    ) {

      showToast(
        "Silakan isi nama game."
      );

      if (gameName) {
        gameName.focus();
      }

      return;

    }

    finalGame =
      gameName.value.trim();

  }


  /*
    Custom purchase TIDAK mendapatkan diskon otomatis.
  */

  let message =
    `Halo ${STORE_NAME}, saya ingin membuat pesanan khusus:%0A%0A`;

  message +=
    `Game: ${finalGame}%0A`;

  message +=
    `Nama Pesanan: ${orderName.value.trim()}%0A%0A`;

  message +=
    `Ini adalah pembelian custom.%0A`;

  message +=
    `Mohon diinformasikan harga dan detail pesanannya.%0A%0A`;

  message +=
    `Terima kasih.`;


  openWhatsAppEncoded(
    encodeURIComponent(
      decodeURIComponent(message)
    )
  );

}


/* =========================================================
   REPORT PROBLEM
   ========================================================= */

function handleReport(event) {

  event.preventDefault();

  const name =
    $("#reportName")?.value.trim() || "";

  const category =
    $("#reportCategory")?.value.trim() || "";

  const message =
    $("#reportMessage")?.value.trim() || "";


  if (!name) {

    showToast(
      "Silakan isi nama."
    );

    return;

  }


  if (!category) {

    showToast(
      "Silakan pilih kategori masalah."
    );

    return;

  }


  if (!message) {

    showToast(
      "Silakan jelaskan masalah."
    );

    return;

  }


  /*
    GitHub Pages tidak bisa mengirim email Gmail
    secara langsung tanpa backend/service email.

    Untuk sementara, tombol ini membuka aplikasi email
    pengguna dengan alamat tujuan yang sudah ditentukan.
  */

  const subject =
    encodeURIComponent(
      `[${STORE_NAME}] Laporan Masalah - ${category}`
    );

  const body =
    encodeURIComponent(
      `Nama: ${name}\n` +
      `Kategori: ${category}\n\n` +
      `Masalah:\n${message}\n\n` +
      `Dikirim dari website ${STORE_NAME}.`
    );


  const mailto =
    `mailto:${REPORT_EMAIL}` +
    `?subject=${subject}` +
    `&body=${body}`;


  window.location.href =
    mailto;


  showToast(
    "Aplikasi email sedang dibuka."
  );

}


/* =========================================================
   SHARE
   ========================================================= */

function initShare() {

  const shareButtons = $$(
    "#shareStoreButton, #footerShareButton"
  );

  shareButtons.forEach((button) => {

    button.addEventListener(
      "click",
      shareStore
    );

  });

}


async function shareStore() {

  const shareData = {

    title: STORE_NAME,

    text:
      `Yuk cek ${STORE_NAME} untuk kebutuhan game kamu!`,

    url:
      window.location.origin +
      window.location.pathname +
      "?store=rbxstoreid"

  };


  if (
    navigator.share &&
    typeof navigator.share === "function"
  ) {

    try {

      await navigator.share(
        shareData
      );

      return;

    } catch (error) {

      if (
        error &&
        error.name === "AbortError"
      ) {

        return;

      }

    }

  }


  /*
    Fallback:
    salin URL ke clipboard.
  */

  try {

    await navigator.clipboard.writeText(
      shareData.url
    );

    showToast(
      "Link toko berhasil disalin."
    );

  } catch (error) {

    window.prompt(
      "Salin link toko:",
      shareData.url
    );

  }

}


/* =========================================================
   NIGHT MODE
   ========================================================= */

function initNightMode() {

  const toggle =
    $("#nightModeToggle");

  const saved =
    localStorage.getItem(
      STORAGE_KEYS.nightMode
    );


  if (saved === "true") {

    document.body.classList.add(
      "night-mode"
    );

    if (toggle) {
      toggle.checked = true;
    }

  }


  if (toggle) {

    toggle.addEventListener(
      "change",
      () => {

        const enabled =
          toggle.checked;

        document.body.classList.toggle(
          "night-mode",
          enabled
        );

        localStorage.setItem(
          STORAGE_KEYS.nightMode,
          String(enabled)
        );

      }
    );

  }

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function initLanguage() {

  const select =
    $("#languageSelect");

  if (!select) {
    return;
  }

  select.value =
    currentLanguage;


  select.addEventListener(
    "change",
    () => {

      currentLanguage =
        select.value;

      localStorage.setItem(
        STORAGE_KEYS.language,
        currentLanguage
      );

      applyLanguage();

      updateCartUI();

    }
  );

}


function applyLanguage() {

  const language =
    translations[currentLanguage] ||
    translations.id;


  $$("[data-i18n]").forEach((element) => {

    const key =
      element.dataset.i18n;

    if (
      language[key] !== undefined
    ) {

      element.textContent =
        language[key];

    }

  });


  $$("[data-i18n-placeholder]").forEach(
    (element) => {

      const key =
        element.dataset.i18nPlaceholder;

      if (
        language[key] !== undefined
      ) {

        element.placeholder =
          language[key];

      }

    }
  );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  const container =
    $("#toastContainer");

  if (!container) {
    return;
  }


  const toast =
    document.createElement("div");

  toast.className =
    "toast";

  toast.textContent =
    message;


  container.appendChild(
    toast
  );


  requestAnimationFrame(() => {

    toast.classList.add(
      "show"
    );

  });


  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

    setTimeout(() => {

      toast.remove();

    }, 300);

  }, 2500);

}


/* =========================================================
   LOADING
   ========================================================= */

function showLoading() {

  const loading =
    $("#loadingOverlay");

  if (loading) {
    loading.classList.add("show");
  }

}


function hideLoading() {

  const loading =
    $("#loadingOverlay");

  if (loading) {
    loading.classList.remove("show");
  }

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeSideMenu();
    closeCartDrawer();
    closeProductModal();

    const promo =
      $("#promoOverlay");

    if (promo) {
      promo.classList.remove("show");
    }

  }
);


/* =========================================================
   CLICK OUTSIDE MODAL
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const modal =
      $("#productModal");

    if (
      modal &&
      event.target === modal
    ) {

      closeProductModal();

    }

  }
);


/* =========================================================
   HOME BUTTONS
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const homeButton =
      event.target.closest(
        '[data-go-home="true"]'
      );

    if (homeButton) {
      showPage("home");
    }

  }
);


/* =========================================================
   BACK BUTTON
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const backButton =
      event.target.closest(
        '[data-back-store]'
      );

    if (backButton) {
      showPage("home");
    }

  }
);


/* =========================================================
   CLOSE CART WITH BACKDROP
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const target =
      event.target;

    if (
      target.classList.contains(
        "cart-backdrop"
      )
    ) {

      closeCartDrawer();

    }

  }
);


/* =========================================================
   FORM NUMBER LIMITS
   ========================================================= */

document.addEventListener(
  "input",
  (event) => {

    const input =
      event.target;

    if (
      !input.matches(
        'input[type="number"][data-max]'
      )
    ) {

      return;

    }


    const max =
      Number(input.dataset.max);


    if (
      Number(input.value) > max
    ) {

      input.value =
        max;

    }


    if (
      Number(input.value) < 1
    ) {

      input.value =
        1;

    }

  }
);


/* =========================================================
   OPTIONAL CUSTOM NUMBER INPUT SUPPORT
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const customAdd =
      event.target.closest(
        "[data-custom-add]"
      );

    const customBuy =
      event.target.closest(
        "[data-custom-buy]"
      );


    if (
      customAdd ||
      customBuy
    ) {

      const button =
        customAdd || customBuy;

      const category =
        button.dataset.customCategory;

      const input =
        document.querySelector(
          `[data-custom-input="${category}"]`
        );


      if (!input) {
        return;
      }


      const value =
        Number(input.value);


      const config =
        customProducts[category];


      if (
        !value ||
        value < 1 ||
        value > config.max
      ) {

        showToast(
          `Jumlah harus 1-${config.max.toLocaleString("id-ID")}.`
        );

        return;

      }


      /*
        Harga custom belum ditentukan.
        Jadi langsung diarahkan ke WhatsApp
        untuk meminta informasi harga.
      */

      const message =
        `Halo ${STORE_NAME}, saya ingin custom:%0A%0A` +
        `Game: ${config.game}%0A` +
        `Produk: ${config.name}%0A` +
        `Jumlah: ${formatNumber(value)}%0A%0A` +
        `Mohon informasikan harga customnya.%0A%0A` +
        `Terima kasih.`;

      openWhatsAppEncoded(
        message
      );

    }

  }
);


/* =========================================================
   PREVENT DOUBLE SUBMISSION
   ========================================================= */

document.addEventListener(
  "submit",
  (event) => {

    const form =
      event.target;

    if (
      form.dataset.processing === "true"
    ) {

      event.preventDefault();
      return;

    }

    /*
      Jangan lock permanen untuk form yang
      memang perlu diproses normal.
    */

  }
);


/* =========================================================
   PAGE VISIBILITY
   ========================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (
      document.visibilityState === "visible"
    ) {

      updateCartUI();

    }

  }
);


/* =========================================================
   DEBUG HELPER
   ========================================================= */

window.RBXSTORE = {

  products,

  cart,

  addToCart,

  removeFromCart,

  calculateCart,

  formatRupiah,

  openWhatsApp,

  showPage

};


/* =========================================================
   END OF SCRIPT
   ========================================================= */
