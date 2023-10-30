import './src/sass/app.scss';
import animateOnScroll from './src/js/animation.js';


const isMotionReduced =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if(!isMotionReduced)
    animateOnScroll();

