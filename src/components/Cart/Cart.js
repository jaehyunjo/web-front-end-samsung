import styled from 'styled-components/macro';
import CartTitle from './CartTitle';
import CartList from './CartList';
import { useCart } from '../../contents/cart'

export function Cart({ onUpdate }) {

  const {carts} = useCart();
  return (
    <Container>
      <CartTitle>{carts.title}</CartTitle>
      <CartList products={carts.products} total={carts.totalPrice} onUpdate={onUpdate} />
    </Container>
  );
}

/* -------------------------------------------------------------------------- */

const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  margin: 60px auto;
  padding: 30px;
  background: #fff;

  @media (min-width: 50em) {
    border: 6px solid #232323;
    border-radius: 12px;
    box-shadow: 0 9px 7px rgba(0, 0, 0, 0.2);
  }
`;
