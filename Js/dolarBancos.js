
const padrecarts = document.getElementById("padre-carts")


mostrarProductos(bancos)

function mostrarProductos (array){
    
    


    array.forEach(element => {
    
        
        
        
            padrecarts.innerHTML += `
                                        <div class="card" style="width: 18rem;">
                                            <div class="card-body">
                                            <h5 class="card-title"> ${element.nombre}</h5>
                                            <p class="card-text">.</p>
                                            <div class="cantidadCarts">
                                            <a href="#" class="btn btn-primary valordolar"> Compra:</a>
                                            </div>
                                            </div>
                                    </div>
                                    `
        
    });

    nuevoArray(array)
    
    
}


function nuevoArray(array) {
    const infoBanco = []
    
    array.forEach( (elemento) => {
        return infoBanco.push(elemento.banco)  
  })

  

  infoApi(infoBanco)
  
}

function infoApi (array) {
    let divs = document.getElementsByClassName("cantidadCarts");
    let lengthDivs = divs.length

    console.log( lengthDivs)
    console.log(divs[2].children[0].innerHTML)
    
    array.forEach( (element) => {

        fetch(element)
            .then((res) => res.json())
            .then((data) =>{ 
                console.log(data)
                
                
               
                for (let i = 0; i <= lengthDivs ; i++){
                    
                    //divs[i].children[0].innerHTML= data.totalAsk
                    
                }

                
                
            })


    });
}
