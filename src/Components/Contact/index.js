import React from 'react';
import './contact.css';

const Contact = props => {

    return(
        <div className='contact-container'>
            <h3>Owner: Josh Jakab</h3>
            <h3>Phone Number: <a href='tel: +18023428093'>(802) 342-8093</a></h3>
            <h3>Email: <a href='mailto: givemeasigndesigns@gmail.com'>givemeasigndesigns@gmail.com</a></h3>
        </div>
    )
};

export default Contact;
