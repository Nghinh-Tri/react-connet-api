import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import callAPI from "./../../utils/APICaller";

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
            callAPI(`products/${id}`, 'GET', null).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    name: data.name,
                    price: data.price,
                    status: data.status
                })
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
        if (id) {   //update
            callAPI(`products/${id}`, 'PUT', {
                name: name,
                price: price,
                status: status
            }).then(res => {
                history.goBack();
            })
        } else { //add new
            callAPI('products', 'POST', {
                name: name,
                price: price,
                status: status
            }).then(res => {
                history.goBack();
            });
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

export default ProductActionPage;
