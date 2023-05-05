// Sortablelist class
class SortableList {
    constructor(parentElement, question, answer, image) {
      this.parentElement = parentElement;
      this.question = question;
      this.answer = answer;
      this.image = image;
      this.render();
    }
    render() {
      const sortableList = document.createElement('article');
      sortableList.classList.add('quiz__sortablelist');

      const sortableImage = document.createElement('img');
      sortableImage.src = this.image;
      sortableImage.classList ='quiz__sortablelistImage';
  
      const label = document.createElement('label');
      label.textContent = this.question;
      label.classList = 'quiz__sortablelistLabel';
      
  
      const list = document.createElement('ul');
      list.classList = 'quiz__sortableUL';

      const items = this.answer.map((item) => {
        const li = document.createElement('li');
        li.classList = "quiz__sortableListItem";
        li.textContent = item;
        li.draggable = true;
        return li;
      });
      sortableList.appendChild(sortableImage);
      list.appendChild(label);
      items.forEach((item) => list.appendChild(item));
      
      this.parentElement.appendChild(sortableList);
      sortableList.appendChild(list);
      
  
      // Initialize sortable library
      new Sortable(list, {
        animation: 150,
      });
  
     
    }
    checkAnswer() {
      const userAnswer = Array.from(this.parentElement.querySelectorAll('ul li')).map(
        (li) => li.textContent
      );
      return JSON.stringify(userAnswer) === JSON.stringify(this.answer);
    }
}