import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductVideo extends Component {
    render() {
        return (
            
                <div class="product-video">
                    <h2>{this.props.node.videoHeadline}</h2>
                    <iframe title="Cedar Video" width="800" height="450" src={this.props.node.videoSource} 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>{this.props.node.videoDescription}</p>
                </div>
        );
    }
}

ProductVideo.propTypes = {
    data: PropTypes.object.isRequired
}

export default ProductVideo;