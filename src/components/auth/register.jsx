import React from 'react'
import Form from '../../utils/components/form';
import { doRegister } from '../../services/authService';
import { userUpdate } from '../../services/usersService';

class Register extends Form {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: props.uesr, 
    //         payload: {
    //             first_name: '',
    //             last_name: '',
    //             username: '',
    //             email: '',
    //             password: '',
    //             password_confirmation: '',
    //             mobile: ''
    //         }
    //     }
    // };

    state = {
        payload: {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            mobile: '',
            home_phone: '',
            work_phone: '',
            image: '',
            work_address: '',
            home_address: '',
        },
        user: {}
    };

    componentDidMount () {
        const { user } = this.props;
        this.setState({ user: user });
    }

    onRegister = e => {
        e.preventDefault();

        const { payload } = this.state;

        payload.first_name = e.target.first_name.value;
        payload.last_name = e.target.last_name.value;
        payload.username = e.target.username.value;
        payload.email = e.target.email.value;
        payload.password = e.target.password.value;
        payload.password_confirmation = e.target.password_confirmation.value;
        payload.mobile = e.target.mobile.value;
        payload.home_phone = e.target.home_phone.value;
        payload.work_phone = e.target.work_phone.value;
        payload.image = e.target.image.value ? e.target.image.value : '';
        payload.work_address = e.target.work_address.value;
        payload.home_address = e.target.home_address.value;

        this.setState({ payload });

        return doRegister(payload);
    }

    onUpdate = e => {
        e.preventDefault();

        const { user } = this.state;

        user.first_name = e.target.first_name.value;
        user.last_name = e.target.last_name.value;
        user.username = e.target.username.value;
        user.email = e.target.email.value;
        user.password = e.target.password.value;
        user.password_confirmation = e.target.password_confirmation.value;
        user.mobile = e.target.mobile.value;
        user.home_phone = e.target.home_phone.value;
        user.work_phone = e.target.work_phone.value;
        user.image = e.target.image.value ? e.target.image.value : '';
        user.work_address = e.target.work_address.value;
        user.home_address = e.target.home_address.value;

        this.setState({ user });

        return userUpdate(user);
    }

    render () {
        const { user } = this.state;

        return (
            <div className="container offset-md-2 mt-5">
                <div className="jumbotron">
                    {user ? <h1>Update Form</h1> : <h1>Register Form</h1>}
                    <form onSubmit={user ? this.onUpdate.bind(this) : this.onRegister.bind(this)}>
                        <div className="row">
                            {this.input(
                                "text", 
                                "first_name", 
                                "FirstName ...", 
                                "col-md-4", 
                                "form-control m-2", 
                                user ? user.first_name : ''
                            )}
                            {this.input(
                                "text", 
                                "last_name", 
                                "LastName ...", 
                                "col-md-4", 
                                "form-control m-2", 
                                user ? user.last_name : ''
                            )}
                        </div>
                        <div className="row">
                            {this.input(
                                "text", 
                                "username", 
                                "UserName ...", 
                                "col-md-4", 
                                "form-control m-2", 
                                user ? user.username : ''
                            )}
                            {this.input(
                                "email", 
                                "email", 
                                "Email ...", 
                                "col-md-4", 
                                "form-control m-2", 
                                user ? user.email : ''
                            )}
                        </div>
                        <div className="row">
                            {this.input(
                                "password", 
                                "password", 
                                "Password ...", 
                                "col-md-4", 
                                "form-control m-2", 
                            )}
                            {this.input(
                                "password", 
                                "password_confirmation", 
                                "Confirmation Password ...", 
                                "col-md-4", 
                                "form-control m-2", 
                            )}
                        </div>
                        <div className="row">
                            {this.input(
                                "number", 
                                "mobile", 
                                "Mobile ...", 
                                "col-md-4", 
                                "form-control m-2", 
                                user ? user.mobile + 'disabled' : ''
                            )}
                            {this.input(
                                "number", 
                                "home_phone", 
                                "Home Phone ...", 
                                "col-md-4", 
                                "form-control m-2", 
                                user ? user.home_phone : ''
                            )}
                        </div>
                        <div className="row">
                            {this.input(
                                "number", 
                                "work_phone", 
                                "Work Phone ...", 
                                "col-md-4", 
                                "form-control m-2", 
                                user ? user.work_phone : ''
                            )}
                            {this.file("image", user ? user.image : '')}
                        </div>
                        {this.textArea("work_address", "Work Address ...", user ? user.work_address : '')}
                        {this.textArea("home_address", "Home Address ...", user ? user.home_address : '')}
                        {this.props.edit ? this.button("Update", "btn btn-sm btn-primary") : this.button("Register", "btn btn-sm btn-success")}
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;