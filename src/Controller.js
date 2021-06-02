import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './componet1/common/header/Header';
import ContactUs from './componet1/contactUs/ContactUs';
import Home from './componet1/home/Home';
import Resume from './componet1/resume/Resume';
import Work from './componet1/work/Work';

const Controller = () => {
    return (
        <div >
            {/* Router has props attribute */}
            <Router> 
                <Switch>
                    {/* exact checks that part is exact match or not  
                   It does not allow if path is not equal to path attribute*/}
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    {/* If we does not use exact keyword then it will allow to render page if url have after contact-us is anything */}
                    {/* example 
                   1) /contact ----> not allow because url should have same path
                   2) /contact-us -----> allow
                   3) /contact-us/test/id/jksdjfl ---->  allow because if we does not use exact keyword then it will render same page after matches first path */}
                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>
                    <Route path="/work/:workId" render={(props) => <Work {...props} />} />
                    <Route path="/resume" render={() => <Resume />} />
                    {/* inline rendering */}
                    <Route path="*" render={() => 
                    <Fragment>
                        <Header />
                    <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        
                       <p style={{fontSize: '96px'}}> 404 </p>
                    </div>
                    </Fragment>
                    } />

                </Switch>
            </Router>
        </div>
    )
}

export default Controller;