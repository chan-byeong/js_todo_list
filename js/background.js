const images = ["0.jpg", "1.jpg", "2.jpg"];
const imgTag = document.createElement("img");

const randImage = `${Math.floor(Math.random() * images.length)}.jpg`;

imgTag.src = `img/${randImage}`;

document.body.style.background = `url(${imgTag.src})`;
document.body.style.background = "cover";
