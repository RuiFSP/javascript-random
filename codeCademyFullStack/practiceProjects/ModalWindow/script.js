'use strict';

//selectores
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

//functions
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//event listeners
for (let i = 0; i < btnOpenModel.length; i++)
  btnOpenModel[i].addEventListener('click', openModal); //i don´t have to use {} when it only one line of come , similar to if

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  console.log(e);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
