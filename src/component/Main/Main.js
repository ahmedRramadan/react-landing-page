import React, { useRef, useState } from 'react';
import Header from '../Header/Header';
import './Main.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons';

const Main = ()=>{
    const btn = useRef()
    const main = useRef()
    const [showMessage, setShowMessage] = useState(true)
    const [showBttn, setShowBtn] = useState(true)
    
    window.addEventListener('scroll',()=>{
        if(window.scrollY >= 800 ){
            setShowBtn(false)
            
        }
    }
    )
    return(
        <>
            <section className='main' ref={main}>
                <div className='left-side-text'>
                    <button ref={btn} onClick={()=>setShowBtn(!showBttn)} style={{display : showBttn ? 'block' : 'none'}}><a href='#whatWeDo' >Grow fast with us</a></button>
                    <ul className='social-Media-Icons' style={{display : showBttn ? 'none' : 'block'}}>
                                    <li><a href='facebook.com' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                                    <li><a href='twitter.com' target='_blank'><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
                                    <li><a href='linkedin.com' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href='instagram.com' target='_blank'><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                    </ul>
                </div>
                <div className='container'>
                    <div className='main-square'>
                        <Header />
                            <div className='content'>
                                <div className='tittle-box'>
                                        <h2>You’re going to need a <br/> bigger sales team</h2>
                                        <p className='section-p'>We help B2B technology companies go to market with on point messaging on a contemporary and striking website that converts. We’ll help you tell your story through memorable advertising, branding, ABM and thought leadership content. <strong>Fame beckons. Leads await.</strong></p>
                                    </div>
                            </div>
                        <div className='background-animation'>
                            <div className='background-circle'>
                                <div className='golden-circle'>
                                    <div className='backgound-turquoise'>
                                        <div className='background-square'>
                                            <div className='stable-circle'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-side-text' >
                <button  onClick = {()=>setShowMessage(!showMessage)}>LET'S GET FAMOUS TOGETHER</button>
                </div>
                <div  className='send-message' style={{ display : showMessage ? 'none' : 'block'}}>
                    <button className='close-btn' onClick = {()=>setShowMessage(!showMessage)}>
                        <span></span>
                        <span></span>
                    </button>
                    <div className='container'>
                        <div className='content'>
                            <h2 className='section-tittle'>hi squaredot,</h2>
                            <form className='message-form'>
                                    <label>My name is,</label>
                                    <input type='text' placeholder='Your first name*' required/>
                                    <input type='text' placeholder='Your last name*' required/>
                                    <br />
                                    <label>and i work with</label>
                                    <input type='text' placeholder='Your company name*' required/>
                                    <br />
                                    <label>as</label>
                                    <input type='text' placeholder='Your role*' required/>
                                    <br />
                                    <label>I would love to talk to you about</label>
                                    <textarea  placeholder='Tell us a little about your enquiry*' required/>
                                    <br />
                                    <label>You can reach me @</label>
                                    <input type='email' placeholder='Company email only*' required/>
                                    <br />
                                    <label>Or by phone</label>
                                    <input type='tel' placeholder='Your phone number*' required/>
                                    <br />
                                    <label className='checkbox-container'>
                                        <input type='checkbox' required />
                                        <span>I would like to receive occasional B2B marketing updates from Squaredot. You can unsubscribe anytime you want.</span>
                                    </label>
                                    <label className='checkbox-container'>
                                        <input type='checkbox' required />
                                        <span>I agree my information can be used to contact me regarding my enquiry </span>
                                    </label>
                                    <input type='submit' value='send' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main;