'use strict';

const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const rateBtn = document.querySelectorAll('.btn');
const rateNumber = document.querySelector('.rate-number');
const btnSumbit = document.querySelector('.btn-sumbit');
const btnReset = document.querySelector('.btn-reset');



for(let i = 0; i < rateBtn.length;i++){
  rateBtn[i].addEventListener('click', () =>{
    rateNumber.textContent = rateBtn[i].textContent;

  })
}
btnSumbit.addEventListener('click', () =>{

  if(rateNumber.textContent === ''){
    return 0;
  }
  thankYouState.classList.remove('hidden');
  ratingState.classList.add('hidden');
})

btnReset.addEventListener('click', () =>{
  rateNumber.textContent = '';
  thankYouState.classList.add('hidden');
  ratingState.classList.remove('hidden');
})
