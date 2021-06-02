import React from 'react';
import Header from '../common/header/Header';
import HeaderTest from '../common/header/Header';
import {Header2} from '../common/header/Header'
export default function Home(props) {
    // console.log(props.history);
    return (
        <div className="home">
           
           <Header history={props.history} selected="HOME"/>{/* It is default export from Header.js file with name Header */}
           {/* <Header2 /> It is export from Header.js file with name Header2 */}
           {/* <HeaderTest /> It is default export from Header.js file with name HeaderTest  */}
           welcome into home page
        </div>
    )
}