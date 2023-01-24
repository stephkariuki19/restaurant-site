function contactSection(){
    
    const contactContent = document.createElement("div")
    contactContent.classList.add("contact-content")

    const overlay= document.createElement("div")
    overlay.classList.add("overlay")

    const contactText= document.createElement("div")
    contactText.classList.add("contact-text")

    const tag= document.createElement("h1")
    tag.classList.add("tag")

    const para= document.createElement("p")
    para.classList.add("para")
    para.innerText =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sed?`
    const reserve= document.createElement("button")
    reserve.classList.add("reserve")
    reserve.innerText = "RESERVE"
    const call= document.createElement("h2")
    call.innerText = `Or Call Us : 123 456 789`
    call.classList.add("call")
    contactText.append(tag,para,reserve,call)
    overlay.append(contactText)
    contactContent.append(overlay)
    
console.log('from contact')

return contactContent

}

export function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ""
    main.appendChild(contactSection())
  }