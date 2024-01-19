import React from 'react';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import styles from '../Product/Product.module.scss';

const ProductForm = ({  colors, sizes, currentColor, currentSize, onColorChange, onSizeChange, onAddToCart }) => {
  return (
    <form>
      <OptionSize sizes={sizes} currentSize={currentSize} onSizeChange={onSizeChange} />
      <OptionColor colors={colors} currentColor={currentColor} onColorChange={onColorChange} />
      <button type="button" className={styles.button} onClick={onAddToCart}>
        <span className="fa fa-shopping-cart" />
      </button>
    </form>
  );
};

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.object.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onSizeChange: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductForm;