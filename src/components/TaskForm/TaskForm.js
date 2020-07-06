import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
import './TaskForm.css';

const TaskForm = () => {
	const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

	const [title, setTitle] = useState('');

	const handleChange = e => {
		setTitle(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (editItem === null) {
			addTask(title);
			setTitle('');
		} else {
			editTask(title, editItem.id);
			setTitle('');
		}
	};

	useEffect(() => {
		if (editItem !== null) {
			setTitle(editItem.title);
			console.log(editItem);
		} else {
			setTitle('');
		}
	}, [editItem]);

	return (
		<form className="taskFormContainer" onSubmit={handleSubmit}>
			<input type="text" onChange={handleChange} value={title} />
			<div className="buttonGroup">
				{editItem === null ? (<button className="taskSubmit" type="submit">Add Task</button>) : (<button className="taskSubmit" type="submit">Edit Task</button>)}
				<button className="taskClear" type="button" onClick={() => clearList()}>Clear</button>
			</div>
		</form>
	);
};

export default TaskForm;
