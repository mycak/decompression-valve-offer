
// Changing opacity of Navigation
const changeNav = () => {
    const slideInAt = window.scrollY;
    if (slideInAt > 100) {
        base.nav.classList.add('scrolled')
    } else {
        base.nav.classList.remove('scrolled')
    }
}

// Adding Shadow to navigation dependent to section




const changeHash = (e) => {
  base.sections.forEach(section => {
    const slideInAt = window.scrollY + window.innerHeight/3;
    const topSection = section.offsetTop;
    const bottomSection = section.offsetTop + section.offsetHeight;
    
    if (topSection < slideInAt && slideInAt < bottomSection ) {
      window.location.hash = section.id;
    }
  })


  //adding shadow
  const divs = document.querySelectorAll('.navbar__shadow > a');

  divs.forEach(div => {
    if (div.href === document.URL) {
      div.classList.add('active--shadow');
    } else {
      div.classList.remove('active--shadow');
    }
  })
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
const goToHash4 = () => {
  document.getElementById('jakdobrac').scrollIntoView({
    behavior: 'smooth'
  });
}




const base = {
    sections: document.querySelectorAll('section'),
    nav: document.querySelector('.navbar'),
    arrow: document.querySelector('.arrow'),
    arrow2: document.querySelector('.arrow--2'),
    arrow4: document.querySelector('.arrow--4'),
    imgBoxes: document.querySelectorAll('.product__container'),
    arrowBoxes: document.querySelectorAll('.product__descp'),
    backArrows: document.querySelectorAll('arrow__container--back')
};

base.arrowBoxes.forEach(box => box.addEventListener('click', e => {
  if(e.target.parentNode.className === 'arrow__container--back' ) {
    goToHash2();
  }
}))

base.imgBoxes.forEach(box => box.addEventListener('click', e => {
  e.target.parentNode
      if (e.target.dataset.id) {
      document.getElementById(`${e.target.dataset.id}`).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      document.getElementById(`${e.target.parentNode.dataset.id}`).scrollIntoView({
        behavior: 'smooth'
      });
    }
  })
)


function debounce(func, wait = 15, immediate = true) {
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
  window.addEventListener('scroll', debounce(changeHash));

  base.arrow.addEventListener('click', goToHash);
  base.arrow2.addEventListener('click', goToHash2);
  base.arrow4.addEventListener('click', goToHash4);
  //base.arrow3.addEventListener('click', goToHash3);


 //test