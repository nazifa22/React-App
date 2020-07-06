import React, { Component } from 'react'
import { getMovies } from '../../services/fakeMovieService'
import Counter from '../Counter/counter'
import Like from './Like'
import Pagination from '../../Pagination/Pagination';
import { paginate } from './../../utils/paginate';

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }

    handleDelete = (movie) => {
        // console.log(movie);
        let movies = [...this.state.movies];
        movies = this.state.movies.filter(element => element._id !== movie._id)
        this.setState({ movies })
        console.log(movies)
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie)
        movies[index] = {...movies[index]}
        movies[index].liked =! movies[index].liked
        console.log(movies.indexOf(movie))

        const liked = movie.liked = !movie.liked

        this.setState({ liked })
        console.log(liked)
    }

    handlePageChange = page => {
        this.setState ({ currentPage: page })
        console.log(page)
    }

    render() {
        const { length: moviesLength } = this.state.movies
        const { pageSize, currentPage, movies : allMovies } = this.state
        console.log('currentPage:', currentPage)

        if(moviesLength === 0 )
            return <p className="text-center pt-5">There are no movies in the database.</p>
        
        const movies = paginate(allMovies, currentPage, pageSize)

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
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie => (
                                <tr key={ movie._id }>
                                    <td>{ movie.title }</td>
                                    <td>{ movie.genre.name }</td>
                                    <td>{ movie.numberInStock }</td>
                                    <td>{ movie.dailyRentalRate }</td>
                                    <td>
                                        <Like liked = { movie.liked } handleLike={ () => this.handleLike(movie) } />
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" onClick={ () => this.handleDelete(movie) }>Delete</button>
                                    </td>
                                </tr> 
                            ))
                        }
                    </tbody>
                </table>
                <Pagination 
                    itemsCount = { moviesLength }
                    pageSize = { pageSize }
                    currentPage = { currentPage }
                    onPageChange = { this.handlePageChange }
                />
            </>
        )
    }
}

export default Movies;