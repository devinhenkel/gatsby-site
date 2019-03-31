import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductHighlight extends Component {
    render() {
        return (
            
                <div class="product-highlight">
                    <img alt={this.props.node.title} src={this.props.node.highlightImage.fluid.src} />
                    <h3>{this.props.node.highlightHeadline}</h3>
                    <ul>
                        {this.props.node.highlightText.map((bullet) => (
                            <li>{bullet}</li>
                        ))}
                    </ul>
                </div>
        );
    }
}

ProductHighlight.propTypes = {
    data: PropTypes.object.isRequired
}

export default ProductHighlight;