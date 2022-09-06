import { validatedString, validatedAverage }  from "./validated.js";



const btnAgregar = document.querySelector("#btn");

const btnmostrar = document.querySelector("#btnMostrar");



//propiedad y .addEventListener

btnAgregar.addEventListener("click",() =>{

    const nombre = document.querySelector("#nombre").value;

    const apellido = document.querySelector("#apellido").value;

    const promedio = document.querySelector("#promedio").value;

    const opcion = document.querySelector("#opcion").value;



    if (validatedString(nombre) && validatedAverage(apellido) && opcion != "0"){

        if  (isNaN(parseFloat(promedio)) && (validatedAverage(promedio))){

            console.log("validado");
            agregarEstudiante(nombre,apellido,promedio);

        }else{

            console.log("error promedio");

        }

    }else{

        console.log("error de datos");

    }



});