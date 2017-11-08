import React, { Component } from 'react';

class ListContacts extends Component {
  state = {
    query : ''
  }
  updateQuery = ((query) => {
    this.setState({query: query.trim()})
  })
  
  render() {
    //console.log('props', this.props)

    return (
      
      <div className = 'list-contacts'>

        <div >
          <input classname = 'search-contacts'
          type="text"
          placeholder = 'Search the contacts'
          //we want the value of the state to be the query element
          value = {this.state.query}
          // if the query element changes we want to update the state of the component, onChange event handler will
          //invoke updateQuery method, which will update the state of the component and after that value will be update
          //with the current state
          onChange = {(event) => this.updateQuery(event.target.value)}
          />

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