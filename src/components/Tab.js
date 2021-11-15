import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import {  Container} from 'react-bootstrap';
import Character from './Character';
import Planets from './Planets';
import { useState } from 'react';


const Tab = ({callPlanet, callCharacter}) => {
    const [isDisplay, setIsDisplay] = useState(false);
    

    
    return (
        <div>
            <Container >
               <div className="link-wraper ">
                   <button className="character-link m-3" onClick={()=> setIsDisplay(false)}> PLANETS</button>
                   <button className="character-link" onClick={()=> setIsDisplay(true)}>CHARACTERS</button>
                   
                   {isDisplay? <Character character={callCharacter}/> : <Planets planet={callPlanet}/> }
                   
                   
               </div>
            </Container>
        </div>
    )
}

export default Tab
