import React from "react";
import {Link} from 'react-router-dom'
import './style.scss'

class Header extends React.PureComponent {
 rediret = ()=>{
     this.props.history.push('/Details')
 }
  render() {
    return (
      <header>
        <h1 className="header">Foodies</h1>
        <Link to='/favoris' className='headerlink'>favoris</Link>
       
      </header>
    );
  }
}

export default Header;
