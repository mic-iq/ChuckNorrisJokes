let boton = document.querySelector("#boton")
let chiste = document.querySelector("h2")

boton.addEventListener("click",actualizar)

//let chiste = {}


function actualizar(){
    $.getJSON("https://api.chucknorris.io/jokes/random",data =>{
        chiste.textContent = data.value
})
}