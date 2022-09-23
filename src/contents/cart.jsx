import React, { useContext } from 'react';

// 컨텍스트 생성
const CartContext = React.createContext();

// 컨텍스트 래퍼 컴포넌트
export const CartProvider = ({ value, children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 커스텀 훅
export const useCart = () => {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error(
      'useCart 훅은 CartProvider 컴포넌트 내부에서만 사용 가능합니다.'
    );
  }
  return value;
};