//@ts-check
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";
import { questions } from "./data/questions.js";

// Renderring the page
let end = false;


const renderPage = (quiz, ui, end) => {
  if (quiz.isEnded(end)) {
    ui.showScores(quiz.score, end);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
    ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
      if (!quiz.guess(currenChoice)){
        renderPage(quiz, ui, end = 'finish');
      }else{
        renderPage(quiz, ui);
      }
    });

    console.log(quiz.questionIndex)

    const buttonRetired = document.getElementById('retired');

    if (quiz.questionIndex === 5 || quiz.questionIndex === 10 || quiz.questionIndex === 15 || quiz.questionIndex === 20 || quiz.questionIndex === 25){
      buttonRetired.className = "show button"
    }else{
      buttonRetired.className = "hidden"
    }

    buttonRetired.addEventListener('click', () => {
      renderPage(quiz, ui, end = 'retired');
    })
  }
};

function main() {
  console.log(questions);
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
