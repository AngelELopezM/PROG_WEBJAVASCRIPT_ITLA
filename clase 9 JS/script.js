let diametro = prompt("ingrese el diametro de la goma en cm")
let grosor = prompt("ingrese el grosor de la goma en cm")

if (diametro > 1.4) 
{
    if (grosor < 0.4) 
    {
        console.log("El grosor de esta rueda es inferior al recomendado")
    }
    else
    {
        console.log("La rueda es para un vehiculo grande")
    }
    
}
else if (diametro <=1.4 && diametro > 0.8) 
{
    if (grosor < 0.25) 
    {
        console.log("El grosor de esta rueda es inferior al recomendado")
    }
    else
    {
        console.log("La rueda es para un vehiculo mediano")
    }
    
}   
else
{   
    console.log("La rueda es para un vehiculo pequeño")
}  