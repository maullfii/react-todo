import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import TaskListContextProvider from '../context/TaskListContext';

const App = () => {
    return (
        <TaskListContextProvider>
            <div>
                <Header />
                <TaskForm />
                <TaskList />
            </div>
        </TaskListContextProvider>
    );
};

export default App;
