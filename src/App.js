import React, {Component} from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList';
import User from './Components/User';

var firebaseConfig = {
    apiKey: "AIzaSyA34rEwyjTrRNW510TEsrxQQb8UCFuVGL4",
    authDomain: "bloc-chat-react-4ad6d.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-4ad6d.firebaseio.com",
    projectId: "bloc-chat-react-4ad6d",
    storageBucket: "bloc-chat-react-4ad6d.appspot.com",
    messagingSenderId: "250871938568",
    appID: "1:250871938568:web:228ec14176f4ce68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   firebase.database.enableLogging(function(message) {
//   console.log("[FIREBASE]", message);
// });

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeRoom: {},
      user: {}
    }
  }

  setUser(user) {
    this.setState({user: user})
  }

  setActiveRoom(room) {
    this.setState({activeRoom: room})
  }
  // activeRoomKey

  // handleRoomChange would set state for activeRoomKey
  // put handleRoomChange={this.handleRoomChange} next to {firebase} below in RoomList
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} setActiveRoom={this.setActiveRoom.bind(this)}/>
        <MessageList firebase={firebase} activeRoomKey={this.state.activeRoom.key} user={this.state.user}/>
        <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
