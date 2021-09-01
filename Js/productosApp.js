

const contenedor = document.getElementById("contenedor");
const tableBody = document.getElementById("tableBody");
let carrito = [];
const botonBorrarCarrito = document.getElementById('btnBorrar');
  const botonComprarCarrito = document.getElementById('btnComprar');
const botonBorrar = document.getElementById('botonBorrar');
const botonAniadir = document.getElementById('botonAniadir');
const footerCarrito = document.getElementById('footerCarrito');
const totalCarrito = document.getElementById('totalCarrito');




stockProductos.forEach ((producto) => {
  let divProd = document.createElement('div')
  divProd.className = "card"
  divProd.style = "width: 18rem; margin: 30px;"
  divProd.innerHTML += `
      <img src=" ${producto.img}" class="card-img-top imagenProd">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${"Autor: " + producto.autor}</h6>
        <p class="card-text">${producto.desc}.</p>
        <p><strong class="card-text">${ "Precio: $" + producto.precio}</strong></p>
        <p class="card-text" style="text-align: ;"> (${ producto.stock + " disponibles"})</p>
        <button id="btn" onclick="agregarAlCarrito(${producto.id}) " class="btn btn-primary">Agregar al carrito</button>
      </div>
      
    `

    contenedor.appendChild(divProd)
})



const mostrarCompra = () => {

  tableBody.innerHTML = ""
   
  carrito.forEach((producto) =>{
    
    const tr = document.createElement('tr')
    tr.innerHTML = `
             <th scope="row">${producto.id}</th>
              <td>${producto.nombre}</td>
              <td>${producto.autor}</td>
              <td>${producto.cantidad}</td>
              <td>
              <button type="button" class="btn btn-success  " id="botonAniadir">+</button>
              <button type="button" class="btn btn-danger" id="botonBorrar">-</button>
              </td>
              <td>${"$ " + producto.precio * producto.cantidad}</td>


             
    `
    
    tableBody.appendChild(tr)
    
  })

  pintarFooter()
  
}


function agregarAlCarrito (prodId) {
  let producto = stockProductos.find( (el) => el.id === prodId )

  if (producto.stock > 0){

    if(carrito.hasOwnProperty(producto.id)){

      producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    
    mostrarCompra()

  }else{
    alert("No hay stock")
  }
  
  
}

const pintarFooter = () => {

  footerCarrito.innerHTML = ''

  if(Object.keys(carrito).length === 0){

    footerCarrito.innerHTML = `<th scope="row" colspan="6">Carrito vacío - comience a comprar!</th>`

    return
  }
  const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0 )
  const nCantidad = Object.values(carrito).reduce( (acc , {cantidad}) => acc + cantidad ,0)
  
  totalCarrito.querySelectorAll('th')[1].textContent = nCantidad
  totalCarrito.querySelectorAll('td')[1].textContent = nPrecio
  
console.log(carrito)
}


botonBorrarCarrito.addEventListener('click', () => {

  carrito = {}
  tableBody.innerHTML = ''
  agregarAlCarrito()
  
  

} )
botonComprarCarrito.addEventListener('click', () => {

  alert("Compraste el Carrito")
  tableBody.innerHTML = ''
  agregarAlCarrito()
} )


