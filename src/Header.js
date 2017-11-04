import React, { Component } from 'react';

class Header extends Component {
  render() {
    //console.log('props', this.props)

    return (
      
       <ol className = 'contact-list'> 
          <li>{this.props.text} </li>
       </ol>
    );
  }
}

export default Header;