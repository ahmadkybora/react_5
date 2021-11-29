import React from 'react';
import Joi from 'joi-browser';
import Form from '../../utils/components/form';
import { doRegister } from '../../services/authService';
import { userUpdate } from '../../services/usersService';
import { onRegister } from '../../store/actions/authAction';
import { connect } from 'react-redux';
// import $ from 'jquery';
// window.$ = $;

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        edit: state.userReducer.edit,
    }
}

// map dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (payload) => {
            dispatch({ type: "REGISTER" , payload })
        },
        // updateUsers: ()
    }
}

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
        isSelected: false,
        showImg: '',
        disabled: false,
        user: {},
        edit: false,
        errors: {}
    };

    schema = {
        first_name: Joi.string().min(3).max(25).required().label("First Name"),
        last_name: Joi.string().min(3).max(25).required().label("Last Name"),
        username: Joi.string().min(3).max(25).required().label("User Name"),
        email: Joi.string().min(3).max(25).required().label("Email"),
        password: Joi.string().min(8).max(25).required().label("Password"),
        password_confirmation: Joi.string().min(8).max(25).required().label("Confirmation Password"),
        mobile: Joi.string().min(8).max(25).required().label("Mobile"),
        home_phone: Joi.string().min(8).max(25).required().allow('').label("HomePhone"),
        work_phone: Joi.string().min(8).max(25).required().allow('').label("WorkPhone"),
        image: Joi.string().allow('').label("Image"),
        work_address: Joi.string().min(8).max(250).required().allow('').label("Work Address"),
        home_address: Joi.string().min(8).max(250).required().allow('').label("Home Address"),
    }

    componentDidMount () {
        if(this.props.edit) {
            const { user, edit } = this.props;
            this.setState({ user, edit });
        }
    }

    onRegister = e => {
        e.preventDefault();

        const { errors, payload } = this.state;

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

        const results = Joi.validate(payload, this.schema, 
            {
                abortEarly: false
            });

        if(!results.error) {
            return this.props.onRegister(payload);
        }

       if(e.target.files) {
            let file = e.target.files[0];
            let suffix = file.name.split('.')[1];
            let Regex = /(jpg|jpeg|png|gif)$/;
            if(!suffix.match(Regex)) {
                let m = {
                    message: "Please select valid image.",
                    path: "image"
                }
                let lastElement = results.error.details.length;
                results.error.details[lastElement] = m
            }
        } else {
            let m = {
                message: "Please select image.",
                path: "image"
            }
            let lastElement = results.error.details.length;
            results.error.details[lastElement] = m
        }
        // console.log(results.error.details)
        for(let item of results.error.details) {
            errors[item.path[0]] = item.message;
        }
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

    displayFile = e => {
        let file = e.target.files[0];
        // let suffix = file.name.split('.')[1];
        // let Regex = /(jpg|jpeg|png|gif)$/;

        // // console.log("Regex", typeof(Regex));
        // // console.log(Regex);
        // // console.log("suffix", typeof(suffix));
        // // console.log(suffix);
        // if(suffix.match(Regex)) {
        //     this.setState({ errors: "Please select valid image." });
        //     return false;
        // }

        let fileReader = new FileReader();

        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            this.showImg = e.target.result;
            this.setState({ showImg: this.showImg })
        };
        let isSelected = true;
        this.setState({ isSelected });
    }

    render () {
        const { user, edit, isSelected, showImg, errors } = this.state;
        // console.log(typeof(edit));
        return (
            <div className="container offset-md-2 mt-5">
                <div className="jumbotron">
                    {edit ? <h1>Update Form</h1> : <h1>Register Form</h1>}
                    <form onSubmit={edit ? this.onUpdate.bind(this) : this.onRegister.bind(this)}>
                        {errors && Object.values(errors).map(err => 
                            <div className="justify-content-center">
                                <div key={err} className="col-8 alert alert-danger">{err}</div>
                            </div>
                        )}
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
                            {/* {this.file("image", user ? user.image : '')} */}
                            <div className="form-group col-md-4">
                                <input 
                                    className="form-control" 
                                    name="image"
                                    id="image" 
                                    type="file" 
                                    onChange={(e) => this.displayFile(e, 0)}
                                />
                            </div>
                        </div>
                        { isSelected === true ? 
                        <div className="col-md-4">
                            <img 
                                class="rounded-circle" 
                                src={showImg}
                                width="100px" 
                                height="100px" 
                            />
                        </div>
                        : '' }
                        {this.textArea("work_address", "Work Address ...", user ? user.work_address : '')}
                        {this.textArea("home_address", "Home Address ...", user ? user.home_address : '')}
                        {edit ? this.button("Update", "btn btn-sm btn-primary") : this.button("Register", "btn btn-sm btn-success")}
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { onRegister })(Register);
// export default Register;