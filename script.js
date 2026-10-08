/* =========================================================
   RBXSTORE.ID
   SCRIPT.JS
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
   PRODUCTS
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
    description: "Produk dan jasa Steal An Egg.",
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
    description: "Gems Toilet Tower Defense.",
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
    description: "Diamond Mobile Legends.",
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
    description: "Diamond Free Fire.",
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
   CUSTOM
   ========================================================= */

const customProducts = {

  robux: {
    id: "custom-robux",
    name: "Custom Robux",
    game: "Roblox",
    max: 10000
  },

  "mobile-legends": {
    id: "custom-ml",
    name: "Custom Diamonds",
    game: "Mobile Legends",
    max: 10000
  },

  "free-fire": {
    id: "custom-ff",
    name: "Custom Diamonds FF",
    game: "Free Fire",
    max: 10000
  }

};


/* =========================================================
   STATE
   ========================================================= */

let cart = loadCart();

let currentLanguage =
  localStorage.getItem(
    STORAGE_KEYS.language
  ) || "id";

let currentCategory = null;
let currentProduct = null;


/* =========================================================
   DOM
   ========================================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  document.querySelectorAll(selector);


/* =========================================================
   FORMAT
   ========================================================= */

function formatRupiah(value) {

  return new Intl.NumberFormat(
    "id-ID",
    {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  ).format(
    Number(value) || 0
  );

}


function formatNumber(value) {

  return new Intl.NumberFormat(
    "id-ID"
  ).format(
    Number(value) || 0
  );

}


/* =========================================================
   STORAGE
   ========================================================= */

function loadCart() {

  try {

    const data =
      localStorage.getItem(
        STORAGE_KEYS.cart
      );

    if (!data) {
      return [];
    }

    const parsed =
      JSON.parse(data);

    return Array.isArray(parsed)
      ? parsed
      : [];

  } catch {

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

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initIntro();

    initMenu();

    initNavigation();

    initCategories();

    initCart();

    initForms();

    initShare();

    initNightMode();

    initLanguage();

    updateCartUI();

    applyLanguage();

  }
);


/* =========================================================
   INTRO
   =========================================================

   TIMELINE:

   0.0s  -> logo mulai fade in
   1.0s  -> logo sudah terlihat
   3.0s  -> logo mulai fade out
   4.0s  -> logo hilang
   4.0s  -> layar putih mulai slide ke kiri
   5.0s  -> toko sepenuhnya terlihat
   5.2s  -> promo muncul

   ========================================================= */

function initIntro() {

  const intro =
    $("#introScreen");

  if (!intro) {

    showPromoAfterStore();

    return;

  }


  /*
    Pastikan posisi awal.
  */

  intro.classList.remove(
    "intro-hidden"
  );

  intro.style.display = "flex";


  /*
    1 detik fade-in
    + 2 detik tahan
    + 1 detik fade-out
    = 4 detik
  */

  setTimeout(
    () => {

      /*
        Sekarang layar putih
        mulai bergerak ke kiri.

        Toko ada di belakangnya.
      */

      intro.classList.add(
        "intro-hidden"
      );


      /*
        Tunggu 1 detik sampai
        slide selesai.
      */

      setTimeout(
        () => {

          intro.style.display =
            "none";

          showPromoAfterStore();

        },
        1000
      );

    },
    4000
  );

}


/* =========================================================
   PROMO
   ========================================================= */

function showPromoAfterStore() {

  setTimeout(
    () => {

      const promo =
        $("#promoOverlay");

      if (promo) {

        promo.classList.add(
          "show"
        );

      }

    },
    200
  );

}


function closePromo() {

  const promo =
    $("#promoOverlay");

  if (promo) {

    promo.classList.remove(
      "show"
    );

  }

}


$("#closePromo")?.addEventListener(
  "click",
  closePromo
);


$("#continueToStore")?.addEventListener(
  "click",
  () => {

    closePromo();

    showPage("home");

  }
);


/* =========================================================
   MENU
   ========================================================= */

function initMenu() {

  $("#menuButton")?.addEventListener(
    "click",
    openMenu
  );

  $("#closeMenu")?.addEventListener(
    "click",
    closeMenu
  );

  $("#menuBackdrop")?.addEventListener(
    "click",
    closeMenu
  );

}


function openMenu() {

  $("#sideMenu")?.classList.add(
    "open"
  );

  $("#menuBackdrop")?.classList.add(
    "show"
  );

  document.body.classList.add(
    "menu-open"
  );

}


function closeMenu() {

  $("#sideMenu")?.classList.remove(
    "open"
  );

  $("#menuBackdrop")?.classList.remove(
    "show"
  );

  document.body.classList.remove(
    "menu-open"
  );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function initNavigation() {

  $$("[data-page]").forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const page =
            button.dataset.page;

          if (page) {
            showPage(page);
          }

        }
      );

    }
  );

}


function showPage(pageName) {

  $$("[data-page-content]").forEach(
    (page) => {

      page.classList.remove(
        "active"
      );

    }
  );


  const target =
    document.querySelector(
      `[data-page-content="${pageName}"]`
    );


  if (target) {

    target.classList.add(
      "active"
    );

  }


  closeMenu();

  closeCart();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  if (pageName === "category") {

    renderCategory();

  }

}


/* =========================================================
   CATEGORY
   ========================================================= */

function initCategories() {

  $$(".category-card").forEach(
    (card) => {

      card.addEventListener(
        "click",
        () => {

          const category =
            card.dataset.category;

          if (!category) {
            return;
          }

          currentCategory =
            category;

          showPage(
            "category"
          );

        }
      );

    }
  );


  $("#customPurchaseButton")?.addEventListener(
    "click",
    () => {

      showPage(
        "custom"
      );

    }
  );

}


function renderCategory() {

  const category =
    products[currentCategory];

  if (!category) {
    return;
  }


  const title =
    $("#categoryPageTitle");

  const description =
    $("#categoryPageDescription");

  const grid =
    $("#productGrid");


  if (title) {

    title.textContent =
      category.title;

  }


  if (description) {

    description.textContent =
      category.description;

  }


  if (!grid) {
    return;
  }


  grid.innerHTML = "";


  category.products.forEach(
    (product) => {

      grid.appendChild(
        createProductCard(
          product,
          currentCategory
        )
      );

    }
  );


  if (
    customProducts[
      currentCategory
    ]
  ) {

    const custom =
      customProducts[
        currentCategory
      ];


    const card =
      document.createElement(
        "article"
      );


    card.className =
      "product-card";


    card.innerHTML = `
      <div class="product-card-icon">
        ✦
      </div>

      <div class="product-card-body">

        <span class="product-badge">
          CUSTOM
        </span>

        <h3>
          ${custom.name}
        </h3>

        <p>
          Maksimal ${formatNumber(custom.max)}
        </p>

        <div class="product-price">
          Menunggu informasi
        </div>

        <div class="product-card-actions">

          <button
            type="button"
            class="product-buy-btn"
            data-custom-category="${currentCategory}"
          >
            Custom
          </button>

        </div>

      </div>
    `;


    grid.appendChild(card);

  }

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(
  product,
  category
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "product-card";


  card.innerHTML = `
    <div class="product-card-icon">
      ${
        product.type === "joki"
          ? "⚡"
          : "🎮"
      }
    </div>

    <div class="product-card-body">

      <h3>
        ${product.name}
      </h3>

      <p>
        ${
          product.type === "joki"
            ? "Jasa joki per jam"
            : products[category].game
        }
      </p>

      <div class="product-price">
        ${
          product.type === "joki"
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
   PRODUCT CLICK
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const detail =
      event.target.closest(
        "[data-product-detail]"
      );

    const buy =
      event.target.closest(
        "[data-product-buy]"
      );

    const custom =
      event.target.closest(
        "[data-custom-category]"
      );


    if (detail) {

      openProduct(
        detail.dataset.productDetail,
        detail.dataset.category
      );

    }


    if (buy) {

      openProduct(
        buy.dataset.productBuy,
        buy.dataset.category
      );

    }


    if (custom) {

      openCustom(
        custom.dataset.customCategory
      );

    }

  }
);


/* =========================================================
   PRODUCT MODAL
   ========================================================= */

function openProduct(
  productId,
  category
) {

  const categoryData =
    products[category];

  if (!categoryData) {
    return;
  }


  const product =
    categoryData.products.find(
      (item) =>
        item.id === productId
    );


  if (!product) {
    return;
  }


  currentProduct = {
    ...product,
    category,
    game: categoryData.game
  };


  const modal =
    $("#productModal");

  const content =
    $("#modalProductContent");


  if (!modal || !content) {

    directBuy(
      currentProduct
    );

    return;

  }


  content.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-icon">
        ${
          product.type === "joki"
            ? "⚡"
            : "🎮"
        }
      </div>

      <span class="product-badge">
        ${categoryData.game}
      </span>

      <h2>
        ${product.name}
      </h2>

      <p>
        ${categoryData.description}
      </p>

      ${
        product.type === "joki"
          ? `
            <div class="quantity-selector">

              <button
                type="button"
                id="jokiMinus"
              >
                −
              </button>

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
              >
                +
              </button>

            </div>

            <div class="modal-total">

              Total

              <strong id="jokiTotal">
                ${formatRupiah(product.price)}
              </strong>

            </div>
          `
          : `
            <div class="modal-total">

              Harga

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
          Tambah ke Keranjang
        </button>

        <button
          type="button"
          class="btn-blue"
          id="modalBuyNow"
        >
          Beli via WhatsApp
        </button>

      </div>

    </div>

  `;


  modal.classList.add(
    "show"
  );


  initProductModal();

}


function initProductModal() {

  $("#modalAddCart")?.addEventListener(
    "click",
    () => {

      if (!currentProduct) {
        return;
      }


      let quantity = 1;
      let customLabel = "";


      if (
        currentProduct.type ===
        "joki"
      ) {

        quantity =
          getJokiHours();

        customLabel =
          `${quantity} jam`;

      }


      addToCart({

        ...currentProduct,

        quantity,

        unitPrice:
          currentProduct.price,

        customLabel

      });


      closeProduct();

    }
  );


  $("#modalBuyNow")?.addEventListener(
    "click",
    () => {

      if (!currentProduct) {
        return;
      }


      let quantity = 1;
      let customLabel = "";


      if (
        currentProduct.type ===
        "joki"
      ) {

        quantity =
          getJokiHours();

        customLabel =
          `${quantity} jam`;

      }


      directBuy({

        ...currentProduct,

        quantity,

        unitPrice:
          currentProduct.price,

        customLabel

      });


      closeProduct();

    }
  );


  $("#jokiMinus")?.addEventListener(
    "click",
    () => {

      const input =
        $("#jokiHours");

      if (!input) {
        return;
      }

      input.value =
        Math.max(
          1,
          Number(input.value) - 1
        );

      updateJoki();

    }
  );


  $("#jokiPlus")?.addEventListener(
    "click",
    () => {

      const input =
        $("#jokiHours");

      if (!input) {
        return;
      }

      input.value =
        Math.min(
          1000,
          Number(input.value) + 1
        );

      updateJoki();

    }
  );


  $("#jokiHours")?.addEventListener(
    "input",
    updateJoki
  );

}


function getJokiHours() {

  const input =
    $("#jokiHours");

  if (!input) {
    return 1;
  }


  return Math.max(
    1,
    Math.min(
      1000,
      Number(input.value) || 1
    )
  );

}


function updateJoki() {

  if (!currentProduct) {
    return;
  }


  const hours =
    getJokiHours();


  const total =
    currentProduct.price *
    hours;


  if ($("#jokiHours")) {

    $("#jokiHours").value =
      hours;

  }


  if ($("#jokiTotal")) {

    $("#jokiTotal").textContent =
      formatRupiah(total);

  }

}


function closeProduct() {

  $("#productModal")?.classList.remove(
    "show"
  );

}


document.addEventListener(
  "click",
  (event) => {

    if (
      event.target.closest(
        "#closeProductModal"
      )
    ) {

      closeProduct();

    }

  }
);


/* =========================================================
   CUSTOM
   ========================================================= */

function openCustom(category) {

  if (!customProducts[category]) {
    return;
  }


  currentCategory =
    category;


  showPage(
    "custom"
  );


  const select =
    $("#customGame");

  if (!select) {
    return;
  }


  const gameName =
    customProducts[
      category
    ].game;


  const option =
    [...select.options].find(
      (item) =>
        item.textContent
          .trim()
          .toLowerCase() ===
        gameName.toLowerCase()
    );


  if (option) {

    select.value =
      option.value;

  }


  updateCustomFields();

}


/* =========================================================
   FORMS
   ========================================================= */

function initForms() {

  $("#customPurchaseForm")
    ?.addEventListener(
      "submit",
      submitCustom
    );


  $("#customGame")
    ?.addEventListener(
      "change",
      updateCustomFields
    );


  updateCustomFields();


  $("#reportForm")
    ?.addEventListener(
      "submit",
      submitReport
    );

}


function updateCustomFields() {

  const select =
    $("#customGame");

  const group =
    $("#customGameNameGroup");


  if (!select || !group) {
    return;
  }


  const text =
    select.options[
      select.selectedIndex
    ]?.textContent
      ?.trim()
      ?.toLowerCase();


  group.style.display =
    text === "other"
      ? "block"
      : "none";

}


function submitCustom(event) {

  event.preventDefault();


  const select =
    $("#customGame");

  const orderName =
    $("#customOrderName");

  const gameName =
    $("#customGameName");


  if (
    !select ||
    !orderName
  ) {
    return;
  }


  const selected =
    select.options[
      select.selectedIndex
    ];


  const selectedText =
    selected?.textContent
      ?.trim() || "";


  if (!selectedText) {

    showToast(
      "Pilih game terlebih dahulu."
    );

    return;

  }


  if (!orderName.value.trim()) {

    showToast(
      "Isi nama pesanan terlebih dahulu."
    );

    return;

  }


  let game =
    selectedText;


  if (
    selectedText.toLowerCase() ===
    "other"
  ) {

    if (
      !gameName ||
      !gameName.value.trim()
    ) {

      showToast(
        "Isi nama game terlebih dahulu."
      );

      return;

    }


    game =
      gameName.value.trim();

  }


  /*
    CUSTOM = TIDAK ADA DISKON
  */

  const text =
    `Halo ${STORE_NAME}, saya ingin custom order.%0A%0A` +
    `Game: ${game}%0A` +
    `Nama Pesanan: ${orderName.value.trim()}%0A%0A` +
    `Mohon diinformasikan harga dan detailnya.%0A%0A` +
    `Terima kasih.`;


  openWhatsApp(
    decodeURIComponent(text)
  );

}


/* =========================================================
   REPORT
   ========================================================= */

function submitReport(event) {

  event.preventDefault();


  const name =
    $("#reportName")?.value.trim();

  const category =
    $("#reportCategory")?.value.trim();

  const message =
    $("#reportMessage")?.value.trim();


  if (!name) {

    showToast(
      "Isi nama terlebih dahulu."
    );

    return;

  }


  if (!category) {

    showToast(
      "Pilih kategori masalah."
    );

    return;

  }


  if (!message) {

    showToast(
      "Jelaskan masalah terlebih dahulu."
    );

    return;

  }


  const subject =
    encodeURIComponent(
      `[${STORE_NAME}] Laporan Masalah`
    );


  const body =
    encodeURIComponent(
      `Nama: ${name}\n` +
      `Kategori: ${category}\n\n` +
      `Masalah:\n${message}`
    );


  window.location.href =
    `mailto:${REPORT_EMAIL}` +
    `?subject=${subject}` +
    `&body=${body}`;

}


/* =========================================================
   CART
   ========================================================= */

function initCart() {

  $("#cartButton")?.addEventListener(
    "click",
    openCart
  );


  $("#closeCart")?.addEventListener(
    "click",
    closeCart
  );


  $("#cartWhatsAppButton")
    ?.addEventListener(
      "click",
      checkoutCart
    );

}


function addToCart(item) {

  const quantity =
    Number(item.quantity) || 1;


  const unitPrice =
    Number(
      item.unitPrice ??
      item.price
    ) || 0;


  const existing =
    cart.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.customLabel ===
          (item.customLabel || "")
    );


  if (existing) {

    existing.quantity +=
      quantity;

  } else {

    cart.push({

      id: item.id,

      name: item.name,

      game: item.game,

      category:
        item.category || "",

      quantity,

      unitPrice,

      customLabel:
        item.customLabel || ""

    });

  }


  saveCart();

  updateCartUI();

  showToast(
    "Produk masuk ke keranjang."
  );

}


function removeFromCart(index) {

  cart.splice(
    index,
    1
  );

  saveCart();

  updateCartUI();

}


function changeQuantity(
  index,
  amount
) {

  if (!cart[index]) {
    return;
  }


  cart[index].quantity +=
    amount;


  if (
    cart[index].quantity <= 0
  ) {

    cart.splice(
      index,
      1
    );

  }


  saveCart();

  updateCartUI();

}


/* =========================================================
   CART TOTAL
   ========================================================= */

function calculateCart() {

  const subtotal =
    cart.reduce(
      (total, item) =>
        total +
        (
          Number(item.unitPrice) *
          Number(item.quantity)
        ),
      0
    );


  const discount =
    subtotal > DISCOUNT_THRESHOLD
      ? Math.round(
          subtotal *
          DISCOUNT_RATE
        )
      : 0;


  return {

    subtotal,

    discount,

    total:
      subtotal - discount

  };

}


/* =========================================================
   CART UI
   ========================================================= */

function updateCartUI() {

  const items =
    $("#cartItems");

  const empty =
    $("#emptyCart");

  const summary =
    $("#cartSummary");

  if (!items) {
    return;
  }


  const quantity =
    cart.reduce(
      (total, item) =>
        total +
        Number(item.quantity),
      0
    );


  if ($("#cartCount")) {

    $("#cartCount").textContent =
      quantity;

  }


  if (
    cart.length === 0
  ) {

    items.innerHTML = "";


    if (empty) {

      empty.style.display =
        "block";

    }


    if (summary) {

      summary.style.display =
        "none";

    }


    return;

  }


  if (empty) {

    empty.style.display =
      "none";

  }


  if (summary) {

    summary.style.display =
      "block";

  }


  items.innerHTML = "";


  cart.forEach(
    (item, index) => {

      const element =
        document.createElement(
          "div"
        );


      element.className =
        "cart-item";


      const total =
        item.unitPrice *
        item.quantity;


      element.innerHTML = `

        <div class="cart-item-info">

          <strong>
            ${item.name}
          </strong>

          <span>
            ${item.game || ""}
          </span>

          ${
            item.customLabel
              ? `
                <small>
                  ${item.customLabel}
                </small>
              `
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
            data-minus="${index}"
          >
            −
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            type="button"
            data-plus="${index}"
          >
            +
          </button>

          <button
            type="button"
            data-remove="${index}"
          >
            ×
          </button>

        </div>

        <strong class="cart-item-total">
          ${formatRupiah(total)}
        </strong>

      `;


      items.appendChild(
        element
      );

    }
  );


  const totals =
    calculateCart();


  if ($("#cartSubtotal")) {

    $("#cartSubtotal")
      .textContent =
      formatRupiah(
        totals.subtotal
      );

  }


  if ($("#cartDiscount")) {

    $("#cartDiscount")
      .textContent =
      "-" +
      formatRupiah(
        totals.discount
      );

  }


  if ($("#cartTotal")) {

    $("#cartTotal")
      .textContent =
      formatRupiah(
        totals.total
      );

  }


  if ($("#cartDiscountRow")) {

    $("#cartDiscountRow")
      .style.display =
      totals.discount > 0
        ? "flex"
        : "none";

  }

}


/* =========================================================
   CART BUTTON EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const minus =
      event.target.closest(
        "[data-minus]"
      );

    const plus =
      event.target.closest(
        "[data-plus]"
      );

    const remove =
      event.target.closest(
        "[data-remove]"
      );


    if (minus) {

      changeQuantity(
        Number(
          minus.dataset.minus
        ),
        -1
      );

    }


    if (plus) {

      changeQuantity(
        Number(
          plus.dataset.plus
        ),
        1
      );

    }


    if (remove) {

      removeFromCart(
        Number(
          remove.dataset.remove
        )
      );

    }

  }
);


/* =========================================================
   CART DRAWER
   ========================================================= */

function openCart() {

  $("#cartDrawer")?.classList.add(
    "open"
  );

}


function closeCart() {

  $("#cartDrawer")?.classList.remove(
    "open"
  );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function checkoutCart() {

  if (
    cart.length === 0
  ) {

    showToast(
      "Keranjang masih kosong."
    );

    return;

  }


  const totals =
    calculateCart();


  let message =
    `Halo ${STORE_NAME}, saya ingin membeli:%0A%0A`;


  cart.forEach(
    (item, index) => {

      const itemTotal =
        item.unitPrice *
        item.quantity;


      message +=
        `${index + 1}. ${item.name}%0A`;

      message +=
        `Game: ${item.game || "-"}%0A`;

      message +=
        `Jumlah: ${item.quantity}%0A`;

      if (item.customLabel) {

        message +=
          `Detail: ${item.customLabel}%0A`;

      }

      message +=
        `Harga: ${formatRupiah(item.unitPrice)}%0A`;

      message +=
        `Total item: ${formatRupiah(itemTotal)}%0A%0A`;

    }
  );


  message +=
    `Subtotal: ${formatRupiah(totals.subtotal)}%0A`;


  if (
    totals.discount > 0
  ) {

    message +=
      `Diskon 5%: -${formatRupiah(totals.discount)}%0A`;

  }


  message +=
    `Total pembayaran: ${formatRupiah(totals.total)}%0A%0A`;


  message +=
    `Mohon diproses. Terima kasih.`;


  openWhatsAppEncoded(
    message
  );

}


/* =========================================================
   DIRECT BUY
   ========================================================= */

function directBuy(item) {

  const quantity =
    Number(item.quantity) || 1;


  const unitPrice =
    Number(
      item.unitPrice ??
      item.price
    ) || 0;


  const subtotal =
    quantity *
    unitPrice;


  const discount =
    subtotal > DISCOUNT_THRESHOLD
      ? Math.round(
          subtotal *
          DISCOUNT_RATE
        )
      : 0;


  const total =
    subtotal -
    discount;


  let message =
    `Halo ${STORE_NAME}, saya ingin membeli:%0A%0A`;


  message +=
    `Game: ${item.game || "-"}%0A`;

  message +=
    `Produk: ${item.name}%0A`;

  message +=
    `Jumlah: ${quantity}%0A`;


  if (item.customLabel) {

    message +=
      `Detail: ${item.customLabel}%0A`;

  }


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


  openWhatsAppEncoded(
    message
  );

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function openWhatsApp(message) {

  openWhatsAppEncoded(
    encodeURIComponent(
      message
    )
  );

}


function openWhatsAppEncoded(
  message
) {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   SHARE
   ========================================================= */

function initShare() {

  $(
    "#shareStoreButton"
  )?.addEventListener(
    "click",
    shareStore
  );


  $(
    "#footerShareButton"
  )?.addEventListener(
    "click",
    shareStore
  );

}


async function shareStore() {

  const url =
    `${window.location.origin}${window.location.pathname}?store=rbxstoreid`;


  const data = {

    title:
      STORE_NAME,

    text:
      `Cek ${STORE_NAME} untuk kebutuhan game kamu!`,

    url

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        data
      );

      return;

    } catch (error) {

      if (
        error.name ===
        "AbortError"
      ) {

        return;

      }

    }

  }


  try {

    await navigator.clipboard.writeText(
      url
    );

    showToast(
      "Link toko berhasil disalin."
    );

  } catch {

    window.prompt(
      "Salin link toko:",
      url
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


  if (
    saved === "true"
  ) {

    document.body.classList.add(
      "night-mode"
    );

    if (toggle) {

      toggle.checked =
        true;

    }

  }


  toggle?.addEventListener(
    "change",
    () => {

      const active =
        toggle.checked;


      document.body.classList.toggle(
        "night-mode",
        active
      );


      localStorage.setItem(
        STORAGE_KEYS.nightMode,
        String(active)
      );

    }
  );

}


/* =========================================================
   LANGUAGE
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
    back: "Kembali ke Toko"
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
    back: "Back to Store"
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
    back: "Bumalik sa Store"
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
    back: "返回商店"
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
    back: "Volver a la Tienda"
  }

};


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
    translations[
      currentLanguage
    ] ||
    translations.id;


  $$("[data-i18n]").forEach(
    (element) => {

      const key =
        element.dataset.i18n;


      if (
        language[key]
      ) {

        element.textContent =
          language[key];

      }

    }
  );


  $$(
    "[data-i18n-placeholder]"
  ).forEach(
    (element) => {

      const key =
        element.dataset
          .i18nPlaceholder;


      if (
        language[key]
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
    document.createElement(
      "div"
    );


  toast.className =
    "toast";


  toast.textContent =
    message;


  container.appendChild(
    toast
  );


  requestAnimationFrame(
    () => {

      toast.classList.add(
        "show"
      );

    }
  );


  setTimeout(
    () => {

      toast.classList.remove(
        "show"
      );


      setTimeout(
        () => {

          toast.remove();

        },
        300
      );

    },
    2500
  );

}


/* =========================================================
   ESC
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !==
      "Escape"
    ) {

      return;

    }


    closeMenu();

    closeCart();

    closeProduct();

    closePromo();

  }
);


/* =========================================================
   CLICK OUTSIDE PRODUCT MODAL
   ========================================================= */

$("#productModal")
  ?.addEventListener(
    "click",
    (event) => {

      if (
        event.target.id ===
        "productModal"
      ) {

        closeProduct();

      }

    }
  );


/* =========================================================
   EXPORT DEBUG
   ========================================================= */

window.RBXSTORE = {

  products,

  cart,

  addToCart,

  calculateCart,

  formatRupiah,

  showPage,

  openWhatsApp

};
