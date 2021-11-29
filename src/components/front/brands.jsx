import React, { useEffect, useState } from 'react';
import { getBrands } from '../../store/actions/homeActions';
import { connect } from 'react-redux';
import imgLoading from '../../loading.gif';
import img1 from '../../1.jpg';
import img2 from '../../2.jpg';
import img3 from '../../3.jpg';

const mapStateToProps = state => {
    return {
        brands: state.homeReducer.brands
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBrands: (payload) => {
            dispatch({ type: "GET_BRANDS" }, payload)  
        },
    }
}

const Brands = (props) => {
    const [brands, setBrands ] = useState();
    const style = {"width": "12rem"};

    useEffect(async () => {
        await props.getBrands();
        setBrands(props.brands.data);
    }, []);

    return (
        <div className="container-fluid">
            
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item">
                        <img src={img1} class="d-block" width="250px" height="150px" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src={img2} class="d-block" width="250px" height="150px" alt="..." />
                    </div>

                    <div className="carousel-item">
                        <img src={img3} class="d-block" width="250px" height="150px" alt="..." />
                    </div>
                </div>

                <button className="carousel-control-prev bg-info" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next bg-info" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row justify-content-center">
                <h3 className="text-center">Popular Brands</h3>
                {/* {brands.map(brand => (
                    <div className="card mx-1 my-1 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12" style={style}>
                        <img src={brand.image} width="50px" height="50px"/>
                        <div className="card-body">
                            <p>{brand.name}</p>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default connect(mapStateToProps, { getBrands })(Brands);
