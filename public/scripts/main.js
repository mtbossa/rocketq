import Modal from './modal.js';

const modal = Modal();
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

const checkButtons = document.querySelectorAll('.actions a.check');
checkButtons.forEach(button => {
    button.addEventListener('click', handleActionsClick);
});

const deleteButton = document.querySelectorAll('.actions a.delete');
deleteButton.forEach(button => {
    button.addEventListener('click', (event) => handleActionsClick(event, false));
});

function handleActionsClick(event, check = true) {
    event.preventDefault();      
    
    const questionId = event.target.dataset.id;
    const slug = check ? 'check' : 'delete';
    const roomId = document.querySelector('#room-id').dataset.id;
    const form = document.querySelector('.modal form');
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

    const text = check ? 'Marcar como lida' : 'Excluir';
    modalTitle.innerHTML = text;
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`;
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

    modal.open();
}