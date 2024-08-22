const preguntas = [
    '¿Cuál es el animal que siempre llega tarde?',
    '¿Qué es lo que puede llenar una habitación pero no ocupa espacio?',
    '¿Qué es lo que se rompe si lo dices en voz alta?',
    '¿Qué es  lo que tiene cuello pero no cabeza?',
    '¿Qué se puede romper sin tocarlo?',
    ]
    
    const opciones = [
        ['Perro','Gato','León','Tortuga'],
        ['El aire','La luz','El agua','El sonido'],
        ['Un sueño','Un cristal','Un libro','Un corazón'],
        ['Una botella','Una serpiente','Un arbol','Un libro'],
        ['Un vaso','Una promesa','Un plato','Un cristal']
    ]
    
    const clave = [
        ['G','E','T',"U"],
        ['Ñ',"R",'V','O'],
        ["K",'P','S','L'],
        ["A",'W','F','B'],
        ['X',"N",'C','M']
    ]
    
    var i = 0;
    var puntaje = "";
    var intervalo;
    
    document.getElementById('op1').addEventListener('click', function () {
        event.preventDefault()
        actualizarPuntaje(0);
       
    })
    document.getElementById('op2').addEventListener('click', function () {
         event.preventDefault()
        actualizarPuntaje(1);
    })
    document.getElementById('op3').addEventListener('click', function () {
         event.preventDefault()
        actualizarPuntaje(2);
    })  
    document.getElementById('op4').addEventListener('click', function () {
         event.preventDefault()
        actualizarPuntaje(3);
    })
    document.getElementById('siguiente').addEventListener('click', function () {
         event.preventDefault()
        actualizarPuntaje();
    })
    
    
     
    function mostrarPreguntas() {
        iniciarCronometro();
        document.getElementById('pregunta').innerHTML = preguntas[i];
        document.getElementById('op1').innerHTML = opciones[i][0];
        document.getElementById('op2').innerHTML = opciones[i][1];
        document.getElementById('op3').innerHTML = opciones[i][2];
        document.getElementById('op4').innerHTML = opciones[i][3];
    
    }
    
    function iniciarCronometro() {
        const duracion = 20;
        const cronometro = document.getElementById("cronometro");
        cronometro.textContent = "00:" + '20';
        checktiempo(duracion, cronometro);
    
    }
    function checktiempo(tiempo, elemento) {
        intervalo = setInterval(() => {
            if (tiempo == 0) {
                actualizarPuntaje();
            } else {
                tiempo = tiempo - 1;
                elemento.textContent = "00:" + tiempo;
            }
        }
            , 1000);
    }
    
    
    function actualizarPuntaje(valor) {
        clearInterval(intervalo);
        if(valor >=0 && valor<preguntas.length){
            console.log(valor)
          puntaje =   puntaje + clave[i][valor];  
        }
        
        i = i + 1;
        if (preguntas.length > i) {
            mostrarPreguntas();
        } else {
            mostrarResultado();
        }
    }
    
    function mostrarResultado(){
     document.getElementById("palabraDescifrada").innerHTML = puntaje;
     deshabilitarBotones()
    
    }
    
    function deshabilitarBotones(){
        document.getElementById("op1").setAttribute("disabled", "true");
        document.getElementById("op2").setAttribute("disabled", "true");
        document.getElementById("op3").setAttribute("disabled", "true");
        document.getElementById("op4").setAttribute("disabled", "true");
    
    }
    
    mostrarPreguntas();