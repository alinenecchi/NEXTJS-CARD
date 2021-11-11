import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CategoryCard.module.css';

const CategoryCard = ({image, name }) => {
  return (
    <div className={styles.card}>
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
        <Image className={styles.image} src={image} height={100} width={200}></Image>
          <h3>{name}</h3>
          <p>COMPRAR</p>
        </div> 
      </Link>
    </div>
  );
};

export default CategoryCard;
