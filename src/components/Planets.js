import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Card } from 'react-bootstrap';

const Planets = ({planet}) => {
    let planets  = [
        {   id: 1,
            image: 'images/planet-9.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 2,
            image: 'images/planet-8.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 3,
            image: 'images/planet-7.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 4,
            image: 'images/planet-6.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 5,
            image: 'images/planet-5.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 6,
            image: 'images/planet-1.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 7,
            image: 'images/planet-2.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 8,
            image: 'images/planet-4.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        },

        {   id: 9,
            image: 'images/planet-3.svg',
            planet: 'Planet Alpha',
            pop: 'Pop: 235'
        }

    ]

    

    const UniquePlanet = planets.map(plan =>(
        <Card  key={plan.id} className="Container" onClick={planet}>
            <Card.Img variant="top" src={plan.image} />
            <Card.Body>
                <Card.Title className="name">{plan.planet}</Card.Title>
                <Card.Text className="friends pb-5">
                {plan.pop}
                </Card.Text>
                
            </Card.Body>
        </Card>

    ))
    return (
        <div className="Container character">
        <div className="card-wraper p-3">
        
            
                    <>{UniquePlanet}</>
            
        
        </div>
    </div>
    )
}

export default Planets
