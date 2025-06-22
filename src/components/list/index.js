export default function ListComponent(props) {
   return (
      <>
         <h2>👋 Participantes daily:</h2>
         {
            (<ul className="customList" style={{listStyleType:'none'}}> 
            {
               props.names && 
               props.names.map((name, index) => 
                  <li key={index}> 
                     <label className="container"> { name[0] }
                        <input 
                           type="checkbox" 
                           onChange={() => props.change(index)} 
                           defaultChecked={name[1] && true}>   
                        </input>
                        <span className="checkmark"></span>
                     </label>
                     
                  </li>)
               }
            </ul>)
         }

      </> 
   );
}