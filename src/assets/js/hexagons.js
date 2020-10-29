// Import logo images here
import LogoPlaceholder from '../images/logo-placeholder.png';

$(function () {
    // Edit logos and text in below array
    const rows = [
        [
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' }
        ],
        [
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' }
        ],
        [
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' }
        ],
        [
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' }
        ],
    ];

    const rowsMobile = [
        [
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' }
        ],
        [
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' }
        ],
        [
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' },
            { image: LogoPlaceholder, alt: 'Company Logo', text: '999 Miles' }
        ]
    ];

    const createRow = () => {
        const row = document.createElement('div');
        row.classList = 'd-flex justify-content-center';
        return row;
    }

    const createHexagon = (image, alt, text) => {
        const hexagonContainer = document.createElement('div');
        hexagonContainer.classList = 'position-relative m-1';

        const hexagon = document.createElement('div');
        hexagon.classList = 'hexagon';

        const content = document.createElement('div');
        content.classList = 'hexagon-content';

        const logo = document.createElement('img');
        logo.classList = 'img-fluid mb-1';
        logo.src = image;
        logo.alt = alt;

        const textField = document.createElement('small');
        textField.classList = 'text-nowrap';
        textField.textContent = text;

        content.appendChild(logo);
        content.appendChild(textField);

        hexagonContainer.appendChild(hexagon);
        hexagonContainer.appendChild(content);
        return hexagonContainer;
    }

    const hexagonPyramid = document.getElementById('hexagon-pyramid');
    const hexagonPyramidMobile = document.getElementById('hexagon-pyramid-mobile');

    rows.forEach(row => {
        const rowElement = createRow();
        rowElement.classList.add('hexagon-row-adjust');
        hexagonPyramid.appendChild(rowElement);
        row.forEach(hexagon => {
            const hexagonElement = createHexagon(hexagon.image, hexagon.alt, hexagon.text);
            rowElement.appendChild(hexagonElement);
        });
    });

    rowsMobile.forEach(row => {
        const rowElement = createRow();
        hexagonPyramidMobile.appendChild(rowElement);
        row.forEach(hexagon => {
            const hexagonElement = createHexagon(hexagon.image, hexagon.alt, hexagon.text);
            rowElement.appendChild(hexagonElement);
        });
    });
});