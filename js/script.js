class QuizAPI {
  url = "";
  data = null;
  constructor(newURL) {
    this.url = newURL;
  }
  async getData() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.data = data["questions"];
    return this.data;
  }
}


class Header{

placeToRenderHeader;

headerElement;
imgElement;
wrapperElement;
button1Element;
button2Element;
button3Element;
link1Element;
link2Element;
icon1Element;
icon2Element;

constructor(placeToRenderHeader) {
    this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    this.imgElement = document.createElement("img");
    this.imgElement.classList = "header__img";

    this.wrapperElement = document.createElement("div");
    this.wrapperElement.classList = "header__wrapper";

    this.button1Element = document.createElement("button");
    this.button1Element.classList = "header__button";

    this.button2Element = document.createElement("button");
    this.button2Element.classList = "header__button";

    this.button3Element = document.createElement("button");
    this.button3Element.classList = "header__button";

    this.link1Element = document.createElement("a");
    this.link1Element.classList = "header__socialMedia";

    this.icon1Element = document.createElement("i");
    this.icon1Element.classList = "fa-brands fa-instagram"

    this.link2Element = document.createElement("a");
    this.link2Element.classList = "header__socialMedia";

    this.icon2Element = document.createElement("i");
    this.icon2Element.classList = "fa-brands fa-facebook"


    this.render();
}

render() {
    this.placeToRenderHeader.appendChild(this.headerElement);

    this.headerElement.appendChild(this.imgElement);
    this.headerElement.appendChild(this.wrapperElement);

    this.wrapperElement.appendChild(this.button1Element);
    this.wrapperElement.appendChild(this.button2Element);
    this.wrapperElement.appendChild(this.button3Element);
    this.wrapperElement.appendChild(this.link1Element);
    this.wrapperElement.appendChild(this.link2Element);

    this.link1Element.appendChild(this.icon1Element);
    this.link2Element.appendChild(this.icon2Element);


    this.renderContent();
}

renderContent() {
    this.imgElement.src = "images/logo.webp";

    this.button1Element.innerText = "The Hogwarts escape";
    this.button2Element.innerText = "Credits";
    this.button3Element.innerText = "disclaimer";
}
};


// Inputquestion class
class InputQuestion {
constructor(parentElement, question, answer, image) {
  this.parentElement = parentElement;
  this.question = question;
  this.answer = answer;
  this.image = image;
  this.render();
}
render() {
  const inputQuestion = document.createElement('article');
  inputQuestion.classList.add('quiz__inputQuestion');

  const inputImage = document.createElement('img');
  inputImage.src = this.image;
  inputImage.classList ='quiz__inputImage';

  const label = document.createElement('label');
  label.textContent = this.question;
  label.classList = 'quiz__inputLabel';

  const input = document.createElement('input');
  input.classList = 'quiz__input';
  input.type = 'text';
  
  inputQuestion.appendChild(inputImage);
  inputQuestion.appendChild(label);
  inputQuestion.appendChild(input);
  this.parentElement.appendChild(inputQuestion);
}
checkAnswer() {
  const userAnswer = this.parentElement.querySelector('input').value;
  return userAnswer === this.answer;
}
}

class MainQuiz {

  
  render() {
    this.placeToRenderQuiz.appendChild(this.mainElement);
    this.mainElement.appendChild(this.section);
    this.section.innerText = "";
  
    const currentQuestionComponent = this.questions[this.currentQuestion];
    currentQuestionComponent.render();
  
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next Question';
    nextButton.classList = 'quiz__Button';
  
    const previousButton = document.createElement('button');
    previousButton.textContent = 'Previous Question';
    previousButton.classList = 'quiz__Button';
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList = "quiz__buttoncontainer";
    buttonContainer.appendChild(previousButton);
    buttonContainer.appendChild(nextButton);
  
    nextButton.addEventListener('click', () => {
      const currentQuestionComponent = this.questions[this.currentQuestion];
  
      const isCorrect = currentQuestionComponent.checkAnswer();
      this.userAnswers.push({ question: currentQuestionComponent.question, isCorrect });
  
      if (isCorrect) {
        this.score++;
      }
      this.currentQuestion++;
      if (this.currentQuestion >= this.questions.length) {
        this.showResult();
      } else {
        this.render();
      }
    });
  
    previousButton.addEventListener('click', () => {
      const currentQuestionComponent = this.questions[this.currentQuestion];
  
      this.userAnswers[this.currentQuestion] = currentQuestionComponent.checkAnswer();
  
      this.currentQuestion--;
      if (this.currentQuestion < 0) {
        this.currentQuestion = 0;
      }
      this.render();
    });
  
    this.mainElement.appendChild(this.section);
    this.section.appendChild(buttonContainer);
  
    // Add the finish button
    if (this.currentQuestion === this.questions.length - 1) {
      const finishButtonEl = document.createElement('button');
      finishButtonEl.textContent = 'Finish';
      finishButtonEl.classList = 'quiz__Button';
      finishButtonEl.addEventListener('click', () => {
        this.showResult();
      });
      buttonContainer.appendChild(finishButtonEl);
    }
    this.buttonContainer = buttonContainer;
  }
  

}



// App class
class App {
  quizApi;
  header;
  mainQuiz;
  footer;

  constructor() {
    this.quizApi = new QuizAPI();
    this.header = new Header('body');
    this.mainQuiz = new MainQuiz('body');
    this.footer = new Footer('body');

    this.render();
  }
  render(){
      this.header.render();
      this.mainQuiz.startQuiz();
      this.footer.render();
  }
}

const app = new App();
