import React from 'react';
import './Clients.css';

import { ProjectsData } from '../../assets/Data';
const Clients = ()=>{
    return(
        <>
                <section id='clients' >
                    <div className='background-side'></div>
                    <div className='container'>
                        <div className='content'>
                            <h2 className='section-tittle'>in the words <br/> of our clients</h2>
                            <div className='clients-description'>
                                <p className='section-p'>Our client list speaks for itself. Since our earliest days, we’ve represented everything from start-ups to Fortune 50 companies with that same partnership approach and dedication at the core of every engagement. Every day, since 2010, we’ve been devoting our hearts and minds to our clients, achieving great successes and building lasting relationships:</p>
                                <ul className='clients-elements'>
                                    {
                                        ProjectsData.map(({tittle})=> <li className='section-p client-name'>{tittle}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
export default Clients;