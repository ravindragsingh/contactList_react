import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContacts from './ListContacts'
import Header from './Header'

 
class App extends Component {
  state = {
    contacts : [
  {
    "id": "Ravi",
    "name": "Ravindra",
    "email": "ravindra@test.com",
    //"avatarURL": "http://localhost:5001/ravindra3.jpg"
  },
  {
    "id": "Pratap",
    "name": "Pratap Singh",
    "email": "Pratap@test.com",
    //"avatarURL": "http://localhost:5001/ravindra2.jpg"
  },
  {
    "id": "Singh",
    "name": "Singh King",
    "email": "singh@singh.com",
    //"avatarURL": "http://localhost:5001/ravindra1.jpg"
  }
]
  }
  render() {
    
//const people = contacts.map((id) =>contacts.id ===id )
    return (
      <div className="App">
      <Header text = 'This app is to demonstrate Pure react with Router functions'/>
        <ListContacts contacts = {this.state.contacts} />
      </div>
    );
  }
}

export default App;
