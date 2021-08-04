
/*
//Estructuras If and else
const edad = parseInt(prompt("Ingrese su edad"))

if ( edad != 0 && edad > 0  ){
    if ( edad < 18 ){
        alert("Tienes prohibido el acceso debido a que eres menor de edad")
    }else{
        console.log("Acceso permitido")
        const admin = prompt("Ingrese usuario")
        if(admin !== "kaki" && admin != "sofi"){
            console.log("Su Usuario está incorrecto");
        }else{
            console.log("Usuario correcto")
        } 
        const pass = parseInt(prompt("Ingrese contraseña"))
        if( pass !== 160200){
            console.log("Su contraseña está erronea");
        }else{
            console.log("Contraseña correcta")
        }
        if ((admin === "kaki" && pass === 160200) || (admin === "sofi" && pass === 160200)){
            console.log("Disfrute crack")
        
        }else{
            console.log("Su logueo fue incorrecto")
        }
    }20 
            
}else{
    alert("NO INGRESASTE NADA")
}
*/




/*
for (let i = 0; i < 5; i++) {
    console.log("Hola Mundo")


}
console.log("Fin de la iteración")
*/

/*tabla de multiplicar
const tabla = parseInt(prompt("Ingrese la tabla a saber"))

for (let i = 1; i <= 10; i++) {
    let resultado = tabla * i
    alert(tabla + "*" + i + "=" + resultado)

}
*/
/* CONTADOR DE TURNOS
for (let i = 0 ; i <= 5; i++){
    const nombre = prompt("Ingrese su nombre")
    alert("Hola " + nombre + " su turno es el N°: " + i)
}


let triangulo = "#";

for (let i = 0; i < 9; i++) {
    triangulo += "#"
    console.log(triangulo)

}
//CONTADOR DE PISOS
const pisos = parseInt(prompt("Ingrese la cantidad de pisos"))
for (let triangulo = "#"; triangulo.length <= pisos; triangulo += "#"){
    console.log(triangulo)
    if(triangulo.length == 10){
        alert("Muy grande")
        break
    }
}

let palabraMagica

while ( palabraMagica !== "lautaro" ){
    palabraMagica= prompt("ingresá la palabra magica")
    
}

alert("Si adivinaste")

//NUMERO RANDOM ENTRE 1 Y 10
const numero = ( Math.round(Math.random() * 10 ))

let ingreso = parseInt(prompt("ingrese el número"))

while( ingreso !== numero){
    alert("EQUIVOCADO! JAJA")
    ingreso = parseInt(prompt("Ingrese el numero"))

}
alert("Adivinaste")
*/
let pass
do{
    pass = parseInt(prompt("Ingrese la contraseña"))
}while( pass !== 160200){
    alert("Contraseña correcta")
}