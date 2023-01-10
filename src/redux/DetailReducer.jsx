const initialState = {
    detail: {}
}
export const DetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DETAIL_PRODUCT": {
           let detail = {...state.detail}
            detail = payload;
            return { ...state,detail }
        }
        default:
            return state;
    }
}

