import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

function headerSection(){
       //making header components
    const header = document.createElement("div")
    header.classList.add("header")

    const name  = document.createElement("div")
    name.classList.add("name")

    const first = document.createElement("div")
    const second = document.createElement("div")
    const third = document.createElement("div")
    first.classList.add("first")
    second.classList.add("second")
    third.classList.add("third")
    first.innerText = "THE"
    second.innerText = "BBQ"
    third.innerText = "PLACE"

    name.append(first,second,third)
    header.appendChild(name)
    header.appendChild(createNav())
    console.log("from home page header section")

    return header;
}

function createNav(){
    const buttons =  document.createElement("div")
    buttons.classList.add("buttons")
    //children components
    const homeBtn =  document.createElement("button")
    homeBtn.classList.add("btn")
    homeBtn.innerText = "HOME"
    homeBtn.addEventListener("click", (e) => {
        console.log("button clicked")
        loadHome();
      });

    const menuBtn =  document.createElement("button")
    menuBtn.classList.add("btn")
    menuBtn.innerText = "MENU"
    menuBtn.addEventListener("click", (e) => {
    console.log("button clicked")
        loadMenu();
      });

    const contactBtn =  document.createElement("button")
    contactBtn.classList.add("btn")
    contactBtn.innerText = "CONTACT"
    contactBtn.addEventListener("click", (e) => {
        console.log("button clicked")
        loadContact();
      });
          //appending elements
    buttons.append(homeBtn,menuBtn,contactBtn)

    return buttons

}
function createMain(){
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

export function initializeWebsite() {
    const content = document.getElementById("content");
    content.appendChild(headerSection());
    content.appendChild(createMain());
   loadHome();
  }
  

    

    
    
 




    

    
   


