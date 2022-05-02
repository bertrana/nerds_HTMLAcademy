const pins = document.querySelectorAll('.carousel .pin');
const sliders = document.querySelectorAll('.slider')

for (let i = 0; i < pins.length; i++) {
  pins[i].addEventListener('click', function() {
    currentPin = document.querySelector('.pin-current');
    currentSlider = document.querySelector('.slider-current');

    if (!pins[i].classList.contains('pin-current')) {
      currentPin.classList.remove('pin-current');
      currentSlider.classList.remove('slider-current');
      pins[i].classList.add('pin-current');
      sliders[i].classList.add('slider-current');
    }
  })
}