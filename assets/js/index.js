const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector(".lista-compras")
const container = document.querySelector(".mensagem")
const conteudo = document.querySelector(".hidde")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = input.value
    const regex = /\D+/g

    const li = document.createElement("li")
    const img = document.createElement("img")
    const inputCheckbox = document.createElement("input")
    const span = document.createElement("span")

    img.setAttribute("src", "assets/img/icones/Frame-3.png")
    img.setAttribute("alt", "logo excluir")
    img.classList.add("btn-excluir")

    li.classList.add("item")
    inputCheckbox.setAttribute("type", "checkbox")
    inputCheckbox.classList.add("check")

    if (!regex.test(value)) {
        alert("Insira um valor válido!")
        input.value = ""
    } 
    else if (value != "") {
        span.textContent = value
        li.append(inputCheckbox)
        li.append(span)
        li.append(img)
        ul.append(li)
        input.value = ""
    }
})

let clique = 0

ul.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-excluir")) {
        const item = e.target.closest(".item");
        item.remove()
        clique++

        if(clique >= 1) {
            conteudo.classList.add("block")

            setInterval(() => {
                conteudo.classList.remove("block")
            }, 3000)
        }
    }
})

ul.addEventListener("click", (e) => {
    const item = e.target.closest(".item")
    const check = e.target.closest(".check");

    if(e.target.classList.contains("check")) {

        if (check.checked === true) {
            item.classList.add("border")
            console.log(item);
        } else {
            item.classList.remove("border")
        }
    }
})  

