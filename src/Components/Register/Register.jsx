import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../Form';
import Input from '../Login/Input';

class Register extends Form {
    state = {
        data: {
            name: '',
            username: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        name: Joi.string()
        .required()
        .label('Name'),

        username: Joi.string()
        .required()
        .email()
        .label('Username'),

        password: Joi.string()
        .required()
        .min(5)
        .label('Password')
    }

    doSubmit = () => {
        console.log('Submitted')
    }

    render() {
        return (
            <div className="mt-4">
                <form onSubmit={this.handleSubmit} className="mt-4">
                    { this.renderInput('name', 'Name') }
                    { this.renderInput('username', 'Username') }
                    { this.renderInput('password', 'Password') }
                    { this.renderButton('Register') }
                </form>
            </div>
        )
    }
}

export default Register;