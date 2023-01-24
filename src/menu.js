export function menuSection(){

    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-content")
    const menu = document.createElement("h1")
    menu.classList.add("menu")
    menu.innerText = "MENU"
    
    const menuGrid = document.createElement("div")
    menuGrid.classList.add("menu-grid")
    
    const menuItem1 = document.createElement("div")
    menuItem1.classList.add("menu-item")
    const menuItem2 = document.createElement("div")
    menuItem2.classList.add("menu-item")
    const menuItem3 = document.createElement("div")
    menuItem3.classList.add("menu-item")
    const menuItem4 = document.createElement("div")
    menuItem4.classList.add("menu-item")
    
    const dishText1 = document.createElement("div")
    dishText1.classList.add("dish-text")
    const dishText2 = document.createElement("div")
    dishText2.classList.add("dish-text")
    const dishText3 = document.createElement("div")
    dishText3.classList.add("dish-text")
    const dishText4 = document.createElement("div")
    dishText4.classList.add("dish-text")
    
    const dishTitle1 = document.createElement("h2")
    dishTitle1.classList.add("dish-title")
    dishTitle1.innerText ="Dish 1"
    const price1= document.createElement("h2")
    price1.classList.add("price")
    price1.innerText = "30$"
    const menuDescription1 = document.createElement("p")
    menuDescription1.classList.add("menu-description")
    menuDescription1.innerText =`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium magni iusto! Minima inventore eveniet.`
    
    const dishTitle2 = document.createElement("h2")
    dishTitle2.classList.add("dish-title")
    dishTitle2.innerText ="Dish 2"
    const price2= document.createElement("h2")
    price2.classList.add("price")
    price2.innerText = "30$"
    const menuDescription2 = document.createElement("p")
    menuDescription2.classList.add("menu-description")
    menuDescription2.innerText =`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium magni iusto! Minima inventore eveniet.`
    
    const dishTitle3 = document.createElement("h2")
    dishTitle3.classList.add("dish-title")
    dishTitle3.innerText ="Dish 3"
    const price3= document.createElement("h2")
    price3.classList.add("price")
    price3.innerText = "30$"
    const menuDescription3 = document.createElement("p")
    menuDescription3.classList.add("menu-description")
    menuDescription3.innerText =`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium magni iusto! Minima inventore eveniet.`
    
    
    const dishTitle4 = document.createElement("h2")
    dishTitle4.classList.add("dish-title")
    dishTitle4.innerText ="Dish 4"
    const price4= document.createElement("h2")
    price4.classList.add("price")
    price4.innerText = "30$"
    const menuDescription4 = document.createElement("p")
    menuDescription4.classList.add("menu-description")
    menuDescription4.innerText =`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium magni iusto! Minima inventore eveniet.`
    
    
    const dishImage1 = document.createElement("div")
    dishImage1.classList.add("dish-image")
    const dishImage2 = document.createElement("div")
    dishImage2.classList.add("dish-image")
    const dishImage3 = document.createElement("div")
    dishImage3.classList.add("dish-image")
    const dishImage4 = document.createElement("div")
    dishImage4.classList.add("dish-image")
    
    const image1 = document.createElement("img")
    image1.classList.add("image")
    image1.src = "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
    
    const image2 = document.createElement("img")
    image2.classList.add("image")
    image2.src = "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021__340.jpg"
    
    const image3 = document.createElement("img")
    image3.classList.add("image")
    image3.src = "https://cdn.pixabay.com/photo/2015/12/08/19/08/steak-1083567__340.jpg" 
    
    const image4 = document.createElement("img")
    image4.classList.add("image")
    image4.src = "https://cdn.pixabay.com/photo/2016/04/15/09/03/food-1330531__340.jpg"
    //appending
    
    dishText1.append(dishTitle1,price1,menuDescription1)
    dishText2.append(dishTitle2,price2,menuDescription2)
    dishText3.append(dishTitle3,price3,menuDescription3)
    dishText4.append(dishTitle4,price4,menuDescription4)
    
    dishImage1.append(image1)
    dishImage2.append(image2)
    dishImage3.append(image3)
    dishImage4.append(image4)
    
    menuItem1.append(dishText1,dishImage1)
    menuItem2.append(dishText2,dishImage2)
    menuItem3.append(dishText3,dishImage3)
    menuItem4.append(dishText4,dishImage4)
    
    menuGrid.append(menuItem1,menuItem2,menuItem3,menuItem4)
    menuContent.append(menu,menuGrid)

console.log("menu page")

return menuContent;

}
export function loadMenu() {
    const main = document.getElementById('main')
    main.textContent = "";
    main.appendChild(menuSection())
  }