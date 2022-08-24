import React from 'react';
import SquareLogo from '../../Media/logo-web-square-03.svg';
import Button from '../Button';
import { useWindowWidthAndHeight } from '../../hooks/useWindow';
import './home.css';
import { Link } from 'react-router-dom';

const Home = props => {

    const [width, height] = useWindowWidthAndHeight();

    return(
        <div className='home-container'>
            <div>
                <img src={SquareLogo} className='square-logo' alt='sqaure-logo' />
            </div>
            
            <div className='bio'>
                <p className='bio-text'>Give Me A Sign Designs LLC is dedicated to providing you with quality signs, graphics and other marketing materials along with graphic and web design services.<br /></p>    
                {width < 800 ?
                <div className='call-container'>
                <Button>
                    <a className='call-link' href='tel:+18023428093'><h2 className='call-link-text'>Call now</h2></a>
                </Button>
                
                <p className='call-tag'>to start your next project!</p>
                </div>
                :
                <div className='call-container'>
                    <Button>
                        <Link className='call-link' to='/contact'><h2 className='call-link-text'>Contact Us!</h2></Link>
                    </Button>
                    <p className='call-tag'>today to start your next project!</p>
                </div>
                }
                
            </div>

        </div>
    )
};

export default Home;
