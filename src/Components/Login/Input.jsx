import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ name, label, error, ...rest }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor={ name }>{ label }</label>
                <input 
                    {...rest}
                    id={ name } 
                    name={ name }
                    className="form-control"/>
            </div>
            { error && <div className="alert alert-danger">{ error }</div> }
        </>
    )
}

export default Input;