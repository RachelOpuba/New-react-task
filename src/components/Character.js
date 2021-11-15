import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Card } from 'react-bootstrap';
import Jane from './Jane';
import { useState } from 'react';



const Character = ({character}) => {
    const [isToggle, setIsToggle] = useState(false);

    let characters  = [
        {   id: 1,
            image: 'images/character-7.png',
            planet: 'Brooklyn Simmons',
            pop: '23 friends'
        },

        {   id: 2,
            image: 'images/character-14.png',
            planet: 'Cameron Willaimson',
            pop: '23 friends'
        },

        {   id: 3,
            image: 'images/character-2.png',
            planet: 'Lesile Alexander',
            pop: '23 friends'
        },

        {   id: 4,
            image: 'images/character-8.png',
            planet: 'Kriston Watson',
            pop: '23 friends'
        },

        {   id: 5,
            image: 'images/character-5.png',
            planet: 'Jenny Wilson',
            pop: '23 friends'
        },

        {   id: 6,
            image: 'images/marvin.png',
            planet: 'Marvin Mckinney',
            pop: '23 friends'
        },

        {   id: 7,
            image: 'images/character-6.png',
            planet: 'Jerome Bell',
            pop: '23 friends'
        },

        {   id: 8,
            image: 'images/character-4.png',
            planet: 'Guy Hawkins',
            pop: '23 friends'
        },

        {   id: 9,
            image: 'images/character-10.png',
            planet: 'Robert Fox',
            pop: '23 friends'
        }

    ]


    const UniqueCharacter = characters.map(chara =>(
         
            
        <Card  key={chara.id} className="Container " onClick={character}>
            
            <Card.Img variant="top" src={chara.image} />
            <Card.Body>
                <Card.Title className="name">{chara.planet}</Card.Title>
                <Card.Text className="friends pb-5">
                {chara.pop}
                </Card.Text>
                
            </Card.Body>
        </Card>
        

    ))
   

    return (
        <div className="Container character">
            <Container>
                <div className="card-wraper " >
                
                    
                            <>{UniqueCharacter}</>
                    
                
                </div>
            </Container>
        </div>
    )
}

export default Character
