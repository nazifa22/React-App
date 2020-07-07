import React from 'react';
import Like from './Like';

const MoviesTable = props => {
    const { movies, onDelete, onLike } = props;

    return ( 
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
            </tbody>
        </table>
     );
}
 
export default MoviesTable;