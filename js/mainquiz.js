// MainQuiz class
class MainQuiz {
    placeToRenderQuiz;
    constructor(placeToRenderQuiz) {
      this.placeToRenderQuiz = document.getElementsByTagName(placeToRenderQuiz)[0];
  
      this.mainElement = document.createElement('main');
      this.mainElement.classList = 'main';
  
      this.section = document.createElement('section');
      this.section.classList ='quiz';
  
      this.quizApi = new QuizAPI("./data/data.json");
  
      this.questions = [];
      this.userAnswers = [];
      this.score = 0;
      this.currentQuestion = 0;
  
      // Create and add finish button
      this.finishButton = document.createElement('button');
      this.finishButton.innerText = 'Finish';
      this.finishButton.classList = 'quiz__Button';
      this.finishButton.addEventListener('click', () => {
        this.handleFinishButtonClick();
      });
      this.mainElement.appendChild(this.section);
      this.section.appendChild(this.finishButton);
    }
  
    async init() {
      try {
        const data = await this.quizApi.getData(); // Modify this line
        for (let i = 0; i < data.length; i++) {
          const questionData = data[i];
          switch (questionData.type) {
            case 'input':
              this.questions.push(new InputQuestion(this.section, questionData.question, questionData.answer, questionData.image));
              break;
            case 'sort':
              this.questions.push(new SortableList(this.section, questionData.question, questionData.answer, questionData.image));
              break;
            case 'multiple_choice':
              this.questions.push(new MultiplechoiceQuestion(this.section, questionData.question, questionData.options, questionData.answer, questionData.image));
              break;
            default:
              console.error(`Unknown question type: ${questionData.type}`);
          }
        }
        this.render();
      } catch (err) {
        console.error(`Failed to initialize quiz: ${err}`);
      }
    }
  
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
    
  
    handleFinishButtonClick() {
      // Get user answers for all questions
      this.userAnswers = this.questions.map(question => question.checkAnswer());
    
      // Calculate score
      this.score = this.userAnswers.filter(answer => answer).length;
    
      // Display score
      const scoreElement = document.createElement('p');
      scoreElement.classList.add('quiz__score');
      scoreElement.textContent = `Your score is: ${this.score} out of ${this.questions.length}`;
      this.section.appendChild(scoreElement);
    
      // Hide finish button
      this.finishButton.style.display = 'none';
      
    }
    
  
  
    showResult() {
      // Remove all elements from the section
      this.section.innerHTML = '';
      
      // Display score
      const scoreElement = document.createElement("p");
      scoreElement.classList.add("quiz__score");
      scoreElement.textContent = `Your score is: ${this.score} out of ${this.questions.length}.`;
      this.section.appendChild(scoreElement);
      
      // Display restart button
      const restartButton = document.createElement("button");
      restartButton.classList.add("restart-button");
      restartButton.classList = "quiz__Button";
      restartButton.innerText = "Restart";
      restartButton.addEventListener("click", () => {
        this.questions = [];
        this.userAnswers = [];
        this.score = 0;
        this.currentQuestion = 0;
        this.init();
      });
      this.section.appendChild(restartButton);
    }
      
      startQuiz() {
        this.init();
      }
  }  