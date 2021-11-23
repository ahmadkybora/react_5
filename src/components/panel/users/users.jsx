import React, { Component } from 'react';
import http from '../../../services/httpService';
import { getAllUsers, deleteUser } from '../../../services/usersService';
import { button, input } from '../../../utils/tools';
import Register from '../../auth/register';
import Pagination from '../../../utils/components/pagination';
import Modal from '../../../utils/components/Modal';
import { connect } from 'react-redux'
import { getUsers } from '../../../store/actions/userActions'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => {
    return {
        users: state.userReducer.users
    }
}

const mapDispacthToProps = dispatch => {
    // return bindActionCreators({ getUsers }, dispatch)
    return {
    //   getUsers: () => dispatch(getUsers()),
      getUsers: () => dispatch({ type: "GET_USERS" })      
    }
};

class Users extends Component {

    state = {
        users: [],
        from : '',
        to: '',
        currentPage: '',
        lastPage: '',
        perPage: '',
        total: '',
        edit: false,
        style: "fa fa-user-plus text-success",
        user: {},
        show: false,
        title: "Display User"
    }

    async componentDidMount() {
        await this.props.getUsers();

        const { 
            data: users, 
            from, 
            to, 
            current_page: currentPage, 
            last_page: lastPage, 
            per_page: perPage, 
            total 
        } = this.props.users

        this.setState({ 
            users, 
            from,
            to,
            currentPage,
            lastPage,
            perPage,
            total,
        });

    }

    async getAllUsers() {
        const users = await http.get(`panel/users`)
            .then(res => res.data.data)
            .catch(err => Error(err));

        this.setState({ 
            users: users.data, 
            from: users.from,
            to: users.to,
            currentPage: users.current_page,
            lastPage: users.last_page,
            perPage: users.per_page,
            total: users.total,
        });
    }

    option = ( user, label, type ) => {
        return (
            <i 
            className={label} 
            onClick={() => {
                switch(type) {
                    case 'show':
                        this.showUser(user)
                    break;
                    case 'edit':
                        this.editUser(user)
                    break;
                    case 'delete':
                        this.deleteUser(user)
                    break;
                }}}>
            </i>
        )
    }

    search = ( name, label, font, style ) => {
        return (
            <button 
                className={style}
                name={name}>
                <i className={font}></i>
                {label}
            </button>
        )
    }
    
    createUser = () => {
        const { displayForm, style } = this.state;
        let close = "fa fa-close text-danger";
        let plus = "fa fa-user-plus text-success";

        this.setState({ 
            edit: false, 
            displayForm: displayForm ? false : true, 
            status: true, 
            style: ( style === plus ) ? close : plus,
        });
    }

    editUser = user => {
        const { displayForm, style } = this.state;
        let close = "fa fa-close text-danger";
        let plus = "fa fa-user-plus text-success";

        this.setState({ 
            edit: true, 
            displayForm: displayForm ? false : true, 
            status: true, 
            style: ( style === plus ) ? close : plus,
            user: user
        });
    }

    showUser = user => {
        const { show, users } = this.state;
        const userId = users.find(u => u.id === user.id );
        return this.setState({ 
            show: show ? false : true,
            user: userId
        });
    }

    updateUser = () => {}

    deleteUser = async user => {
        this.setState({users: this.state.users.filter((u) => { 
                return u !== user 
            })
        });
        await deleteUser(user);
        await this.getAllUsers();
    }
    
    handlePageChange = async (page) => {
        this.setState({ currentPage: page });
        const users = await http.get(`panel/users?page=${page}`)
            .then(res => res.data.data)
            .catch(err => Error(err));

        this.setState({ 
            users: users.data, 
            from: users.from,
            to: users.to,
            currentPage: users.current_page,
            lastPage: users.last_page,
            perPage: users.per_page,
            total: users.total,
        });
    }

    render() { 
        const { 
            users, 
            user, 
            edit, 
            displayForm, 
            currentPage, 
            lastPage, 
            show,
            title
        } = this.state;
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h1>Users table</h1>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="input-group">
                                <div className="form-outline">
                                    {input(
                                        "search", 
                                        "userSearch", 
                                        "Search User ...", 
                                        "col-md-12", 
                                        "form-control col-md-12"
                                    )}
                                </div>
                                {button("", "fa fa-search", "btn btn-success")}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <button 
                            className="btn btn-default float-end"
                            onClick={() => {this.createUser()}}>
                            <i className={this.state.style} />
                        </button>
                    </div>
                </div>
                {displayForm ? 
                <Register 
                    edit={edit} 
                    user={edit ? user : ''} 
                /> : ''}
                {show ? 
                <Modal 
                    title={title} 
                    value={user} 
                    show={show} 
                /> : ''}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>FullName</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Option</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{currentPage === 1 ? (index + 1) : (index + 1) + ((currentPage - 1) * 10)}</td>
                                <td>{user.first_name + ' ' + user.last_name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    {this.option(user, "fa fa-edit text-primary m-1", "edit")}
                                    {this.option(user, "fa fa-trash text-danger m-1", "delete")}
                                    {this.option(user, "fa fa-eye text-success m-1", "show")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination 
                    lastPage={lastPage}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );
    }
}
 
export default connect(mapStateToProps, { getUsers })(Users)