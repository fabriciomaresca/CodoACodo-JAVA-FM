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

function mostrar(){
    let nom=document.getElementById("nombre").value;
    let ape=document.getElementById("apellido").value;
    let mail=document.getElementById("email").value;
    let cantEnt=document.getElementById("cantEntradas").value;
    let porcDesc=document.getElementById("descPortipo").value;
    let descuento=(cantEnt*1000)*porcDesc/100;
    let precioTotal= (cantEnt*1000) - descuento;
    
    
    if (document.getElementById("descPortipo").value.porcDesc==80) {
        let catego="Estudiante";
        
    } else {
        if (document.getElementById("descPortipo").value==50) {
            let catego="Trainee";
        } else {
            let catego="Junior";
        }
        
    }
    

    let resumen = window.open("","_blank","width=500,height=400");
    resumen.document.open();
    resumen.document.write('<p style="color: green; font-size: 30px;">Informacion de Compra:</p>');
    resumen.document.write(' <p style="color: blue; font-size: 16px;">Nombre: </p>'+ nom);
    resumen.document.write(' <p style="color: blue; font-size: 16px;">Apellido: </p>'+ ape);
    resumen.document.write(' <p style="color: blue; font-size: 16px;">Email: </p>'+ mail);
    resumen.document.write(' <p style="color: blue; font-size: 16px;">Cantidad de Entradas: </p>'+ cantEnt);
    resumen.document.write(' <p style="color: blue; font-size: 16px;">Descuento: </p>'+"$"+ descuento);
    resumen.document.write(' <p style="color: blue; font-size: 16px;">Total a Pagar: </p>'+"$"+ precioTotal);
    document
    
    
}

function borrarDatos(event){
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener referencia al formulario y restablecer los campos
    let form = document.getElementById('formCompra');
    form.reset();
}