import Image from 'next/image';
import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import { formatToMoney } from "../scripts/formatToMoney";
import styles from '../styles/CartPage.module.css';
import CategoryCard from '../components/CategoryCard';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  useEffect(() => {
    const value = getTotalPrice()
    if ( value > 1000) {
      setIsShow(true)
    }else{
      setIsShow(false)
    }
    
     console.log(isShow, getTotalPrice(), value)
  });

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Seu carrinho está vazio!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Imagem</div>
            <div>Produto</div>
            <div>Preço</div>
            <div>Quantidade</div>
            <div>Ações</div>
            <div>Preço total</div>
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65"></Image>
              </div>
              <p>{item.product}</p>
              <p>{formatToMoney(item.price)}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>{formatToMoney(item.quantity * item.price)}</p>
            </div>
          ))}
          <h2>Total: {formatToMoney(getTotalPrice())}</h2>
          {
            isShow == true
            ?
            <>
            <div className={styles.above}>
              <div className={styles.content}>Parabéns, sua compra tem frete grátis!</div>
            </div>
            </>
            : null
          }
        </>
      )}
    </div>
  );
};

export default CartPage;
