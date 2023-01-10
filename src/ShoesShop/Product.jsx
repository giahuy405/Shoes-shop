import React, { Component } from 'react';
import { connect, Connect } from 'react-redux';
class Product extends Component {
    render() {
        const {image,price,name,description,quantity,id} = this.props.item;
        const {dispatch,item}= this.props;
        return (
            <div className='card p-3'>
                <img src={image} alt="" />
                <h6>{name}</h6>
                <div className="d-flex ">
                <h5 className='me-5 '>${price.toLocaleString()}</h5>
                <p  className='badge bg-secondary'>Còn {quantity} sản phẩm</p>
                </div>
                <p>{description.length>50?description.substr(0,50)+'...':description}</p>
                <div className="d-flex">
                    <button
                    onClick={()=>dispatch({
                        type:"DETAIL_PRODUCT",
                        payload:item
                    })}
                    className="btn btn-primary me-2"
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    >
                        Chi tiết
                    </button>
                    <button
                    onClick={()=>dispatch({
                        type:"ADD_TO_CART",
                        payload:item
                    })}
                    className="btn btn-success">
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        cart:state.CartReducer.cart
    }
}
export default connect(mapStateToProps,null)(Product)