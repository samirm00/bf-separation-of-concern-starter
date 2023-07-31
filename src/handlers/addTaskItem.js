import { data, dom } from '../data.js';
import createTask from '../components/createTask.js';

const addTaskList = (value) => {
    if (dom.submitBtn.innerText === 'Edit') {
        // update UI
        const editedTask = document.querySelector('.selected');
        editedTask.querySelector('.task-title').innerText = value;

        // Update data
        const id = Number(editedTask.id);
        const taskData = data.tasks.find((task) => task.id === id);
        taskData.text = value;

        editedTask.classList.remove('selected');
        dom.submitBtn.innerText = 'Submit';
        dom.usersInput.value = '';
    } else {
        // add to data
        if (value === '') {
            dom.error.innerText = 'the text can not be empty';
            dom.error.classList.add('error1');
            return;
        }

        const newTask = {
            id: data.id++,
            text: value,
        };
        data.tasks.push(newTask);

        const newTaskDom = createTask(newTask);
        dom.taskList.insertBefore(newTaskDom, dom.taskList.firstChild);
        dom.usersInput.value = '';
    }
};

export default addTaskList;
