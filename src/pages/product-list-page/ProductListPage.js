import React, { Component } from 'react';
import ProductList from "./../../components/products-list/ProductList";
import Productitems from "./../../components/product-items/Productitems";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchProduct, deleteProduct } from "./../../actions/Actions";

class ProductListPage extends Component {

    componentDidMount = () => {
        this.props.fetchProduct();
    }

    onDelete = (id) => {
        this.props.deleteProduct(id);
    }


    render() {
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
        },
        deleteProduct: (id) => {
            dispatch(deleteProduct(id));
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(ProductListPage);
