import React from "react";

export default function RandomListComponent (props){
   const getCurrentDay =() => {
      const dayNames = [
         "Domingo",
         "Lunes 🌧😭",
         "Martes 💪⚡",
         "Miércoles 🧘‍♂️🧘‍♀️",
         "Jueves 🥱😫",
         "Viernes 🎉🥳",
         "Sabado"
      ];
      return dayNames[new Date().getDay()]
   };
   return (
      <React.Fragment>
         <h2> 🖖👉Lista daily {getCurrentDay()}</h2>
         {
            (<ol> {props.sortedNames && 
               props.sortedNames.map((name, index) => name[1] ? <li key={index}>{ name[1] && name[0] }</li> : '' )}
            </ol>)   
         }

      </React.Fragment>
   );
}