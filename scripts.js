// variables
const startBtn = document.querySelector('.start-btn');
const infoBox = document.querySelector('.info-box');
const exitBtn = infoBox.querySelector('.buttons .quit');
const continueBtn = document.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz-box');

//if start quiz button is clicked
startBtn.addEventListener('click', () => {
  infoBox.classList.add('activeInfo'); //display info box  
})

//if exit button is clicked
exitBtn.addEventListener('click', () => {
  infoBox.classList.remove('activeInfo'); //hide info box
})

//if continue button is clicked
continueBtn.addEventListener('click', () => {
  infoBox.classList.remove('activeInfo'); //hide info box
  quizBox.classList.add('activeQuiz'); //show quiz box

  showQuestions(index);
});

//get questions from array

const nextQue = document.querySelector('.next-btn');

let index = 0;

function showQuestions(index) {
  const queText = document.querySelector('.que-text');
  const optionList = quizBox.querySelector('.option-list');

  let queTag = '<span>'+ questions[index].number + '. ' + questions[index].question + '<span>';
  let options = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
               + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
               + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
               + '<div class="option"><span>' + questions[index].options[3] + '</span></div>'
  queText.innerHTML = queTag;
  optionList.innerHTML = options;
};

const resultBox = document.querySelector('.result-box');

nextQue.addEventListener('click', () => {
  if (index < questions.length - 1) {
    index++;
    showQuestions(index);
  } else {
    quizBox.classList.remove('activeQuiz'); //close quiz box
    resultBox.classList.add('activeResult'); //display result box
  }
  
})

