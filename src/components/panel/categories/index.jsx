import React, { Component } from 'react';
import http from '../../../services/httpService';
import { getAllUsers, deleteUser } from '../../../services/usersService';
import { button, input } from '../../../utils/tools';
import Register from '../../auth/register';
import Pagination from '../../../utils/components/pagination';
import Modal from '../../../utils/components/Modal';
import { connect } from 'react-redux'
import { getCategories } from '../../../store/actions/categoryActions'
import { bindActionCreators } from 'redux'
import imgLoading from '../../../loading.gif';

const mapStateToProps = state => {
    return {
        categories: state.categoryReducer.categories
    }
}

const mapDispacthToProps = dispatch => {
    // return bindActionCreators({ getUsers }, dispatch)
    return {
    //   getUsers: () => dispatch(getUsers()),
      getCategories: () => dispatch({ type: "GET_CATEGORIES" })      
    }
};

class Categories extends Component {

    state = {
        categories: [],
        category: {},
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
        await this.props.getCategories();

        const { 
            data: categories, 
            from, 
            to, 
            current_page: currentPage, 
            last_page: lastPage, 
            per_page: perPage, 
            total 
        } = this.props.categories

        categories.map(p => p.loading = true);

        this.setState({ 
            categories, 
            from,
            to,
            currentPage,
            lastPage,
            perPage,
            total,
        });

    }

    async getAllCategories() {
        const categories = await http.get(`panel/categories`)
            .then(res => res.data.data)
            .catch(err => Error(err));

        this.setState({ 
            users: categories.data, 
            from: categories.from,
            to: categories.to,
            currentPage: categories.current_page,
            lastPage: categories.last_page,
            perPage: categories.per_page,
            total: categories.total,
        });
    }

    option = ( category, label, type ) => {
        return (
            <i 
            className={label} 
            onClick={() => {
                switch(type) {
                    case 'show':
                        this.showCategory(category)
                    break;
                    case 'edit':
                        this.editCategory(category)
                    break;
                    case 'delete':
                        this.deleteCategory(category)
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
    
    createCategory = () => {
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

    editCategory = Category => {
        const { displayForm, style } = this.state;
        let close = "fa fa-close text-danger";
        let plus = "fa fa-user-plus text-success";

        this.setState({ 
            edit: true, 
            displayForm: displayForm ? false : true, 
            status: true, 
            style: ( style === plus ) ? close : plus,
            Category: Category
        });
    }

    showCategory = category => {
        const { show, categories } = this.state;
        const categoryId = categories.find(u => u.id === category.id );
        return this.setState({ 
            show: show ? false : true,
            category: categoryId
        });
    }

    updateCategory = () => {}

    deleteCategory = async category => {
        this.setState({users: this.state.category.filter((u) => { 
                return u !== category 
            })
        });
        // await deleteProduct(product);
        await this.getAllCategories();
    }
    
    handlePageChange = async (page) => {
        this.setState({ currentPage: page });

        await this.props.getCategories(page);

        const { 
            data: categories, 
            from, 
            to, 
            current_page: currentPage, 
            last_page: lastPage,
            per_page: perPage,
            total,
        } = this.props.categories;

        categories.map(p => p.loading = true);

        this.setState({
            categories,
            from,
            to,
            currentPage, 
            lastPage, 
            perPage, 
            total
        })
    }

    render() { 
        const { 
            categories, 
            category, 
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
                        <h1>Catgegories table</h1>
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
                            onClick={() => {this.createCategory()}}>
                            <i className={this.state.style} />
                        </button>
                    </div>
                </div>
                {displayForm ? 
                <Register 
                    edit={edit} 
                    user={edit ? category : ''} 
                /> : ''}
                {show ? 
                <Modal 
                    title={title} 
                    value={category} 
                    show={show} 
                /> : ''}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Image</th>
                            <th></th>
                            <th>Option</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <td>{currentPage === 1 ? (index + 1) : (index + 1) + ((currentPage - 1) * 10)}</td>
                                <td>{category.name}</td>
                                <td>{category.brand.name}</td>
                                <td>
                                    <img 
                                        src={category.image === null ? imgLoading : "http://localhost:8000/storage/" + category.image} 
                                        class="rounded-circle" 
                                        width="50px" 
                                        height="50px"
                                    />
                                </td>
                                <td>{category.price}</td>
                                <td>
                                    {this.option(category, "fa fa-edit text-primary m-1", "edit")}
                                    {this.option(category, "fa fa-trash text-danger m-1", "delete")}
                                    {this.option(category, "fa fa-eye text-success m-1", "show")}
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
 
export default connect(mapStateToProps, { getCategories })(Categories)