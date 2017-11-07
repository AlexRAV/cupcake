import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import ShoppingCart from '../components/ShoppingCart';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ShoppingCart cart={this.props.products.cart}/>
                </header>
                <div className="products__list">
                    <ProductList/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
