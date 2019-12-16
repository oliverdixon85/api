import React from "react";

class PeopleCard extends React.Component {
  render() {
    return (
      <div className="card-group">
        <div className="card p-2 m-2">
          <div className="card-body">
            <h4 className="card-title">{this.props.people.name}</h4>
            <p className="card-text">Gender: {this.props.people.gender}</p>
            <p className="card-text">Age: {this.props.people.age}</p>
            <p className="card-text">
              Eye Color: {this.props.people.eye_color}
            </p>
            <p className="card-text">
              Hair Color: {this.props.people.hair_color}
            </p>
            <a href={this.props.people.url}>View Bio</a>
          </div>
        </div>
      </div>
    );
  }
}
export default PeopleCard;
