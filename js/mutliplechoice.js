// MultiplechoiceQuestion class
class MultiplechoiceQuestion {
    constructor(parentElement, question, options, answer, image) {
      this.parentElement = parentElement;
      this.question = question;
      this.options = options;
      this.answer = answer;
      this.image = image;
      this.render();
    }
    render() {
      const multipleChoiceQuestion = document.createElement('article');
      multipleChoiceQuestion.classList = 'quiz__multiplechoiceQuestion';

      const multipleImage = document.createElement('img');
      multipleImage.src = this.image;

      multipleImage.classList ='quiz__multitImage';
      multipleChoiceQuestion.appendChild(multipleImage);

      const label = document.createElement('label');
      label.textContent = this.question;
      label.classList = 'quiz__multiplechoiceLabel';
      multipleChoiceQuestion.appendChild(label);
  
      const radioGroup = document.createElement('div');
      radioGroup.classList.add('quiz__radiogroup');
  
      this.options.forEach((option) => {
        const input = document.createElement('input');
        input.classList = 'quiz__multiplechoiceasnwer';
        input.type = 'radio';
        input.name = 'mcq';
        input.value = option;
  
        const label = document.createElement('label');
        label.textContent = option;
  
        const radioOption = document.createElement('div');
        radioOption.classList.add('radio-option');
  
        radioOption.appendChild(input);
        radioOption.appendChild(label);
  
        radioGroup.appendChild(radioOption);
      });
      
      multipleChoiceQuestion.appendChild(radioGroup);
      this.parentElement.appendChild(multipleChoiceQuestion);
    }
  
    checkAnswer() {
      const userAnswer = this.parentElement.querySelector('input[name=mcq]:checked')?.value;
      return userAnswer === this.answer;
    }
}