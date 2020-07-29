import React from 'react';
import './ToDoList.css'

const ToDoItems = (props) => {

    return (
        <>
            <div>
                <button className='subtractButton' onClick={ () => {
                    props.onSelect(props.id)
                }}>-</button>
                <li> {props.text}</li>
            </div>
        </>
    )
}

export default ToDoItems;