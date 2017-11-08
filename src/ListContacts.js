import React, { Component } from 'react';

class ListContacts extends Component {
  state = {
    query : ''
  }
  
  render() {
    //console.log('props', this.props)

    return (
      
      <div className = 'list-contacts'>

        <div className = 'list-contacts-top'>
          <input type="text"
          placeholder = 'Search the contacts'/>

        </div>
          <ol className = 'contact-list'> 
          {this.props.contacts.map((contact)=> 
          <li className = 'contact-list-item'>{contact.name} 
              <div className = 'contact-details'>
              <p>{contact.email}</p>
              <p>{contact.id}</p>
          </div>
          <button  onClick = {() =>this.props.onDeleteContact(contact)}
          className = 'contact-remove'>Remove</button>
          </li>
          
          
         
          ) }
       </ol>
      </div>
       
    );
  }
}

export default ListContacts;