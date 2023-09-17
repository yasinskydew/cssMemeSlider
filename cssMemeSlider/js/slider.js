export default class Slider {
  constructor(data) {
    this.data = data;
    this.carouselWrapper = document.querySelector('.slider-wrapper');
    this.carouselWrapper = document.querySelector('.slider-wrapper');
    this.carousel = document.querySelector('.slider');
    this.description = document.querySelector('.slide-description');
    this.sliderButtonList = document.querySelector('.slider-button-list');
    this.sliderButtonCollection = [];
    this.itemWidth = (window.innerWidth / 100 * 80) + 20;
    this.currentSlideIndex = 0;
    this.sliderDuration = {
        duration: 200,
        iterations: 1,
        fill: 'forwards',
    };
  };

  _sliderAnimation = (index) => {
    if(index === this.currentSlideIndex) return false;
    return [
      {
        transform: `translateX(-${this.itemWidth * index}px)`
      }
    ]
  }

  _descriptionAnimation = (index) => {
    if(index === this.currentSlideIndex) return false;
    return {
      opacity: [0, 1],
    }
  }

  _initDescription() {
    const value = this.data[this.currentSlideIndex].description;
    this.description.innerText = value;
    const animation = this._descriptionAnimation();
    this.description.animate(animation, this.sliderDuration);
  }

  _sliderAnimationClick = (index) => {
    const animation = this._sliderAnimation(index);
    if(animation) {
      this.currentSlideIndex = index;
      this.carousel.animate(animation, this.sliderDuration);
      this.sliderButtonCollection.forEach(i => i.classList.remove('slider-button__active'));
      this.sliderButtonCollection[index].classList.add('slider-button__active');
    }
    this._initDescription();
  }

  _initSlides() {
    const slides = this.data.map((i) => {
      const el = document.createElement('li');
      el.classList.add('slider-item');
      if (i.isActive) {
        el.classList.add('slider-item__active');
      }
      const img = document.createElement('img');
      img.classList.add('slider-image');
      img.setAttribute('alt', 'slider item');
      img.setAttribute('src', i.link);

      el.appendChild(img);
      return el;
    });
    this.carousel.replaceChildren(...slides);
  }

  _initButtons() {
    const buttons = this.data.map((i, index) => {
      const el = document.createElement('li');
      el.classList.add('slider-button');
      if (i.isActive) {
        el.classList.add('slider-button__active');
      }
      const span = document.createElement('span');
      span.classList.add('visually-hidden');
      span.innerText = `${index + 1}`;
      el.addEventListener('click', () => {
        this._sliderAnimationClick(index);
      })
      el.appendChild(span);
      return el;
    });
    this.sliderButtonCollection = buttons;
    this.sliderButtonList.replaceChildren(...buttons);
  }

  _renderSlider() {
    this._initSlides();
    this._initButtons();
    this._initDescription();
  }

  init(){
      this._renderSlider();
      window.addEventListener('resize', () => {
        this.itemWidth = (window.innerWidth / 100 * 80) + 20;
      });
  }
}