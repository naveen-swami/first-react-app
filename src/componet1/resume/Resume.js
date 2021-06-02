import React from 'react';
import { useHistory } from 'react-router';
import Header from '../common/header/Header';

// here we did not use props drilling cocepts 
// i.e Here did not passes histroy object form controller to Resuem
// here we uses useHistroy hook given by react router
export default () => {

    const history = useHistory();

    function redirectTo(path) {
        history.push(path);
    }

    return (
        <div>
            <Header selected="RESUME" />
            Resume
            {/* <nav className="nav-bar">
                <p style={{ cursor: 'pointer' }} onClick={() => redirectTo("/")}>Home</p>
                <p style={{ cursor: 'pointer' }} onClick={() => redirectTo("/contact-us")}>Contact Us</p>
                <p style={{ cursor: 'pointer' }} onClick={() => redirectTo("/work")}>Work</p>
                <p style={{ cursor: 'pointer' }} onClick={() => redirectTo("/resume")}>Resume</p>
            </nav> */}
        </div>
    )
}