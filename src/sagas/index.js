import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS_START } from '../constants/products';
import { fetchProductsSuccess } from '../actions/products';

function* loadProducts() {
    let products = yield fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function (response) {
            return response.json()
                .then(function (data) {
                    /*
                     * Предпочел обрезать, помоему 30 элементов достаточно. Если нужно будет пагинацию сделать, то это
                     * уже другой разговор.
                     */
                    return data.filter((el, i) => {
                        return i < 30;
                    });
                });
        });

    yield put(fetchProductsSuccess(products));
}


/* WATCHERS */

export function* watchLoadProducts() {
    yield takeEvery(FETCH_PRODUCTS_START, loadProducts);
}