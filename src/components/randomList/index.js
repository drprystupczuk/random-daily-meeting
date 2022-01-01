import React from "react";

export default function RandomListComponent (props){
   return (
      <React.Fragment>
         <h2>Orden  daily:</h2>
         {
            (<ol> {props.sortedNames && 
               props.sortedNames.map((name, index) => name[1] ? <li key={index}>{ name[1] && name[0] }</li> : '' )}
            </ol>)   
         }

      </React.Fragment>
   );
}