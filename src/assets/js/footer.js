$(function () {
    const footer = document.getElementById('sticky-footer');

    const setBodyPadding = () => {
        const footerHeight = footer.clientHeight;
        document.body.style.paddingBottom = `${footerHeight}px`;
    }

    window.addEventListener('resize', setBodyPadding);
    setBodyPadding();
});