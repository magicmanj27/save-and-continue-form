import React from "react";
import { Redirect } from "react-router-dom";

class NameAndNumber extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("formData")) {
      this.state = JSON.parse(localStorage.getItem("formData")); //in this case the state is just for input values
    } else {
      this.state = {
        value1: "",
        value2: "",
        url: "",
      };
    }

    this.handleInput1Change = this.handleInput1Change.bind(this);
    this.handleInput2Change = this.handleInput2Change.bind(this);
  }

  handleInput1Change(event) {
    this.setState({ value1: event.target.value }, () => {
      localStorage.setItem("formData", JSON.stringify(this.state));
    });
  }
  handleInput2Change(event) {
    this.setState({ value2: event.target.value }, () => {
      localStorage.setItem("formData", JSON.stringify(this.state));
    });
  }

  componentDidMount() {
    const url = "";
    this.setState({ url: url }, () => {
      localStorage.setItem("formData", JSON.stringify(this.state));
    });
  }

  render() {
    if (this.state.url === "") {
      return (
        <form>
          <label>Name</label>
          <input
            type="text"
            value={this.state.value1}
            onChange={this.handleInput1Change}
          />
          <label>Phone number</label>
          <input
            type="text"
            value={this.state.value2}
            onChange={this.handleInput2Change}
          />
        </form>
      );
    } else {
      return <Redirect to={this.state.url} />;
    }
  }
}

export default NameAndNumber;
