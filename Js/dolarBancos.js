
const padrecarts = document.getElementById("padre-carts")

mostrarProductos(bancos)

function mostrarProductos (array){
    
    


    array.forEach(element => {
    
        
        
        
            padrecarts.innerHTML += `
                                        <div class="card " style="width: 18rem;">
                                            <div class="card-body">
                                            <h5 class="card-title"> ${element.nombre}</h5>
                                            <p class="card-text">.</p>
                                            <a href="#" class="btn btn-primary valordolar"> Compra:</a>
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
    

    array.forEach( (element) => {
        console.log(element)

        fetch(element)
            .then((res) => res.json())
            .then((data) =>{
                console.log(data.totalAsk)

                let length = data.length;

                console.log(data)

                for (let i = 0; i <= ; i++){
                console.log(1)
                }

                $('.valordolar').text(data.totalAsk)
                
            })


    });
}