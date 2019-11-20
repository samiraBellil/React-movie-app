import React from 'react';
import './App.css';
import Search from './Search';
import MovieList from './MovieList';
import StarRating from './StarRating';

const movies = [
  {
    title: "Iron Man",
    year: "2008",
    rating: 3,
    img: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
  },
  {
    title: "Iron Man 3",
    year: "2013",
    rating: 4,
    img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
  },
  {
    title: "Iron Man 2",
    year: "2010",
    rating: 5,
    img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: movies,
      newRating: 2,
      title: '',
    }
  }

  add = () => {
    let movieTitle = prompt('Please enter title ')
    let movieImg = prompt('please enter link')
    let movieYear = prompt('please enter year')
    let movieRating = prompt('please enter rating')
    this.setState({
      movies: this.state.movies.concat({ title: movieTitle, img: movieImg, year: movieYear, rating: movieRating })
    })
  }

  rateMovie = num => {
    this.setState({
      newRating: num
    })
  }

  InputChanges = x => {
    this.setState({
      title: x
    })
  }



  render() {
    return (
      <div className="App">
        <Search InputChanges={x => this.InputChanges(x)} />
        <StarRating count={this.state.newRating} rateIt={newRate => this.rateMovie(newRate)} />
        {this.state.movies.map(el => <MovieList elm={el} />)}
        <button className="button-add" onClick={this.add}> + add movie</button>
      </div>
    );
  }
}
export default App;
