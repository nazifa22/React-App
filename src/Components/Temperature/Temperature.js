import React, {Component} from 'react';

const styles = {
    fieldset: {
        border: '1px solid #634cd2',
        padding: '20px'
    },
    form: {
        width: '60%',
        margin: '0 auto'
    },
    label: {
        textAlign: 'left',
        display: 'block',
    },
    input: {
        border: '1px solid #634cd2',
        backgroundColor: 'transparent',
        padding: '10px 15px',
        color: '#634cd2',
        display: 'flex',
        marginTop: '20px'
    },
    button: {
        border: '1px solid #634cd2',
        backgroundColor: 'transparent',
        padding: '10px 15px',
        color: '#634cd2',
        display: 'flex',
        
        ':hover': {
            border: '1px solid black'
        }
    },
    legend: {
        display: 'block',
        width: 'auto',
        maxWidth: '100%',
        marginBottom: '0.5em',
        padding: '0',
        color: 'inherit',
        fontSize: '1.5em',
        lineHeight: 'inherit',
        whiteSpace: 'normal'
    }
}

class Temperature extends Component {
    constructor() {
        super()
        this.state = {
            temperature: 'Enter the Temperature...',
            parameter: 'Celcius or Farenheit...'
        }
    }
    changedValue = (event) => {
        this.setState({
            temperature: event.target.value
        })
    }
    changedParameter = (event) => {
        this.setState({
            parameter: event.target.value
        })
    }
    submitEvent = (event) => {
        var temp = this.state.temperature;
        var para = this.state.parameter;
        let result;
        if(para == 'c' || para == 'C') {
            result = (temp * 9/5) + 3;
            alert(result)
        }
        else if(para == 'f' || para == 'F') {
            result = (temp - 32) * 5/9 ;
            alert(result)
        }
        else {
            alert('Opps! You entered the wrong parameter...')
        }
        event.preventDefault();
    }
    render() {
        return (
            <>
                <i>Temperature Calculation</i>
                <form onSubmit={this.submitEvent} style={styles.form} >
                    <fieldset style={styles.fieldset}>
                        <legend style={styles.legend}>Temperature Converter:</legend>
                        <label style={styles.label}>Enter the Temperature:</label>
                        <input placeholder={this.state.temperature} onChange={this.changedValue} type="text" style={styles.input} />
                        <br/>
                        <label style={styles.label}>Enter the Parameter:</label>
                        <input style={styles.input} placeholder={this.state.parameter} onChange={this.changedParameter.bind(this)} />
                        <br/>
                        <input style={styles.button} type="submit" value="Calculate"/>
                    </fieldset>
                </form>
                <p>{this.state.temperature}</p>
                <p>{this.state.parameter}</p>
            </>
        )
    }
}

export default Temperature;