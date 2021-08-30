

const contenedor = document.getElementById("contenedor")
const tableBody = document.getElementById("tableBody")



stockProductos.forEach ((prod) => {
  let divProd = document.createElement('div')
  divProd.className = "card"
  divProd.style = "width: 18rem;"
  divProd.innerHTML = `
      <img src=" ${prod.img}" class="card-img-top imagenProd">
      <div class="card-body">
        <h5 class="card-title">${prod.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${"Autor: " + prod.autor}</h6>
        <p class="card-text">${prod.desc}.</p>
        <p><strong class="card-text">${ "Precio: $" + prod.precio}</strong></p>
        
        <button id="btn" onclick="agregarAlCarrito(${prod.id})" class="btn btn-primary">Agregar al carrito</button>
      </div>
    `

    contenedor.appendChild(divProd)
})


const carrito = []

const mostrarCompra = () => {

  tableBody.innerHTML = ""
   
  carrito.forEach((prod) =>{
    const tr = document.createElement('tr')
    tr.innerHTML = `
             <th scope="row">${prod.id}</th>
              <td>${prod.nombre}</td>
              <td>${prod.autor}</td>
              <td>${prod.precio}</td>


             
    `
    tableBody.appendChild(tr)          
  })

}




function agregarAlCarrito (prodId) {
  let producto = stockProductos.find( (el) => el.id === prodId )

  carrito.push(producto)

  mostrarCompra()
}

const botonBorrarCarrito = document.getElementById('btnBorrar')
const botonComprarCarrito = document.getElementById('btnComprar')



botonBorrarCarrito.addEventListener('click', () => {

  tableBody.innerHTML = ""
  carrito = []
  

} )

botonComprarCarrito.addEventListener('click', () => {
  
    alert("Compraste el Carrito")
} )

