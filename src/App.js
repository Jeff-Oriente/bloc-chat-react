import React from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import RoomList from './Components/RoomList';

var firebaseConfig = {
    apiKey: "AIzaSyA34rEwyjTrRNW510TEsrxQQb8UCFuVGL4",
    authDomain: "bloc-chat-react-4ad6d.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-4ad6d.firebaseio.com",
    projectId: "bloc-chat-react-4ad6d",
    storageBucket: "bloc-chat-react-4ad6d.appspot.com",
    messagingSenderId: "250871938568",
    appId: "1:250871938568:web:228ec14176f4ce68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <RoomList firebase={firebase}/>
    </div>
  );
}

export default App;
