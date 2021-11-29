import React, { Component } from 'react';
import Search from '../../utils/components/search';
import { getCategories } from '../../store/actions/homeActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from '../../utils/components/pagination';
import http from '../../services/httpService';
import { NavLink } from 'react-router-dom';
import imgLoading from '../../loading.gif';
import { info } from '../../utils/tools';
import Modal from '../../utils/components/Modal';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const mapStateToProps = state => {
    return {
        categories: state.homeReducer.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: (payload) => {
            dispatch({ type: "GET_CATEGORIES" }, payload)  
        },
        // showCategory: (payload) => {
        //     dispatch({ type: "SHOW_CATEGORY" }, payload)
        // }
    }
}

class categories extends Component {

    state = {
        categories: [],
        category: {},
        from: '',
        to: '',
        currentPage: '',
        lastPage: '',
        perPage: '',
        total: '',
        display: false,
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
            total,
        } = this.props.categories;

        categories.map(p => p.loading = false);

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

    // getProducts  = async => {

    // } 

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

        categories.map(p => p.loading = false);

        this.setState({
            categories,
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

    option = ( category, label, type ) => {
        return (
            <i 
            className={label} 
            onClick={() => {
                switch(type) {
                    case 'info':
                        this.showProduct(category)
                    break;
                    case 'cart':
                        this.addToCart(category)
                    break;
                    case 'favorite':
                        this.favorite(category)
                    break;
                    case 'like':
                        this.like(category)
                    break;
                    case 'dislike':
                        this.dislike(category)
                    break;
                }}}>
            </i>
        )
    }

    showProduct = (category) => {
        const categoryId = this.props.showcategory(category).payload;
        // alert(productId.categoryId);
        // return (

        // )
          
    }

    addToCart = (category) => {}

    favorite = (category) => {}

    like = (category) => {}
    
    dislike = (category) => {}

    render() { 
        const style = {width: "17rem", boxShodw: "5px 10px #888888"}
        const { categories, lastPage, currentPage } = this.state;
        const displayInline = { display: "inline" };

        return (
            <div className="container-fluid mt-3">
                    <h3 className="text-center">Popular Categories</h3>
                    <div className="offset-2">
                        <Search />
                    </div>
                    <div className="row mt-3 p-1">
                    <OwlCarousel className='owl-theme' loop margin={1} items={4} center={true} autoplay={true}>
                        {categories.map(category => (
                            <div className="card my-1 mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" style={style}>
                                <img 
                                    src={category.loading ? imgLoading : "http://localhost:8000/storage/" + category.image} 
                                    className="card-img-top" 
                                    height="200px"
                                />
                                <div className="card-body">
                                    <p style={displayInline}>Name: </p><h6 style={displayInline} className="card-title">{category.name}</h6>
                                    <br />
                                    <p style={displayInline}>Brand: </p><h6 style={displayInline} className="card-text">{category.brand.name}</h6>
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
                                                    <h5 className="modal-title" id="exampleModalLabel">{category.name}</h5>
                                                    <button type="button" className="btn-close btn-sm btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                        <img 
                                                            src={category.loading ? imgLoading : category.image} 
                                                            className="card-img-top" 
                                                            height="200px"
                                                            width="50px"
                                                        />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <h1>{category.name}</h1>
                                                            <p>{category.description}</p>
                                                            {this.option(category, "fa fa-heart text-danger w-25", "favorite")}
                                                            {this.option(category, "fa fa-thumbs-up text-success w-25", "like")}
                                                            {this.option(category, "fa fa-thumbs-down text-success w-25", "dislike")}
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                    {this.option(category, "fa fa-heart text-danger w-25", "favorite")}
                                    {this.option(category, "fa fa-thumbs-up text-success w-25", "like")}
                                    {this.option(category, "fa fa-thumbs-down text-success w-25", "dislike")}
                            </div>
                        </div>
                        ))}
                    </OwlCarousel>
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
 
export default connect(mapStateToProps, { getCategories, /*showCategory*/ })(categories);