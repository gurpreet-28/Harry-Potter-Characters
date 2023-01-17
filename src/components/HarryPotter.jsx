import React, { Component } from "react";

export class HarryPotter extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      house: null,
      ancestry: null,
      img: false,
    };
  }

  getNewCharacter = () => {
    const randomNum = Math.ceil(Math.random() * 50);
    const url = "https://hp-api.onrender.com/api/characters";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data[randomNum].name,
          house: data[randomNum].house,
          ancestry: data[randomNum].ancestry,
          img: data[randomNum].image,
        });
      });
  };

  render() {
    return (
      <>
        <div className="conatiner text-center my-4">
          <h1>Hey Potterheads...!!!</h1>
          <p className="fs-5">
            Get information about your favourite{" "}
            <span className="fw-bold fst-italic">Harry Potter</span> character
          </p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.getNewCharacter()}
          >
            Get Now!
          </button>
        </div>
        <div className="container text-center my-3">
          <h1>{this.state.name}</h1>
          <h2>{this.state.house}</h2>
          <h3>{this.state.ancestry}</h3>
          {this.state.img && <img src={this.state.img} alt="char_img" />}
        </div>
      </>
    );
  }
}

export default HarryPotter;
