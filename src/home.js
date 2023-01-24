function homeMainSection(){
    const homeContent = document.createElement("div")
    homeContent.classList.add("home-content")

    const text = document.createElement("div")
    text.classList.add("text")
    const tagline = document.createElement("h2")
    const title = document.createElement("h1")
    const description = document.createElement("p")
    tagline.classList.add("tagline")
    title.classList.add("title")
    description.classList.add("description")

    tagline.innerText = `Best in the City`
    title.innerText = `Steaks & BBQ`
    description.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
    soluta, dignissimos quisquam incidunt nihil voluptas quod ratione assumenda, cum eius voluptates eligendi ducimus maiores.`

    text.append(tagline,title,description)
    homeContent.append(text)
    
    console.log("second part" )

    return homeContent
}
export function loadHome(){
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(homeMainSection());
}
/* 
HEADER
export function headerSection(){
    
    const content = document.querySelector("#content")
    //make components
    //parent components
    const header = document.createElement("div")
    header.classList.add("header")

    const name  = document.createElement("div")
    name.classList.add("name")
    
    const buttons =  document.createElement("div")
    buttons.classList.add("buttons")
    //children components
    const homeBtn =  document.createElement("button")
    const menuBtn =  document.createElement("button")
    const contactBtn =  document.createElement("button")
    homeBtn.classList.add("btn")
    menuBtn.classList.add("btn")
    contactBtn.classList.add("btn")
    homeBtn.innerText = "HOME"
    menuBtn.innerText = "MENU"
    contactBtn.innerText = "CONTACT"

    const first = document.createElement("div")
    const second = document.createElement("div")
    const third = document.createElement("div")
    first.classList.add("first")
    second.classList.add("second")
    third.classList.add("third")
    first.innerText = "THE"
    second.innerText = "BBQ"
    third.innerText = "PLACE"

    //appending elements
    buttons.append(homeBtn,menuBtn,contactBtn)
    name.append(first,second,third)

    header.append(name,buttons)
    content.append(header)
console.log("from hame page")

}
HTML
    <div class="header">
        <div class="name">
            <div class="first">THE</div>
            <div class="second">BBQ</div>
            <div class="third">PLACE</div>
        </div>
        <div class="buttons">
            <button class="btn">HOME</button>
            <button class="btn">MENU</button>
            <button class="btn">CONTACT</button>
        </div>
    </div>
            <div class="main-content">
            <div class="text">
                <h2 class="tagline">Best in the City</h2>
                <h1 class="title">Steaks & BBQ</h1>
                <p class="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
                     soluta, dignissimos quisquam incidunt nihil voluptas quod ratione assumenda, cum eius voluptates eligendi ducimus maiores.
                </p>
            </div>
        </div>
        MENU

        price1.innerText = "30$"

        
    <div class="menu-content">

<!--can add header here-->

        <h1 class="menu">MENU</h1>
        <div class="menu-grid">

            <div class="menu-item">
                <div class="dish-text">
                    <h2 class="dish-title">Dish 1</h2>
                    <h2 class="price">30$</h2>
                    <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                         praesentium magni iusto! Minima inventore eveniet.</p>
                </div>
                <div class="dish-image">
                    <img  class="image"src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="">
                </div>
            </div>

            <div class="menu-item">
                <div class="dish-text">
                    <h2 class="dish-title">Dish 2</h2>
                    <h2 class="price">90$</h2>
                    <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                        praesentium magni iusto! Minima inventore eveniet.</p>
                   </div>
                <div class="dish-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021__340.jpg" alt="">
                </div>
            </div>

            <div class="menu-item">
                <div class="dish-text">
                    <h2 class="dish-title">Dish 3</h2>
                    <h2 class="price">65$</h2>
                    <p class=" menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                        praesentium magni iusto! Minima inventore eveniet.</p>
                   </div>
                <div class="dish-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2015/12/08/19/08/steak-1083567__340.jpg" alt="">
                </div>
            </div>

            <div class="menu-item">
                <div class="dish-text">
                    <h2 class="dish-title">Dish 4</h2>
                    <h2 class="price">50$</h2>
                    <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                        praesentium magni iusto! Minima inventore eveniet.</p>
                   </div>
                <div class="dish-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2016/04/15/09/03/food-1330531__340.jpg" alt="">
                </div>
            </div>

            <div class="menu-item">
                <div class="dish-text">
                    <h2 class="dish-title">Dish 5</h2>
                    <h2 class="price">40$</h2>
                    <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                        praesentium magni iusto! Minima inventore eveniet.</p>
                   </div>
                <div class="dish-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002__340.jpg" alt="">
                </div>
            </div>

            <div class="menu-item">
                <div class="dish-text">
                    <h2 class="dish-title">Dish 6</h2>
                    <h2 class="price">30$</h2>
                    <p class="menu-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                        praesentium magni iusto! Minima inventore eveniet.</p>
                   </div>
                <div class="dish-image">
                    <img class="image" src="https://cdn.pixabay.com/photo/2015/09/09/19/42/french-fries-932849__340.jpg" alt="">
                </div>
            </div>

        </div>
    </div>
*/