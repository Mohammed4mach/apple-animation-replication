import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import { TweenMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ScrollMagic from "scrollmagic";
import preAnimationStyle from "./pre-animation.js";
import { setupAirpodScaleScene, setupAirpodFadeoutScene, setupAirpodFadeinScene } from "./scenes/airpod-scenes.js";
import { setupTextScenes } from "./scenes/text-scenes.js";
import { setupVideoScene } from "./scenes/video-scenes.js";
import SceneInfo from "./classes/SceneInfo.js";


ScrollMagicPluginGsap(ScrollMagic, TweenMax);

/**
 * Apply the animation scenes
 *
 * */
const animateOnScroll = function() {
    preAnimationStyle();

    const controller = new ScrollMagic.Controller();

    // Scenes configurations
    const scene1Info = new SceneInfo(0, 500);
    const scene2Info = new SceneInfo(scene1Info.start + 2, scene1Info.duration / 2);
    const scene3Info = new SceneInfo(scene2Info.end - 7, scene1Info.duration / 2);
    const scene4Info = new SceneInfo(scene3Info.start + scene3Info.duration / 2, scene3Info.duration / 2);
    const scene5Info = new SceneInfo(scene4Info.end - 20, 280);
    const scene6Info = new SceneInfo(scene5Info.start, scene5Info.duration);
    const scene7Info = new SceneInfo(scene6Info.start + scene6Info.duration / 2, scene6Info.duration / 2);
    const scene8Info = new SceneInfo(scene7Info.end - 60, 240);
    const scene9Info = new SceneInfo(scene8Info.start + 20, 40);

    // Set pin
    const pinSectionScene = new ScrollMagic.Scene({
        offset: 70,
        duration: 1000
    })
    .setPin('.scroll-pin');

    // Set scenes up
    const airpod1Scene1 = setupAirpodScaleScene(  // 1- Airpod1 Scale
        '.scroll-airpod1',
        scene1Info.start,
        scene1Info.duration
    );

    const textScenes1 = setupTextScenes(  // 2- Text 1 Scene
        '.scroll-text1',
        scene2Info.start,
        scene2Info.duration,
        -2
    );

    const textScenes2 = setupTextScenes(  // 3- Text 2 Scene
        '.scroll-text2',
        scene3Info.start,
        scene3Info.duration,
        -251
    );

    const airpod1Scene2 = setupAirpodFadeoutScene(  // 4- Airpod1 Fade out
        '.scroll-airpod1',
        scene4Info.start,
        scene4Info.duration
    );

    const airpod2Scene1 = setupAirpodScaleScene(  // 5- Airpod2 Scale
        '.scroll-airpod2',
        scene5Info.start,
        scene5Info.duration
    );

    const airpod2Scene2 = setupAirpodFadeinScene(  // 5- Airpod2 Fade in
        '.scroll-airpod2',
        scene5Info.start,
        scene5Info.duration / 2
    );

    const textScenes3 = setupTextScenes(  // 6- Text 3 Scene
        '.scroll-text3',
        scene6Info.start,
        scene6Info.duration,
        -130
    );

    const airpod2Scene3 = setupAirpodFadeoutScene(  // 7- Airpod2 Fade out
        '.scroll-airpod2',
        scene7Info.start,
        scene7Info.duration
    );

    const airpod3Scene1 = setupAirpodFadeinScene(  // 8- Aripod3 Fade in
        '.scroll-airpod3',
        scene8Info.start,
        scene8Info.duration
    );

    const airpod3Scene2 = setupAirpodScaleScene(  // 9- Aripod3 Scale
        '.scroll-airpod3',
        scene8Info.start,
        scene8Info.duration
    );

    const video1Scene = setupVideoScene(  // 10- Video scale scene
        '.scroll-video1',
        scene9Info.start,
        scene9Info.duration
    );

    controller.addScene([
        pinSectionScene,
        airpod1Scene1,
        airpod1Scene2,
        airpod2Scene1,
        airpod2Scene2,
        airpod2Scene3,
        airpod3Scene1,
        airpod3Scene2,
        video1Scene,
        ...textScenes1,
        ...textScenes2,
        ...textScenes3
    ]);
};

export default animateOnScroll;

