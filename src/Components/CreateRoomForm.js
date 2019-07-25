import React, {Component} from 'react';

class CreateRoomForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRoomName: ''
    };

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.roomsRef.push({ name: this.state.newRoomName })
    this.setState({newRoomName: ''})
  }

  handleChange(e) {
    this.setState({newRoomName: e.target.value})
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.newRoomName} onChange={(e) => this.handleChange(e)} placeholder="Create Chat Room Here"/>
        <input type="submit" value="Create Chat Room" />
      </form>
    )
  }
}

export default CreateRoomForm
