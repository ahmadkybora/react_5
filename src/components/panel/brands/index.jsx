import React, { useEffect, useState } from 'react';
import http from '../../../services/httpService';
// import { getBrands } from '../../../services/brandService';
import { button, input } from '../../../utils/tools';
import Register from './register';
import Pagination from '../../../utils/components/pagination';
import Modal from '../../../utils/components/Modal';
import { connect, useDispatch, useSelector } from 'react-redux'
import { getBrands, createBrands, editBrands } from '../../../store/actions/brandActions'
import { bindActionCreators } from 'redux'
import imgLoading from '../../../loading.gif';

// const mapStateToProps = state => {
//     return {
//         brandsAll: state.brandReducer.brands
//     }
// }

// const mapDispacthToProps = dispatch => {
//     // return bindActionCreators({ getUsers }, dispatch)
//     return {
//     //   getUsers: () => dispatch(getUsers()),
//       getBrands: () => dispatch({ type: "GET_BRANDS" })      
//     }
// };

// const getAllUsers = async () => {
//     const products = await http.get(`panel/products`)
//         .then(res => res.data.data)
//         .catch(err => Error(err));

//     this.setState({ 
//         users: products.data, 
//         from: products.from,
//         to: products.to,
//         currentPage: products.current_page,
//         lastPage: products.last_page,
//         perPage: products.per_page,
//         total: products.total,
//     });
// }
const Brands = () => {
    // const brandsAll = useSelector(state => state.brandReducer.brands);
    // const brands = getBrands();
    // console.log(brands);

    const [loading, setLoading] = useState('');
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState({});
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [currentPage, setCurrentPage] = useState('');
    const [lastPage, setLastPage] = useState('');
    const [perPage, setPerPage] = useState('');
    const [total, setTotal] = useState('');
    const [edit, setEdit] = useState(false);
    const [style, setStyle] = useState('fa fa-user-plus text-success');
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('Display Brand');
    const [displayForm, setDisplayForm] = useState(false);
    const [status, setStatus] = useState(false);

    // const dispatch = useDispatch();
    // const { 
    //     data: brands, 
    //     from: fromAll, 
    //     to: toAll, 
    //     curren_page: currentPageAll,
    //     last_page: lastPageAll, 
    //     per_page: perPageAll,
    //     total: totalAll, 
    // } = useSelector(state => state.brandReducer.brands);

    // const brandsAll = useSelector(state => state.brandReducer.brands).data;
    // const { from: fr } = useSelector(state => state.brandReducer.brands);

    const dispatch = useDispatch();
    const brandsAll = useSelector(state => state.brandReducer.brands);
    const isLoading = useSelector(state => state.brandReducer.loading);
    // console.log(isLoading);
    // console.log(brandsAll);
    // dispatch(getBrands())
    // const getData = async () => {
    //     const { 
    //         data: brands, 
    //         from, 
    //         to, 
    //         current_page: currentPage,
    //         last_page: lastPage, 
    //         per_page: perPage,
    //         total: total, 
    //     } = await brandsAll;
    //     setLoading(isLoading);
    //     setBrands(brands);
    //     setFrom(from);
    //     setTo(to);
    //     setCurrentPage(currentPage);
    //     setLastPage(lastPage);
    //     setPerPage(perPage);
    //     setTotal(total);
    // }
    useEffect(() => {
        // const brandsAll = useSelector(async state => await state.brandReducer.brands);
        dispatch(getBrands());
        // getData();
        // dispatch(getBrands(() => {
        //     const getData = async () => {
        //         const { 
        //             data: brands, 
        //             from, 
        //             to, 
        //             current_page: currentPage,
        //             last_page: lastPage, 
        //             per_page: perPage,
        //             total: total, 
        //         } = await brandsAll;
        //         setLoading(isLoading);
        //         setBrands(brands);
        //         setFrom(from);
        //         setTo(to);
        //         setCurrentPage(currentPage);
        //         setLastPage(lastPage);
        //         setPerPage(perPage);
        //         setTotal(total);
        //     }
        // }));
        // getData();
        // getData();
        // const { 
        //     data: brands, 
        //     from, 
        //     to, 
        //     current_page: currentPage,
        //     last_page: lastPage, 
        //     per_page: perPage,
        //     total: total, 
        // } = brandsAll;
        // setLoading(isLoading);
        // setBrands(brands);
        // setFrom(from);
        // setTo(to);
        // setCurrentPage(currentPage);
        // setLastPage(lastPage);
        // setPerPage(perPage);
        // setTotal(total);

        // getData = async () => {}
        // if(isLoading) {
        // const { 
        //     data: brands, 
        //     from, 
        //     to, 
        //     current_page: currentPage,
        //     last_page: lastPage, 
        //     per_page: perPage,
        //     total: total, 
        // } = brandsAll;
        // const { load } = isLoading;
        // const { 
        //     data: brands, 
        //     from, 
        //     to, 
        //     current_page: currentPage,
        //     last_page: lastPage, 
        //     per_page: perPage,
        //     total, 
        // } = await getBrands();


        // setLoading(isLoading);
        // setBrands(brands);
        // setFrom(from);
        // setTo(to);
        // setCurrentPage(currentPage);
        // setLastPage(lastPage);
        // setPerPage(perPage);
        // setTotal(total);
    // }

    }, []);

    // console.log(brands);
    // console.log(loading);
    // console.log(brands);
    // useEffect(async () => {
    //     const { 
    //         data: brands, 
    //         from, 
    //         to, 
    //         current_page: currentPage,
    //         last_page: lastPage, 
    //         per_page: perPage,
    //         total: total, 
    //     } = await brandsAll;
    //     setBrands(brands);
    //     setFrom(from);
    //     setTo(to);
    //     setCurrentPage(currentPage);
    //     setLastPage(lastPage);
    //     setPerPage(perPage);
    //     setTotal(total);
    // }, [brands]);

// console.log(brandsAll);
    // if(brandsAll) {
    //     // setBrands(brandsAll)
    // }
    // useEffect(() => {
    //     setBrands(brandsAll.data);
    // }, [brandsAll.data]);

    // setBrands(brandsAll.data);
// console.log(brandsAll);
    // const brandsAll = useSelector(state => state.brandReducer.brands);

    // setBrands(brands);
    // setFrom(from);
    // setTo(to);
    // setCurrentPage(currentPage);
    // setLastPage(lastPage);
    // setPerPage(perPage);
    // setTotal(total);

    // const { 
    //     data: brands, 
    //     from, 
    //     to, 
    //     current_page: currentPage, 
    //     last_page: lastPage, 
    //     per_page: perPage, 
    //     total 
    // } = brandsAll

    // brands.map(p => p.loading = false);

    // setBrands(brands);
    // setFrom(from);
    // setTo(to);
    // setCurrentPage(currentPage);
    // setLastPage(lastPage);
    // setPerPage(perPage);
    // setTotal(total);

    // const productsAll = useSelector(state => state.productReducer.products);
    // // console.log(products);
    // const dispatch = useDispatch()

    // useEffect(async (page) => {
        // setProducts(await getAllProducts());
        // console.log(products);
        // setProducts(products.data);
        // getProducts(); 
        // console.log(getProducts());
        // dispatch(allActions.userActions.setUser(user))
        // dispatch({ type: "GET_Products" });
        // const getProducts = useDispatch(dispatch => dispatch({ type: "GET_Products" }));
        // await getProducts();

        // dispatch(initiateEventsData());
        // await dispatch(getBrands())

        // const { 
        //     data: brands, 
        //     from, 
        //     to, 
        //     current_page: currentPage, 
        //     last_page: lastPage, 
        //     per_page: perPage, 
        //     total 
        // } = brandsAll
    
        // brands.map(p => p.loading = false);
    
        // setBrands(brands);
        // setFrom(from);
        // setTo(to);
        // setCurrentPage(currentPage);
        // setLastPage(lastPage);
        // setPerPage(perPage);
        // setTotal(total);

        // await getBrands(page);

        // const { 
        //     data: brands, 
        //     from, 
        //     to, 
        //     current_page: currentPage, 
        //     last_page: lastPage, 
        //     per_page: perPage, 
        //     total 
        // } = brandsAll

        // brands.map(p => p.loading = false);

        // setBrands(brands);
        // setFrom(from);
        // setTo(to);
        // setCurrentPage(currentPage);
        // setLastPage(lastPage);
        // setPerPage(perPage);
        // setTotal(total);
    // }, []);

    // const { 
    //     data, 
    //     from, 
    //     to, 
    //     current_page: currentPage, 
    //     last_page: lastPage, 
    //     per_page: perPage, 
    //     total 
    // } = brandsAll

    // brands.data.map(p => p.loading = false);

    // setBrands(brands);
    // setFrom(from);
    // setTo(to);
    // setCurrentPage(currentPage);
    // setLastPage(lastPage);
    // setPerPage(perPage);
    // setTotal(total);

    // console.log(products)
    // const { 
    //     data: productsAll, 
    //     // from, 
    //     // to, 
    //     // current_page: currentPage, 
    //     // last_page: lastPage, 
    //     // per_page: perPage, 
    //     // total 
    // } = products

    // products.map(p => p.loading = false);
    // console.log(productsAll);
    // setProducts(products);
    // setFrom(products.from);
    // setTo(products.to);
    // setCurrentPage(products.currentPage);
    // setLastPage(products.lastPage);
    // setPerPage(products.perPage);
    // setTotal(products.total);

    const getData = async () => {
        const { 
            data: brands, 
            from, 
            to, 
            current_page: currentPage, 
            last_page: lastPage, 
            per_page: perPage, 
            total 
        } = await brandsAll

        setBrands(brands);
        setFrom(from);
        setTo(to);
        setCurrentPage(currentPage);
        setLastPage(lastPage);
        setPerPage(perPage);
        setTotal(total);
    }

    const option = ( brand, label, type ) => {
        return (
            <i 
            className={label} 
            onClick={() => {
                switch(type) {
                    case 'show':
                        showBrand(brand)
                    break;
                    case 'edit':
                        editBrand(brand)
                    break;
                    case 'delete':
                        deleteBrand(brand)
                    break;
                }}}>
            </i>
        )
    }

    const search = ( name, label, font, style ) => {
        return (
            <button 
                className={style}
                name={name}>
                <i className={font}></i>
                {label}
            </button>
        )
    }

    const createBrand = () => {
        let close = "fa fa-close text-danger";
        let plus = "fa fa-user-plus text-success";

        setEdit(false);
        setDisplayForm(displayForm ? false : true);
        setStatus(true);
        setStyle(( style === plus ) ? close : plus);
        dispatch(createBrands());
    }

    const editBrand = brand => {
        let close = "fa fa-close text-danger";
        let plus = "fa fa-user-plus text-success";

        setEdit(false);
        setDisplayForm(displayForm ? false : true);
        setStatus(true);
        setStyle(( style === plus ) ? close : plus);
        setBrand(brand);
        dispatch(editBrands(brand));
    }

    const showBrand = brand => {
        // const { show, brands } = this.state;
        const brandId = brandsAll.data.find(b => b.id === brand.id );
        setBrand(brandId);
        setShow(show ? false : true)
        // return this.setState({ 
        //     show: show ? false : true,
        //     brand: brandId
        // });
    }

    const updateBrand = () => {}

    const deleteBrand = async brand => {
        this.setState({users: this.state.products.filter((u) => { 
                return u !== brand 
            })
        });
        // await deleteProduct(product);
        await this.getAllProducts();
    }

    const handlePageChange = async (page) => {
        // console.log(page);
        setCurrentPage(page);

        dispatch(getBrands(page))
        const { 
            data: brands, 
            from, 
            to, 
            current_page: currentPage,
            last_page: lastPage, 
            per_page: perPage,
            total: total, 
        } = brandsAll;

        // const { 
        //     data: brands, 
        //     from, 
        //     to, 
        //     current_page: currentPage,
        //     last_page: lastPage, 
        //     per_page: perPage,
        //     total, 
        // } = await getBrands(page);

        setBrands(brands);
        setFrom(from);
        setTo(to);
        setCurrentPage(currentPage);
        setLastPage(lastPage);
        setPerPage(perPage);
        setTotal(total);
        // await getBrands(page);

        // const { 
        //     data: brands, 
        //     from, 
        //     to, 
        //     current_page: currentPage, 
        //     last_page: lastPage, 
        //     per_page: perPage, 
        //     total 
        // } = brandsAll

        // brands.map(p => p.loading = false);

        // setBrands(brands);
        // setFrom(from);
        // setTo(to);
        // setCurrentPage(currentPage);
        // setLastPage(lastPage);
        // setPerPage(perPage);
        // setTotal(total);
    }

    // const renderBrands = brands.map((brand, index) => (
    //     <tr key={brand.id}>
    //         {/* <td>{currentPage === 1 ? (index + 1) : (index + 1) + ((currentPage - 1) * 10)}</td> */}
    //         <td>{brand.name}</td>
    //         <td>
    //             <img 
    //                 src={brand.image === null ? imgLoading : "http://localhost:8000/storage/" + brand.image} 
    //                 class="rounded-circle" 
    //                 width="50px" 
    //                 height="50px"
    //             />
    //         </td>
    //         <td>{brand.price}</td>
    //         {/* <td>
    //             {option(brand, "fa fa-edit text-primary m-1", "edit")}
    //             {option(brand, "fa fa-trash text-danger m-1", "delete")}
    //             {option(brand, "fa fa-eye text-success m-1", "show")}
    //         </td> */}
    //     </tr>
    // ))
    const styleInline = { display: "inline" }
    return (
        <React.Fragment>
        <div className="container">
            {/* {console.log(currentPage)} */}
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
                        onClick={() => {createBrand()}}>
                        <i className={style} />
                    </button>
                </div>
            </div>
            {displayForm ? 
            <Register 
                edit={edit} 
                brand={edit ? brand : ''} 
            /> : ''}
            {show ? 
            <Modal 
                title={title} 
                value={brand} 
                show={show} 
            /> : ''}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Option</th> 
                    </tr>
                </thead>
                <tbody>
                    {/* {console.log(loading)} */}
                    {isLoading ? brandsAll.data.map((brand, index) => (
                        <tr key={brand.id}>
                            <td>{brandsAll.current_page === 1 ? (index + 1) : (index + 1) + ((brandsAll.current_page - 1) * 10)}</td>
                            <td>{brand.name}</td>
                            <td>
                                <img 
                                    src={brand.image === null ? imgLoading : "http://localhost:8000/storage/" + brand.image} 
                                    class="rounded-circle" 
                                    width="50px" 
                                    height="50px"
                                />
                            </td>
                            <td>
                                {option(brand, "fa fa-edit text-primary m-1", "edit")}
                                {option(brand, "fa fa-trash text-danger m-1", "delete")}
                                {/* {option(brand, "fa fa-eye text-success m-1", "show")} */}
                                <a class="fa fa-eye text-success m-1" data-bs-toggle="modal" data-bs-target="#myModal" role="button"></a>
                                <div class="modal fade" id="myModal">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">{title}</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h6 style={styleInline}>Name: </h6><p style={styleInline}>{ brand.name }</p>
                                            <br/>
                                            <br/>
                                            <h6 style={styleInline}>Description: </h6><p style={styleInline}>{ brand.description }</p>
                                            <br/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )) : ''}
                </tbody>
            </table>
            <Pagination 
                lastPage={brandsAll.last_page}
                currentPage={brandsAll.current_page}
                onPageChange={handlePageChange}
            />
        </div>
        </React.Fragment>
    );
}

// export default connect(mapStateToProps, { getBrands })(Brands)
export default Brands;