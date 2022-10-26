import styled from '../styles/CartDropdown.module.scss';
import Button from './Button';
import CartProduct from './CartProduct';

const CartDropdown = ({ props }) => {
  const { isOpenCart, cartItems, cartTotal } = props;
  return (
    <div className={`${styled.cartDropdown} ${isOpenCart ? styled.open : ''}`}>
      {cartItems.length > 0 ? cartItems.map((item) => <CartProduct key={item.id} product={item} />) : <p>Der er ingen produkter i kurven</p>}
      {cartItems.length > 0 && (
        <p>
          Ialt <span>{cartTotal} kr.</span>
        </p>
      )}
      {cartItems.length > 0 && <Button>Kassen</Button>}
    </div>
  );
};

export default CartDropdown;
