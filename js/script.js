export {encriptar, desencriptar};
function encriptar(mensaje, clave) {
    var codCaracter;
    var nuevoCaracter;
    var msgEncriptado=""
    for (let i = 0; i < mensaje.length; i++) {
        codCaracter = mensaje.charCodeAt(i);
        nuevoCaracter = conseguirCaracter(codCaracter,clave);
        msgEncriptado += String.fromCharCode(nuevoCaracter);
       
    }
    return msgEncriptado;
}

function desencriptar(mensaje, clave) {
    clave = clave *-1;
    var codCaracter;
    var nuevoCaracter;
    var msgDesencriptado="";
    for (let i = 0; i < mensaje.length; i++) {
        codCaracter = mensaje.charCodeAt(i);
        nuevoCaracter = conseguirCaracter(codCaracter,clave);
        msgDesencriptado += String.fromCharCode(nuevoCaracter);
       
    }
    return msgDesencriptado;
}

function conseguirCaracter(codCaracter,clave) {
    let posicion;
    let tipoCaracter = validarTipo(codCaracter);
    let cantCaracteres;

    //los demas
    if (tipoCaracter === 0) {
        return codCaracter;
    }

    //numeros
    if (tipoCaracter === 48) {
        cantCaracteres = 10
    }
    //mayusculas y minusculas
    if (tipoCaracter === 65 || tipoCaracter === 97) {
        cantCaracteres = 26;
    }
    //hallar la nueva posicion
    posicion = (codCaracter - tipoCaracter + clave)%cantCaracteres;
    if (posicion<0) {
        posicion=cantCaracteres+posicion;
    }
    return (posicion + tipoCaracter);
}   


function validarTipo(codCaracter) {
   let tipoCaracter;
   if (codCaracter>=48 && codCaracter<=57) {
     return tipoCaracter= 48; //numero
   } 
   if (codCaracter>=65 && codCaracter<=90) {
    return tipoCaracter = 65; //mayuscula
   }
   if (codCaracter>=97 && codCaracter<=122) {
    return tipoCaracter = 97; 
   }
   return tipoCaracter = 0;
}
 