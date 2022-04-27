export class UI {
  constructor() {}

  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  showScores(score, end) {
    console.log(end)
    let gameOverHTML = '';
    if (end === 'finish'){
       gameOverHTML = `
      <h1>Resultado</h1>
      <h2 id="score">Tu puntaje: ${score}</h2>
      `;
    }else if(end === 'retired'){
       gameOverHTML = `
      <h1>Resultado</h1>
      <h2 id="score">Ganaste: ${score* 1000} pesos!</h2>
      <h2 id="score">Tu puntaje: ${score}</h2>
      `;
    }else{
       gameOverHTML = `
      <h1>Resultados</h1>
      <h2 id="score">¡Ganaste: ${score* 1000} pesos!</h2>
      <h2 id="score">Tu puntaje: ${score}</h2>
      `;
    }

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    let element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
