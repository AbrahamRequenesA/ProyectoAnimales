function iniciar(){
    var imagenes = document.querySelectorAll('#animals > canvas');
    const canvases = document.querySelectorAll('.canvas');
    canvases.forEach(canvas => {
        canvas.addEventListener('dragover', eventoOver);
        canvas.addEventListener('drop', soltado);
      });

    for (let i = 0; i < imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
        imagenes[i].addEventListener('dragend', finalizado, false);
    }
}


function eventoEnter(e){
    console.log("Evento de dragenter");
    e.preventDefault();
}

function eventoOver(e){
    console.log("Evento de dragOver");
    e.preventDefault();
}

function finalizado(e){
    elemento = e.target;
    //elemento.style.visibility = 'hidden';
    console.log("funcion finalizado");
}

function arrastrado(e){
    elemento = e.target;
    const offsetX = e.target.width / 2;
    const offsetY = e.target.height / 2;
    e.dataTransfer.setDragImage(e.target, offsetX, offsetY);
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log("funcion arrastrado");
}

function soltado(event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    
    // Obtener el nombre del canvas del animal que se está arrastrando
    const nombreAnimal = draggableElement.getAttribute('name');

    const canvasId = event.target.id;

    // Obtener el nombre del canvas del hábitat donde se está colocando el animal
    const nombreHabitat = document.getElementById(canvasId).getAttribute('name');

    const canvas = document.getElementById(canvasId); // Obtener el canvas objetivo
    const ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    //Configuracion para determinar si el animal y el habitat son correctos
    if(nombreAnimal == nombreHabitat){
        ctx.drawImage(draggableElement, 100, 150, 200, 200);
        elemento.style.visibility = 'hidden';
        //Agregar funcion para incrementar puntaje
        console.log("Correcto");
    }else{
        console.log("Incorrecto");
        //Agregar funcion para decrementar puntaje
    }


    // Dibujar la imagen arrastrada sobre el canvas en las coordenadas x, y
    
}


window.addEventListener('load', iniciar, false);