/******Aqui capturamos los valores de los Texbox****** */
let mensaje = document.getElementById("caja-arriba-mensaje");
let tamano = document.getElementById("tamaño-fuente");
let colorFondo = document.getElementById("color-fondo");
let ancho = document.getElementById("ancho-caja");
let alto = document.getElementById("alto-caja");
/****************************************************** */


/***********Aqui es donde esta son los elementos a los cuales les vamos a tocar los atributos****/ 
let label = document.getElementById("label-mensaje");
let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor2");
/********************************* */
EjecutarTodasFunciones = () =>
{
    Fnmensaje();
    TamanoFuente();
    ColorFondo();
    anchoAltoCaja();
}

function Fnmensaje()
{
    label.innerHTML = mensaje.value; //el .value para sacarle el contenido del input
}
function TamanoFuente()
{
    /*Lo que estoy haciendo un este if es asegurarme de que le esten ingresando un numero para poder cambiar el tamano de la fuente
    si no es un numero pues va a tirar un mensaje*/
    if (tamano.value >= 0) {
        label.style.fontSize = tamano.value +'px';
    }
    else 
    {
        alert("Debes ingresar solo numeros en el tamaño de fuentes");
    }   
    
}
function ColorFondo()
{
    contenedor.style.backgroundColor = colorFondo.value;
}
/*Esta es otra manera de declarar una funcion */
anchoAltoCaja= () =>
{
    contenedor.style.width = ancho.value+ 'px';
    contenedor.style.height = alto.value+ 'px';
}
boton.addEventListener('click', TamanoFuente)


