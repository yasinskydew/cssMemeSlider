import Slider from './slider.js';
const data = [
    {
        description: 'A bit about langs',
        link: 'assets/slider-1.jpg',
        isActive: true,
    },
    {
        description: 'Null understanding, you know',
        link: 'assets/slider-2.jpg',
        isActive: false,
    },
    {
        description: 'A bit about style guides',
        link: 'assets/slider-3.webp',
        isActive: false,
    },
    {
        description: 'Heavy at university, easy at work',
        link: 'assets/slider-4.jpg',
        isActive: false,
    },
    {
        description: 'Best pragramming practice',
        link: 'assets/slider-5.jpg',
        isActive: false,
    },
];
const slider = new Slider(data);
slider.init();