import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import data from "../Data/dataShoes.json"
class ProductList extends Component {
    renderProductList = () =>
        data.map(item =>
            <div className='col-3 mt-4' key={item.id}>
                <Product item={item}/>
            </div>
        )
    render() {
        return (
            <div className='row'>
                {this.renderProductList()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.CartReducer.cart
    }
}
export default connect(mapStateToProps, null)(ProductList)