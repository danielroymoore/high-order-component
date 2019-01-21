import React from "react";
import withLogger from "./Logger";

class MockForm extends React.Component {
  state = {
    text: ""
  };

  componentDidMount() {
    this.props.log("Mock Form Mounted");
  }

  save = () => {
    this.props.log("Logged: " + this.state.text);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button onClick={this.save}>Log</button>
      </div>
    );
  }
}

export default withLogger(MockForm);
