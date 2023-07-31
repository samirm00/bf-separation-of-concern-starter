import { data, dom } from './data.js';
import createTask from './components/createTask.js';

// default show some items
data.tasks.forEach((itemData) => {
    const task = createTask(itemData);
    dom.taskList.append(task);
});

import './listeners/submitTaskListener.js';
import './listeners/itemTaskListener.js';
import './listeners/deleteItemsListener.js';
