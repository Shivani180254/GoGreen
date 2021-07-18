'use strict';

const modalLogin = document.querySelector('.modal_login');
const modalWishlist = document.querySelector('.modal_wishlist');
const modalCart = document.querySelector('.modal_cart');
const modalPlaceOrder = document.querySelector('.modal_place_order');
const modalSeed = document.querySelector('.modal_seed');
const modalPack = document.querySelector('.modal_pack');
const modalPlant = document.querySelector('.modal_plant');
const modalFlower = document.querySelector('.modal_flower');
const modalTool = document.querySelector('.modal_tool');
const modalSoil = document.querySelector('.modal_soil');
const modalPebble = document.querySelector('.modal_pebble');
const overlay = document.querySelector('.overlay');
const overlay2 = document.querySelector('.overlay2');
const overlay1 = document.querySelector('.overlay1');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnCloseModalWishlist = document.querySelector(
  '.btn--close-modal-wishlist'
);
const btnCloseModalCart = document.querySelector('.btn--close-modal-cart');
const btnCloseModalPlaceOrder = document.querySelector(
  '.btn--close-modal-placeorder'
);
const btnsLoginModal = document.querySelectorAll('.btn--login-modal');
const btnsWishlistModal = document.querySelectorAll('.btn--wishlist-modal');
const btnsCartModal = document.querySelectorAll('.btn--cart-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const nav1 = document.querySelector('.nav1');
const header = document.querySelector('.header');
const highlight = document.querySelector('.highlight');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnsSeedModal = document.querySelectorAll('.btn--seed-modal');
const btnsPackModal = document.querySelectorAll('.btn--pack-modal');
const btnsPlantModal = document.querySelectorAll('.btn--plant-modal');
const btnsFlowerModal = document.querySelectorAll('.btn--flower-modal');
const btnsToolModal = document.querySelectorAll('.btn--tool-modal');
const btnsSoilModal = document.querySelectorAll('.btn--soil-modal');
const btnsPebbleModal = document.querySelectorAll('.btn--pebble-modal');
const btnsPlaceOrder = document.querySelector('.place_order');
const submit = document.querySelector('.submitbtn');
const search = document.querySelector('.search');
const myinput = document.getElementById('myinput');
const btnsAgloneemaWish = document.querySelector('.agloneema_like');
const btnsAspidistraWish = document.querySelector('.aspidistra_like');
const btnsAloveraWish = document.querySelector('.alovera_like');
const btnsPurpleWish = document.querySelector('.purple_like');
const btnsSnakeWish = document.querySelector('.snake_like');
const btnsAgloneemaCart = document.querySelector('.agloneema_cart');
const btnsAspidistraCart = document.querySelector('.aspidistra_cart');
const btnsPurpleCart = document.querySelector('.purple_cart');
const btnsSnakeCart = document.querySelector('.snake_cart');
const btnsaloveraCart = document.querySelector('.alovera_cart');
const wishlistname1 = document.querySelector('.wishlist_name1');
const wishlistname2 = document.querySelector('.wishlist_name2');
const wishlistname3 = document.querySelector('.wishlist_name3');
const wishlistname4 = document.querySelector('.wishlist_name4');
const moneyicon1 = document.querySelector('.money_icon1');
const moneyicon2 = document.querySelector('.money_icon2');
const moneyicon3 = document.querySelector('.money_icon3');
const moneyicon4 = document.querySelector('.money_icon4');
const wishlistmoney1 = document.querySelector('.wishlist_money1');
const wishlistmoney2 = document.querySelector('.wishlist_money2');
const wishlistmoney3 = document.querySelector('.wishlist_money3');
const wishlistmoney4 = document.querySelector('.wishlist_money4');
const cartname1 = document.querySelector('.cart_name1');
const cartname2 = document.querySelector('.cart_name2');
const cartname3 = document.querySelector('.cart_name3');
const cartname4 = document.querySelector('.cart_name4');
const cartmoneyicon1 = document.querySelector('.cartmoney_icon1');
const cartmoneyicon2 = document.querySelector('.cartmoney_icon2');
const cartmoneyicon3 = document.querySelector('.cartmoney_icon3');
const cartmoneyicon4 = document.querySelector('.cartmoney_icon4');
const totalmoneyicon = document.querySelector('.totalmoney_icon');
const cartmoney1 = document.querySelector('.cart_money1');
const cartmoney2 = document.querySelector('.cart_money2');
const cartmoney3 = document.querySelector('.cart_money3');
const cartmoney4 = document.querySelector('.cart_money4');
const totalmoney = document.querySelector('.total_money');
const productname1 = document.querySelector('.product_name1');
const productname2 = document.querySelector('.product_name2');
const productname3 = document.querySelector('.product_name3');
const productname4 = document.querySelector('.product_name4');
const productname5 = document.querySelector('.product_name5');
const money1 = document.querySelector('.money1');
const money2 = document.querySelector('.money2');
const money3 = document.querySelector('.money3');
const money4 = document.querySelector('.money4');
const money5 = document.querySelector('.money5');
const nextstep = document.querySelector('.next-step');
const firstName = document.querySelector('.fn');
const lastName = document.querySelector('.ln');
const email = document.querySelector('.email');

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function myFunction() {
  if (nav1.className === 'nav1') {

    document.querySelector('.header_heading').classList.add('hidden')
    document.querySelector('.header_paragraph').classList.add('hidden')
    nav1.className += ' responsive';
  } else {
    document.querySelector('.header_heading').classList.remove('hidden')
    document.querySelector('.header_paragraph').classList.remove('hidden')
    nav1.className = 'nav1';
  }
}

//WISHLIST
const wishlist = function (e) {
  e.preventDefault();
  const productName = document.querySelector(`.product_name${this}`);
  const money = document.querySelector(`.money${this}`);

  //wishlist block----------1
  if (wishlistname1.textContent === '') {
    wishlistname1.textContent = productName.textContent;
    moneyicon1.classList.remove('hidden');
    wishlistmoney1.textContent = money.textContent;
  }

  //wishlist block----------2
  else if (wishlistname2.textContent === '') {
    if (wishlistname1.textContent === productName.textContent) {
      alert('This Item is Already Present in Wishlist🤩');
    } else {
      wishlistname2.textContent = productName.textContent;
      moneyicon2.classList.remove('hidden');
      wishlistmoney2.textContent = money.textContent;
    }
  }

  //wishlist block----------3
  else if (wishlistname3.textContent === '') {
    if (
      wishlistname1.textContent === productName.textContent ||
      wishlistname2.textContent === productName.textContent
    ) {
      alert('This Item is Already Present in Wishlist🤩');
    } else {
      wishlistname3.textContent = productName.textContent;
      moneyicon3.classList.remove('hidden');
      wishlistmoney3.textContent = money.textContent;
    }
  }

  //wishlist block----------4
  else if (wishlistname4.textContent === '') {
    if (
      wishlistname1.textContent === productName.textContent ||
      wishlistname3.textContent === productName.textContent ||
      wishlistname2.textContent === productName.textContent
    ) {
      alert('This Item is Already Present in Wishlist🤩');
    } else {
      wishlistname4.textContent = productName.textContent;
      moneyicon4.classList.remove('hidden');
      wishlistmoney4.textContent = money.textContent;
    }
  }

  //wishlist block----------no block available wishlist is full
  else if (
    wishlistname1.textContent != '' &&
    wishlistname2.textContent != '' &&
    wishlistname3.textContent != '' &&
    wishlistname4.textContent != ''
  ) {
    alert('wishlist is already full😛');
  }
};
//ADDING EVENTS TO FIRST FIVE PRODUCTS
btnsAgloneemaWish.addEventListener('click', wishlist.bind(1));
btnsPurpleWish.addEventListener('click', wishlist.bind(2));
btnsSnakeWish.addEventListener('click', wishlist.bind(3));
btnsAspidistraWish.addEventListener('click', wishlist.bind(4));
btnsAloveraWish.addEventListener('click', wishlist.bind(5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//shopping cart
let totalAmount = 0;
const addToBag = function (e) {
  e.preventDefault();
  const productName = document.querySelector(`.product_name${this}`);
  const money = document.querySelector(`.money${this}`);

  //wishlist block----------1
  if (cartname1.textContent === '') {
    cartname1.textContent = productName.textContent;
    cartmoneyicon1.classList.remove('hidden');
    cartmoney1.textContent = money.textContent;
    totalmoneyicon.classList.remove('hidden');
    totalAmount += Number(money.textContent);
    totalmoney.textContent = totalAmount;
  }

  //wishlist block----------2
  else if (cartname2.textContent === '') {
    if (cartname1.textContent === productName.textContent) {
      alert('This Item is Already Present in Your Bag🤩');
    } else {
      cartname2.textContent = productName.textContent;
      cartmoneyicon2.classList.remove('hidden');
      cartmoney2.textContent = money.textContent;
      totalAmount += Number(money.textContent);
      totalmoney.textContent = totalAmount;
    }
  }

  //wishlist block----------3
  else if (cartname3.textContent === '') {
    if (
      cartname1.textContent === productName.textContent ||
      cartname2.textContent === productName.textContent
    ) {
      alert('This Item is Already Present in Your Bag🤩');
    } else {
      cartname3.textContent = productName.textContent;
      cartmoneyicon3.classList.remove('hidden');
      cartmoney3.textContent = money.textContent;
      totalAmount += Number(money.textContent);
      totalmoney.textContent = totalAmount;
    }
  }

  //wishlist block----------4
  else if (cartname4.textContent === '') {
    if (
      cartname1.textContent === productName.textContent ||
      cartname3.textContent === productName.textContent ||
      cartname2.textContent === productName.textContent
    ) {
      alert('This Item is Already Present in Your Bag🤩');
    } else {
      cartname4.textContent = productName.textContent;
      cartmoneyicon4.classList.remove('hidden');
      cartmoney4.textContent = money.textContent;
      totalAmount += Number(money.textContent);
      totalmoney.textContent = totalAmount;
    }
  }

  //wishlist block----------no block available wishlist is full
  else if (
    cartname1.textContent != '' &&
    cartname2.textContent != '' &&
    cartname3.textContent != '' &&
    cartname4.textContent != ''
  ) {
    alert('bag is already full😛');
  }
};
//ADDING EVENTS TO FIRST FIVE PRODUCTS
btnsAgloneemaCart.addEventListener('click', addToBag.bind(1));
btnsPurpleCart.addEventListener('click', addToBag.bind(2));
btnsSnakeCart.addEventListener('click', addToBag.bind(3));
btnsAspidistraCart.addEventListener('click', addToBag.bind(4));
btnsaloveraCart.addEventListener('click', addToBag.bind(5));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Search button
let arr = [
  'AGLONEEMA',
  'ALGONEEMACOMMUTATUMPLANT',
  'PURPLE',
  'PURPLEFLOWER',
  'SNAKE',
  'SNAKEPLANT',
  'ASPIDISTRA',
  'ASPIDISTRAPLANT',
  'ALOVERA',
  'ALOVERAPLANT',
  'CACTUS',
  'CACTUSPLANT',
  'LILY',
  'LILYFLOWER',
  'SYNGONIUM',
  'SYNGONIUMPLANT',
  'MONEYPLANT',
  'JADE',
  'JADEPLANT',
  'CRASULLAEROSULLACAMFIRE',
  'YUCCA',
  'YUCCA PLANT',
  'BOUGAINVILLEA',
  'BOUGAINVILLEAPLANT',
  'AGAVE',
  'AGAVEPLANT',
  'SWISSCHEESE',
  'SWISSCHEESEPLANT',
  'CATARACTRUM',
  'CATARACTRUMPLANT',
];
const searchPlant = function (e) {
  e.preventDefault();
  const searched = myinput.value.toUpperCase().split(' ').join('');
  console.log(searched);
  if (arr.includes(searched)) {
    section1.scrollIntoView({ behavior: 'smooth' });
  } else {
    alert(' sorry wrong input! please type the correct name of the plant..😷');
  }
};
submit.addEventListener('click', searchPlant);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login  wishlist cart  window
const openModal = function (e) {
  e.preventDefault();
  this.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  this.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsLoginModal.forEach(btn =>
  btn.addEventListener('click', openModal.bind(modalLogin))
);
btnCloseModal.addEventListener('click', closeModal.bind(modalLogin));
overlay.addEventListener('click', closeModal.bind(modalLogin));

btnsWishlistModal.forEach(btn =>
  btn.addEventListener('click', openModal.bind(modalWishlist))
);
btnCloseModalWishlist.addEventListener('click', closeModal.bind(modalWishlist));
overlay.addEventListener('click', closeModal.bind(modalWishlist));

btnsCartModal.forEach(btn =>
  btn.addEventListener('click', openModal.bind(modalCart))
);
btnCloseModalCart.addEventListener('click', closeModal.bind(modalCart));
overlay.addEventListener('click', closeModal.bind(modalCart));

//next step button to show the account is created
nextstep.addEventListener('click', function () {
  if (firstName.value === '' && lastName.value === '' && email.value === '')
    alert('please fill all your details first');
  if (firstName.value != '' && lastName.value != '' && email.value != '')
    alert('Your Account in GoGreen is Successfully Created☘🌿');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PLACE ORDER
let timer;
const openModal2 = function () {
  modalPlaceOrder.classList.remove('hidden');
  modalCart.classList.add('hidden');
  overlay2.classList.remove('hidden');
  overlay.classList.add('hidden');
  clearInterval(timer);
  orderTimer();
};

const closeModal2 = function () {
  this.classList.add('hidden');
  overlay2.classList.add('hidden');
};

btnsPlaceOrder.addEventListener('click', function () {
  if (
    cartname1.textContent != '' ||
    cartname2.textContent != '' ||
    cartname3.textContent != '' ||
    cartname4.textContent != ''
  ) {
    openModal2();
  } else {
    alert('Please Add Some Items In Bag Before Placing Order❌');
  }
});
btnCloseModalPlaceOrder.addEventListener(
  'click',
  closeModal2.bind(modalPlaceOrder)
);
overlay2.addEventListener('click', closeModal2.bind(modalPlaceOrder));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//order receiving date and time
const d = new Date();
const dayreceive = d.getDate() + 5;
const dayplaced = d.getDate();
const month = d.getMonth() + 1;
const year = d.getFullYear();

document.getElementById('date1').textContent = `${dayplaced}/${month}/${year}`;
document.getElementById('date2').textContent = `${dayreceive}/${month}/${year}`;

const orderTimer = function () {
  const tick = function () {
    const hour = 120;
    const min = 120 * 60;
    const sec = String(time % 60).padStart(2, 0);
    document.getElementById(
      'timerfororder'
    ).textContent = `${hour}:${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
    }
    time--;
  };
  let time = 60;
  tick();
  timer = setInterval(tick, 1000);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//seed  plant  pack etc.................. window
const openModal1 = function (e) {
  e.preventDefault();
  this.classList.remove('hidden');
  overlay1.classList.remove('hidden');
};

const closeModal1 = function () {
  this.classList.add('hidden');
  overlay1.classList.add('hidden');
};

//seed Window
btnsSeedModal.forEach(btn =>
  btn.addEventListener('click', openModal1.bind(modalSeed))
);

overlay1.addEventListener('click', closeModal1.bind(modalSeed));
//plant Window
btnsPlantModal.forEach(btn =>
  btn.addEventListener('click', openModal1.bind(modalPlant))
);

overlay1.addEventListener('click', closeModal1.bind(modalPlant));
//pack window
btnsPackModal.forEach(btn =>
  btn.addEventListener('click', openModal1.bind(modalPack))
);

overlay1.addEventListener('click', closeModal1.bind(modalPack));
//soil window
btnsSoilModal.forEach(btn =>
  btn.addEventListener('click', openModal1.bind(modalSoil))
);

overlay1.addEventListener('click', closeModal1.bind(modalSoil));
//pebbles window
btnsPebbleModal.forEach(btn =>
  btn.addEventListener('click', openModal1.bind(modalPebble))
);

overlay1.addEventListener('click', closeModal1.bind(modalPebble));
//tools window
btnsToolModal.forEach(btn =>
  btn.addEventListener('click', openModal1.bind(modalTool))
);

overlay1.addEventListener('click', closeModal1.bind(modalTool));
//flower window
btnsFlowerModal.forEach(btn =>
  btn.addEventListener('click', openModal1.bind(modalFlower))
);

overlay1.addEventListener('click', closeModal1.bind(modalFlower));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Page navigation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('forscrolling')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reveal sections by intersection observer API
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
