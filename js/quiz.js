
// App class
class App {
    quizApi;
    header;
    mainQuiz;

    constructor() {
      this.quizApi = new QuizAPI();
      this.header = new Header('body');
      this.mainQuiz = new MainQuiz('body');

      this.render();
    }
    render(){
        this.header.render();
        this.mainQuiz.startQuiz();
    }
}

const app = new App();


