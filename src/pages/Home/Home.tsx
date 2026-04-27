import React, { useState } from 'react';
import { Title } from '@telegram-apps/telegram-ui';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products, featuredProducts, newArrivals } from './mockdata';

import classes from './Home.module.scss';

const Home: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const toggleLike = (productId: string) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const filteredProducts = products;

  return (
    <div className={classes.root}>
      {featuredProducts.length > 0 && (
        <section>
          <Title className={classes.section_title} level="3">
            Featured Products
          </Title>
          <div className={classes.products_grid}>
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isLiked={likedProducts.has(product.id)}
                onLikeToggle={toggleLike}
              />
            ))}
          </div>
        </section>
      )}

      {newArrivals.length > 0 && (
        <section>
          <Title className={classes.section_title} level="3">
            New Arrivals
          </Title>
          <div className={classes.products_grid}>
            {newArrivals.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isLiked={likedProducts.has(product.id)}
                onLikeToggle={toggleLike}
              />
            ))}
          </div>
        </section>
      )}

      <section>
        <Title className={classes.section_title} level="3">
          All Products
        </Title>
        <div className={classes.products_grid}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isLiked={likedProducts.has(product.id)}
              onLikeToggle={toggleLike}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
