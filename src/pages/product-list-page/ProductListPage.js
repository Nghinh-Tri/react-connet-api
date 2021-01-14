import React, { Component } from 'react';
import ProductList from "./../../components/products-list/ProductList";
import Productitems from "./../../components/product-items/Productitems";
import { connect } from "react-redux";
import callAPI from "./../../utils/APICaller";
import { Link } from 'react-router-dom';
import { fetchProduct } from "./../../actions/Actions";

class ProductListPage extends Component {

    componentDidMount = () => {
        this.props.fetchProduct();

    } 

    onDelete = (id) => {
        callAPI(`products/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                this.componentDidMount();
            }
        })
    }


    render() {
        this.props.fetchProduct();

        var { products } = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/products/add' className="btn btn-info mb-10">Add Product</Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Productitems key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete} />
                );
            });
        }
        return result;
    }
}

const mapStateToProp = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchProduct: () => {
            dispatch(fetchProduct());
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(ProductListPage);
