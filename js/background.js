const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
const imgTag = document.createElement("img");

const randImage = `${Math.floor(Math.random() * images.length)}.jpeg`;

imgTag.src = `img/${randImage}`;

document.body.style.background = `url(${imgTag.src})`;
document.body.style.background = "cover";
