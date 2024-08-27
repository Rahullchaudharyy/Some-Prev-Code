const options = document.querySelectorAll('.ri-arrow-down-s-line');
options.forEach(option => {
    option.addEventListener('click', function () {
        this.classList.toggle('clicked');
    });
});

const TXTS = document.querySelectorAll('.TEXTS');
TXTS.forEach(TXT => {
    TXT.addEventListener('click', function () {
    this.classList.toggle('txt-clicked');
        console.log('CLICKED');
    });
});