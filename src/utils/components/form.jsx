import React, { Component } from 'react'

class Form extends Component
{
    state = {
        payload: {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            mobile: ''
        },
        errors: {}, 
        user: {}
    };

    input = ( type, name, placeholder, className, style, value = '' ) => {

        return (
            <div className="form-group" className={className}>
                <input 
                    className={style}
                    type={type}
                    name={name}
                    id={name}
                    defaultValue={value}
                    placeholder={placeholder}
                />
            </div>
        )
    }

    textArea = ( name, placeholder, value = '' ) => {
        return (
            <div className="form-group col-md-8">
                <textarea 
                    className="form-control m-2"
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    rows="5"
                    defaultValue={value}
                ></textarea>
            </div>
        )
    }

    file = ( name, value ) => {
        return (
            <div className="form-group col-md-4">
                <input 
                    className="form-control" 
                    name={name}
                    id={name} 
                    type="file" 
                    defaultValue={value}
                />
            </div>
        )
    }

    button = ( name, style ) => {
        return (
            <div className="form-group col-md-8">
                <button className={style}>{name}</button>
            </div>
        )
    }

    select = ( name, value ) => {
        return (
            <div className="form-group">
                <select className="form-select" name={name}>
                    <option selected>Open this select menu</option>
                    <option value="0">Please Select your Gender</option>
                    <option value="1">{value}</option>
                    <option value="2">{value}</option>
                </select>
            </div>
        )
    }
}

export default Form;