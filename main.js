let start = document.getElementById("start");
let result = document.getElementById("result");
let main = document.getElementById("main");

let current = 0;
let count = 0;
let questions = [
  {
    question: "2+2",
    correct: 4,
    answers: [4, 5, 10, 12, 33],
  },
  {
    question: "22+2",
    correct: 4,
    answers: [4, 5, 10,24, 33],
  },
];

function startProgramm() {
  start.classList.add("close");
  main.classList.remove("close");
  result.classList.add("close");
  generate()
}


start.addEventListener("click", startProgramm);

function generate() {
    let question = questions[current].question;
    main.innerHTML = `<h2 class="title">${question}</h2>`;

    let answers = questions[current].answers;
    let block = "";
    for (let i of answers) {
        block += `<button class="btn" onclick="check('${i}')">${i}</button>`;
    }

    main.innerHTML += `<nav>${block}</nav>`;
}

function check(answer) {
    correct = questions[current].correct;
    if (current == answer){
        count += 1;
    }
    current += 1;
    generate();
}