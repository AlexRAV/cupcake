import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../actions/products';
import Product from '../components/Product';
import ProductModal from '../components/ProductModal';

class ProductList extends Component {
    componentWillMount() {
        this.props.productsActions.fetchProducts();
    }

    onClickProduct() {
        this.props.productsActions.openModal(this.props.product);
    }

    closeModal() {
        this.countProductsInput.value = 0;
        this.props.productsActions.closeModal();
    }

    addToCart() {
        let cartProducts = this.props.cart.products;
        let modal = this.props.modal;
        let isNewProduct = true;

        cartProducts = cartProducts.map((el) => {
           if(el.id === modal.id) {
               el.count += parseInt(this.countProductsInput.value, 10);
               isNewProduct = false;
           }

           return el;
        });


        if(isNewProduct) {
            cartProducts.push({
                albumId: modal.albumId,
                id: modal.id,
                thumbnailUrl: modal.thumbnailUrl,
                title: modal.title,
                url: modal.url,
                count: parseInt(this.countProductsInput.value, 10)
            });
        }

        this.props.productsActions.addToCart(cartProducts);
        this.countProductsInput.value = 0;
}

    render() {
        return <div>
            {this.props.products.productsList.map((el, index)=>{
                return <Product onClickListener={this.onClickProduct} productsActions={this.props.productsActions} key={index} product={el}/>
            })}
            <ProductModal modal={this.props.products.productModal} closeModal={this.closeModal} productsActions={this.props.productsActions} addToCart={this.addToCart} cart={this.props.products.cart}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productsActions: bindActionCreators(productsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

