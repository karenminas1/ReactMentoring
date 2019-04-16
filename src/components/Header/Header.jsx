import React from "react";
import './Header.scss';
import Search from '../Search/Search';

class Header extends React.Component {
    
    render() {
       return (
         <div className="header">
            <div className="transbox">
               <h4 className="header-title">netflix</h4>
               <Search />
            </div> 
         </div>
       )
    }

};

export default Header;