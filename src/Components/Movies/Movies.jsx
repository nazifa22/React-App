import React, { Component } from 'react'
import { getMovies } from '../../services/fakeMovieService'
import Counter from '../Counter/counter'
import Pagination from '../../Pagination/Pagination';
import { paginate } from './../../utils/paginate';
import SideNav from '../SideNav/SideNav';
import { getGenres } from '../../services/fakeGenreService';
import MoviesTable from './MoviesTable';

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        selectedGenre: ''
    }

    componentDidMount() {
        const genres = [{name: 'All Gnres'}, ...getGenres()]
        this.setState({ movies: getMovies(), genres })
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

    handleGenre = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 })
    }

    render() {
        const { length: moviesLength } = this.state.movies
        const { pageSize, currentPage, movies : allMovies, selectedGenre, genres } = this.state
        console.log('currentPage:', currentPage)

        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id == selectedGenre._id) : allMovies

        if(moviesLength === 0 )
            return <p className="text-center pt-5">There are no movies in the database.</p>
        
        const movies = paginate(filtered, currentPage, pageSize)

        return (
            <>
                <div className="row">
                    <div className="col-md-4">
                        <SideNav
                            items = { genres } 
                            onItemSelect = { this.handleGenre }
                            selectedItem = { selectedGenre } 
                        />
                    </div>
                    <div className="col-md-8">
                        <p className="mt-5">Showing { filtered.length } movies in the database.</p>
                        <MoviesTable 
                            movies = { movies }
                            onLike = { this.handleLike }
                            onDelete = { this.handleDelete }
                        />
                        <Pagination 
                            itemsCount = { filtered.length }
                            pageSize = { pageSize }
                            currentPage = { currentPage }
                            onPageChange = { this.handlePageChange }
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Movies;