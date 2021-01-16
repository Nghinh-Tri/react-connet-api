import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import callAPI from "./../../utils/APICaller";
import { addProduct, fetchProductDetail, updateProduct } from "./../../actions/Actions";

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            id: 0,
            name: '',
            price: 0,
            status: false
        };
    }

    componentDidMount = () => {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getDetail(id);
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if (nextProps.product !== prevState.product) {
            return { product: nextProps.product };
        }
        return null;

    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.product !== this.props.product) {
            var { id, name, price, status } = this.props.product;
            this.setState({
                id: id,
                name: name,
                price: price,
                status: status
            })
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (event) => {
        event.preventDefault();
        var { id, name, price, status } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: name,
            price: price,
            status: status
        }
        if (id) {   //update
            this.props.updateProduct(product);
            history.goBack();
        } else { //add new
            this.props.addProduct(product);
            history.goBack();
        }
    }

    render() {
        var { name, price, status } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave} >
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="number" className="form-control" name="price" value={price} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Product Status</label>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value={status} name="status" onChange={this.onChange} checked={status} />
                                Stocking
                            </label>
                        </div>
                    </div>
                    <Link to="/products-list" className="btn btn-danger mr-10" >Back</Link>

                    <button type="submit" className="btn btn-primary">Save</button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.item
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(addProduct(product))
        },
        getDetail: (id) => {
            dispatch(fetchProductDetail(id))
        },
        updateProduct: (product) => {
            dispatch(updateProduct(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
