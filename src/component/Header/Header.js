import React, { useRef, useState } from 'react';
import './Header.css'
const Header = ()=>{
    const menuIcon = useRef()
    const [showMenu, setShowMenu] = useState(true)
    window.onscroll = ()=>{
        if(window.scrollY >= 200){
            menuIcon.current.style.opacity = 1;
        }else{
            menuIcon.current.style.opacity = 0;

        }
    }
    return(
        <>
            <header>
                    <nav>
                        <a href='#home'> 
                            <div className='logo'>
                                <div>
                                    <div className='square'></div>
                                    <div className='circle'></div>
                                </div>
                                <h1>castledot</h1>
                            </div>
                        </a>
                        <ul>
                            <li><a href='#Home'>Home</a></li>
                            <li><a href='#whatWeDo'>what we do</a></li>
                            <li><a href='#projects'>projects</a></li>
                            <li><a href='#clients'>our clients</a></li>
                            <li><a href='#awards'>awards</a></li>
                        </ul>
                        <div className='menu-icon' ref={menuIcon}  >
                            <div className= {showMenu? 'burger-menu' : 'close-menu'} onClick = {()=>setShowMenu(!showMenu)} >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='menu'  style={{transform: showMenu? 'scale(1)' : 'scale(44)'}}>
                            </div>
                            <ul className='menu-elements' style={{opacity: showMenu? '0' : '1', visibility: showMenu? 'hidden' : 'visible'}}>
                                <li><a href='#Home'>Home</a></li>
                                <li><a href='#whatWeDo'>what we do</a></li>
                                <li><a href='#projects'>projects</a></li>
                                <li><a href='#clients'>our clients</a></li>
                                <li><a href='#awards'>awards</a></li>
                                </ul>
                        </div>
                        
                    </nav>
            </header>
        </>
    )
}
export default Header;