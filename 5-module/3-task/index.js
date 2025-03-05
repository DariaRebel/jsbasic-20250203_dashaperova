function initCarousel() {
  // ваш код...
  let count = 0;
  let position = 0;
  let elem = document.querySelector(".carousel__inner");
  let width = elem.offsetWidth;
  let rightnow = document.querySelector('.carousel__arrow.carousel__arrow_right');
  let leftnow =document.querySelector('.carousel__arrow.carousel__arrow_left');
  if (count == 0) leftnow.style.display = 'none';

  rightnow.onclick = function() {
    if (count < 3) {
      count += 1;
      leftnow.style.display = '';
      position -= width;
      elem.style.transform = `translateX(${position}px)`;
      if (count == 3) rightnow.style.display = 'none';
    }
  }

    leftnow.onclick = function() {
      if (count > 0 ) {
        count -= 1;
        rightnow.style.display = '';
        position += width;
        elem.style.transform = `translateX(${position}px)`;
        if (count == 0) leftnow.style.display = 'none';
      }
    }
}
