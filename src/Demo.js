import React, {
    Component
} from 'react';
import './Demo.css';
import ReactDOM from 'react-dom';

//class type component
// class Demo extends Component {
//     render() {
//         return <div className='main'>
//         {/* <div class='main'>  can't write class javascript key work .... read has className */}  
//             <h4> Demo Component is loaded.. </h4>
//             <p>  Position: {this.props.position}</p>
//         </div>
       
//     }
// }

// function type component

const Demo = (props) =>{
    return <div className='main'>
    {/* <div class='main'>  can't write class javascript key work .... read has className */}  
        <h4> Demo Component is loaded.. </h4>
        <p>  Position: {props.position}</p>
    </div>
}

export default Demo;