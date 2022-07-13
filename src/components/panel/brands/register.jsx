import React, { useState } from 'react';
import Joi, { schema } from 'joi-browser';
import PropTypes from 'prop-types';
import { button, input, textArea } from '../../../utils/tools';
import { createBrands, updateBrands } from '../../../store/actions/brandActions';
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    const dispatch = useDispatch();
    const brand = useSelector(state => state.brandReducer.brand);
    const edit = useSelector(state => state.brandReducer.edit);

    const [brands, setBrands] = useState([])
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const schema = {
        name: Joi.string().min(3).max(25).required().label("Name"),
        description: Joi.string().min(3).max(25).required().label("Description"),
    }

    const onRegister = e => {
        e.preventDefault();

        setName(e.target.name.value);
        setDescription(e.target.description.value);
        dispatch(updateBrands(name, description));

        const results = Joi.validate({name, description}, schema, 
            {
                abortEarly: false
            });

        if(!results.error) {
            return dispatch(createBrands(name, description));
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
    }

    const onUpdate = e => {
        e.preventDefault();

        setName(e.target.name.value);
        setDescription(e.target.description.value);

        dispatch(updateBrands(name, description));
    }

    const displayFile = e => {
        let file = e.target.files[0];
        let fileReader = new FileReader();

        fileReader.readAsDataURL(file);
        fileReader.onload = (e) => {
            this.showImg = e.target.result;
            this.setState({ showImg: this.showImg })
        };
        let isSelected = true;
        this.setState({ isSelected });
    }

    return (
        <div className="container offset-md-2 mt-5">
            <div className="jumbotron">
                {edit ? <h1>Update Form</h1> : <h1>Register Form</h1>}
                <form onSubmit={edit ? onUpdate.bind(this) : onRegister.bind(this)}>
                    {/* {errors && Object.values(errors).map(err => 
                        <div className="justify-content-center">
                            <div key={err} className="col-8 alert alert-danger">{err}</div>
                        </div>
                    )} */}
                    <div className="row">
                        {input(
                            "text", 
                            "first_name", 
                            "FirstName ...", 
                            "col-md-4", 
                            "form-control m-2", 
                            edit ? brand.name : ''
                        )}
                    </div>
                    {console.log(brand)}
                    {textArea(
                        "home_address", 
                        "Home Address ...", 
                        edit ? brand.description : ''
                    )}
                    {edit ? button("Update", "", "btn btn-sm btn-primary") : button("Register", "", "btn btn-sm btn-success")}
                </form>
            </div>
        </div>
    )
}

Register.propTypes = {
    edit: PropTypes.bool.isRequired
}

// export default connect(mapStateToProps, { onRegister })(Register);
export default Register;