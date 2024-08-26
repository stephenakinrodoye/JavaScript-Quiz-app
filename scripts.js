// variables
const startBtn = document.querySelector('.start-btn');
const infoBox = document.querySelector('.info-box');
const exitBtn = infoBox.querySelector('.buttons .quit');
const continueBtn = document.querySelector('.buttons .restart');

//if start quiz button is clicked
startBtn.addEventListener('click', () => {
  infoBox.classList.add('active-info'); //display info box  
})

//if exit button is clicked
exitBtn.addEventListener('click', () => {
  infoBox.classList.remove('active-info'); //hide info box

  console.log(exitBtn);
  console.log(infoBox);
})
