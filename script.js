var turnos = 0;
var turnoActual = 0;
function mostrarAviso(titulo,mensaje) {
    var htmlMensaje;
    htmlMensaje = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">`;
    htmlMensaje += `<div class="toast-header">`;
    htmlMensaje += `<img src="..." class="rounded me-2" alt="...">`;
    htmlMensaje += `<strong class="me-auto">${titulo}</strong>`;
    htmlMensaje += `<small class="text-muted">Cuberos' Fish shop</small>`;
    htmlMensaje += `<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>`;
    htmlMensaje +=  `</div>`;
    htmlMensaje += `<div class="toast-body">${mensaje}</div>`;

    return htmlMensaje;
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const listaTurno = document.getElementById('lista-turno');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const descriptionInput = document.getElementById('description');

        const name = nameInput.value.trim();
        let description = descriptionInput.value.trim();

        //if (name !== '' && description !== '') {
        if (name !== '' ) {
            turnos++;
            if (turnos == 1) {
                turnoActual = turnos;
            }
            turnoAct.innerHTML = `Turno: ${turnoActual}`;
            turnosHoy.innerHTML = `Último turno: ${turnos}`;
            //const listItem = document.createElement('li');
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item','d-flex','justify-content-between','align-items-start');
            //htmlMontaLista = `<button class="delete-btn">X</button> <span class="li-turno">&nbsp;${turnos}&nbsp;</span> `;
            //htmlMontaLista += `<span class="li-turno-contenido"><strong>${name} </strong> ${description}</span>`; 

            htmlMontaLista =`<div class="ms-2 me-auto">`;
            htmlMontaLista += `<div class="fw-bold">${name}</div>`;
            htmlMontaLista += `${description}</div>`;
            htmlMontaLista += `<span> <button type="submit" class="btn btn-danger delete-btn">Siguiente</button>`
            //</span><span class="badge bg-primary rounded-pill">${turnos}</span>`;
           
            listItem.innerHTML = htmlMontaLista;
            listaTurno.appendChild(listItem);

            
            
            // Limpiar los campos del formulario después de enviar
            nameInput.value = '';
            descriptionInput.value = '';

        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    // Agregar un listener al contenedor de la lista
    listaTurno.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            // Eliminar el elemento padre (el <li>) del botón presionado
            event.target.parentNode.remove();
            turnoActual++; 
            turnoAct.innerHTML = `Turno: ${turnoActual}`;
        }
    });
});
