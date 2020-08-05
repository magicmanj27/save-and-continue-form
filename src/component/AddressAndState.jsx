import React from "react";

class AddressAndState extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("formData")) {
      this.state = JSON.parse(localStorage.getItem("formData")); //in this case the state is just for input values
    } else {
      this.state = {
        value3: "",
        value4: "",
        url: "",
      };
    }

    this.handleInput1Change = this.handleInput1Change.bind(this);
    this.handleInput2Change = this.handleInput2Change.bind(this);
  }

  handleInput1Change(event) {
    this.setState({ value3: event.target.value }, () => {
      localStorage.setItem("formData", JSON.stringify(this.state));
    });
  }
  handleInput2Change(event) {
    this.setState({ value4: event.target.value }, () => {
      localStorage.setItem("formData", JSON.stringify(this.state));
    });
  }

  componentDidMount() {
    const url = "address";
    this.setState({ url: url }, () => {
      localStorage.setItem("formData", JSON.stringify(this.state));
    });
  }

  render() {
    return (
      <form>
        <label>Address</label>
        <input
          type="text"
          value={this.state.value3}
          onChange={this.handleInput1Change}
        />
        <label>State</label>
        <input
          type="text"
          value={this.state.value4}
          onChange={this.handleInput2Change}
        />
      </form>
    );
  }
}

export default AddressAndState;
