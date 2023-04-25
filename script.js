// Start: Quiz Questions
const questions = [
  {
    question: 'How many kids does Angelina Jolie have?',
    a: '8',
    b: '6',
    c: '10',
    d: '5',
    correct: 'b',
  },
  {
    question: 'Who did Kim Kardashian call "the least interesting to look at"?',
    a: 'Kylie',
    b: 'Khloe',
    c: 'Rob',
    d: 'Kourtney',
    correct: 'd',
  },
  {
    question: 'Who played the role of Elvis Presley in the 2022 movie Elvis?',
    a: 'Austin Butler',
    b: 'Timothee Chalamet',
    c: 'Leonardo Dicaprio',
    d: 'Theo James',
    correct: 'a',
  },
  {
    question:
      'Who was exposed for having a secret love child in a diss track by Pusha T in 2018?',
    a: 'Tristan Thompson',
    b: 'Robin Thicke',
    c: 'Drake',
    d: 'Kanye West',
    correct: 'c',
  },
  {
    question: 'Who played Tanya in season one and two of White Lotus?',
    a: 'Zendaya',
    b: 'Jennifer Coolidge',
    c: 'Aubrey Plaza',
    d: 'Connie Britton',
    correct: 'b',
  },
  {
    question:
      'Real Housewives star Taylor Armstrong become a viral meme that depicted her screaming at what animal?',
    a: 'Cat',
    b: 'Turtle',
    c: 'Seal',
    d: 'Frog',
    correct: 'a',
  },
  {
    question:
      'Which beauty Youtuber was infamously exposed in 2019 for selling mouldy lipsticks?',
    a: 'James Charles',
    b: 'Jeffree Star',
    c: 'Kat Von D',
    d: 'Jaclyn Hill',
    correct: 'd',
  },
  {
    question: 'What did Molly Mae and Tommy Fury name their baby girl?',
    a: 'Halo',
    b: 'Nephele',
    c: 'Bambi',
    d: 'Cloud',
    correct: 'c',
  },
  {
    question: 'When did Aaron ask Cady what day was it in Mean Girls?',
    a: 'October 3',
    b: 'March 29',
    c: 'January 1',
    d: 'May 4',
    correct: 'a',
  },
  {
    question: 'Which music video was the first to be played on MTV?',
    a: 'Never Gonna Give You Up',
    b: 'Walking On Sunshine',
    c: 'Video Killed The Radio Star',
    d: 'Highway To Hello',
    correct: 'c',
  },
];
// End: Quiz Questions

console.log(questions.length);

// Bring In Elements From The Dom

const welcome = document.getElementById('welcome');
const welcomeBtn = document.getElementById('welcome-btn');
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question-txt');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const currentQuestionNum = document.getElementById('current-question-number');
const submitBtn = document.getElementById('submit');

const mainTitleHeading = document.getElementById('main-title-heading');
const mainTitleText = "Erin's Pop Culture Quiz";
let textIndex = 1;
let textWritingSpeed = 300;

// Write the heading text
writeHeadingtext();

function writeHeadingtext() {
  // Slice the first letter of the maintitleText into  the mainTitleHeading H1 element
  mainTitleHeading.textContent = mainTitleText.slice(0, textIndex);

  // Increase textIndex counter by 1
  textIndex++;

  // Check to make sure that the textIndex is not greater than the lenght of the string
  if (textIndex > mainTitleText.length) {
    textIndex = 1;
  }

  // repeatly call writeHeadingTextfunction every 300ms
  setTimeout(writeHeadingtext, textWritingSpeed);
}

//console.log(welcome)
// Add Event Listener To Welcome Button To Hide Screen

welcomeBtn.addEventListener('click', () => {
  welcome.classList.add('hide');
});

// Initialise Counter Variables

let current = 0;
let score = 0;

startQuiz();

// Load Quiz By Inserting Question Properties To Corresponding Elements

function startQuiz() {
  // Unselect each input if it is checked
  deselectAnswerInput();

  // Create variable to hold the current question object
  const currentText = questions[current];

  // Insert the current question number into the DOM
  currentQuestionNum.textContent = `Question: ${current + 1} / ${
    questions.length
  }`;

  // Insert The Question Properties Into The Dom
  questionEl.innerText = currentText.question;
  aText.innerText = currentText.a;
  bText.innerText = currentText.b;
  cText.innerText = currentText.c;
  dText.innerText = currentText.d;
}

// Get the user input from the radio btns
function getUserAnswer() {
  let answer;

  answerElements.forEach((answerElement) => {
    // Will be either true or fals
    if (answerElement.checked) {
      // If true make answer equal to the answer elements id
      answer = answerElement.id;
    }
  });

  return answer;
}

// Add Event Listener To Welcome Button To Move To Next Quiz Question

submitBtn.addEventListener('click', () => {
  const answer = getUserAnswer();
  //current++;

  // Check the user answer against the question answer
  if (answer === questions[current].correct) {
    score++;
  }

  current++;

  // Add If/Else Statement To Increment Score & Alert Score When Quiz Finishes

  if (current < questions.length) {
    startQuiz();
  } else {
    alert(`Your score is ${score}`);
  }
});

function deselectAnswerInput() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}
