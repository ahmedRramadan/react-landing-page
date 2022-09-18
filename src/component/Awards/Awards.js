import React from 'react';
import { AwardsData } from '../../assets/Data';
import './Awards.css';

const Awards = ()=>{
    return(
        <>
                <section id='awards' >
                    <div className='container'>
                        <div className='content'>
                            <h2 className='section-tittle'>Award recognition</h2>
                            <p className='section-p'>Awards are not an objective - we’re focused only on growing your brand - but we do feel a huge sense of professional pride when our work is recognised by the industry. We also should stress that awards are a big team effort, so shout-outs to all our amazing clients for their collaborations.</p>
                        <ul>
                            {
                                AwardsData.map((awardImg)=> <li><img className='award-img' src = {awardImg} alt = 'award' /></li>)
                            }
                        </ul>
                    </div>
                    </div>

                </section>
        </>
    )
}
export default Awards;