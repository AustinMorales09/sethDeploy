import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'


import BACKEND_URL from '../config';



const Product = (props) => {
    return (
        <div className="all-products">
        <h1>Products</h1>
            {props.product.name}
        </div>
    )
}


export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            products: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get(BACKEND_URL +'products/')
        .then(response => {
            this.setState({
                products: response.data,
                loading: false
            })
            console.log('this is the list of productss')
            console.log(this.state);
        })
        .catch((error) => {
            console.log(error)
        });
    }

    productsList() {
        return this.state.products.map((currentProduct) => {
            return <Product product={currentProduct} key={currentProduct._id} />
        })
    }
    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                <div className='attractionsContainer'>
                    <h2 className='attractionsHeader'>Products</h2>
                    <div className='attractionsInnerContainer'>
                        {this.productsList()}
                    </div>
                </div>
                </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}