import React, { Component } from 'react'
import ModalCart from './ModalCart'
import ProductList from './ProductList'
import { connect } from "react-redux";
import ModalDetail from './ModalDetail';
 
class Home extends Component {

    countTotal = () => {
        if (this.props.cart.length === 0) return 0

        return this.props.cart.reduce((pre, curr) =>
            { return pre + curr.quantity},0
        )
    }
    render() {
        return (
            <div className='container'>
                <h1>Shoes Shop</h1>
                <button className='btn btn-info'
                    data-bs-toggle="modal" data-bs-target="#cartModal">
                 
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                     Giỏ hàng ({this.countTotal()})
                </button>
                <ProductList />
                <ModalCart />
                <ModalDetail/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.CartReducer.cart
    }
}
export default connect(mapStateToProps, null)(Home)