import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import Counter from '../Counter/counter';
import Pagination from '../../Pagination/Pagination';
import { paginate } from './../../utils/paginate';
import SideNav from '../SideNav/SideNav';
import { getGenres } from '../../services/fakeGenreService';
import MoviesTable from './MoviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import MovieForm from './../Pages/MovieForm';
import SearchBox from "../SearchBox";

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        searchQuery: '',
        selectedGenre: '',
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const genres = [{_id: '', name: 'All Gnres'}, ...getGenres()]
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

    handleSort = (sortColumn) => {
        this.setState({ sortColumn })
    }

    getPagedDate = () => {
        const { 
            pageSize, 
            currentPage,
            movies : allMovies,
            selectedGenre, 
            sortColumn } = this.state;

        const filtered = 
        selectedGenre && selectedGenre._id 
            ? allMovies.filter(m => m.genre._id == selectedGenre._id) 
            : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies }
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    };
    
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    };    

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            movies: allMovies
        } = this.state;

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies };
    };

    render() {
        const { length: moviesLength } = this.state.movies
        const { 
            pageSize, 
            currentPage,
            movies : allMovies,
            selectedGenre, 
            genres, 
            sortColumn,
            searchQuery } = this.state;

        console.log('currentPage:', sortColumn)

        if(moviesLength === 0 )
            return <p className="text-center pt-5">There are no movies in the database.</p>
        
        const { totalCount, data: movies } = this.getPagedDate();
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
                        <p className="mt-5">Showing { totalCount } movies in the database.</p>
                        
                        <Link 
                        to='/movies/new'
                        className='btn btn-warning mb-5' >
                            New Movie
                        </Link>
                        <SearchBox value={searchQuery} onChange={this.handleSearch} />
                        <MoviesTable 
                            movies = { movies }
                            onLike = { this.handleLike }
                            onDelete = { this.handleDelete }
                            onSort = { this.handleSort }
                            sortColumn = { sortColumn }
                        />
                        <Pagination 
                            itemsCount = { totalCount }
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