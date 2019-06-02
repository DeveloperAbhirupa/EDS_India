const items = document.querySelectorAll('.flex-gallery__item');

items.forEach(item => item.addEventListener('mouseover', showItem));
items.forEach(item => item.addEventListener('transitionend', activeItem));

function showItem(e) {
  if (this.classList.contains('active')) {
    return false;
  }
  items.forEach(item => item.classList.remove('active'));
  this.classList.toggle('active');
};

function activeItem(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('visible');
  }
};