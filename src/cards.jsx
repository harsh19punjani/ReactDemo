import React, {useState} from 'react'

const Cards = (props) => {
    const [value, setvalue] = useState(0);
   
    return (
        <>
            <div>
                <h1>
                  Props Name:  {props.name}
                </h1>
                <h2>State value: {value}</h2>
                <button onClick={()=>setvalue(value+ 1)}>increment</button>
            </div>

        </>
    )
}

export default Cards;