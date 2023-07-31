import { data, dom } from '../data.js';

const deleteTask = (id) => {
    // delete task from the data
    data.tasks = data.tasks.filter((task) => task.id !== id);

    // remove task from the UI
    document.getElementById(id).remove();

    dom.submitBtn.innerText = 'Add task';
    dom.usersInput.value = '';
};

export default deleteTask;
