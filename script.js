var turnos = 0;
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
            if (description !== '') {
                description = '"'+description+'"';
            }
            turnos++;
            turnosHoy.innerHTML = `Último turno entregado: ${turnos}`;
            const listItem = document.createElement('li');
            htmlMontaLista = `<button class="delete-btn">X</button> <span class="li-turno">&nbsp;${turnos}&nbsp;</span> `;
            htmlMontaLista += `<span class="li-turno-contenido"><strong>${name} </strong> ${description}</span>`;
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
        }
    });
});
