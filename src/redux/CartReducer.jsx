
const initalState = {
    cart: []
}
export const CartReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case "ADD_TO_CART": {
            const cartItem = {
                product: payload,
                quantity: 1
            }
            const cart = [...state.cart];
            const foundItem = cart.find(cartItem =>
                cartItem.product.id === payload.id);
            foundItem ? foundItem.quantity++ : cart.push(cartItem);
            console.log(cart)
            return { ...state, cart }
        }   
        case "CHECK_OUT": {
            let cart = [...state.cart];
            cart = [];
            alert('Thanh toán thành công')
            return { ...state, cart };
        }
        case "DELETE_CART": {
            const cart = [...state.cart];
            const index = cart.findIndex(cartItem =>
                cartItem.product.id === payload.product.id)
            if (index === -1) return
            cart.splice(index, 1);
            return { ...state, cart }
        }
        case "DECREASE_QUANTITY": {
            const cart = [...state.cart];
            payload.quantity > 1 && payload.quantity--;
            return { ...state, cart }
        }
        case "INCREASE_QUANTITY": {
            const cart = [...state.cart];
            payload.quantity < payload.product.quantity && payload.quantity++;
            return { ...state, cart }
        }
        default:
            return state;
    }
}