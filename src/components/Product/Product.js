import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import styles from './Product.module.scss';

const Product = ({ name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const handleSizeChange = (size) => {
    setCurrentSize(size);
  };

  const price = useMemo(() => {
    const selectedSize = sizes.find((size) => size === currentSize);
    const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
    return basePrice + additionalPrice;
  }, [currentSize, sizes, basePrice]);

  const handleAddToCart = (event) => {
    event.preventDefault();

    console.log('Product Summary:');
    console.log('Name:', title);
    console.log('Final Price:', price);
    console.log('Selected Options:', {
      color: currentColor,
      size: currentSize.name,
    });
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{`Price: ${price}$`}</span>
        </header>
        <ProductForm
          name={name}
          title={title}
          basePrice={basePrice}
          colors={colors}
          sizes={sizes}
          currentColor={currentColor}
          currentSize={currentSize}
          onColorChange={handleColorChange}
          onSizeChange={handleSizeChange}
          onAddToCart={handleAddToCart}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;