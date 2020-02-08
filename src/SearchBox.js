import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //   alert('A number was submitted: ' + this.state.value);

    const fetchData = async value => {
      const response = await fetch(
        `https://swapi.co/api/people/${this.state.value}`
      );
      const data = await response.json();
      //   const response2 = await fetch(
      //     `https://robohash.org/${this.state.value}?16x16/`
      //   );
      console.log(data);
      //   console.log(response2);
    };
    fetchData();
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="pa2 ba b--blue bg-lightest-blue"
          type="number"
          placeholder="enter your lucky number"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br></br>
        <input type="submit" value="Create" className="br2 dim ma3" />
      </form>
    );
  }
}

export default SearchBox;
