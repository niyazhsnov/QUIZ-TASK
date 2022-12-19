var countDownDate = new Date("March 5, 2023 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds + "";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
const product_carousel = document.getElementsByClassName("product_carousel")[0];
const newProducts = document.getElementsByClassName(
  "bestSellers__right__newProroducts"
)[0];
const cart_count = document.getElementsByClassName(
  "header__bottom__right__cart__count"
)[0];
const cartContent = document.getElementsByClassName("cartContent__scroll")[0];
const cartContentGeneral = document.getElementsByClassName("cartContent")[0];
const cardModalContent = document.getElementsByClassName("cardModalContent")[0];
const addToCartBtn = document.getElementsByClassName("addToCartBtn");
const addToCartInModal =
  document.getElementsByClassName("addToCartModalBtn")[0];
const modalCardDecrement = document.getElementById("modalCardDecrement");
const modalCardIncrement = document.getElementById("modalCardIncrement");
let countCart = parseInt(cart_count.innerText);
if (countCart < 0) {
  countCart = 0;
}

let cartId = 1;

let products = [
  {
    id: "1",
    price: 19,
    title: "Field Roast Chao Cheese Creamy Original",
    img: "https://k4j3j2s7.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg",
    count: 0,
  },

  {
    id: "2",
    price: 3.29,
    title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
    count: 0,
  },
  {
    id: "3",
    price: 10.58,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
    count: 0,
  },
  {
    id: "4",
    price: 10.58,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg",
    count: 0,
  },
  {
    id: "5",
    price: 10.58,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg",
    count: 0,
  },
  {
    id: "6",
    price: 11.99,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg",
    count: 0,
  },
  {
    id: "7",
    price: 3.29,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg",
    count: 0,
  },
  {
    id: "8",
    price: 6.32,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg",
    count: 0,
  },
  {
    id: "9",
    price: 49.99,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg",
    count: 0,
  },
  {
    id: "10",
    price: 4.85,
    title: "Blue Diamond Almonds Lightly Salted",
    img: "	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-58-346x310.jpg",
    count: 0,
  },
  {
    id: "11",
    price: 4.49,
    title: "Fresh Organic Broccoli Crowns",
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg",
    count: 0,
  },
  {
    id: "12",
    price: 4.49,
    title: "Chobani Complete Vanilla Greek Yogurt",
    img: "	https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg",
    count: 0,
  },
];

let cart = [];

class Cart {
  constructor(title, price, img, count) {
    (this.id = cartId),
      (this.title = title),
      (this.price = price),
      (this.img = img),
      (this.count = count);
  }
}
function RenderCardInPage() {
  for (let i = 4; i < products.length; i++) {
    let card = products[i];
    product_carousel.innerHTML += ` <div class="bestSellers__right__bottom__card">
                        <a class="bestSellers__right__bottom__card__top">
                            <img src="${card.img}" alt="">
                        </a>
                        <div class="bestSellers__right__bottom__card__middle">
                            <h5>${card.title}</h5>
                            <span>IN STOCK</span>
                            <ul class="star_list">
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><span class="star_list_count">1</span></li>
                            </ul>
                            <span class="past_price">$24.09</span>
                            <span class="new_price">$ ${card.price}</span>
                        </div>
                        <div class="bestSellers__right__bottom__card__bottom addToCartBtn">
                            <button onclick="AddToCart(${card.id})" >Add to cart</button>
                        </div>
                        <span class="discponunt">19%</span>
                        <span class="productFeature">ORGANIC</span>
                        <span class="fullScreen" onclick=CardModal(${card.id})><i class="fa-solid fa-compress"></i></span>
                        <span class="likeMe"><i class="fa-regular fa-heart"></i></span>
                    </div> `;

    newProducts.innerHTML += `
    <div class="bestSellers__right__bottom__card">
    <a class="bestSellers__right__bottom__card__top">
        <img src="${card.img}" alt="">
    </a>
    <div class="bestSellers__right__bottom__card__middle">
        <h5>${card.title}</h5>
        <span>IN STOCK</span>
        <ul class="star_list">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><span class="star_list_count">1</span></li>
        </ul>
        <span class="past_price">$24.09</span>
        <span class="new_price">$ ${card.price}</span>
    </div>
    <div class="bestSellers__right__bottom__card__bottom addToCartBtn">
        <button  >Add to cart</button>
    </div>
    <span class="discponunt">19%</span>
    <span class="productFeature">ORGANIC</span>
    <span class="fullScreen"><i class="fa-solid fa-compress"></i></span>
    <span class="likeMe"><i class="fa-regular fa-heart"></i></span>
</div>
    
    
    `;
  }
}
RenderCardInPage(products);
function CardModal(id) {
  let product = products.find((item) => item.id == id);
  let cardModalimg = document.getElementById(
    "cardModalContent__bottom__left__top__img"
  );
  let cardModaltitle = document.getElementById("cardModalContent__top__title");
  let cardModalPrice = document.getElementById("cardModalPrice");
  let cardModalCount = document.getElementById("cardModalCount");

  cardModalimg.src = product.img;
  cardModaltitle.textContent = product.title;
  cardModalPrice.textContent = product.price;
  cardModalCount.textContent = product.count;

  let reserve = product.count;

  modalCardIncrement.addEventListener("click", () => {
    AddToCart(id);
    cardModalCount.textContent = ++reserve;
  });

  modalCardDecrement.addEventListener("click", () => {
    DeleteFromCart(id);
    cardModalCount.textContent = --reserve;
  });
  addToCartInModal.addEventListener("click", () => {
    AddToCart(id);
    cardModalCount.textContent = ++reserve;
  });
}
function AddToCart(id) {
  let index = products.find((item) => item.id == id);
  let cartItem = cart.find((item) => item.id == id);

  index.count++;
  let productCart = new Cart(index.title, index.price, index.img, index.count);
  cart.push(productCart);

  cartId++;
  cartContent.style.overflowY = "scroll";

  cart_count.textContent = ++countCart;
  RenderModalCart(cart);
}

function DeleteFromCart(id) {
  let product = cart.find((item) => item.id == id);
  let indexOfProduct = cart.indexOf(product);

  cart.splice(indexOfProduct, 1);

  cart_count.textContent = --countCart;

  RenderModalCart(cart);
}

function RenderModalCart(array) {
  if (cart.length > 0) {
    $(".header__bottom__right").addClass("showAndHideCartContent");
    $(".header__bottom__right").removeClass("showAndHideCartContentEmpty");
  } else {
    $(".header__bottom__right").addClass("showAndHideCartContentEmpty");
    $(".header__bottom__right").removeClass("showAndHideCartContent");
  }

  let innerHTML = ``;
  for (let i = 0; i < array.length; i++) {
    innerHTML += `
            <div class="cartContent__top">
            <div>
            <img src="${array[i].img}"
            alt="">
                                <div class="deleteBtn" onclick=DeleteFromCart(${array[i].id}) id="deleteWithCart">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>
                            <div class="cartContent__top__text">
                            <h5 class="cartContent__top__title">
                            ${array[i].title}
                            </h5>
                            <h6><span>2 x</span>$ ${array[i].price}</h6>
                            </div>
                        </div>
                    
                        `;
  }

  cartContent.innerHTML = innerHTML;
}

$(".windowsBottom__categories").click(() => {
  $(".wishList").toggle(400, () => {
    $(".wishList").css({
      transform: "translateX(0)",
    });
  });
});
// Nab burger
$(".respBurger").click(() => {
  $(".wishList").show(400, () => {
    $(".wishList").css({
      transform: "translateX(0)",
    });
  });
});

// Wishlist Exit Btn
$(".wishList__top__exitBtn").click(() => {
  $(".wishList").hide(400);
});

// Location modal and categories button
$(".header__bottom__middle__location").click(() => {
  $(".header__bottom__middle__location__modal").show(500, () => {});
  ChangeBacgrond();

  $(".locationBackground").click(() => {
    $(".header__bottom__middle__location__modal").hide(500);
  });
});

function ChangeBacgrond() {
  $(".locationBackground").addClass("changeStyle");
  $(".locationBackground").css("display", "block");

  $(".locationBackground").click(() => {
    $(".locationBackground").removeClass("changeStyle");
    $(".locationBackground").css("display", "none");
  });
}

// Show and Hide Card modal
$(".fullScreen").click(() => {
  $(".cardModalContent").show(10, () => {});
  $(".cardModalBackground").addClass("changeStyle");
  $(".cardModalBackground").css("display", "block");

  $(".cardModalBackground").click(() => {
    $(".cardModalContent").hide(10);
    $(".cardModalBackground").removeClass("changeStyle");
    $(".cardModalBackground").css("display", "none");
  });
});

// Dropdoen for Categories button
$(".categoriesBtn").click(() => {
  $(".map__wrapper__left__list").slideToggle(300);
  $(".map__wrapper__left__bottom").slideToggle(300);
});

// OWL CAROUSEL
$(".map_carousel").owlCarousel({
  loop: true,
  responsiveClass: true,
  // nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".product_carousel").owlCarousel({
  loop: true,
  autoplay: true,
  responsiveClass: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1170: {
      items: 4,
    },
  },
});

RenderModalCart();
CardModal();
