import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';


const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext);
    return (
        <li>
            <span>{task.title}</span>
            <div>
                <button onClick={() => removeTask(task.id)}> Hapus
                    <i></i>
                </button>
                <button onClick={() => findItem(task.id)}> Edit
                    <i></i>
                </button>
            </div>
        </li>
    );
};

export default Task;
