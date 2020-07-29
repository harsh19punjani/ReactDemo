import React, { useState } from 'react';
import './ToDoList.css';
import ToDoItems from './ToDoItems';


const ToDoList = () => {

    // hooks created
    const [inputList, setInputList] = useState('');
    const [itemList, setitemList] = useState([]);

    const inputChange = (event) => {
        setInputList(event.target.value);
    }
    const addItem = () => {
        setitemList((oldvalue) => {
            return [...oldvalue, inputList]
        });
        setInputList('');
    }
    const deletItem = (id) => {
        setitemList((oldvalue) => {
            return oldvalue.filter((arrEle, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div className='MainDiv'>
                <div className='centerDiv'>
                    <h1>To Do List</h1>
                    <input type='text' placeholder='Add a Item' value={inputList} onChange={inputChange} />
                    <button className='addButton' onClick={addItem}> + </button>
                    <ol>

                        {
                            itemList.map((item, index) => {
                                return <div key={index}> 
                                    <ToDoItems key={index} text={item} id={index} onSelect={deletItem} />
                                </div>

                            })

                        }

                    </ol>
                </div>
            </div>
        </>
    )

}

export default ToDoList;