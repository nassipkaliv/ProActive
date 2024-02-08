document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.choose-button');

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const target = this.getAttribute('data-target');
          const images = document.querySelectorAll('.choose-image img');

          images.forEach(img => {
              if (img.classList.contains(target)) {
                  img.classList.remove('d-none');
                  img.classList.add('active');
              } else {
                  img.classList.add('d-none');
                  img.classList.remove('active');
              }
          });

          buttons.forEach(btn => {
              btn.classList.remove('active');
          });

          this.classList.add('active');
      });
  });
});

const prevButtons = document.querySelectorAll('.controllers .controller[src="assets/img/prev.png"]');
const nextButtons = document.querySelectorAll('.controllers .controller[src="assets/img/next.png"]');
const paginations = document.querySelectorAll('.choose-pagination .o1');

let currentPage = [1, 1]; // Текущая страница для каждого блока

prevButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    if (currentPage[index] > 1) {
      currentPage[index]--;
      updatePagination(index);
    }
  });
});

nextButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    if (currentPage[index] < 2) {
      currentPage[index]++;
      updatePagination(index);
    }
  });
});

function updatePagination(index) {
  paginations[index].textContent = currentPage[index].toString().padStart(2, '0');
}


const swiper = new Swiper('.example-Swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener('DOMContentLoaded', function() {
  var moreFaqCollapse = document.getElementById('moreFaq');
  moreFaqCollapse.addEventListener('shown.bs.collapse', function() {
    var questionBtn = document.getElementById('moreFaqButton');
    questionBtn.style.display = 'none';
  });
});

function toggleIcon1() {
  var plusIcon = document.getElementById('plus-1');
  var minusIcon = document.getElementById('minus-1');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }

  var faqBlock = document.getElementById('faq-block1');
  faqBlock.classList.toggle('open');
}



function toggleIcon2() {
  var plusIcon = document.getElementById('plus-2');
  var minusIcon = document.getElementById('minus-2');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block2');
  faqBlock.classList.toggle('open');
}

function toggleIcon3() {
  var plusIcon = document.getElementById('plus-3');
  var minusIcon = document.getElementById('minus-3');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block3');
  faqBlock.classList.toggle('open');
}

function toggleIcon4() {
  var plusIcon = document.getElementById('plus-4');
  var minusIcon = document.getElementById('minus-4');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block4');
  faqBlock.classList.toggle('open');
}

function toggleIcon5() {
  var plusIcon = document.getElementById('plus-5');
  var minusIcon = document.getElementById('minus-5');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block5');
  faqBlock.classList.toggle('open');
}

function toggleIcon6() {
  var plusIcon = document.getElementById('plus-6');
  var minusIcon = document.getElementById('minus-6');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block6');
  faqBlock.classList.toggle('open');
}

function toggleIcon7() {
  var plusIcon = document.getElementById('plus-7');
  var minusIcon = document.getElementById('minus-7');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block7');
  faqBlock.classList.toggle('open');
}

function toggleIcon8() {
  var plusIcon = document.getElementById('plus-8');
  var minusIcon = document.getElementById('minus-8');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block8');
  faqBlock.classList.toggle('open');
}

function toggleIcon9() {
  var plusIcon = document.getElementById('plus-9');
  var minusIcon = document.getElementById('minus-9');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block9');
  faqBlock.classList.toggle('open');
}

function toggleIcon10() {
  var plusIcon = document.getElementById('plus-10');
  var minusIcon = document.getElementById('minus-10');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block10');
  faqBlock.classList.toggle('open');
}

function toggleIcon11() {
  var plusIcon = document.getElementById('plus-11');
  var minusIcon = document.getElementById('minus-11');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block11');
  faqBlock.classList.toggle('open');
}

function toggleIcon12() {
  var plusIcon = document.getElementById('plus-12');
  var minusIcon = document.getElementById('minus-12');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block12');
  faqBlock.classList.toggle('open');
}

function toggleIcon13() {
  var plusIcon = document.getElementById('plus-13');
  var minusIcon = document.getElementById('minus-13');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block13');
  faqBlock.classList.toggle('open');
}

function toggleIcon14() {
  var plusIcon = document.getElementById('plus-14');
  var minusIcon = document.getElementById('minus-14');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block14');
  faqBlock.classList.toggle('open');
}

function toggleIcon15() {
  var plusIcon = document.getElementById('plus-15');
  var minusIcon = document.getElementById('minus-15');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block15');
  faqBlock.classList.toggle('open');
}

function toggleIcon16() {
  var plusIcon = document.getElementById('plus-16');
  var minusIcon = document.getElementById('minus-16');
  
  if (plusIcon.style.display === 'none') {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
  } else {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
  }
  var faqBlock = document.getElementById('faq-block16');
  faqBlock.classList.toggle('open');
}














