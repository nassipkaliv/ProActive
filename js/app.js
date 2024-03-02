document.addEventListener('DOMContentLoaded', function () {
  const proactiveButton = document.querySelector('.electr.mob .choose-button[data-target="proactive-img"]');
  const proactivePlusButton = document.querySelector('.electr.mob .choose-button[data-target="proactiveplus-img"]');
  const proactiveImg = document.querySelector('.electr.mob .proactive-img');
  const proactivePlusImg = document.querySelector('.electr.mob .proactiveplus-img');
  const prevButton = document.querySelector('.electr.mob .controllers .controller[src="assets/img/prev.png"]');
  const nextButton = document.querySelector('.electr.mob .controllers .controller[src="assets/img/next.png"]');
  const o1Element = document.querySelector('.electr.mob .o1');

  function activateProactive() {
    proactiveImg.classList.remove('d-none');
    proactivePlusImg.classList.add('d-none');
    proactiveButton.classList.add('active');
    proactivePlusButton.classList.remove('active');
    o1Element.textContent = '01';
  }

  function activateProactivePlus() {
    proactiveImg.classList.add('d-none');
    proactivePlusImg.classList.remove('d-none');
    proactiveButton.classList.remove('active');
    proactivePlusButton.classList.add('active');
    o1Element.textContent = '02';
  }

  proactiveButton.addEventListener('click', function() {
    activateProactive();
  });

  proactivePlusButton.addEventListener('click', function() {
    activateProactivePlus();
  });

  prevButton.addEventListener('click', function() {
    activateProactive();
  });

  nextButton.addEventListener('click', function() {
    activateProactivePlus();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.controllers .controller[src="assets/img/prev.png"]');
  const nextButton = document.querySelector('.controllers .controller[src="assets/img/next.png"]');
  const o1Element = document.querySelector('.o1');
  const proactiveButton = document.querySelector('.choose-button[data-target="proactive-img"]');
  const proactivePlusButton = document.querySelector('.choose-button[data-target="proactiveplus-img"]');
  const proactiveImg = document.querySelector('.proactive-img');
  const proactivePlusImg = document.querySelector('.proactiveplus-img');

  // Обработчик события для кнопки "Назад"
  prevButton.addEventListener('click', function() {
    proactiveImg.classList.remove('d-none');
    proactivePlusImg.classList.add('d-none');
    proactiveButton.classList.add('active');
    proactivePlusButton.classList.remove('active');
    o1Element.textContent = '01';
  });

  // Обработчик события для кнопки "Вперед"
  nextButton.addEventListener('click', function() {
    proactiveImg.classList.add('d-none');
    proactivePlusImg.classList.remove('d-none');
    proactiveButton.classList.remove('active');
    proactivePlusButton.classList.add('active');
    o1Element.textContent = '02';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const proactiveButton = document.querySelector('.choose-button[data-target="proactive-img"]');
  const proactivePlusButton = document.querySelector('.choose-button[data-target="proactiveplus-img"]');
  const proactiveImg = document.querySelector('.proactive-img');
  const proactivePlusImg = document.querySelector('.proactiveplus-img');

  proactiveButton.addEventListener('click', function() {
    proactiveImg.classList.remove('d-none');
    proactivePlusImg.classList.add('d-none');
    proactiveButton.classList.add('active');
    proactivePlusButton.classList.remove('active');
  });

  proactivePlusButton.addEventListener('click', function() {
    proactiveImg.classList.add('d-none');
    proactivePlusImg.classList.remove('d-none');
    proactiveButton.classList.remove('active');
    proactivePlusButton.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const proactiveButton = document.querySelector('.choose-button[data-target="proactive-img"]');
  const proactivePlusButton = document.querySelector('.choose-button[data-target="proactiveplus-img"]');
  const proactiveImg = document.querySelector('.proactive-img');
  const proactivePlusImg = document.querySelector('.proactiveplus-img');
  const prevButton = document.querySelector('.controllers .controller[src="assets/img/prev.png"]');
  const nextButton = document.querySelector('.controllers .controller[src="assets/img/next.png"]');
  const o1Element = document.querySelector('.o1');

  function activateProactive() {
    proactiveImg.classList.remove('d-none');
    proactivePlusImg.classList.add('d-none');
    proactiveButton.classList.add('active');
    proactivePlusButton.classList.remove('active');
    o1Element.textContent = '01';
  }

  function activateProactivePlus() {
    proactiveImg.classList.add('d-none');
    proactivePlusImg.classList.remove('d-none');
    proactiveButton.classList.remove('active');
    proactivePlusButton.classList.add('active');
    o1Element.textContent = '02';
  }

  proactiveButton.addEventListener('click', function() {
    activateProactive();
  });

  proactivePlusButton.addEventListener('click', function() {
    activateProactivePlus();
  });

  prevButton.addEventListener('click', function() {
    activateProactive();
  });

  nextButton.addEventListener('click', function() {
    activateProactivePlus();
  });
});

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

var mySwiper = new Swiper('.mobSwiper', {
  slidesPerView: 1.2,
  spaceBetween: 30,
  loop: true,
});

var taksSwiper = new Swiper('.taskSwiper', {
  slidesPerView: 2.1,
  spaceBetween: 40,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var taksSwiper = new Swiper('.descriptionSwiper', {
  slidesPerView: 3,
  spaceBetween: 60,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var thanksSwiper = new Swiper('.thanksSwiper', {
  slidesPerView: 1.0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(document).ready(function() {
  $('#zayavkaAccept').click(function() {
    $('#zayavkaModal').modal('hide');
    $('#thanksModal').modal('show');
  });
});

$(document).ready(function() {
  $('#letZayavka').click(function() {
    $('#contactModal').modal('hide');
    $('#zayavkaModal').modal('show');
  });
});

$(document).ready(function() {
  $('.opros-input').focus(function() {
    $(this).closest('.opros-block').addClass('active');
  });
  $('.opros-input').blur(function() {
    $(this).closest('.opros-block').removeClass('active');
  });
});


function clearForm() {
  document.getElementById("opros-form").reset();
}

// Event listener for the "Clear Form" link
document.getElementById("clear-form").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default behavior of the link
  clearForm(); // Call the function to clear the form
});



document.addEventListener("DOMContentLoaded", function() {
  // Получаем кнопки, элементы изображений и пагинации
  const proactiveButton = document.querySelector('.choose-button[data-target="proactive-img"]');
  const proactivePlusButton = document.querySelector('.choose-button[data-target="proactiveplus-img"]');
  const o1Element = document.querySelector('.o1');
  const o2Element = document.querySelector('.o2');
  const proactiveImg = document.querySelector('.proactive-img');
  const proactivePlusImg = document.querySelector('.proactiveplus-img');

  // Назначаем обработчики событий для кнопок
  proactiveButton.addEventListener('click', function() {
    proactiveImg.classList.remove('d-none');
    proactivePlusImg.classList.add('d-none');
    o1Element.innerText = '01';
    o2Element.innerText = '02';
  });

  proactivePlusButton.addEventListener('click', function() {
    proactiveImg.classList.add('d-none');
    proactivePlusImg.classList.remove('d-none');
    o1Element.innerText = '02';
    o2Element.innerText = '01';
  });

  // Назначаем обработчики событий для pagination
  o1Element.addEventListener('click', function() {
    proactiveImg.classList.remove('d-none');
    proactivePlusImg.classList.add('d-none');
    o1Element.innerText = '01';
    o2Element.innerText = '02';
  });

  o2Element.addEventListener('click', function() {
    proactiveImg.classList.add('d-none');
    proactivePlusImg.classList.remove('d-none');
    o1Element.innerText = '02';
    o2Element.innerText = '01';
  });
});