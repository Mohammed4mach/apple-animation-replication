import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";

/**
* Set up fade in scene for describtion texts
*
* @param element the selector of the element (like queryselector form)
* @param offset scroll offset when scene starts (px)
* @param duration the duration in which the scene exists (px)
* */
export const setupTextFadeinScene = function(element, offset, duration)
{
    const textFadeinScene = new TweenMax.to(element, 1, { opacity: 1 })

    return new ScrollMagic.Scene({
        offset: offset,
        duration: duration
    })
    .setTween(textFadeinScene);
}

/**
* Set up fade out scene for describtion texts
*
* @param element the selector of the element (like queryselector form)
* @param offset scroll offset when scene starts (px)
* @param duration the duration in which the scene exists (px)
* */
export const setupTextFadeoutScene = function(element, offset, duration)
{
    const textFadeoutScene = new TweenMax.to(element, 1, { opacity: 0 })

    return new ScrollMagic.Scene({
        offset: offset,
        duration: duration
    })
    .setTween(textFadeoutScene);
}

/**
* Set up move scene for describtion texts
*
* @param element the selector of the element (like queryselector form)
* @param offset scroll offset when scene starts (px)
* @param duration the duration in which the scene exists (px)
* @param moveValue Y-axis value to move (px)
* */
export const setupTextMoveScene = function(element, offset, duration, moveValue)
{
    const textMoveScene = new TweenMax.to(element, 0.02, { y: moveValue })

    return new ScrollMagic.Scene({
        offset: offset,
        duration: duration
    })
    .setTween(textMoveScene);
}

/**
* Set up scenes for describtion texts
*
* @param element the selector of the element (like queryselector form)
* @param offset scroll offset when scene starts (px)
* @param duration the duration in which the scene exists (px)
* @param moveValue Y-axis value to move (px)
* */
export const setupTextScenes = function(element, offset, duration, moveValue)
{
    const firstFadeStart  = offset;
    const secondFadeStart = offset + (duration / 2);
    const fadeDuration    = duration / 2;

    const mobileMedia = window.matchMedia('(max-width: 734px)');

    const fadeinScene  = setupTextFadeinScene(element, firstFadeStart, fadeDuration);
    const fadeoutScene = setupTextFadeoutScene(element, secondFadeStart, fadeDuration);

    const moveScene    = !mobileMedia.matches ?
        setupTextMoveScene(element, offset, duration, moveValue) :
        new ScrollMagic.Scene();

    return [fadeinScene, moveScene, fadeoutScene];
}

