import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareTwitter} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
const Footer = ()=>{
    return(
        <>
                <footer>
                    <div className='container'>
                        <div className='content'>
                            <div className='left-side-footer'>
                                <h2 className='section-tittle'>Let´s get famous & <br/> grow together</h2>
                                <ul className='socialMediaIcons'>
                                    <li><a href='facebook.com' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                                    <li><a href='twitter.com' target='_blank'><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
                                    <li><a href='linkedin.com' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href='instagram.com' target='_blank'><FontAwesomeIcon icon={faSquareInstagram} /></a></li>
                                </ul>
                            </div>
                            <div className='right-side-footer'>
                                <div>
                                    <p className='section-p footer-p'>You want boardrooms talking about your B2B brand, right? So get in touch, our story is telling yours.</p>
                                    <button className='section-btn footer-btn'>say hello</button>
                                </div>
                                <p className='section-p'>All rights reserved 2020 © Castledot</p>
                            </div>
                        </div>
                    </div>

                </footer>
        </>
    )
}
export default Footer;