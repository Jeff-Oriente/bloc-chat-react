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
      console.log(message.roomId, this.props.activeRoomKey);
      // "1" === 1
      if (Number(message.roomId) === Number(this.props.activeRoomKey)) {
        this.setState({ totalMessages: this.state.totalMessages.concat( message )})
      }

    })
  }

  render() {
    return (
      <ul>
      {this.state.totalMessages.map(messageData =>
        <li key={messageData.key}>
          {messageData.username}: {messageData.content}
        </li>
      )}
      </ul>
    )
  }
}

export default MessageList;
