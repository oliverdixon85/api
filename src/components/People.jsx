import React, { Component } from "react";
import PeopleCard from "./PeopleCard";

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          people: data
        });
        console.log(data);
      });
  }

  render() {
    const listItems = this.state.people.map((people, index) => {
      return <PeopleCard key={index} people={people} />;
    });
    return <React.Fragment>{listItems}</React.Fragment>;
  }
}

export default People;
