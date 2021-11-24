import React, { Component } from 'react';
import http from '../../../services/httpService';
import { getAllUsers, deleteUser } from '../../../services/usersService';
import { button, input } from '../../../utils/tools';
import Register from '../../auth/register';
import Pagination from '../../../utils/components/pagination';
import Modal from '../../../utils/components/Modal';
import { connect } from 'react-redux'
import { getProducts } from '../../../store/actions/productActions'
import { bindActionCreators } from 'redux'
import imgLoading from '../../../loading.gif';

const mapStateToProps = state => {
    return {
        products: state.productReducer.products
    }
}

const mapDispacthToProps = dispatch => {
    // return bindActionCreators({ getUsers }, dispatch)
    return {
    //   getUsers: () => dispatch(getUsers()),
      getProducts: () => dispatch({ type: "GET_Products" })      
    }
};

class Products extends Component {

    state = {
        products: [],
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
        await this.props.getProducts();

        const { 
            data: products, 
            from, 
            to, 
            current_page: currentPage, 
            last_page: lastPage, 
            per_page: perPage, 
            total 
        } = this.props.products

        products.map(p => p.loading = true);

        this.setState({ 
            products, 
            from,
            to,
            currentPage,
            lastPage,
            perPage,
            total,
        });

    }

    async getAllUsers() {
        const products = await http.get(`panel/products`)
            .then(res => res.data.data)
            .catch(err => Error(err));

        this.setState({ 
            users: products.data, 
            from: products.from,
            to: products.to,
            currentPage: products.current_page,
            lastPage: products.last_page,
            perPage: products.per_page,
            total: products.total,
        });
    }

    option = ( product, label, type ) => {
        return (
            <i 
            className={label} 
            onClick={() => {
                switch(type) {
                    case 'show':
                        this.showProduct(product)
                    break;
                    case 'edit':
                        this.editProduct(product)
                    break;
                    case 'delete':
                        this.deleteProduct(product)
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
    
    createProduct = () => {
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

    editProduct = product => {
        const { displayForm, style } = this.state;
        let close = "fa fa-close text-danger";
        let plus = "fa fa-user-plus text-success";

        this.setState({ 
            edit: true, 
            displayForm: displayForm ? false : true, 
            status: true, 
            style: ( style === plus ) ? close : plus,
            product: product
        });
    }

    showProduct = product => {
        const { show, products } = this.state;
        const productId = products.find(u => u.id === product.id );
        return this.setState({ 
            show: show ? false : true,
            product: productId
        });
    }

    updateProduct = () => {}

    deleteProduct = async product => {
        this.setState({users: this.state.products.filter((u) => { 
                return u !== product 
            })
        });
        // await deleteProduct(product);
        await this.getAllProducts();
    }
    
    handlePageChange = async (page) => {
        this.setState({ currentPage: page });

        await this.props.getProducts(page);

        const { 
            data: products, 
            from, 
            to, 
            current_page: currentPage, 
            last_page: lastPage,
            per_page: perPage,
            total,
        } = this.props.products;

        products.map(p => p.loading = true);

        this.setState({
            products,
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
            products, 
            product, 
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
                        <h1>Products table</h1>
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
                            onClick={() => {this.createProduct()}}>
                            <i className={this.state.style} />
                        </button>
                    </div>
                </div>
                {displayForm ? 
                <Register 
                    edit={edit} 
                    user={edit ? product : ''} 
                /> : ''}
                {show ? 
                <Modal 
                    title={title} 
                    value={product} 
                    show={show} 
                /> : ''}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Option</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{currentPage === 1 ? (index + 1) : (index + 1) + ((currentPage - 1) * 10)}</td>
                                <td>{product.name}</td>
                                <td>{product.category.name}</td>
                                <td>
                                    <img 
                                        src={product.loading ? imgLoading : product.image} 
                                        class="rounded-circle" 
                                        width="50px" 
                                        height="50px"
                                    />
                                </td>
                                <td>{product.price}</td>
                                <td>
                                    {this.option(product, "fa fa-edit text-primary m-1", "edit")}
                                    {this.option(product, "fa fa-trash text-danger m-1", "delete")}
                                    {this.option(product, "fa fa-eye text-success m-1", "show")}
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
 
export default connect(mapStateToProps, { getProducts })(Products)