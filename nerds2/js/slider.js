const slideSmartphone = document.querySelector('.slide-smartphone');
const slideMonitor = document.querySelector('.slide-monitor');
const slideTablet = document.querySelector('.slide-tablet');
const btnSlideOne = document.querySelector('.btn-slide-1');
const btnSlideTwo = document.querySelector('.btn-slide-2');
const btnSlideThree = document.querySelector('.btn-slide-3');


btnSlideOne.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideSmartphone.classList.remove('visually-hidden');
  slideMonitor.classList.add('visually-hidden');
  slideTablet.classList.add('visually-hidden');
  btnSlideOne.classList.add('current');
  btnSlideTwo.classList.remove('current');
  btnSlideThree.classList.remove('current');
})

btnSlideTwo.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideMonitor.classList.remove('visually-hidden');
  slideSmartphone.classList.add('visually-hidden');
  slideTablet.classList.add('visually-hidden');
  btnSlideTwo.classList.add('current');
  btnSlideOne.classList.remove('current');
  btnSlideThree.classList.remove('current');
});

btnSlideThree.addEventListener ('click', function (evt) {
  evt.preventDefault();
  slideTablet.classList.remove('visually-hidden');
  slideSmartphone.classList.add('visually-hidden');
  slideMonitor.classList.add('visually-hidden');
  btnSlideThree.classList.add('current');
  btnSlideOne.classList.remove('current');
  btnSlideTwo.classList.remove('current');
});
