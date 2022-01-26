import React from "react";

const TodoItem = (todo) => {
    return(
        <li>
            <input onClick={todo.onComplete} className="icon--check" type="checkbox"/>
            <p id={todo.id} className={`${todo.completed && 'item--completed'}`}>{todo.text}</p>
            <span onClick={todo.onDelete} className="icon--delete">X</span>
        </li>

    );
}

export { TodoItem }