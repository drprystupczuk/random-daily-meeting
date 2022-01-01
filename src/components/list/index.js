import React from "react";
import './style.css';

export default function ListComponent(props) {


   return (
      <React.Fragment>
         <h2>Participantes daily:</h2>
         {
            (<ul class="customList"> {props.names && props.names.map((name, index) => 
            <li key={index}> 
               <label class="container"> {name[0]} 
                  <input 
                     type="checkbox" 
                     onChange={() => props.change(index)} 
                     defaultChecked={name[1] && true}>   
                  </input>
                  <span class="checkmark"></span>
               </label>
               
            </li>)}
            </ul>)
         }

      </React.Fragment> 
   );
}