import { FETCH_PRODUCTS_SUCCESS, OPEN_PRODUCTS_MODAL , CLOSE_PRODUCTS_MODAL, ADD_TO_CART } from '../constants/products';

const initialState = {
    productsList: [],
    productModal: {
        isVisible: false
    },
    cart: {
        products: []
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsList: action.payload
            };
        case OPEN_PRODUCTS_MODAL:
            return {
                ...state,
                productModal: {
                    ...action.payload,
                    isVisible: true
                }
            };
        case CLOSE_PRODUCTS_MODAL:
            return {
                ...state,
                productModal: {
                    ...state.productModal,
                    isVisible: false
                }
            };
        case ADD_TO_CART:
            console.log(action.payload);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: action.payload
                }
            };
        default: {
            return state
        }
    }
}