
import React, {useEffect } from 'react'
import Header from './components/Header';
import Tab from './components/Tab';
import Character from './components/Character';
import Planets from './components/Planets';
import Alpha from './components/Alpha';
import Jane from './components/Jane';
import Loader from './components/Loader';

import './index.css';
import { useState } from 'react';




function App() {

  //for Loader
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  //end of Loader 



  const [isPlanet, setPlanet] = useState(false);

  const togglePlanet = () => {
    setPlanet(!isPlanet) 
  }

  const [isCharacter, setCharacter] = useState(false);

  const toggleCharacter = () => {
    setCharacter(!isCharacter)
  }

  return (

    <>
    {loading === false ? (


    <div className="App">
      
    <Header/>
    <Tab callPlanet={togglePlanet} callCharacter={toggleCharacter}/>
    {isPlanet && <Alpha/>}
    {isCharacter && <Jane/>}
    
    
    </div>
  ) : (
    <Loader />
  )}
     </>
  );
}

export default App;
