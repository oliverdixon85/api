import React, { Component } from "react";
import Card from "./Card";

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [
        {
          title: "My Neighbor Totoro",
          description: "Two sisters move to the country"
        },
        {
          title: "Kiki's Delivery Service",
          description: "A young witch on her mandatory year"
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          films: data
        });
        console.log(data);
      });
  }

  render() {
    const listItems = this.state.films.map((film, index) => {
      return <Card key={index} film={film} />;
    });
    return <React.Fragment>{listItems}</React.Fragment>;
  }
}

export default Films;
