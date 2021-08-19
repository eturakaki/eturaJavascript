
//                                       INGRESO DE USUARIO
//Ingreso de edad
let edad = parseInt(prompt("Ingrese su edad"))

while(edad <= 17){
    
    edad=parseInt(prompt("Usted es menor de edad, Ingrese nuevamente"))

}alert("Ud es mayor de edad, puede ingresar")

console.log(edad)

//Ingreso de usuario
let admin = prompt("Ingrese usuario").toLowerCase()

while( admin !== "kaki" && admin !== "sofi"){
    edad=prompt("Usted no es un admin").toLowerCase()
}alert ("Bienvenido")

console.log(admin)


let pass = parseInt(prompt("Ingrese contraseña"))

while(pass !== 160200){
    pass = parseInt(prompt("Contraseña Incorrecta, Ingrese nuevamente")) 
}alert("Ingreso Correcto")

if ((admin === "kaki" && pass === 160200) || (admin === "sofi" && pass === 160200)){
    console.log("Disfrute crack")
}   

switch(admin){
    case "kaki":
        alert("Bienvenido Kaki")
        break
    case "sofi":
        alert("Bienvenida Sofi")
    break

    default:
        alert("No sos un Admin")
    break
} 
