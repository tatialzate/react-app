import React from "react";

import { TodoButton } from "../TodoButton/TodoButton";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { Modal } from "../Modal/modal";
import { TodoForm } from "../TodoForm/form";

const AppUI = () => {
    //Usando React Hook useContext
    const {loading, error, filteredTodos, completeTodo, deleteTodo, openModal} = React.useContext(TodoContext);
    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList>
            { loading && <p>No desesperes, estamos cargando tus TODOS</p> }
            { error && <p>¡Desespérate! Ocurrió un error</p> }
            { (!loading && !filteredTodos.length && !error) && <p>¡Crea tu primer TODO!</p>}
            { filteredTodos.map((todo, index) => (
                <TodoItem onComplete={()=>{completeTodo(todo.text)}} onDelete={()=>{deleteTodo(todo.text)}} id={index} key={index} text={todo.text} completed={todo.completed}/> 
            )
            )}
        </TodoList>
        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}
        <TodoButton/>
        </React.Fragment>
    );
    
    //Usando TodoContext.Consumer
    /*return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
        <TodoContext.Consumer>
            {({loading, error, filteredTodos, completeTodo, deleteTodo})=> (
                <TodoList>
                    { loading && <p>No desesperes, estamos cargando tus TODOS</p> }
                    { error && <p>¡Desespérate! Ocurrió un error</p> }
                    { (!loading && !filteredTodos.length) && <p>¡Crea tu primer TODO!</p>}
                    { filteredTodos.map((todo, index) => (
                        <TodoItem onComplete={()=>{completeTodo(todo.text)}} onDelete={()=>{deleteTodo(todo.text)}} id={index} key={index} text={todo.text} completed={todo.completed}/> 
                    )
                    )}
                </TodoList>
            )}
        </TodoContext.Consumer>
        
        <TodoButton/>
        </React.Fragment>
    );*/
}

export { AppUI }