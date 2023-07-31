import { data, dom } from '../data.js';
import editTaskFunc from '../handlers/editTaskHandlee.js';
import deleteTask from '../handlers/deleateTaskHandler.js';

function createTask(taskData) {
    // create div
    const container = document.createElement('div');
    container.classList.add('added-task');
    container.id = taskData.id;

    // create title
    const title = document.createElement('p');
    title.innerText = taskData.text;
    title.classList.add('task-title');

    // create buttons container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('buttons-container');

    // create edit button
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.innerHTML = '<i class="fas fa-edit"></i>';

    // add event
    btnEdit.addEventListener('click', () => {
        dom.submitBtn.innerText = 'Edit';
        container.classList.add('selected');
        editTaskFunc(taskData.id);
    });

    // create delete button
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-btn');
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';

    // add event
    btnDelete.addEventListener('click', () => {
        deleteTask(taskData.id);
    });

    // append
    btnContainer.append(btnEdit, btnDelete);
    container.append(title, btnContainer);

    return container;
}

export default createTask;
