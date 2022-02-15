import React from 'react';

const TodoHeader = ({children}) => {
    return (
        /**Composición de componentes: Header ya no define su 
        *  contenido sino que lo hace el componente que llame a header -> AppUI
        */
        <header>
            {children}
        </header>

        //Sin composisión de componentes - MALA PRÁCTICA
        /*<header>
            <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </header>*/
    );
}

export { TodoHeader };