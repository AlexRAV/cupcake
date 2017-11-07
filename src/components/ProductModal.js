import React, {Component} from 'react';

export default class ProductModal extends Component {
    stopPropagation(event) {
        event.stopPropagation();
    }

    render() {
        return <div onClick={this.props.closeModal.bind(this)} className={"product__modal-overlay " + (this.props.modal.isVisible ? "_opened":"")}>
            <div className="product__modal" onClick={this.stopPropagation.bind(this)}>
                <img src={this.props.modal.url} alt="" className="product__modal-img"/>
                <div className="product__modal-title">{this.props.modal.title}</div>
                <input type="number" className="product__modal-input" ref={(input)=>{this.countProductsInput = input}}/>
                <button className="product__modal-btn" onClick={this.props.addToCart.bind(this)}>Добавить в корзину</button>
            </div>
        </div>
    }
}