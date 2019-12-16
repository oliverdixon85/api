import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card-group">
        <div className="card p-2 m-2">
          <div className="card-body">
            <h4 className="card-title">{this.props.film.title}</h4>
            <p className="card-text">Director: {this.props.film.director}</p>
            <p className="card-text">Producer: {this.props.film.producer}</p>
            <p className="card-text">
              Release Date: {this.props.film.release_date}
            </p>
            <p className="card-text">RT Score: {this.props.film.rt_score}</p>
            <p className="card-text">{this.props.film.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
