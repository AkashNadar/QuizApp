
import { questionDB } from './questions.js'
console.log(questionDB);


// console.log("Hello");

const startBtn = document.querySelector('#start_btn');
const closeBtn = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');
const appIntro = document.querySelector('#app_intro');
const modalClose = document.querySelector('#modal-close_btn');

startBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});



const questGround = document.querySelector('#questions');

// var questiondiv = document.createElement('div');
// var question = document.createElement('h1');

// var options = document.createElement('div');

// var option = document.createElement('p');

// const label = document.getElementsByTagName("label");
// label[0].innerHTML = 'Hello';

const question = document.querySelector('#question');
const questionNo = document.querySelector('#questionNo');
const label = document.getElementsByTagName("label");
const optionsEle = document.getElementsByName('ans');
var questionDb = [];
let score = 0;
let num = 0;
const submit = document.querySelector('#submit');
const next = document.querySelector('#next');

const scoreCard = document.querySelector('#score-card');
const quizCard = document.querySelector('#quiz-card');
const scoreText = document.querySelector('#score');

let loadQuestion = (num) => {
    console.log(questionDB[num]);
    question.innerHTML = questionDB[num].question;
    questionNo.innerHTML = `Question${questionDB[num].id}`
    label[0].innerHTML = questionDB[num].op1;
    label[1].innerHTML = questionDB[num].op2;
    label[2].innerHTML = questionDB[num].op3;
    label[3].innerHTML = questionDB[num].op4;

}

let getCheckedAns = ()=> {
    for (let i = 0; i < 4; i++) {
        if(optionsEle[i].checked){
            return label[i].innerHTML;
        }
        
    }
    return -1;
}

next.addEventListener('click', () =>{
    
    if(num < questionDB.length){
        // console.log(getCheckedAns());
        // console.log(questionDB[num].ans);
        if (getCheckedAns() == questionDB[num].ans) {
            console.log("Write ans");
            score++;
        }

        num++;
        loadQuestion(num);
    }

    if(num == questionDB.length -1 ){
        next.style.display = 'none';
        submit.style.display = 'block';
    }
});

submit.addEventListener('click', () =>{

    if (getCheckedAns() == questionDB[num].ans) {
        console.log("Write ans");
        score++;
    }

    let percent = (score/questionDB.length)*100 ;
    scoreText.innerHTML = `Your score: ${percent.toFixed(2)}%`;
    quizCard.style.display = 'none';
    scoreCard.style.display = 'inline';
});


// Modal Start
const modalStart = document.querySelector('#modal-start_btn');
const questionCont = document.querySelector('#main-card');


modalStart.addEventListener('click', () => {
    appIntro.style.display = 'none';
    modal.style.display = 'none';
    questionCont.style.display = 'inline';
    loadQuestion(num);
    
    quizCard.style.display = 'inline';  
});
