import React from 'react';
import '../style/Price.css'

// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
           
//            <div>
//               <h1>Welcome Into react</h1>
//                <h3>This is app page</h3>
//            </div>
//         </header>
//       </div>
//     );
//   }

function Price(props) {
    
    return (
        <div className="Price">
             <h5 className="Price-h5">this is price page</h5>
             <button onClick={props.backToHome}>go to Back</button>
        </div>
    );
}

export default Price;