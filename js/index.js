

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


const base = {
    nav: document.querySelector('.navbar'),
    arrow: document.querySelector('.arrow')
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

  base.arrow.addEventListener('click', goToHash)
  document.getElementById('goToZawory').addEventListener('click', goToHash);