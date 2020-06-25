

const changeNav = () => {
    const slideInAt = window.scrollY;
    if (slideInAt > 100) {
        base.nav.classList.add('scrolled')
    } else {
        base.nav.classList.remove('scrolled')
    }
}

const goToHash = () => {
  document.getElementById('zawory').scrollIntoView({
    behavior: 'smooth'
  });
}
const goToHash2 = () => {
  document.getElementById('oferta').scrollIntoView({
    behavior: 'smooth'
  });
}
const goToHash3 = () => {
  document.getElementById('kontakt').scrollIntoView({
    behavior: 'smooth'
  });
}


const base = {
    nav: document.querySelector('.navbar'),
    arrow: document.querySelector('.arrow'),
    arrow2: document.querySelector('.arrow--2'),
    arrow3: document.querySelector('.arrow--3')
};

function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.addEventListener('scroll', debounce(changeNav));

  base.arrow.addEventListener('click', goToHash);
  base.arrow2.addEventListener('click', goToHash2);
  base.arrow3.addEventListener('click', goToHash3);