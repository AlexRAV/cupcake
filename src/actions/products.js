import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, OPEN_PRODUCTS_MODAL, CLOSE_PRODUCTS_MODAL, ADD_TO_CART } from '../constants/products';

export function fetchProducts() {
    return {
        type: FETCH_PRODUCTS_START
    }
}

export function fetchProductsSuccess(payload) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload
    }
}

export function openModal(payload) {
    return {
        type: OPEN_PRODUCTS_MODAL,
        payload
    }
}

export function closeModal() {
    return {
        type: CLOSE_PRODUCTS_MODAL
    }
}

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}