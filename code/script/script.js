class QuizAPI {
    static loadQuestions() {
      return fetch('./data/data.json')
        .then(response => response.json())
        .then(data => data.questions);
    }
}

class InputQuestion {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer.toLowerCase() === this.answer.toLowerCase();
    }
  
    render() {
      const div = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'text';
  
      label.textContent = this.question;
      input.placeholder = 'Type your answer here';
  
      div.appendChild(label);
      div.appendChild(input);
  
      return div;
    }
}

class MultipleChoiceQuestion {
    constructor(question, options, answer) {
      this.question = question;
      this.options = options;
      this.answer = answer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.answer;
    }
  
    render() {
      const div = document.createElement('div');
      const label = document.createElement('label');
      label.textContent = this.question;
      div.appendChild(label);
  
      this.options.forEach((option, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;
        div.appendChild(input);
        div.appendChild(optionLabel);
      });
  
      return div;
    }
}

  
class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.container = document.getElementById('container');
      this.questionContainer = document.getElementById('question-container');
      this.questionText = document.getElementById('question-text');
      this.choicesContainer = document.getElementById('choices-container');
      this.feedbackContainer = document.getElementById('feedback-container');
      this.scoreContainer = document.getElementById('score-container');
      this.backButton = document.getElementById('back-button');
      this.continueButton = document.getElementById('continue-button');
      this.loadQuestions();
    }
  
    loadQuestions() {
      QuizAPI.loadQuestions().then(questions => {
        this.questions = questions;
        this.renderQuestion();
      });
    }
  
    renderQuestion() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      const question = new currentQuestion.type(currentQuestion);
      this.questionText.textContent = question.text;
      this.choicesContainer.innerHTML = '';
      this.feedbackContainer.innerHTML = '';
      this.backButton.disabled = this.currentQuestionIndex === 0;
      this.continueButton.disabled = !question.isValid();
      question.renderChoices(this.choicesContainer);
    }
  
    handleContinueButtonClick() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      const question = new currentQuestion.type(currentQuestion);
      if (question.checkAnswer()) {
        this.score++;
      }
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex === this.questions.length) {
        this.displayScore();
      } else {
        this.renderQuestion();
      }
    }
  
    handleBackButtonClick() {
      this.currentQuestionIndex--;
      this.renderQuestion();
    }
  
    displayScore() {
      this.container.innerHTML = '';
      const scoreMessage = `You got ${this.score} out of ${this.questions.length} questions correct!`;
      this.scoreContainer.textContent = scoreMessage;
      this.container.appendChild(this.scoreContainer);
    }
  }
  
  class App {
    constructor() {
      this.quiz = new Quiz();
    }
    
    start() {
      this.quiz.renderQuestion();
      this.quiz.backButton.addEventListener('click', () => {
        this.quiz.handleBackButtonClick();
      });
      this.quiz.continueButton.addEventListener('click', () => {
        this.quiz.handleContinueButtonClick();
      });
    }
}
  
  const app = new App();
  app.start();
    