import React from "react";
import { ReactComponent as CheckIcon} from './images/check.png'


const iconTypes = {
    "check": "holi",
    "delete": "bye"
};

const TodoIcon = ({type}) => {
    return(
        <span className={`icon--${type}`}>
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon }