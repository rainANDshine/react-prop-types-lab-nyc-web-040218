// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>name: {this.props.name}</p>
        <p>producer: {this.props.producer}</p>
<<<<<<< HEAD
        <p>hasWatermark: {this.props.hasWatermark}</p>
        <p>color: {this.props.color}</p>
        <p>weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};
=======
        <p>hasWatermark: {this.props.hasWatermark}</p>//optional, defaults to false
        <p>color: {this.props.color}</p>//a string — required, can only be 'white', 'eggshell-white' or 'salmon'
        <p>weight: {this.props.weight}</p>//a number — required, ranges between 80 and 300
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false;
}
>>>>>>> d7b09bba8c2ecbf080b8096c33035f983cbb5fcf

Product.porpTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
<<<<<<< HEAD
  weight: function(props, propName, componentName) {
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('Invalid');
    }
  }
};
=======
  weight: function(weight) {
    if (weight < 80 || weight > 300) {
      return new error('Invalid prop');
    }
  }
}
>>>>>>> d7b09bba8c2ecbf080b8096c33035f983cbb5fcf
