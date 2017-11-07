import React, {Component} from 'react';

export default class ShoppingCart extends Component {
    render() {
        const products = this.props.cart.products;
        let generalCount = 0;
        if (products.length) {
            products.forEach((el) => {
                generalCount += el.count;
            });
        }
        return <div className="cart">
            Товаров с уникальным именем: {products.length}
            <br/>
            Товаров всего: {generalCount}
        </div>
    }
}