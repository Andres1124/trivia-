//@ts-check
import { Question } from "./Question.js";

export class Quiz {
  score = 0;
  questionIndex = 0;

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];
  }

  isEnded(end) {
    if (this.questions.length === this.questionIndex){
      return true;
    }

    if(end === 'finish'){
      return true;
    }

    if (end === 'retired'){
      return true;
    }
  }

  guess(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
      this.questionIndex++;
      return true;
    }else{
      return false;
    }
  }
}
