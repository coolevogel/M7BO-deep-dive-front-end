

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

    render(){
        this.placeToRenderMain.appendChild(this.mainElement);

        this.mainElement.appendChild(this.midSectionElement);
    }

}

class Potions1 {
    placeToRenderQuestion;
    h2Element;
    pElement;
    listElement;
    buttonElement;

    constructor(placeToRenderQuestion){
        this.placeToRenderQuestion = placeToRenderQuestion;

        // <h2>10 richest people</h2>
        // <p>drag and drop the items into their corresponding spots</p>
        // <ul class="draggable-list" id="draggable-list"></ul>
        // <button class="check-btn" id="check">
        //     check order
        // </button>

        this.h2Element = document.createElement("h2");
        this.h2Element.classList = "question__h2";

        this.pElement = document.createElement("p");
        this.pElement.classList = "question__p";

        this.listElement = document.createElement("ul");
        this.listElement.classList = "draggable-list";
        this.listElement.id = "draggable-list";

        this.buttonElement = document.createElement("button");
        this.buttonElement.classList.add("check-btn");
        this.buttonElement.id = "check";


        this.render();
    }

    render(){
        this.placeToRenderQuestion.appendChild(this.h2Element);
        this.placeToRenderQuestion.appendChild(this.pElement);
        this.placeToRenderQuestion.appendChild(this.listElement);
        this.placeToRenderQuestion.appendChild(this.buttonElement);


        this.renderContent();
    }

    renderContent(){
        this.h2Element.innerText = "10 richest people";
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