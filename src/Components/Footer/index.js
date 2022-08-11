import React from 'react';
import FB from '../../Media/facebook.svg';
import Insta from '../../Media/instagram.svg';
import './footer.css';

const Footer = props => {

    return(
        <div className='footer'>
            <div className='social-container'>
                <h3>Check us out on social media</h3>
                <div>
                    <img src={FB} className='social-icon' alt='fb' />
                    <img src={Insta} className='social-icon' alt='insta' />
                </div>
            </div>
            <div className='address-container'>
                <h3>Give Me A Sign Designs LLC</h3>
                <p>Hubbardton, Vermont</p>    
            </div>
        </div>
    )
};

export default Footer;
