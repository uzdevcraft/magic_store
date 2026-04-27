import React from 'react';

import { Stars } from './components';
import { Button } from '@/components/Button';
import { Card } from '@telegram-apps/telegram-ui';
import type { Product } from '../../pages/Home/mockdata';

import classes from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  isLiked?: boolean;
  onLikeToggle?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isLiked = false, onLikeToggle }) => {
  return (
    <Card className={classes.product_card}>
      <section className={classes.img_container}>
        <img src={product.image} alt={product.name} className={classes.img} />
      </section>

      <section className={classes.info_container}>
        <p className={classes.product_price}>{product.price}</p>
        <p className={classes.product_name}>{product.name}</p>
        <Stars rating={product.rating} />
        <Button size="s" disabled={!product.inStock} text={product.inStock ? 'Add to cart' : 'Out of stock'} />
      </section>
    </Card>
  );
};

export default ProductCard;
