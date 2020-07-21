import React, { Component } from 'react'
import Input from './Input';
import Joi from 'joi-browser';
import Form from '../Form';

export default class Login extends Form {
    state = {
        data: {
            username: '',
            password: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string()
        .required()
        .label('Username'),

        password: Joi.string()
        .required()
        .label('Password')
    }

    doSubmit = () => {
        console.log('Submitted')
    }

    render() {
        return (
            <div className="mt-4">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} className="mt-4">
                    { this.renderInput('username', 'Username') }
                    { this.renderInput('password', 'Password') }
                    { this.renderButton('Login') }
                </form>
            </div>
        )
    }
}
