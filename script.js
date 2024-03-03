document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const infoList = document.getElementById('info-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const descriptionInput = document.getElementById('description');

        const name = nameInput.value.trim();
        const description = descriptionInput.value.trim();

        if (name !== '' && description !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span><strong>${name}:</strong> ${description}</span> <button class="delete-btn">Eliminar</button>`;
            infoList.appendChild(listItem);

            // Limpiar los campos del formulario después de enviar
            nameInput.value = '';
            descriptionInput.value = '';
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    // Agregar un listener al contenedor de la lista
    infoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            // Eliminar el elemento padre (el <li>) del botón presionado
            event.target.parentNode.remove();
        }
    });
});
