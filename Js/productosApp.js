

const contenedor = document.getElementById("contenedor");
const tableBody = document.getElementById("tableBody");
const botonBorrarCarrito = document.getElementById('btnBorrar');
const botonComprarCarrito = document.getElementById('btnComprar');
const botonBorrar = document.getElementById('botonBorrar');
const botonAniadir = document.getElementById('botonAniadir');
const footerCarrito = document.getElementById('footerCarrito');
const totalCarrito = document.getElementById('totalCarrito');
const selectAutores = document.getElementById('autores');
const selectPrecios = document.getElementById('precios')
let carrito = [];

mostrarProductos(stockProductos)

function mostrarProductos (array){

  contenedor.innerHTML = ''

  array.forEach ((producto) => {

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
}

function agregarAlCarrito (prodId) {
 
  
  let producto = stockProductos.find( (el) => el.id === prodId )

  
  if (producto.stock > 0){

    if(carrito.hasOwnProperty(producto.id)){
      producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    console.log(carrito.length)
    console.log(carrito)
  }else{
    alert("No hay stock")
  }
  localStorage.setItem('carrito', JSON.stringify(carrito))


  actualizarCarrito()
}



const actualizarCarrito = () => {

  tableBody.innerHTML = ""
   
  carrito.forEach((producto) =>{
    
    const tr = document.createElement('tr')
    tr.innerHTML = `
             <th scope="row">${producto.id}</th>
              <td>${producto.nombre}</td>
              <td>${producto.autor}</td>
              <td>${producto.cantidad}</td>
              <td>
              <button type="button" class="btn btn-success  " id="botonAniadir" onclick=aniadirProducto(${producto.id})>+</button>
              <button type="button" class="btn btn-danger" onclick=eliminarProducto(${producto.id})></button>
              </td>
              <td>${"$ " + producto.precio * producto.cantidad}</td>


             
    `
    
    tableBody.appendChild(tr)
    
  })


  pintarFooter()
  
}




const pintarFooter = () => {

  footerCarrito.innerHTML = ''
  totalCarrito.innerHTML = ''

  if(carrito.length === 0){

    footerCarrito.innerHTML = `<th scope="row" colspan="6">Carrito vacío - comience a comprar!</th>`

    return
  }
  const precioTotal = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0 )
  const cantidadTotal = Object.values(carrito).reduce( (acc , {cantidad}) => acc + cantidad ,0)
  
  
  totalCarrito.innerHTML = `
                          <th scope="row" colspan="3">Total productos</th>
                          <th>${cantidadTotal}</th>
                          <td><button id="btnBorrar" type="button" class="btn btn-danger btn-sm">Borrar carrito</button></td>
                          <td class="font-weight-bold">$ <span>${precioTotal}</span></td>
                          `

  
}

function eliminarProducto(prodId){

  let productoAEliminar = carrito.find( (el) => el.id === prodId)
  productoAEliminar.cantidad--

  if(productoAEliminar.cantidad == 0){
    let indice = carrito.indexOf(productoAEliminar)
    carrito.splice(indice, 1)
  }
  
  
}

function aniadirProducto(prodId){
  let productoAAgregar = carrito.find( (el) => el.id === prodId)

  productoAAgregar.cantidad++
  
 
}



function filtrar() {
  let valorFiltroPrecios = selectPrecios.value
  let valortFiltroAutores = selectAutores.value

  let arrayFiltrado = []
  if (valortFiltroAutores == 'all'){
    arrayFiltrado = stockProductos
  }else {
    arrayFiltrado = stockProductos.filter( el => el.autor == selectAutores.value)
  }

  if(valorFiltroPrecios == 1){
    arrayFiltrado = arrayFiltrado.filter(el => el.precio <= 3500 )
  }else if (valorFiltroPrecios == 2){
    arrayFiltrado = arrayFiltrado.filter(el => el.precio >= 3500)
  }

  mostrarProductos(arrayFiltrado)
}

selectAutores.addEventListener('change', () =>{
  filtrar()
})
selectPrecios.addEventListener('change', () => {
  filtrar()
})



botonBorrarCarrito.addEventListener('click', () => {

  carrito = []
  tableBody.innerHTML = ''
  actualizarCarrito()
  
  

} )
botonComprarCarrito.addEventListener('click', () => {

  alert("Compraste el Carrito")
  tableBody.innerHTML = ''
  actualizarCarrito()
} )