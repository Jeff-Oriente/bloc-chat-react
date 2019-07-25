import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalMessages: [],
      newMessage: ''
    }
    //
    this.messageRef = this.props.firebase.database().ref('messages')
  }

  componentDidMount() {
    this.messageRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;

      this.setState({ totalMessages: this.state.totalMessages.concat( message )})
    })
  }

  createNewMessage(text) {
    this.messageRef.push({
      username: (this.props.user ? this.props.user.displayName : 'Jeff'),
      content: text,
      sentAt: Date.now(),
      roomId: this.props.activeRoomKey,
    });

  }

  filterMessage(message, index){
    if (Number(message.roomId) === Number(this.props.activeRoomKey)){
      return (
        <div key={'msg' + index}>
          <p>{message.username} ({message.sentAt}): {message.content}</p>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    //this.props.roomsRef.push({ name: this.state.newRoomName })
    this.createNewMessage(this.state.newMessage)
    this.setState({newMessage: ''})
  }

  handleChange(e) {
    this.setState({newMessage: e.target.value})
  }

  render() {
    return (
      <section>
        {this.state.totalMessages.map((messageData, index) =>
            this.filterMessage(messageData, index)
        )}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" value={this.state.newMessage} onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="New Message"/>
        </form>
      </section>
    );
  }
}

export default MessageList;
