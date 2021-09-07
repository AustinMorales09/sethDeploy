import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


import BACKEND_URL from '../config';



const Product = (props) => {
    return (
        <div className='allproductss'>
            <div className='productssCard'>
                {/* <div className='cardImage'>
                    <img className='productsImage' src={props.products.name} alt=' product' />
                </div> */}
                <div>
                    <div className='text-name'>{props.products.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"menu/" + props.products._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.products.description} target="_blank" rel="noreferrer">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get(BACKEND_URL + 'menu/')
        .then(response => {
            this.setState({
                products: response.data,
                loading: false
            })
            console.log('this is the list of productss')
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
                    <h2 className='attractionsHeader'>Attractions</h2>
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