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





