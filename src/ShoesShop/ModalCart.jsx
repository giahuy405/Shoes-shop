import React, { Component } from 'react';
import { connect } from "react-redux"
class ModalCart extends Component {
    renderCart = () => {
        const {dispatch} = this.props;
        return this.props.cart.map(cartItem => {
            const { product, quantity } = cartItem;

            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                        <img width={40} src={product.image} alt="" /></td>
                    <td>{product.name}</td>
                    <td>${product.price.toLocaleString()}</td>
                    <td>
                        <button 
                        onClick={()=>dispatch({
                            type:'DECREASE_QUANTITY',
                            payload:cartItem
                        })}
                        className="btn btn-info mx-2 rounded-circle">
                            -
                        </button>
                        {quantity}
                        <button
                        onClick={()=>dispatch({
                            type:'INCREASE_QUANTITY',
                            payload:cartItem
                        })}
                        className="btn btn-info mx-2 rounded-circle">
                            +
                        </button>
                    </td>
                    <td>${(product.price * quantity).toLocaleString()}</td>
                    <td>
                        <button 
                        onClick={()=>dispatch({
                            type:"DELETE_CART",
                            payload:cartItem
                        }) }
                        className="btn btn-danger">
                            X
                        </button>
                    </td>
                </tr>
            )
        }
        )
    }
    totalAmount = ()=>{
        return this.props.cart.reduce((pre,curr)=>{
            return pre + curr.quantity*curr.product.price
        },0)
    }
    render() {
        const { dispatch } = this.props;
        {
            if (this.props.cart.length === 0) {
                return (
                    <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body P-3">
                                    <h3>Bạn chưa thêm sản phẩm vào giỏ hàng</h3>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Đóng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Giỏ hàng</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <table className="table text-center" style={{ lineHeight: "40px" }}>
                                        <thead>
                                            <tr>
                                                <th>Mã</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên</th>
                                                <th>Giá</th>
                                                <th>SL</th>
                                                <th>Thành tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderCart()}
                                        </tbody>
                                    </table>
                                    <h2>Tổng tiền : ${this.totalAmount().toLocaleString()}</h2>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn btn-primary"
                                        onClick={() => dispatch({
                                            type: 'CHECK_OUT',
                                            payload: ''
                                        })}
                                    >Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.CartReducer.cart
    }
}
export default connect(mapStateToProps, null)(ModalCart)