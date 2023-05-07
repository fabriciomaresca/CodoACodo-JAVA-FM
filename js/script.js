function calcularPrecio(){
    /* Cantidad de entradas seleccionadas por el usaurio */
    let cantEnt=document.getElementById("cantEntradas").value;

    /* Porcentaje de descuento, segun persona que sea, selecionada por el usuario */
    let porcDesc=document.getElementById("descPortipo").value;
    /* Calculo descuento */
    let descuento=(cantEnt*1000)*porcDesc/100;

    /* Total a pagar */
    let precioTotal= (cantEnt*1000) - descuento;
    
    /*  modifica el precio total para que se vea en pantalla*/
    document.getElementById("total").value=precioTotal;


}