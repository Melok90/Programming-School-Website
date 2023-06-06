
//swiper/////
var swiper = new Swiper(".mySwiper", {

  slidesPerView: 1,
  spaceBetween: 10,
  // grabCursor: true,
  loop: true,
  freeMode: true,
  pauseOnMouseEnter: false,
  slideToClickedSlide: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-2",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

//swiper-2/////
var photos = [
  './img/photo/photo-1.png',
  './img/photo/photo-2.png',
  './img/photo/photo-3.png',
  './img/photo/photo-4.png'
];

var currentIndex = 0;

function changePhoto() {
  var imageElement = document.getElementById('myImage');

  imageElement.src = photos[currentIndex];
  currentIndex++;
  if (currentIndex === photos.length) {
    currentIndex = 0;
  }
}

setInterval(changePhoto, 4500);

////////////according////////////
const arr = document.querySelector('.btn__arrow');
const acc = document.getElementsByClassName('accordion__btn');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    var activeElement = document.querySelector('.active');

    if (activeElement && activeElement !== this) {
      activeElement.classList.toggle('active');
      activeElement.style.color = '';
      activeElement.style.backgroundColor = '';
      activeElement.nextElementSibling.classList.toggle('show');
      activeElement.querySelector('.arrow').setAttribute('hidden', 'true');
    }

    this.classList.toggle('active');
    this.style.color = this.classList.contains('active') ? '#252525' : '';
    this.style.backgroundColor = this.classList.contains('active') ? '#ececec' : '';
    this.nextElementSibling.classList.toggle('show');
    this.querySelector('.arrow').removeAttribute('hidden');

    const arrowElement = this.querySelector('.arrow');
    if (this.classList.contains('active')) {
      arrowElement.removeAttribute('hidden');
    } else {
      arrowElement.setAttribute('hidden', 'true');
    }
  };
}


///////////title/////

const t = [
  'Choose our courses and find out how AI affect our lives right now'
];

function typeText() {
  let line = 0;
  let count = 0;
  let out = '';
  let htmlOut = document.querySelector('.out');

  function typeLine() {
    let interval = setTimeout(function () {
      out += t[line][count];
      htmlOut.innerHTML = out + '|';
      count++;

      if (count >= t[line].length) {
        count = 0;
        line++;
        if (line == t.length) {
          clearTimeout(interval);
          htmlOut.innerHTML = out;
          return true;
        }
      }

      typeLine();
    }, getRandomInt(getRandomInt(150 * 4)));
  }
  typeLine();
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
typeText();

//////map/////



let center = [51.49705037294127, -0.18205639077445052];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 15
  });

  placemark_main = new ymaps.Placemark([51.49705037294127, -0.18205639077445052], {
    balloonContentHeader: 'Our adress:',
    balloonContentBody: 'Elvaston PI str. 23',
    balloonContentFooter: '',
  }, {
    
  }),
    placemark_main.balloon.open;
  map.geoObjects.add(placemark_main);
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl');
}

ymaps.ready(init);

document.addEventListener("DOMContentLoaded", () => {
  const icons = document.getElementsByClassName('icon__item');
  let increment = 0.1;
  const maxScale = 1.1;
  let rotation = 0;

  const interval = setInterval(() => {
    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i];
      icon.style.transform = `rotate(${rotation}deg)`;
      rotation += 2;
      if (rotation === 4) {
        rotation = 0;
      }
    }

    if (increment > 0 && rotation === 0) {
      increment = -increment;
    } else if (increment < 0 && rotation === 2) {
      increment = -increment;
    }
  }, 1000);
});

////pop-up////

const menu = document.getElementById('menu');
const checkbox = document.getElementById('menuToggle');

menu.style.display = "none";

function toggleMenu() {
  if (window.innerWidth < 590) {
    if (menu.style.display === "none") {
      menu.style.display = "block";
      document.body.classList.add('menu-open'); 
    } else {
      menu.style.display = "none";
      document.body.classList.remove('menu-open'); 
    }
  }
}

checkbox.onclick = toggleMenu;
window.addEventListener("resize", toggleMenu);

const menuToggle = document.getElementById('menuToggle');
const input = menuToggle.querySelector('input');
const spans = menuToggle.querySelectorAll('span');

input.addEventListener('change', function() {
  if (this.checked) {
    spans[0].style.opacity = '1';
    spans[0].style.transform = 'rotate(45deg) translate(-2px, -1px)';
    spans[0].style.background = '#ececec';
    spans[1].style.opacity = '0';
    spans[1].style.transform = 'rotate(0deg) scale(0.2, 0.2)';
    spans[2].style.transform = 'rotate(-45deg) translate(-1px, -4px)';
    menu.style.transform = 'scale(1)';
    menu.style.opacity = '1';
  } else {
    spans[0].style.opacity = '';
    spans[0].style.transform = '';
    spans[0].style.background = '';
    spans[1].style.opacity = '';
    spans[1].style.transform = '';
    spans[2].style.transform = '';
    menu.style.transform = 'scale(0.8)';
    menu.style.opacity = '0';
  }
});

const menuItems = document.getElementsByClassName('menu-item');

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    spans[0].style.opacity = '';
    spans[0].style.transform = '';
    spans[0].style.background = '';
    spans[1].style.opacity = '';
    spans[1].style.transform = '';
    spans[2].style.transform = '';
    menu.style.transform = 'scale(0.8)';
    menu.style.opacity = '0';
  });
}