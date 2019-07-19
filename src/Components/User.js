import React, {Component} from 'react';

class User extends Component {

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider ).then(function(result) {
      const token = result.credential.accessToken;
      const user = result.user;
      this.props.setUser(user);
      {console.log(this.props.user)}
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email
      const credential = error.credential;
    });
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render () {
    return (
      <section>
        <div>{this.props.user ? this.props.user.displayName : 'Guest'}</div>
          <button onClick={() => this.signIn()}>Sign in</button>
          <button onClick={() => this.signOut()}>Sign out</button>

      </section>
    )
  }

}

export default User;
