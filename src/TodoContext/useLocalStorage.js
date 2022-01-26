import React from "react";

const useLocalStorage = (itemName, valueByDefault) => {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [items, setItems] = React.useState(valueByDefault);

    //Manejo de efectos (Eventos externos) ejecuta todo el código que contiene antes de renderizar nuestro componente
    React.useEffect(()=> {
        setTimeout(()=>{
            try {
                const localStorageItems = localStorage.getItem(itemName);
                let parseItems;
            
                if(localStorageItems) {
                    parseItems = JSON.parse(localStorageItems);
                } else {
                    localStorage.setItem(itemName, JSON.stringify(valueByDefault));
                    parseItems = valueByDefault;
                }
                setItems(parseItems);
                setLoading(false);
                console.log('useEffect');
            }
            catch(e){
                setError(e);
                }
            }, 1000);
        },[]); //Arreglo vacío indica que solo se ejecute una vez
    
    const saveItems = (newItems)=>{
        try{
            localStorage.setItem(itemName, JSON.stringify(newItems));
            setItems(newItems);
        }catch(e){
            setError(e);
        }
    }

    return {items, saveItems, loading, error}; //Cuando se envían más de dos argumentos ya no se envía un array sino un objeto
}

export { useLocalStorage }