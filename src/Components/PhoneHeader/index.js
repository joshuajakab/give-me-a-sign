import React from 'react';
import Logo from  '../../Media/logo-web-02.svg';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './phoneHeader.css';
import { Link } from 'react-router-dom';

const PhoneHeader = props => {

    const [width] = useWindowWidthAndHeight();

    return(
        <div className='phone-header-container'>
            <div className='logo-container'>
                <Link to='/'><img src={Logo} className='logo' alt='logo' /></Link>
            </div>
            {width < 800 ?
            <div className='menu' onClick={props.click}>
                <h2  className='menu-text'>MENU</h2>
            </div>
            :
            <div className='wide-menu'>
                <Link className='menu-links' to='/'><h2 className='menu-links-text'>Home</h2></Link>
                <Link className='menu-links' to='/pastwork'><h2 className='menu-links-text'>Past Work</h2></Link>
                <Link className='menu-links' to ='/contact'><h2 className='menu-links-text'>Contact Us</h2></Link>
            </div>
            }
        </div>
    )
};

export default PhoneHeader;
