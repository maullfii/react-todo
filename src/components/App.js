import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm/TaskForm';
import Header from './Header/Header';
import TaskListContextProvider from '../context/TaskListContext';
import '../App.css';

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="appContainer">
                <Header />
                <TaskForm />
                <TaskList />
            </div>
        </TaskListContextProvider>
    );
};

export default App;
