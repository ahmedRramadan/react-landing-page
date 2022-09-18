import React from 'react';
import Awards from '../Awards/Awards';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import WhatWeDo from '../whatwedo/WhatWeDo';
import './Home.css'
const Home = ()=>{
    return(
        <>
            <div className='home'>
                <Main />
                <WhatWeDo />
                <Projects />
                <Clients />
                <Awards />
                <Footer />
            </div>
        </>
    )
}
export default Home;