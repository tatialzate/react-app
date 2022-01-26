import React from 'react';
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <h1>Has completado {completedTodos} de {totalTodos} TODOs</h1>
    );
}

export { TodoCounter }
