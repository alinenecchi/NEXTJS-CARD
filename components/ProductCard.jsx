import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import { formatToMoney } from "../scripts/formatToMoney";
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles}>
      <div  className={styles.box}>
        <Image  className={styles.image} src={product.image} height={193} width={150} />
      </div>
     
      <h4 className={styles.title}>{product.skuName}</h4>
      <p className={styles.price} >{formatToMoney(product.price)}</p>
      <p className={styles.sellingPrice}>{formatToMoney(product.sellingPrice)}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
      >
        Adicionar no carrinho
      </button>
    </div>
  );
};

export default ProductCard;
