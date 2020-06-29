const base = {
  divNav: document.querySelectorAll('.navbar__shadow > a'),
  sections: document.querySelectorAll('section'),
  nav: document.querySelector('.navbar'),
  arrow: document.querySelector('.arrow'),
  arrow2: document.querySelector('.arrow--2'),
  arrow4: document.querySelector('.arrow--4'),
  imgBoxes: document.querySelectorAll('.product__container'),
  arrowBoxes: document.querySelectorAll('.product__descp'),
  backArrows: document.querySelectorAll('arrow__container--back'),
  products: document.querySelectorAll('section__container--product')
};


//CHanging Nav


const changeNav = () => {
  const slideInAtNav = window.scrollY;
  if (slideInAtNav > 100) {
      base.nav.classList.add('scrolled')
  } else {
      base.nav.classList.remove('scrolled')
  }

  // base.sections.forEach(section => {
  //   const slideInAt = window.scrollY + window.innerHeight/3;
  //   const topSection = section.offsetTop;
  //   const bottomSection = section.offsetTop + section.offsetHeight;
    
  //   if (topSection < slideInAt && slideInAt < bottomSection ) {
  //     window.location.hash = section.id;
  //   }
  // })


  // //adding shadow

  // base.divNav.forEach(div => {
  //   if (div.href === document.URL) {
  //     div.classList.add('active--shadow');
  //   } else {
  //     div.classList.remove('active--shadow');
  //   }
  // })
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

base.arrowBoxes.forEach(box => box.addEventListener('click', e => {
  if(e.target.parentNode.className === 'arrow__container--back' ) {
    const product = e.target.closest('.section__container--product')
    product.classList.remove('product--active')
  }
}))

base.imgBoxes.forEach(box => box.addEventListener('click', e => {
   if (e.target.dataset.id) {
      document.getElementById(`${e.target.dataset.id}`).classList.add('product--active')
    } else {
      document.getElementById(`${e.target.parentNode.dataset.id}`).classList.add('product--active')
    }
  })
)


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
  //base.arrow4.addEventListener('click', goToHash4);
  //base.arrow3.addEventListener('click', goToHash3);


 //test