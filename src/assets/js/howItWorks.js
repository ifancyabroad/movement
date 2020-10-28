// Import logo images here
import ScreenshotPlaceholder1 from '../images/screenshot_template.png';
import ScreenshotPlaceholder2 from '../images/screenshot_template2.png';
import ScreenshotPlaceholder3 from '../images/screenshot_template3.png';

$(function () {
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

    setScreenshot(pointButton1, ScreenshotPlaceholder1)
});