import React from 'react';
import { TodoContext } from '../TodoContext';

const TodoButton = () => {
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    const onClickButton = () => {
        console.log('Click');
        setOpenModal(!openModal);
    }

    return(
        <button onClick={onClickButton} className='btnAddTodo'>+</button>
    );
}

export { TodoButton }