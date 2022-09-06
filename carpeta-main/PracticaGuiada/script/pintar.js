const cardsEstudiantes = document.querySelector
("#cardsEstudiantes");
const estudiantes = [];


const pintarCard = (tipo) =>{
    tipo = tipo.toUppercase();
    const fragmento = document.createDocumentFragment();
    const templateEstudiante = document.querySelector("#templateEstudiante").textContent;
    if (tipo ==="ESTUDIANTE"){
        for( let i of estudiantes){
            
        }
    }
}

const agregarEstudiante = (name, lastName, avg)=>{
    let persona = {
        nombre: name,
        apellido: lastName,
        promedio: avg
    };
}

