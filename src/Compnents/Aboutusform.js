import React, { Component } from "react";
export default class Aboutusform extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: "",
      password: "",
    };
  }
  update = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  display = (event) => {
    event.preventDefault();
    const { name, email, age, password } = this.state;
    const obj1 = {
      NAME: name,
      EMAIL: email,
      AGE: age,
      PASSWORD: password,
    };
    console.log(obj1);
  };
  render() {
    return (
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey",
            padding: "50px",
          }}>
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.update}></input>
          <br></br>
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.update}></input>
          <br></br>
          <label htmlFor="age">AGE</label>
          <input
            type="number"
            id="age"
            name="age"
            value={this.state.age}
            onChange={this.update}></input>
          <br></br>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.update}></input>
          <button type="submit" onClick={this.display}>
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}
