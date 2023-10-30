import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";

/**
* Set up scale down scene for **Airpods** images
*
* @param element The selector of the element (like querySelector form)
* @param offset Scroll offset when scene starts (px)
* @param duration The duration in which the scene exists (px)
* */
export const setupAirpodScaleScene = function(element, offset, duration)
{
    const airpodsTween = new TweenMax.to(element, 1, {scale: 0.9});

    return new ScrollMagic.Scene({
        offset: offset,
        duration: duration
    })
    .setTween(airpodsTween);
}

/**
* Set up fade out scene for **Airpods** images
*
* @param element the selector of the element (like queryselector form)
* @param offset scroll offset when scene starts (px)
* @param duration the duration in which the scene exists (px)
* */
export const setupAirpodFadeoutScene = function(element, offset, duration)
{
    const airpodsTween = new TweenMax.to(element, 1, {opacity: 0});

    return new ScrollMagic.Scene({
        offset: offset,
        duration: duration
    })
    .setTween(airpodsTween);
}

/**
* Set up fade in scene for **Airpods** images
*
* @param element the selector of the element (like queryselector form)
* @param offset scroll offset when scene starts (px)
* @param duration the duration in which the scene exists (px)
* */
export const setupAirpodFadeinScene = function(element, offset, duration)
{
    const airpodsTween = new TweenMax.to(element, 1, {opacity: 1});

    return new ScrollMagic.Scene({
        offset: offset,
        duration: duration
    })
    .setTween(airpodsTween);
}

