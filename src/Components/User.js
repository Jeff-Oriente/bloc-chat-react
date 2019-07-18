import React, {Component} from 'react';

class User extends Component {

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render () {
    return (
      <section>

        <button onClick={() => this.signIn()}>Sign in</button>
        <button onClick={() => this.signOut()}>Sign out</button>

      </section>
    )
  }

}

export default User;
