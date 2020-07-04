import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';

const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    return (
        <div>
            {tasks.length ? (
                <ul>
                    {tasks.map((task) => {
                        return <Task task={task} key={task.id} />;
                    })}
                </ul>
            ) : (<h5>No Task</h5>)}
        </div>
    );
};

export default TaskList;
