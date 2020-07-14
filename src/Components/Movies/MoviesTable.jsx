import React, {Component} from 'react';
import Like from './Like';
import Table from './Table';
class MoviesTable extends Component {
    columns = [
        { path: 'title', lable: 'Title' },
        { path: 'genre.name', lable: 'Genre' },
        { path: 'numberInStock', lable: 'Stock' },
        { path: 'dailyRentalRate', lable: 'Rate' },
        { key: 'like', 
            content: movie => 
            <Like liked = { movie.liked } onLike={() => this.props.onLike(movie) } /> },
        { key: 'delete', 
            content: movie => 
            <button className="btn btn-warning" onClick={ () => this.props.onDelete(movie) }>Delete</button> }
    ]

    render() {
        const { movies, onSort, sortColumn } = this.props;

        return (
            <Table 
                columns = { this.columns }
                sortColumn = { sortColumn }
                onSort = { onSort }
                data = { movies }
            />
        )
    }
}


export default MoviesTable;