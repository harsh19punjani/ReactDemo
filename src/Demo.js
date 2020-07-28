import React, {
    Component
} from 'react';
import './Demo.css';
import ReactDOM from 'react-dom';

class Demo extends Component {
    constructor() {
        super();
        this.State = {
            name: "from state"
        }
       
    }
 
    click = () => {
            this.setState({ name: 'new state value' }, () => 
            console.log(this.state.name));
    }
    

    render() {
        return <div className='main'>
            {/* <div class='main'>  can't write class javascript key work .... read has className */}
            <h4> {this.State.name} </h4>
            <p>  Position: {this.props.position}</p>
            <button onClick={this.click}>click to change</button>
        </div>

    }
}

// function type component

// const Demo = (props) =>{
//     return <div className='main'>
//     {/* <div class='main'>  can't write class javascript key work .... read has className */}  
//         <h4> Demo Component is loaded.. </h4>
//         <p>  Position: {props.position}</p>
//     </div>
// }

export default Demo;