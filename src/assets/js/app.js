import LeftArrow from '../images/left-arrow.svg';
import RightArrow from '../images/right-arrow.svg';

$(function () {
    $('.header-slider').slick({
        autoplay: false,
        prevArrow: `<button type="button" class="slick-prev-custom"><img src="${LeftArrow}" alt="Previous slide"></button>`,
        nextArrow: `<button type="button" class="slick-next-custom"><img src="${RightArrow}" alt="Next slide"></button>`
    });
});