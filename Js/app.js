/*

//calculos


const utilidad = (costo, beneficios) => {

    let resultado = beneficios - costo;
    
    return resultado
}


let costo1 = parseInt(prompt("Ingrese el costo total"));

let beneficios1 = parseInt(prompt("Ingrese los ingresos totales"));

let resultadoUtilidad = utilidad (costo1 , beneficios1)

console.log("Los costos que tiene son de: $" + costo1)
console.log("Los beneficios que obtuvo es de: $" + beneficios1)
console.log("La utilidad que tiene es de: $" + resultadoUtilidad)

let espacio = "-".repeat(75);
console.log(espacio)

const menosIva = (resultado, iva21 ) => {

        let resultadoMenosIva = resultado * iva21
        return resultadoMenosIva
    
    }
if(resultadoUtilidad > 0){
    
    let resultadoMenosIva1 = menosIva(resultadoUtilidad, 0.79)
    
    console.log("Tu beneficio final contando el impuesto al valor agregado [iva] es: $" + resultadoMenosIva1)
    
}else{
    alert("Tu utilidad es negativa")
}

//Intereses de plazos fijos 30 días

alert("rendimientos de plazo fijo")

const plazoFijo = (banco, monto) => {
    
    let interesM
    let interesTNA
    
    switch(banco.toLowerCase()){
        case "santander":
        case "galicia":
        case "bbva":
        case "hsbc":
        case "icbc":
        case "bancoNacion":
        case "provincia":
        case "macro":
        case "credicoop":
        case "ciudad":
            interesM = 1.0308;
            interesTNA = 1.37;
        break
        default:
        alert("Ingresaste un banco incorrecto")
    }

    return "Tu rendimiento Anual con una tasa del mensual del " 
    + ((interesM - 1 ) * 100) + "% " + " Y una Anual del " + ((interesTNA - 1 ) * 100) + "% "
    + " con el banco " + banco + " es de: " + " Mensualemente: " + (monto * interesM) + 
    " Anualmente: " + (monto * interesTNA); 
}


const pedirDatos = () => {

    let banco1 = prompt("Ingrese el banco a calcular: santander, galicia, bbva, hsbc, icbc ,bancoNacion, provincia, marcro, credicoop, ciudad").toLowerCase()
    let monto1 = parseInt(prompt("Ingrese monto a calcular"))
    return plazoFijo(banco1, monto1)
} 

console.log( pedirDatos())



class Monotributo{
    constructor(tipo, ingresos, supAfectada, energiaConsumidaAnual, alquileresDevengados ){
        this.tipo = tipo;
        this.ingresos = ingresos;
        this.supAfectada = supAfectada;
        this.energiaConsumidaAnual = energiaConsumidaAnual;
        this.alquileresDevengados = alquileresDevengados;
    }

    get obtenerTipo() {
        return this.tipo
    }
    set cambiarTipo(nuevoTipo) {
        this.tipo = nuevoTipo
    }
    get obtenerIngresos() {
        return this.ingresos
    }
    set cambiarIngresos(nuevoIngresos) {
        this.ingresos = nuevoIngresos
    }
    get obtenerSupAfectada() {
        return this.supAfectada
    }
    set cambiarSupAfectada(nuevosSupAfectada) {
        this.supAfectada = nuevosSupAfectada
    }
    get obtenerEnergiaConsumidaAnual() {
        return this.energiaConsumidaAnual
    }
    set cambiarEnergiaConsumidaAnual(nuevoEnergiaConsumidaAnual) {
        this.energiaConsumidaAnual = nuevoEnergiaConsumidaAnual
    }
    get obtenerAlquileresDevengados() {
        return this.alquileresDevengados
    }
    set cambiarAlquileresDevengados(nuevoAlquileresDevengados) {
        this.alquileresDevengados = nuevoAlquileresDevengados
    }

}

const monotributos = []

monotributos.push(new Monotributo ("Categoria A", "$ 370.000,00", "Hasta 30 m2", "Hasta 3330 Kw", "$ 105.916,77"  ))
monotributos.push(new Monotributo ("Categoria B", "$ 550.000,000", "Hasta 45 m2", "Hasta 5000 Kw", "$ 105.916,77"  ))
monotributos.push(new Monotributo ("Categoria C", "$ 770.000,00", "Hasta 60 m2", "Hasta 6700 Kw", "$ 211.833,52"   ))
monotributos.push(new Monotributo ("Categoria D", "$ 1.060.000,00", "Hasta 85 m2", "Hasta 10000 Kw", "$ 211.833,52"))
monotributos.push(new Monotributo ("Categoria E", "$ 1.400.000,00", "Hasta 110 m2", "Hasta 13000 Kw", "$ 263.951,28"))


console.log(monotributos)

let cat = prompt("Ingrese Su categoria de Monotributo: A, B, C, D, E").toUpperCase()

let monotributoIngresado = "monotributo" + cat




const pedirDatos = () => {

    while(cat !== "A" && cat !== "B" && cat !== "C" && cat !== "D" && cat !== "E" ){
        cat =  prompt("Ingrese correctamente su categoria de Monotributo: A, B, C, D, E").toUpperCase()
    }console.log("Tu categoría es: " + cat)


    const monotributoBuscado = monotributos.find( (monotributo) => monotributo.tipo = monotributoIngresado )

    return console.log("Datos según tu categoría: ", monotributoBuscado)
    
} 

console.log( pedirDatos())
*/

