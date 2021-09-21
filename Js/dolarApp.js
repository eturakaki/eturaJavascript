
const padrecarts = document.getElementsByClassName("padre-carts")
let datos = []
const datosCripto = "https://criptoya.com/api/binancep2p/buy/dai/ars/20"




$.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales", (response, status) => {
  
  datos = response
  

  datos.forEach( (element) => {
    
    $('#caja-valoresDolar').append(`
                              <tr>
                              <td class="colNombre">
                                  <span class="nombre">${element.casa.nombre}</a></span><span class="time">
                              </td>
                              <td class="colCompraVenta">
                                  $ ${element.casa.compra}
                              </td>
                              <td class="colCompraVenta" >
                                  $ ${element.casa.venta}
                              </td>
                              
                              <td class="colVariacion">
                                  <span class="variacion"><span class="alza"><i class="fa fa-arrow-up"></i> ${element.casa.variacion} %</span></span>
                              </td>
                              <td class="colSpread">
                                  ${element.casa.agencia}
                              </td>
                              <td class="colFecha">
                                  
                                  <abbr class="timeago date" itemprop="datePublished" datetime="2021-09-15T17:59:00-03:00" title="miércoles, 15 de septiembre de 2021 17:59 Argentina">hace 2 horas</abbr>
                              </td>
                          </tr>
    `)
  });
})

mostrarProductos(bancos)

function mostrarProductos (array){
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
    padrecarts.innerHTML = ''
    console.log(array)
    array.forEach( (element) => {
        fetch("${elemento[0]}")
            .then((res) => res.json())
            .then((data) =>{
                console.log(data)
            })
    });
}