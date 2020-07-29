import React, { useState, Component } from 'react'

// const Demo = () => {
//     // hook in react that will update any where
//     const [value, setValue] = useState(0);
//     return (
//         <div>
//             <h1>Counter: {value}</h1>
//             <button onClick={() => setValue(value + 1)}>Increment</button>&nbsp;
//             <button onClick={() => setValue(value - 1)}>Decrement</button>
//         </div>
//     )
// }

// using class with state object
class Demo extends Component {
    constructor() {
        super();
        this.state = {
          message: 'Hello Arjun'
        }
      }
    changeMessage() {
        this.setState(prevState => ({
          message: prevState.message + ' Khetia'
        }));
      }
    render() {
        return (
            <div>
                <div>
                    <h4>{this.state.message}</h4>
                    <button onClick={() => this.changeMessage()}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Demo;