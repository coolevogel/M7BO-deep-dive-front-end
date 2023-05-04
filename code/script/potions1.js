

class Header {

    // <header class="header">
    //     <img src="images/logo.webp" alt="logo hogwarts escape" class="header__img">
    //     <div class="header__buttonWrapper">
    //     </div>
    //     <div class="header__wrapper">
    //         <button class="header__button">The Hogwarts escape</button>
    //         <button class="header__button">Credits</button>
    //         <button class="header__button">disclaimer</button>
    //         <a href="https://www.instagram.com/thehogwartsescape/" class="header__socialMedia"><i class="fa-brands fa-instagram"></i></a>
    //         <a href="https://www.facebook.com/thehogwartsescape" class="header__socialMedia"><i class="fa-brands fa-facebook-f"></i></a>
    //     </div>
    // </header>

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
}

class Main {

    // <main class="main">

    //     <section class="midSection">

    //     </section>

    // </main>

    placeToRenderMain;
    mainElement;
    midSectionElement;

    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "main";

        this.midSectionElement = document.createElement("section");
        this.midSectionElement.classList = "midSection";

        this.render();
    }

    render() {
        this.placeToRenderMain.appendChild(this.mainElement);

        this.mainElement.appendChild(this.midSectionElement);
    }

}

class Potions1 {

    // const draggable_list = document.getElementById('draggable-list');
    // const check = document.getElementById('check');

    // const richestPeople = [
    //   'Jeff Bezos',
    //   'Bill Gates',
    //   'Warren Buffett',
    //   'Bernard Arnault',
    //   'Carlos Slim Helu',
    //   'Amancio Ortega',
    //   'Larry Ellison',
    //   'Mark Zuckerberg',
    //   'Michael Bloomberg',
    //   'Larry Page'
    // ];

    // // Store listitems
    // const listItems = [];

    // let dragStartIndex;

    // createList();

    // // Insert list items into DOM
    // function createList() {
    //   [...richestPeople]
    //     .map(a => ({ value: a, sort: Math.random() }))
    //     .sort((a, b) => a.sort - b.sort)
    //     .map(a => a.value)
    //     .forEach((person, index) => {
    //       const listItem = document.createElement('li');

    //       listItem.setAttribute('data-index', index);

    //       listItem.innerHTML = `
    //         <span class="number">${index + 1}</span>
    //         <div class="draggable" draggable="true">
    //           <p class="person-name">${person}</p>
    //           <i class="fas fa-grip-lines"></i>
    //         </div>
    //       `;

    //       listItems.push(listItem);

    //       draggable_list.appendChild(listItem);
    //     });

    //   addEventListeners();
    // }

    // function dragStart() {
    //   // console.log('Event: ', 'dragstart');
    //   dragStartIndex = +this.closest('li').getAttribute('data-index');
    // }

    // function dragEnter() {
    //   // console.log('Event: ', 'dragenter');
    //   this.classList.add('over');
    // }

    // function dragLeave() {
    //   // console.log('Event: ', 'dragleave');
    //   this.classList.remove('over');
    // }

    // function dragOver(e) {
    //   // console.log('Event: ', 'dragover');
    //   e.preventDefault();
    // }

    // function dragDrop() {
    //   // console.log('Event: ', 'drop');
    //   const dragEndIndex = +this.getAttribute('data-index');
    //   swapItems(dragStartIndex, dragEndIndex);

    //   this.classList.remove('over');
    // }

    // // Swap list items that are drag and drop
    // function swapItems(fromIndex, toIndex) {
    //   const itemOne = listItems[fromIndex].querySelector('.draggable');
    //   const itemTwo = listItems[toIndex].querySelector('.draggable');

    //   listItems[fromIndex].appendChild(itemTwo);
    //   listItems[toIndex].appendChild(itemOne);
    // }

    // // Check the order of list items
    // function checkOrder() {
    //   listItems.forEach((listItem, index) => {
    //     const personName = listItem.querySelector('.draggable').innerText.trim();

    //     if (personName !== richestPeople[index]) {
    //       listItem.classList.add('wrong');
    //     } else {
    //       listItem.classList.remove('wrong');
    //       listItem.classList.add('right');
    //     }
    //   });
    // }

    // function addEventListeners() {
    //   const draggables = document.querySelectorAll('.draggable');
    //   const dragListItems = document.querySelectorAll('.draggable-list li');

    //   draggables.forEach(draggable => {
    //     draggable.addEventListener('dragstart', dragStart);
    //   });

    //   dragListItems.forEach(item => {
    //     item.addEventListener('dragover', dragOver);
    //     item.addEventListener('drop', dragDrop);
    //     item.addEventListener('dragenter', dragEnter);
    //     item.addEventListener('dragleave', dragLeave);
    //   });
    // }

    // check.addEventListener('click', checkOrder);

    placeToRenderQuestion;
    h2Element;
    pElement;
    listElement;
    listItem;
    buttonElement;
    draggable_list;

    steps = [
        'Add Ashwinder egg to a cauldron, then add horseradish and heat.',
        'Juice a squill bulb, add to the cauldron and stir vigorously.',
        'Chop up anemone-like growth on the back of Murtlap, add to mixture and heat.',
        'Add a dash of tincture of thyme and stir slowly.',
        'Grind up Occamy eggshell and add to mixture.',
        'Stir slowly then heat the cauldron.',
        'Add a sprinkle of powdered common rue.',
        'Stir vigorously then heat the cauldron one last time.',
        'Wave wand over potion in a figure of eight and say incantation ,Felixempra!'
    ];

    listItems = [];

    dragStartIndex;

    constructor(placeToRenderQuestion) {
        this.placeToRenderQuestion = placeToRenderQuestion;

        // <h2>10 richest people</h2>
        // <p>drag and drop the items into their corresponding spots</p>
        // <ul class="draggable-list" id="draggable-list"></ul>
        // <button class="check-btn" id="check">
        //     check order
        // </button>

        // text

        this.h2Element = document.createElement("h2");
        this.h2Element.classList = "question__h2";

        this.pElement = document.createElement("p");
        this.pElement.classList = "question__p";

        // draggable-list

        this.listElement = document.createElement("ul");
        this.listElement.classList = "draggable-list";
        this.listElement.id = "draggable-list";

        this.buttonElement = document.createElement("button");
        this.buttonElement.classList.add("check-btn");
        this.buttonElement.id = "check";
        this.buttonElement.addEventListener('click', this.checkOrder);


        this.render();
        this.createList();
    }

    createList() {
        [...this.steps]
            .map(a => ({ value: a, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value)
            .forEach((step, index) => {
                this.listItem = document.createElement('li');

                this.listItem.setAttribute('data-index', index);

                this.listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                  <p class="person-name">${step}</p>
                  <i class="fas fa-grip-lines"></i>
                </div>
              `;

                this.listItems.push(this.listItem);

                this.listElement.appendChild(this.listItem);
            });

        this.addEventListeners();
    }

    dragStart() {
        // console.log('Event: ', 'dragstart');
        this.dragStartIndex = +this.closest('li').getAttribute('data-index');
    }

    dragEnter() {
        // console.log('Event: ', 'dragenter');
        this.classList.add('over');
    }

    dragLeave() {
        // console.log('Event: ', 'dragleave');
        this.classList.remove('over');
    }

    dragOver(e) {
        // console.log('Event: ', 'dragover');
        e.preventDefault();
    }

    dragDrop() {
        // console.log('Event: ', 'drop');
        this.dragEndIndex = +this.getAttribute('data-index');
        swapItems(this.dragStartIndex, this.dragEndIndex);

        this.classList.remove('over');
    }

    // // Swap list items that are drag and drop
    swapItems(fromIndex, toIndex) {
        this.itemOne = listItems[fromIndex].querySelector('.draggable');
        this.itemTwo = listItems[toIndex].querySelector('.draggable');

        listItems[fromIndex].appendChild(this.itemTwo);
        listItems[toIndex].appendChild(itemOne);
    }

    // Check the order of list items
    checkOrder() {
        listItems.forEach((listItem, index) => {
            const personName = listItem.querySelector('.draggable').innerText.trim();

            if (personName !== richestPeople[index]) {
                this.listItem.classList.add('wrong');
            } else {
                this.listItem.classList.remove('wrong');
                this.listItem.classList.add('right');
            }
        });
    }

    addEventListeners() {
        this.draggables = document.querySelectorAll('.draggable');
        this.dragListItems = document.querySelectorAll('.draggable-list li');

        this.draggables.forEach(draggable => {
            this.draggable.addEventListener('dragstart', this.dragStart);
        });

        this.dragListItems.forEach(item => {
            item.addEventListener('dragover', this.dragOver);
            item.addEventListener('drop', this.dragDrop);
            item.addEventListener('dragenter', this.dragEnter);
            item.addEventListener('dragleave', this.dragLeave);
        });
    }

    render() {
        this.placeToRenderQuestion.appendChild(this.h2Element);
        this.placeToRenderQuestion.appendChild(this.pElement);
        this.placeToRenderQuestion.appendChild(this.listElement);
        this.placeToRenderQuestion.appendChild(this.buttonElement);


        this.renderContent();
    }

    renderContent() {
        this.h2Element.innerText = "how do you make Felix Felicis?";
        this.pElement.innerText = "drag and drop the items into their corresponding spots";
        this.buttonElement.innerText = "check order";
    }
}

class App {
    header;
    main;

    constructor() {
        this.header = new Header("body");
        this.main = new Main("body");
        this.potions1 = new Potions1(this.main.midSectionElement);
    }

}

const app = new App();