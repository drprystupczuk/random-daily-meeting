export default function ListComponent(props) {
   return (
      <>
         <h2>👋 Participantes daily:</h2>
         {
            (<ul class="customList" style={{listStyleType:'none'}}> 
            {
               props.names && 
               props.names.map((name, index) => 
                  <li key={index}> 
                     <label class="container"> { name[0] } 
                        <input 
                           type="checkbox" 
                           onChange={() => props.change(index)} 
                           defaultChecked={name[1] && true}>   
                        </input>
                        <span class="checkmark"></span>
                     </label>
                     
                  </li>)
               }
            </ul>)
         }

      </> 
   );
}