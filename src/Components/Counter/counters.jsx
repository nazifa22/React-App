import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {

    state = {
        counters: [
            { id: 1, value: 0, imageURL: 'https://img.icons8.com/color/100/000000/popeye.png' },
            { id: 2, value: 10, imageURL: 'https://img.icons8.com/color/100/000000/smurf.png' },
            { id: 3, value: 20, imageURL: 'https://img.icons8.com/color/100/000000/sonic-the-hedgehog-1.png' },
            { id: 4, value: 30, imageURL: 'https://img.icons8.com/color/100/000000/super-mario.png' }
        ]
    }

    deleteHandler = (counterItem) => {
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
        console.log('Counters - Rendered')

        return (
            <div>
                {
                    this.state.counters.map(counterItem => 
                        <Counter 
                        key={ counterItem.id } 
                        counter = { counterItem } 
                        handleIncrement = { () => this.handleIncrement(counterItem) } 
                        handleDecrement = { () => this.handleDecrement(counterItem) }
                        handleDelete = { () => this.deleteHandler(counterItem) } 
                        resetHandler = { () => this.resetHandler(counterItem) }
                        /> 
                    )
                }
            </div>
        )
    }

}

export default Counters;