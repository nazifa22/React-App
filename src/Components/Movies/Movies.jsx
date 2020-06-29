import React, { Component } from 'react'
import { getMovies } from '../../services/fakeMovieService'
import Counter from '../Counter/counter'

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = (movie) => {
        // console.log(movie);
        const movies = this.state.movies.filter(element => element._id !== movie._id)
        this.setState({ movies })
        console.log(movies)
    }


    render() {
        const { length: moviesLength } = this.state.movies

        if(moviesLength === 0 )
            return <p className="text-center pt-5">There are no movies in the database.</p>

        return (
            <>
                <p className="mt-5">Showing {moviesLength} movies in the database.</p>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Gener</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map(movie => (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><button className="btn btn-warning" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default Movies;