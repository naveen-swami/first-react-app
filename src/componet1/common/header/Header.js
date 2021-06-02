import React from 'react';
import { useHistory } from 'react-router';

export const Header2 = () => {
    return (
        <div>
            This is Header 2
        </div>
    )
}

// here we are getting history object from Controller -> Home -> Header
// means history object go through 3 conintainer
// it is know as props drilling 
const Header = ({ history, selected }) => {

    const history1 = useHistory();

    function redirectTo(path) {
        history1.push(path);
    }


    // const redirectTo = (path) => {
    //     history.push(path);
    //     console.log(history);
    //     console.log(path);
    // }

    return (
        <div>
            <header className="header">
                <nav className="nav-bar">
                    <p className={`link ${selected === "HOME" ? "selected" : ""}`}  onClick={() => redirectTo("/")}>Home</p>
                    <p className={`link ${selected === "CONTACT_US" ? "selected" : ""}`}  onClick={() => redirectTo("/contact-us")}>Contact Us</p>
                    <p className={`link ${selected === "RESUME" ? "selected" : ""}`}  onClick={() => redirectTo("/resume")}>Resume</p>
                    <p className={`link ${selected === "WORK" ? "selected" : ""}`}  onClick={() => redirectTo("/work/Naveen")}>Work</p>
                </nav>
            </header>
        </div>
    )
}

export default Header;