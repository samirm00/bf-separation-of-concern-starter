import { data, dom } from '../data.js';

const editTaskFunc = (id) => {
    const task = data.tasks.find((taskItem) => taskItem.id === id);
    dom.usersInput.value = task.text;
};

export default editTaskFunc;
