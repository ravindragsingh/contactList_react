import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    console.log('props', this.props)

    return (
      
       <ol className = 'contact-list'> 
          {this.props.contacts.map((contact)=> 
          <li className = 'contact-list-item'>{contact.name} 
              <div className = 'contact-details'>
              <p>{contact.email}</p>
              <p>{contact.id}</p>
          </div>
          <button className = 'contact-remove'></button>
          </li>
          
          
         
          ) }
       </ol>
    );
  }
}

export default ListContacts;