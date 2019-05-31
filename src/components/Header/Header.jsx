import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from '../../services/router';
import './Header.scss';

class Header extends React.Component {
    
    render() {
       return (
         <div className="header">
            <div className="transbox">
               <h4 className="header-title">netflix</h4>
               <Switch>
                  {routes.map((route, index) => (
                     <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                     />
                  ))}
               </Switch>
            </div> 
         </div>
       )
    }

};

export default Header;