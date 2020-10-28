// Import logo images here
import ScreenshotPlaceholder1 from '../images/screenshot_template.png';
import ScreenshotPlaceholder2 from '../images/screenshot_template2.png';
import ScreenshotPlaceholder3 from '../images/screenshot_template3.png';

$(function () {
    // Desktop settings
    let activeScreenshot;

    const iphoneSmallImage = document.getElementById('iphone-small-screenshot');
    const iphoneLargeImage = document.getElementById('iphone-large-screenshot');

    const pointButtons = document.querySelectorAll('.how-it-works-btn');
    const pointButton1 = document.getElementById('point-1');
    const pointButton2 = document.getElementById('point-2');
    const pointButton3 = document.getElementById('point-3');

    const setScreenshot = (element, image) => {
        if (activeScreenshot !== image) {
            setActiveButton(element);
            activeScreenshot = image;
            iphoneSmallImage.style.backgroundImage = `url(${image})`;
            iphoneLargeImage.style.backgroundImage = `url(${image})`;
        }
    }

    const setActiveButton = (button) => {
        pointButtons.forEach(element => element.classList.remove('active'));
        button.classList.add('active');
    }

    pointButton1.addEventListener('click', (e) => setScreenshot(pointButton1, ScreenshotPlaceholder1));
    pointButton2.addEventListener('click', (e) => setScreenshot(pointButton2, ScreenshotPlaceholder2));
    pointButton3.addEventListener('click', (e) => setScreenshot(pointButton3, ScreenshotPlaceholder3));

    setScreenshot(pointButton1, ScreenshotPlaceholder1);

    // Mobile settings
    let activeIndex = 0;

    const iphoneMobileImage = document.getElementById('iphone-mobile-screenshot');

    const mobileInforBlocks = document.querySelectorAll('.how-it-works-block');
    const pointMobile1 = document.getElementById('point-1-mobile');
    const pointMobile2 = document.getElementById('point-2-mobile');
    const pointMobile3 = document.getElementById('point-3-mobile');

    const leftButtons = document.querySelectorAll('.previous-point');
    const rightButtons = document.querySelectorAll('.next-point');

    const appPoints = [
        { infoElement: pointMobile1, image: ScreenshotPlaceholder1 },
        { infoElement: pointMobile2, image: ScreenshotPlaceholder2 },
        { infoElement: pointMobile3, image: ScreenshotPlaceholder3 }
    ];

    const setActive = () => {
        mobileInforBlocks.forEach(element => element.classList.remove('active'));
        appPoints[activeIndex].infoElement.classList.add('active');
        iphoneMobileImage.style.backgroundImage = `url(${appPoints[activeIndex].image})`;
    }

    const scroll = (dir) => {
        activeIndex += dir;
        if (activeIndex < 0) {
            activeIndex = appPoints.length - 1;
        } else if (activeIndex >= appPoints.length) {
            activeIndex = 0;
        }
        setActive();
    }

    leftButtons.forEach(button => button.addEventListener('click', (e) => scroll(-1)))
    rightButtons.forEach(button => button.addEventListener('click', (e) => scroll(1)))

    setActive();
});