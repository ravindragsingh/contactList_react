import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'

class ListContacts extends Component {
  state = {
    query : ''
  }
  updateQuery = ((query) => {
    this.setState({query: query.trim()})
  })

  //clear query method to be used in button to reset the search

  clearQuery = () => {
    this.setState ({ query :''})
  }
  
  render() {
    //console.log('props', this.props)
    let showingContacts // this will be the contacts matching specific pattern

    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))

    }
    else {
      showingContacts = this.props.contacts //you cannot have just contacts as that is being received from App.js
    }

    showingContacts.sort(sortBy('name'))
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

        {showingContacts.length !== this.props.contacts.length &&
        (
          <div>
            {showingContacts.length} of {this.props.contacts.length} contacts displayed
            
            <button onClick = {this.clearQuery}>
            Show All
            </button>
          </div>
        )
        }
          <ol className = 'contact-list'> 
          {
            //this.props.contacts.map((contact)=> // this was giving all array now we are going to use showingcontacts
            // as that is the filtered array
            showingContacts.map((contact)=> 
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