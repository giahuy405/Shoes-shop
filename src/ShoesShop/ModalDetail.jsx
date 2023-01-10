import React, { Component } from 'react';
import { connect } from "react-redux"
class ModalDetail extends Component {
    render() {
        const { dispatch } = this.props;
        const { image, price, name, description, quantity, id } = this.props.detail;
        return (
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <img className='img-fluid' src={image} alt="" />
                                </div>
                                <div className="col-8">
                                    <table className="text-center table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Mã</th>
                                                <th>Tên</th>
                                                <th>Giá</th>
                                                <th>Mô tả</th>
                                                <th>SL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{id}</td>
                                                <td>{name}</td>
                                                <td>{price}</td>
                                                <td>{description}</td>
                                                <td>{quantity}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                onClick={() => dispatch({
                                    type: "ADD_TO_CART",
                                    payload: this.props.detail
                                })}
                                className="btn btn-success">
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.DetailReducer.detail
    }
}
export default connect(mapStateToProps, null)(ModalDetail)