import { TweenMax } from "gsap";
import ScrollMagic from "scrollmagic";

/**
* Set up scale down & fade in scene for video
*
* @param element the selector of the element (like queryselector form)
* @param offset scroll offset when scene starts (px)
* */
export const setupVideoScene = function(element, offset)
{
    const videoScaleScene = new TweenMax.fromTo(element, 0.3, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1 })

    return new ScrollMagic.Scene({
        offset: offset,
    })
    .setTween(videoScaleScene);
}

