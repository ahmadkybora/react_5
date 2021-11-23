import React, { Component } from 'react';
import Search from '../../utils/components/search';
import { getProducts, showProduct } from '../../store/actions/homeActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from '../../utils/components/pagination';
import http from '../../services/httpService';
import { NavLink } from 'react-router-dom';
import imgLoading from '../../loading.gif';
import { info } from '../../utils/tools';
import Modal from '../../utils/components/Modal';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const mapStateToProps = state => {
    return {
        products: state.homeReducer.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (payload) => {
            dispatch({ type: "GET_PRODUCTS" }, payload)  
        },
        showProduct: (payload) => {
            dispatch({ type: "SHOW_PRODUCT" }, payload)
        }
    }
}

class Products extends Component {

    state = {
        products: [],
        product: {},
        from: '',
        to: '',
        currentPage: '',
        lastPage: '',
        perPage: '',
        total: '',
        display: false,
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

    // getProducts  = async => {

    // } 

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

        // const productAll = await http.get(`/products?page=${page}`)
        //         .then(res => res.data.data)
        //         .catch(err => Error(err));

        // const { 
        //     data: products, 
        //     from, 
        //     to, 
        //     current_page: currentPage, 
        //     last_page: lastPage,
        //     per_page: perPage,
        //     total,
        // } = productAll

        // this.setState({
        //     products,
        //     from,
        //     to,
        //     currentPage, 
        //     lastPage, 
        //     perPage, 
        //     total
        // })

    }

    option = ( product, label, type ) => {
        return (
            <i 
            className={label} 
            onClick={() => {
                switch(type) {
                    case 'info':
                        this.showProduct(product)
                    break;
                    case 'cart':
                        this.addToCart(product)
                    break;
                    case 'favorite':
                        this.favorite(product)
                    break;
                    case 'like':
                        this.like(product)
                    break;
                    case 'dislike':
                        this.dislike(product)
                    break;
                }}}>
            </i>
        )
    }

    showProduct = (product) => {
        const productId = this.props.showProduct(product).payload;
        // alert(productId.categoryId);
        // return (

        // )
          
    }

    addToCart = (product) => {}

    favorite = (product) => {}

    like = (product) => {}
    
    dislike = (product) => {}

    render() { 
        const style = {width: "17rem", boxShodw: "5px 10px #888888"}
        const { products, lastPage, currentPage } = this.state;
        const displayInline = { display: "inline" };

        return (
            <div className="container-fluid mt-3">
                    <h3 className="text-center">Popular Products</h3>
                    <div className="offset-2">
                        <Search />
                    </div>
                    <div className="row mt-3 p-1">
                    {/* <OwlCarousel className='owl-theme' loop margin={10} nav> */}
                        {products.map(product => (
                            <div className="card my-1 mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" style={style}>
                                <img 
                                    src={product.loading ? imgLoading : product.image} 
                                    className="card-img-top" 
                                    height="150px"
                                />
                                <div className="card-body">
                                    <p style={displayInline}>name: </p><h6 style={displayInline} className="card-title">{product.name}</h6>
                                    <br />
                                    <p style={displayInline}>category: </p><h6 style={displayInline} className="card-text">{product.category.name}</h6>
                                    <br />
                                    {/* {this.option(product, "fa fa-info-circle text-primary w-25", "info")} */}

                                    <i /*onClick={() => this.showProduct(product)}*/ 
                                        type="button" 
                                        class="fa fa-info-circle text-primary w-25" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#exampleModal">
                                    </i>
                                    <div className="modal fade" 
                                        id="exampleModal" 
                                        tabindex="-1" 
                                        aria-labelledby="exampleModalLabel" 
                                        aria-hidden="true"
                                        >
                                        <div className="modal-dialog modal-xl">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                                                    <button type="button" className="btn-close btn-sm btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                        <img 
                                                            src={product.loading ? imgLoading : product.image} 
                                                            className="card-img-top" 
                                                            height="200px"
                                                            width="50px"
                                                        />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h1>{product.name}</h1>
                                                            <p>{product.description}</p>
                                                            {this.option(product, "fa fa-shopping-cart text-success w-25", "cart")}
                                                            {this.option(product, "fa fa-heart text-danger w-25", "favorite")}
                                                            {this.option(product, "fa fa-thumbs-up text-success w-25", "like")}
                                                            {this.option(product, "fa fa-thumbs-down text-success", "dislike")}
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                    {this.option(product, "fa fa-shopping-cart text-success w-25", "cart")}
                                    {this.option(product, "fa fa-heart text-danger w-25", "favorite")}
                                    {this.option(product, "fa fa-thumbs-up text-success", "like")}
                                    {this.option(product, "fa fa-thumbs-down text-success", "dislike")}
                            </div>
                        </div>
                        ))}
                    {/* </OwlCarousel> */}
                    </div>
                    <Pagination 
                        lastPage={lastPage}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
            </div>
        );
    }
}
 
export default connect(mapStateToProps, { getProducts, showProduct })(Products);