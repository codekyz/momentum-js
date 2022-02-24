const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage})`;
