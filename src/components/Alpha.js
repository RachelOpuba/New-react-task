import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Button} from 'react-bootstrap';
import { useState } from 'react';

const Alpha = () => {
    return (
        <div >
            
                <div className="alpha-wraper">
                    <div className="alpha-content py-5 px-4">
                       <h2 className="jane">Planet Alpha</h2>
                       <p className="jane-text">Planet Alpha is the place to be if you like everything
                            related to plnets. I know it's a bit meta, but come see for yourself
                       </p>
                       <p>Population<br/><span className="number">234</span> </p>
                       <div className="chara-details">
                        CHARACTERS
                        </div>
                        <div className="person-details d-flex ">
                            <div>
                                <img src="images/character-16.png" className="person-img my-2 me-3"/>
                            </div>
                            <div className="person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Darlene Robertson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="person-details d-flex py-2">
                            <div>
                                <img src="images/character-11.png" className="person-img my-2 me-3"/>
                            </div>
                            <div className="person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Katheryn Murphy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="person-details d-flex py-">
                            <div>
                                <img src="images/character-3.png" className="person-img my-2 me-3"/>
                            </div>
                            <div className="person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Jenny Willson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="person-details d-flex ">
                            <div>
                                <img src="images/character-5.png" className="person-img my-2 me-3"/>
                            </div>
                            <div className="person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Arlene McCoy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="person-details d-flex ">
                            <div>
                                <img src="images/character-2.png" className="person-img my-2 me-3"/>
                            </div>
                            <div className="person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Darrell Steward </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="person-details d-flex ">
                            <div>
                                <img src="images/character-16.png" className="person-img my-2 me-3"/>
                            </div>
                            <div className="person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Bessie Cooper </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>





                    </div>
                    
                </div>

        </div>
    )
}

export default Alpha

