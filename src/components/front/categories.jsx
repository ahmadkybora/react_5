import React, { Component } from 'react';
import Search from '../../utils/components/search';
import { getCategories } from '../../store/actions/homeActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from '../../utils/components/pagination';
import http from '../../services/httpService';
import { NavLink } from 'react-router-dom';
import imgLoading from '../../loading.gif';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

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
    }
}

class Categories extends Component {

    state = {
        categories: [],
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
        } = this.props.categories

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

    getProducts  = async => {

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
        } = categories

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
        const style = {width: "18rem"}
        const { categories, lastPage, currentPage } = this.state;

        return (
            <div className="container-fluid mt-3">
                    <h3 className="text-center">Popular Categories</h3>
                    <div className="offset-2">
                        <Search />
                    </div>
                    <div className="row mt-3 p-1">
                    {/* <OwlCarousel className='owl-theme' loop margin={10} nav> */}
                        {categories.map(category => (
                            <div className="card my-1 mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" style={style}>
                                <img 
                                    src={category.loading ? imgLoading : category.image} 
                                    className="card-img-top" 
                                    height="150px"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <p className="card-text">{category.brandId}</p>
                                    <NavLink to={``} className="btn btn-primary">more</NavLink>
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
 
export default connect(mapStateToProps, { getCategories })(Categories);