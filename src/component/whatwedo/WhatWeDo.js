import React, { useEffect, useRef } from 'react';
import './WhatWeDo.css'
const WhatWeDo = ()=>{
    let sectionTwo = useRef()
    let square = useRef();
    let circle = useRef();
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= sectionTwo.current.offsetTop - 300 ){
            square.current.style.transform = 'scale(6)';
            circle.current.style.transform = 'scale(6)';
        }
    }
    )
    
    return(
        <>
            <div className='container'>
                <section id='whatWeDo' ref={sectionTwo} >  
                    <div className='content'>
                        <div className='section-details'>
                            <h2 className='section-tittle'>Our spotlight on the <br/> B2B tech landscape</h2>
                            <p className='section-p'>We love Irish B2B success stories and played a part in some ourselves. We can help if you’re an Irish B2B tech company looking to stand out in a crowded market or a multinational with a stretched marketing team in need of tactical support. We can play any role that’s needed, from supporting cast to leading the line.</p>
                            <button className='section-btn'>
                                GET SUPPORT FOR YOUR TEAM
                            </button>
                        </div>
                        <div className='two-kinds'>
                            <div className='irish'>
                                <span className='irish-square' ref={square}></span>
                                <h2 className='section-tittle'>Irish <br/>B2B Tech</h2>
                                <p className='section-p'>Want to expand your empire? Not growing fast enough? Would like to generate more or better leads from your website? We can help. From foundational positioning and strategy, we’ll help you go to market with a strong website and digital presence and help you get famous through content, branding, advertising and promotion.</p>
                                <button className='section-btn'>LET'S GROW TOGETHER</button>
                            </div>
                            <div className='Multinational'>
                                <span className='multi-circle' ref={circle}></span>
                                <h2 className='section-tittle'>Multinational <br/>B2B Tech</h2>
                                <p className='section-p'>Need a specialist B2B tech marketing agency to help grease the wheels of your marketing engine? We’re comfortable rolling up our sleeves and supporting large internal marketing departments to help get campaigns out the door. We supplement your capacity with planning, content, creative, design, copy, animation and video content expertise..</p>
                                <button className='section-btn'>WE'LL SUPPORT YOUR TEAM</button>
                            </div>
                        </div>
                    </div>
            </section>
            </div>

        </>
    )
}
export default WhatWeDo;