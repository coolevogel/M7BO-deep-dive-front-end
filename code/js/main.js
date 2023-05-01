// class Header {
//     placeToRenderHeader;
//     headerElement;
//     imgElement;
//     wrapperElement;
//     button1Element;
//     button2Element;
//     button3Element;
//     link1Element;
//     link2Element;
//     icon1Element;
//     icon2Element;

//     constructor(placeToRenderHeader) {
//         this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

//         this.headerElement = document.createElement("header");
//         this.headerElement.classList = "header";

//         this.imgElement = document.createElement("img");
//         this.imgElement.classList = "header__img";

//         this.wrapperElement = document.createElement("div");
//         this.wrapperElement.classList = "header__wrapper";

//         this.button1Element = document.createElement("button");
//         this.button1Element.classList = "header__button";

//         this.button2Element = document.createElement("button");
//         this.button2Element.classList = "header__button";

//         this.button3Element = document.createElement("button");
//         this.button3Element.classList = "header__button";

//         this.link1Element = document.createElement("a");
//         this.link1Element.classList = "header__socialMedia";

//         this.icon1Element = document.createElement("i");
//         this.icon1Element.classList = "fa-brands fa-instagram"

//         this.link2Element = document.createElement("a");
//         this.link2Element.classList = "header__socialMedia";

//         this.icon2Element = document.createElement("i");
//         this.icon2Element.classList = "fa-brands fa-facebook"

//         this.render();
//     }

//     render() {
//         this.placeToRenderHeader.appendChild(this.headerElement);

//         this.headerElement.appendChild(this.imgElement);
//         this.headerElement.appendChild(this.wrapperElement);

//         this.wrapperElement.appendChild(this.button1Element);
//         this.wrapperElement.appendChild(this.button2Element);
//         this.wrapperElement.appendChild(this.button3Element);
//         this.wrapperElement.appendChild(this.link1Element);
//         this.wrapperElement.appendChild(this.link2Element);

//         this.link1Element.appendChild(this.icon1Element);
//         this.link2Element.appendChild(this.icon2Element);

//         this.renderContent();
//     }

//     renderContent() {
//         this.imgElement.src = "images/logo.webp";

//         this.button1Element.innerText = "The Hogwarts escape";
//         this.button2Element.innerText = "Credits";
//         this.button3Element.innerText = "disclaimer";
//     }
// }

// class Main {
//     placeToRenderMain;
//     mainElement;
//     midSectionElement;

//     constructor(placeToRenderMain) {
//         this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

//         this.mainElement = document.createElement("main");
//         this.mainElement.classList = "main";

//         this.midSectionElement = document.createElement("section");
//         this.midSectionElement.classList = "midSection";

//         this.render();
//     }

//     render(){
//         this.placeToRenderMain.appendChild(this.mainElement);

//         this.mainElement.appendChild(this.midSectionElement);
//     }
// }

// class App {
//     header;
//     main;

//     constructor() {
//         this.header = new Header("body");
//         this.main = new Main("body");
//     }
// }

// const app = new App();