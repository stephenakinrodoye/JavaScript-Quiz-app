// variables
const startBtn = document.querySelector('.start-btn');
const infoBox = document.querySelector('.info-box');
const exitBtn = infoBox.querySelector('.buttons .quit');
const continueBtn = document.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz-box');

const optionList = document.querySelector('.option-list');


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

  showQuestions(0);
  queCounter(1);
});

//get questions from array

const nextQue = document.querySelector('.next-btn');

let index = 0;
let queNumb = 1;

function showQuestions(index) {
  const queText = document.querySelector('.que-text');

  let queTag = '<span>'+ questions[index].number + '. ' + questions[index].question + '<span>';
  let options = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
               + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
               + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
               + '<div class="option"><span>' + questions[index].options[3] + '</span></div>'
  queText.innerHTML = queTag;
  optionList.innerHTML = options;

  const option = optionList.querySelectorAll('.option');

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
};

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
  let userAns = answer.textContent;
  let correctAns = questions[index].answer;
  let allOptions = optionList.children.length;
  console.log(userAns);
  console.log(correctAns);

  if (userAns === correctAns) {
    answer.classList.add('correct');
    console.log('Answer is correct');
    answer.insertAdjacentHTML('beforeend', tickIcon);
  } else {
    answer.classList.add('incorrect');
    console.log('Answer is wrong');
    answer.insertAdjacentHTML('beforeend', crossIcon);

    // if answer is incorrect automatically select the correct answer
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent === correctAns) {
        optionList.children[i].setAttribute('class', 'option correct');

      }
    }
  }

  //disable other options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add('disabled');
  }
}

const resultBox = document.querySelector('.result-box');

nextQue.addEventListener('click', () => {
  if (index < questions.length - 1) {
    index++;
    queNumb++;
    showQuestions(index);
    queCounter(queNumb);
  } else {
    quizBox.classList.remove('activeQuiz'); //close quiz box
    resultBox.classList.add('activeResult'); //display result box
  }  
})

const replayBtn = resultBox.querySelector('#replay-btn');
const quitBtn = resultBox.querySelector('#quit-btn');

replayBtn.addEventListener('click', () => {
  showQuestions(index);
});

quitBtn.addEventListener('click', () => {
  resultBox.classList.remove('activeResult'); //hide result box
});

function queCounter(index) {
  const bottomQuesCounter = quizBox.querySelector('.total-que');
  let totalQuesCount = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
  bottomQuesCounter.innerHTML = totalQuesCount;
}