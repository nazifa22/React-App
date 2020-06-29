import React, {Component} from 'react';

class Counter extends Component {

    state = {
        value: this.props.value,
        counters: [
            { id: 1, value: 0, imageURL: 'https://img.icons8.com/color/100/000000/popeye.png' },
            { id: 2, value: 10, imageURL: 'https://img.icons8.com/color/100/000000/smurf.png' },
            { id: 3, value: 20, imageURL: 'https://img.icons8.com/color/100/000000/sonic-the-hedgehog-1.png' },
            { id: 4, value: 30, imageURL: 'https://img.icons8.com/color/100/000000/super-mario.png' }
        ]
    }

    deleteHandler(counterItem) {
        console.log('deleted')
        const counters = this.state.counters.filter(item => item.id !== counterItem.id)
        this.setState({ counters })
    }

    handleIncrement = (counterItem) => {
        console.log(counterItem.value = counterItem.value+1)
        const value = counterItem.value + 1
        this.setState({ counterItem: [
            {
                value: value
            }
        ] })
    }

    handleDecrement = (counterItem) => {
        console.log(counterItem.value = counterItem.value-1)
        let value = counterItem.value
        

        if(value > 0 ) {
            value = value - 1
            this.setState({ counterItem: [
                {
                    value: value
                }
            ] })
        }

        else this.resetHandler(counterItem)
    }

    resetHandler = (counterItem) => {
        counterItem.value = 0
        this.setState({ counterItem: [
            {
                value: counterItem.value
            }
        ] })

        console.log(counterItem.value)
    }

    render() {
        return (
            <div className="container">
                {this.state.counters.map(counterItem => (
                    <div className="row" key={counterItem.id} value={counterItem.value} selected={true}>
                        <div className="col-12 mt-5">
                            <img src={counterItem.imageURL} alt="Logo" className="mr-3"/> 
                            <span className="badge badge-success">
                                {counterItem.value === 0 ? 'Zero' : counterItem.value}
                            </span> &nbsp;
                            <button onClick={() => this.handleIncrement(counterItem)} className="btn btn-warning">Increment</button> &nbsp;
                            <button onClick={() => this.handleDecrement(counterItem)} className="btn btn-warning">Decrement</button> &nbsp;
                            <button onClick={() => this.deleteHandler(counterItem)} className="btn btn-danger">Delete</button> &nbsp;
                            <button className="btn btn-primary" onClick={() => this.resetHandler(counterItem)}>Reset</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

}

export default Counter;