/**
 * Absolute position sections
 *
 * @param airpods The Airpods images
 * @param sections Sections that will apply the style
 * @param texts The describtions in the sections
 * */
const adjustSectionsPositions = function(airpods, sections, texts)
{
    const mobileMedia = window.matchMedia('(max-width: 734px)');

    sections.forEach( element => {
        element.style.marginBlock = 0;
        element.style.position    = 'absolute';
        element.style.left        = '50%';
        element.style.translate   = '-50% 0';
    });

    // Set texts positions
    if(!mobileMedia.matches)
    {
        texts[0].classList.add('transform-translateY-250px'); // Adjust first text position
        texts[2].classList.add('transform-translateY-122px'); // Adjust third text position
    }
    else
    {
        // Adjust sections positions for Mobile
        sections[2].style.marginTop = '50px';

        texts.forEach(element => {
            element.style.marginBottom = 0;
            element.style.marginTop    = '25px'
        });

        const translateValue = texts[1].offsetTop - texts[0].offsetTop;

        texts[1].classList.add(
            `transform-translateY--${translateValue}px`,
            'position-fixed'
        ); // Adjust second text position
    }
}

/**
 * Hide all section's contents except the first image
 *
 * @param airpods The Airpods images
 * @param video The particles video
 * @param texts The describtions in the sections
 * */
const hideContents = function(airpods, video, texts)
{
    airpods.forEach( (element, index) => {
        if(index !== 0) // not the first element
            element.style.opacity = 0;
    });

    texts.forEach( element => {
        element.classList.add('opacity-0');
    });

    video.style.opacity = 0;
}

/**
 * Scale up video
 *
 * @param video The particles video
 * */
const scaleUpVideo = function(video)
{
    video.style.scale = 1.2;
}

/**
 * Styles required so that animations work properly
 *
 * */
const preAnimationStyle = function()
{
    const sections       = [ ...document.querySelectorAll('.feature') ];
    const texts          = [ ...document.querySelectorAll('[class^="scroll-text"], [class*=" scroll-text"]') ];
    const airpods        = [ ...document.querySelectorAll('.feature__img-airpod') ];
    const particlesVideo = document.querySelector('.feature__particles-video');

    adjustSectionsPositions(airpods, sections, texts);
    hideContents(airpods, particlesVideo, texts);
    scaleUpVideo(particlesVideo);
};


export default preAnimationStyle;

