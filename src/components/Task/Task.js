import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
import './Task.css';

const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext);
    return (
        <div className="taskContainer">
            <li className="listTask">
                <span className="taskItem">{task.title}</span>
                <div className="taskAction">
                    <button className="taskRemove" onClick={() => removeTask(task.id)}> Hapus
                    <i></i>
                    </button>
                    <button className="taskEdit" onClick={() => findItem(task.id)}> Edit
                    <i></i>
                    </button>
                </div>
            </li>
        </div>
    );
};

export default Task;
