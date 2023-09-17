export default class Slider {
  constructor(){};

  carouselWrapper = document.querySelector('.about-slider-wrapper');
  carousel = document.querySelector('.about-slider');
  
  sliderButtonList = document.querySelector('.slider-button-list');
  sliderButtonCollection = this.sliderButtonList.querySelectorAll('.slider-button');
  
  itemWidth = this.carouselWrapper.querySelector('.about-slider-item').clientWidth + 22;
  
  currentSlideIndex = 0;

  sliderDuration = {
      duration: 200,
      iterations: 1,
      fill: 'forwards',
  };

  _sliderAnimation = (index) => {
    console.log(this.itemWidth);
    if(index === this.currentSlideIndex) return false;
    return [
      {
        transform: `translateX(-${this.itemWidth * index}px)`
      }
    ]
  }

  _sliderAnimationClick = (index) => {
    const animation = this._sliderAnimation(index);
    if(animation) {
      this.currentSlideIndex = index;
      this.carousel.animate(animation, this.sliderDuration);
      this.sliderButtonCollection.forEach(i => i.classList.remove('slider-button__active'));
      this.sliderButtonCollection[index].classList.add('slider-button__active');
    }
  }

  _renderSlider() {
    this.sliderButtonCollection.forEach((item, index) => {
      item.addEventListener('click', () => {
        this._sliderAnimationClick(index);
      })
    });
  }

  init(){
      this._renderSlider();
  }
}