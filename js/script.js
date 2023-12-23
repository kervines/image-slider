const images = document.querySelectorAll('[data-order]');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

images.forEach((img) => {
  console.log(img);
});

next.addEventListener('click', nextImage);
previous.addEventListener('click', previousImage);

let count = 0;
function nextImage() {
  if (count < 4) {
    images[count].style.marginLeft = -600 + 'px';
    count++;
  }
}

function previousImage() {
  if (count > 0) {
    images[count - 1].style.marginLeft = 0 + 'px';
    count--;
  }
}
