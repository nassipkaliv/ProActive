const buttons = document.querySelectorAll('.choose-button');
const images = document.querySelectorAll('.choose-image img');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const target = this.getAttribute('data-target');

    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button
    this.classList.add('active');

    // Hide all images
    images.forEach(img => img.classList.add('d-none'));

    // Show the target image
    const targetImage = document.querySelector(`.${target}`);
    if (targetImage) {
      targetImage.classList.remove('d-none');
    }
  });
});

const prevButton = document.querySelector('.controllers .controller[src="assets/img/prev.png"]');
const nextButton = document.querySelector('.controllers .controller[src="assets/img/next.png"]');
const pagination = document.querySelector('.choose-pagination .o1');

let currentPage = 1; // Текущая страница

prevButton.addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextButton.addEventListener('click', function() {
  if (currentPage < 2) {
    currentPage++;
    updatePagination();
  }
});

function updatePagination() {
  pagination.textContent = currentPage.toString().padStart(2, '0');
}

const swiper = new Swiper('.example-Swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function toggleIcon() {
  var plusIcon = document.querySelector('.svg-plus');
  var minusIcon = document.querySelector('.svg-minus');
  
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

