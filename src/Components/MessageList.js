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

  filterMessage(message, index){
    if(message.roomId === this.props.activeRoomKey){
      return (
        <div key={'msg' + index}>
          <p>{message.username}</p>
          <p>{message.sentAt}</p>
          <p>{message.content}</p>
        </div>
      )
    }
  }

  render() {
    return (
      <section>
        {this.state.totalMessages.map((messageData, index) =>
            this.filterMessage(messageData, index)
        )}
      </section>
    );
  }
}

export default MessageList;
