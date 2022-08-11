import React from 'react';
import Logo from  '../../Media/logo-web-02.svg';
import './phoneHeader.css';

const PhoneHeader = props => {
    return(
        <div className='phone-header-container'>
            <div className='logo-container'>
                <img src={Logo} className='logo' alt='logo' />
            </div>
            <div className='menu' onClick={props.click}>
                <h2  className='menu-text'>MENU</h2>
            </div>
        </div>
    )
};

export default PhoneHeader;
