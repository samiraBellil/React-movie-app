import React, { Component } from 'react';
import StarRating from './StarRating';


class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { elm } = this.props;
        return (
            <div className = "movies">
                <div className="img">
                    <img className="img1" src={elm.img} />
                </div>
                <div className="title1">
                    <h4>{elm.title}</h4>
                    <p>{elm.year}</p>
                    <StarRating count={elm.rating} rateIt={() => {}}/>
                </div>

            </div>
        );
    }
}
export default MovieCard;
