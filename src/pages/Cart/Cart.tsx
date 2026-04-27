import { Placeholder } from '@/components/Placeholder';

const Cart = () => {
  return (
    <div>
      <Placeholder
        hasIcon={false}
        title="Your cart is empty"
        subtitle="Add products to your cart"
        buttonContent="Go to products"
        internalLink="/"
      />
    </div>
  );
};

export default Cart;
