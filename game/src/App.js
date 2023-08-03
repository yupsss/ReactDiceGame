import { useState } from 'react';
import './App.css';
import Entry from './components/Entry';
import GamePlay from './components/GamePlay';




function App() {

  // import abc from "styled-components";

const [isGameStarted, setIsGameStarted] = useState(false);

const toggleGamePlay= () =>{
  setIsGameStarted((e) => !e );
};

  return (
    <>

      {
        isGameStarted ? <GamePlay/> : <Entry toggle = {toggleGamePlay}/>
      }

    </>
  );
}

export default App;