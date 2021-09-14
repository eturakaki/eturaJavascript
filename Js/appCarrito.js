
const contenedor = document.getElementById("contenedor");
const selectAutores = document.getElementById('autores');
const selectPrecios = document.getElementById('precios')
const contadorCarrito = document.getElementById('contadorCarrito')
const carroUpdate = document.getElementById('boton-carrito')

let carrito = [];


mostrarProductos(stockProductos)

function mostrarProductos (array){

  contenedor.innerHTML = ''

  array.forEach ((producto) => {

    let divProd = document.createElement('div')
    divProd.className = "card item"
    divProd.style = "width: 18rem; margin: 30px;"

    divProd.innerHTML += `
        <img src=" ${producto.img}" class="card-img-top imagenProd">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${"Autor: " + producto.autor}</h6>
          <p class="card-text">${producto.desc}.</p>
          <p><strong class="card-text card-price">${ "Precio: $" + producto.precio}</strong></p>
          <p class="card-text classStock" style="text-align: ;"> ${ producto.stock + " disponibles"}</p>
          <button id="btn"  " class="btn btn-primary botonAgregarCarrito">Agregar al carrito</button>
        </div>
        
      `
  
      contenedor.appendChild(divProd)
  })
}

const aniadirACarritoBotones = document.querySelectorAll('.btn-primary')




aniadirACarritoBotones.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClick)
    
})

const comprarButton = document.querySelector('.comprarButton')
comprarButton.addEventListener('click', () => {
    comprarButtonClicked()
})

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');



function addToCartClick(event){
    const button = event.target;
    const item = button.closest('.item')
    const stock = Number(item.querySelector('.classStock').textContent.replace('disponibles', ''))
    

    if( stock != 0 ){
        const itemTitle = item.querySelector('.card-title').textContent;
        const itemPrice = item.querySelector('.card-price').textContent;
        const itemImage = item.querySelector('.imagenProd').src;

        addItemToShoppingCart(itemTitle, itemPrice, itemImage)
        
    }else{
        alert('Sin Stock del producto seleccionado')
        
    }
    
    
}


function addItemToShoppingCart(itemTitle, itemPrice, itemImage){

    const elementTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');

    for(let i = 0; i < elementTitle.length; i++){
        if(elementTitle[i].innerText === itemTitle){
            let elementQuantity = elementTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            elementQuantity.value++;
            $('.toast').toast('show');
            updateShoppingCartTotal()
            return;
        }
    }
    
    const shoppingCartRow = document.createElement('div');
    shoppingCartRow.className = "cardCart"
    const shoppingCartContent = `
                    <div class="row shoppingCartItem">
                            <div class="col-6">
                                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                                    <img src="${itemImage}" class="shopping-cart-image">
                                    <h6 class=" shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">
                                        ${itemTitle}
                                    </h6>
                                </div>

                            </div>
                            <div class="col-2">
                                <div class="shoppin-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                                    <p class="item-price mb-0 shoppingCartItemPrice">
                                        ${itemPrice}
                                    </p>
                                </div>

                            </div>
                            <div class="col-4">
                                <div class=" shopping-cart-quantify d-flex justify-content-between align-items-center h-100">
                                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                                    <buton class="btn btn-danger buttonDelete" type="button">x</button>
                                </div>
                            </div>
                    </div>`;
    
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged)

    updateShoppingCartTotal()
    
}


function updateShoppingCartTotal(){

   
    

    let total = 0;

    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    
    
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')
    

    shoppingCartItems.forEach( shoppingCartItem => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');

        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('Precio: $', ''));
    

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')

        

        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        
    })
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}`

    let divs = document.getElementsByClassName("shoppingCartItemQuantity").length;

    contadorCarrito.innerText = parseInt(divs)
    
    pintarContador()
    
    
    
    
}
function pintarContador(){

    const cantidad = parseInt($('#contadorCarrito').text())
    let a = Math.round( Math.random() * cantidad * 30)
    let b = Math.round( Math.random() * cantidad * 30)
    let c = Math.round( Math.random() * cantidad * 30)
    
    if(cantidad === 0){
        $('#carroUpdate').hide()

    }else
    $('#carroUpdate').show()
    $('#boton-carrito').css({
        "opacity" : parseInt(cantidad),
        "background" : `rgb(${b}, ${a}, ${c})`
    })

}




function removeShoppingCartItem(event) {

    const buttonClicked = event.target;

    buttonClicked.closest('.shoppingCartItem').remove()

    updateShoppingCartTotal()
}

function quantityChanged (event) {

    const shoppingCartItemQuantity = event.target;

    shoppingCartItemQuantity.value <= 0 ? (shoppingCartItemsContainer.innerHTML= '') : null;


    updateShoppingCartTotal()

}
function comprarButtonClicked () {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
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

  
