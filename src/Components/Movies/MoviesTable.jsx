import React, {Component} from 'react';
import Like from './Like';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
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
        const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

        return (
            <table class="table">
                <TableHeader 
                columns={ this.columns }
                sortColumn={ sortColumn } 
                onSort={ onSort }/>
                {/* <tbody>
                    {
                        movies.map(movie => (
                            <tr key={ movie._id }>
                                <th>{ movie.title }</th>
                                <th>{ movie.genre.name }</th>
                                <th>{ movie.numberInStock }</th>
                                <th>{ movie.dailyRentalRate }</th>
                                <th>
                                    <Like liked = { movie.liked } onLike={() => onLike(movie) } />
                                </th>
                                <th>
                                    <button className="btn btn-warning" onClick={ () => onDelete(movie) }>Delete</button>
                                </th>
                            </tr> 
                        ))
                    }
                </tbody> */}
                <TableBody data={movies} columns={this.columns} />
            </table>
        )
    }
}


export default MoviesTable;