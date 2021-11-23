var mayus=/^[A-Z]*$/
var numero = /^[0-9]*$/
var minuscula=/^[a-z]*$/ 

function validar(){
    var nombre=document.getElementById('nombre').value;
    var respuesta1=mayus.test(nombre);
    if(!respuesta1)
    {
        console.log("Ingresar valores en mayuscula");
    }
    else
    {
        console.log("correcto");
    }
    var apellido=document.getElementById('apellido').value;
    var respuesta2=minuscula.test(apellido);
    if(!respuesta2)
    {
        console.log("solo minusculas");
    }
    else
    {
        console.log("correcto");
    }
    var contraseña=document.getElementById('contraseña').value;
    var respuesta=numero.test(contraseña);
    if(!respuesta)
    {
        console.log("Ingresar solo numeros");
    }
    else
    {
        console.log("correcto");
    }
    return
}