import React from 'react'
import Form from '../../utils/components/form';
import Joi from 'joi-browser';
import { onLogin } from '../../store/actions/authAction';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user
    }
}

// map dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (payload) => {
            dispatch({ type: "LOGIN" , payload })
        }
    }
}

class Login extends Form {
    
    state = {
        payload: {
            username: '',
            password: ''
        },
        errors: {}
    };

    schema = {
        username: Joi.string().min(3).max(25).required().label("نام کاربری"),
        password: Joi.string().min(8).max(25).required().label("رمز عبور")
    }

    onLogin = e => {
        e.preventDefault();
        const { payload, errors } = this.state;

        payload.username = e.target.username.value;
        payload.password = e.target.password.value;
        this.setState({ payload });

        const results = Joi.validate(payload, this.schema, 
            {
                abortEarly: false
            });

        if(!results.error) {
            return this.props.onLogin(payload);
            // return doLogin(payload);
        }

        for(let item of results.error.details) {
            errors[item.path[0]] = item.message;
        }

        // this.props.onLogin(payload)
    }

    handleInputChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };

    render () {
        const { errors } = this.state;
        return (
            <div className="container offset-md-4 mt-5">
                <div className="jumbotron">
                    <h1>Login Form</h1> 
                    <form onSubmit={this.onLogin}>
                        {errors && Object.values(errors).map(err => 
                            <div key={err} className="alert alert-danger">{err}</div>
                        )}
                        {this.input("text", "username", "UserName", "col-md-4", "form-control m-2")}
                        {this.input("password", "password", "Password", "col-md-4", "form-control m-2")}
                        {this.button("Login", "btn btn-sm btn-success")}
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, { onLogin })(Login);
// export default Login;