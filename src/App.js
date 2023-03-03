import './App.css';
import { useRef, useState, useEffect } from 'react';
import ListComponent from './components/list';
import RandomListComponent from './components/randomList';

function App() {

  let [clicked, setClicked] = useState(false);
  let [names, setNames] = useState(
  [
    [" 💯 Prystu 😎", true],

    [" 🔙 Valen", true],
    [" 🔙 Augusto", true],
    [" 🔙 Ariel", true],
    [" 🔙 Fede", true],
    [" 🔙 Fabi", true],

    [" 🔨 Agus", true],
    [" 🔨 Mariano", true],

    [" 👁‍🗨 Nico", true],
    [" 👁‍🗨 Cristian", true],
    [" 👁‍🗨 Daco", true],
    
    [" 📱  Stepan", true],
    [" 📱  Eze", true],
    [" 📱  Gonza", true],

    [" 📊 Lean", true],

    // Not accepted meet

    [" 👁‍🗨 Diego", false],
  ]);

  let [sortedNames, setSortedNames] = useState(null);

  const inputNames = useRef('');

  const getBest = () => {
    return names[0];
  }

  const handleOnChange = (position) => {
    if(position != null){
      const newNames = [...names];
      newNames[position] =  [names[position][0], !names[position][1]];
      setNames(newNames);
    }
   }

   const cmdSort = () => {
    let selectedNames = names.filter(name => name[1] == true);
    
     if((!sortedNames || !clicked) && selectedNames.length){
      setClicked(true);
      cmdShuffle(selectedNames);
     }
  }

  const cmdShuffle = (selectedNames) => {

    
    let currentIndex = selectedNames.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [selectedNames[currentIndex], selectedNames[randomIndex]] = [selectedNames[randomIndex], selectedNames[currentIndex]];
    }
    setSortedNames(selectedNames);
  }

  
  const cmdAdd = () => {
    if(inputNames.current.value != ''){
      var newParticipant = [[inputNames.current.value, true]];
      inputNames.current.value = '';
      setNames(names => names.concat(newParticipant));
    }
  }

  useEffect(()=>{
    console.log('useEffect', names);
  }, [names]);

  return (
    <div className="App">
      <header className="App-header">
        <p> DAILY - Goalsetter </p>
        <a
          className="App-link"
          href="https://goalsetter.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          200OK Team
        </a>
        {/* <h3>El mejor del equipo es:</h3> {getBest(names)} */}

        { !clicked && <h3>Agregar participantes</h3>}
        
        
        { !clicked && 
          <input 
            type="text" 
            pattern="[0-9]*"
            placeholder="Ingrese nombre" 
            ref={inputNames} >
          </input>}
        <br></br>
        
        { !clicked && <button onClick={cmdAdd}> Agregar</button>}

        { !clicked && <ListComponent names={names} change={handleOnChange}></ListComponent> }
        
        { (names.filter(name => name[1] == true).length < 2) && <span className='warning'>Debe seleccionar al menos dos participantes</span>}
        
        { !clicked && (<button disabled={names.filter(name => name[1] == true).length < 2} onClick={cmdSort}> Sortear</button>)}
        
        { clicked && !!sortedNames && <RandomListComponent sortedNames={sortedNames}></RandomListComponent> }
        
        { !!sortedNames && clicked && <button onClick={() => setClicked(false)}> Volver</button>}
      
        <br></br>
      </header>
    </div>
  );
}


export default App;
