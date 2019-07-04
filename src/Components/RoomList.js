import React, {Component} from 'react';
import CreateRoomForm from './CreateRoomForm';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room )})
    });
  }


  render() {
    return (
      <div>
        {this.state.rooms.map(roomData =>
          <li key={roomData.key} onClick={(e) => this.props.setActiveRoom(roomData)}>
            {roomData.name}
          </li>
        )}
        <CreateRoomForm roomsRef={this.roomsRef} />
      </div>
    );
  }
}

export default RoomList;
