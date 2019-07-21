import React, {Component} from 'react';

class User extends Component {

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
      const user = result.user;
      this.props.setUser(user);
    });
  }

  signOut() {
    this.props.firebase.auth().signOut();
  }

  render () {
    console.log(this.props);
    return (
      <section>
        <div>{this.props.userName ? this.props.userName.displayName : 'Guest'}</div>
          <button onClick={() => this.signIn()}>Sign in</button>
          <button onClick={() => this.signOut()}>Sign out</button>

      </section>
    )
  }

}

export default User;
