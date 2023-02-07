const zapatillas = [
    {marca: "Nike", modelo: "Air-Force", precio: 320000},
    {marca: "Nike", modelo: "Air-Jordan", precio: 400000},
    {marca: "Nike", modelo: "Dunk-High", precio: 380000},
    {marca: "Adidas", modelo: "Hoops-2.0", precio: 270000},
    {marca: "Adidas", modelo: "Forum-Low-Vegan", precio: 450000},
    {marca: "Adidas", modelo: "Ozelia-Knit", precio: 330000},
    {marca: "Puma", modelo: "Rider-Future", precio: 260000},
    {marca: "Puma", modelo: "Slipstreame", precio: 300000},
    {marca: "Puma", modelo: "Magnify-Nitro", precio: 360000}
]


let infoArray = document.getElementById("infoArray")
let mostrarDatos = document.getElementById("btn")


const guardarProdEnStorage = (clave, valor) => {localStorage.setItem(clave, valor)}

guardarProdEnStorage("ListadoZapatillas", JSON.stringify(zapatillas))

const prodAlmacenados = JSON.parse(localStorage.getItem("ListadoZapatillas"))


console.log(prodAlmacenados)

let muestra = prodAlmacenados[4]

const { marca, modelo, precio } = muestra

mostrarDatos.onclick = () => {
    let infoAMostrar = document.createElement("div")
    infoAMostrar.innerHTML = `la marca es ${muestra.marca} el modelo es ${muestra.modelo} y el precio es ${muestra.precio}`
    infoArray.appendChild(infoAMostrar)
}
