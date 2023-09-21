const cards = document.querySelector('#cards');
const dataImg = [
    { firstImg: 'http://surl.li/ljbbk', secondImg: 'http://surl.li/ljbbs', alt: 'imgName' },
    { firstImg: 'http://surl.li/ljbbk', secondImg: 'http://surl.li/ljbbs', alt: 'imgName' },
    { firstImg: 'http://surl.li/ljbbk', secondImg: 'http://surl.li/ljbbs', alt: 'imgName' },
]

dataImg.forEach(element => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundImage = `url(${element.firstImg})`;

    card.addEventListener('mouseenter', function () {
        card.style.backgroundImage = `url(${element.secondImg})`;
    });

    card.addEventListener('mouseleave', function () {
        card.style.backgroundImage = `url(${element.firstImg})`;
    });

    cards.append(card);
});
