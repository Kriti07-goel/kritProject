
import React from 'react';
import './Nav.css';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                 
                    
                    {/* <div className="right">
                        <div className="margin-top-10 margin-right-20 disp-inline">Shop</div>
                        <div className="margin-top-10 margin-right-20 disp-inline">My cart</div>
                        <div className="margin-top-10 margin-right-20 disp-inline"><i class="fas fa-cart-plus"></i></div>
                    </div> */}
                    <Router>
                   
                        <div>
                        <div className="disp-inline margin-top-10">
                            Shopping
                        </div>
                        <div className="right">
                            <Link to="/shopping" className="font-color margin-top-10 margin-right-20 disp-inline">Shop</Link>
                            <Link to="/cart" className="font-color margin-top-10 margin-right-20 disp-inline">My cart</Link>
                            
                        </div>
                        
                        </div>
                    </Router>
                </div>
            </nav>  
    )
}

export default Navbar;