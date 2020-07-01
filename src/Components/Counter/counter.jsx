import React, {Component} from 'react';
class Counter extends Component {

    render() { 
        console.log('App - Rendered')

        const { counter, handleIncrement, handleDecrement, resetHandler, handleDelete } = this.props

        return ( 
            <div className="container">
                <div className="row" selected={true}>
                    <div className="col-12 mt-5">
                        <img src={counter.imageURL} alt="Logo" className="mr-3"/> 
                        <span className="badge badge-success">
                            {counter.value === 0 ? 'Zero' : counter.value}
                        </span> &nbsp;
                        <button onClick={ handleIncrement } className="btn btn-warning">Increment</button> &nbsp;
                        <button onClick={ handleDecrement } className="btn btn-warning" disabled = { counter.value == 0 ? 'disabled' : '' }>Decrement</button> &nbsp;
                        <button className="btn btn-primary" onClick={ resetHandler }>Reset</button> &nbsp;
                        <button onClick={ handleDelete } className="btn btn-danger">Delete</button> &nbsp;
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Counter;