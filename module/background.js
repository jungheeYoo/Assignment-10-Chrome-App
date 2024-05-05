const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector('.background');
bgImage.style.backgroundImage = `url('img/${randomImage}')`;
