import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    console.log('props', this.props)

    return (
      
       <ol> 
          {this.props.contacts.map((contact)=> 
          <li>{contact.name}</li>,
         
          ) }
       </ol>
    );
  }
}

export default ListContacts;