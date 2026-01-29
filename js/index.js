document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const icon = hamburger.querySelector('i');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
});

new Swiper('.testimonial-swiper', {
  slidesPerView: 2,
  spaceBetween: 24,

  loop: true,

  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const currentItem = question.closest('.faq-item');

      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('active');
        }
      });

      currentItem.classList.toggle('active');
    });
  });
});

$(document).ready(function () {
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-zoom-in',
    removalDelay: 300,
    closeBtnInside: true,
  });
});
