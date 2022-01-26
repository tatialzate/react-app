import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const {items: todos, saveItems: saveTodos, loading, error} = useLocalStorage('TODOS', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal]= React.useState(false);

    const totalTodos = todos.length;
    const completedTodos = todos.filter( todo => todo.completed).length;

    let filteredTodos = [];

    if(searchValue.length < 1){
        filteredTodos = todos;
    }else {
        filteredTodos = todos.filter((todo)=>{
        const searchText = searchValue.toLocaleLowerCase();
        const todoText   = todo.text.toLocaleLowerCase();

        return todoText.includes(searchText);
        })
    }

    const addTodo = (text) => {
        let newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text
        })
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex( (todo)=> todo.text === text);

        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        let newTodos = [...todos];
        //const indexTodo = todos.map((todo)=> todo.text).indexOf(text);
        const indexTodo = todos.findIndex((todo)=> todo.text === text);
        newTodos.splice(indexTodo, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{ 
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal, 
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }