
//swiper/////
var swiper = new Swiper(".mySwiper", {

  slidesPerView: 1,
  spaceBetween: 15,
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
