import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, label, error, options, ...rest }) => {
    return (
        <>
            <div className="form-group">
                <label htmlFor={ name }>{ label }</label>
                <option value='' />
                {
                    options.map(option => (
                        <option key={option._id} value={option._id}>
                            { option.name }
                        </option>
                    ))
                }
            </div>
            { error && <div className="alert alert-danger">{ error }</div> }
        </>
    )
}

export default Select;