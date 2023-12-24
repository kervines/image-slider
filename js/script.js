const imageSlide = document.querySelector('.slides');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

next.addEventListener('click', nextImage);
previous.addEventListener('click', previousImage);
setInterval(nextImage, 5000);

const amountImage = 5; //quantidade de imagens do slide
const width = imageSlide.clientWidth / amountImage;
let count = 0;
function nextImage() {
  count += width;
  imageSlide.style.transform = `translateX(${-count}px)`;
  if (count > width * 4) {
    count = 0;
    imageSlide.style.transform = `translateX(${count}px)`;
  }
}

function previousImage() {
  if (count === 0) {
    count = width * 5;
    imageSlide.style.transform = `translateX(${count}px)`;
  }
  if (count > 0) {
    count -= width;
    imageSlide.style.transform = `translateX(${-count}px)`;
  }
}
