import React from 'react';
import './form.css';
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
    const {setOpenModal, addTodo} = React.useContext(TodoContext);
    const [valueTodo, setValueTodo] = React.useState('');

    const saveTodo = (event) => {
        event.preventDefault();
        addTodo(valueTodo);
        setOpenModal(false);
    }

    const cancel = () => {
        setOpenModal(false);
    }

    const getValue = (event) => {
        setValueTodo(event.target.value);
    }

    return (
        <form className="form" onSubmit={saveTodo}>
            <label>Escribe tu nuevo TODO</label>
            <textarea onChange={getValue} value={valueTodo}></textarea>
            <div className='form__container-buttons'>
                <button type="button" onClick={cancel} className='form__button form__button--cancel'>Cancelar</button>
                <button type="submit" className='form__button form__button--add'>Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }