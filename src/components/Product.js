import React, {Component} from 'react';

export default class Product extends Component {
    render() {
        return <div className="product" onClick={this.props.onClickListener.bind(this)}>
            <img src={this.props.product.thumbnailUrl} alt=""/>
        </div>
    }
}