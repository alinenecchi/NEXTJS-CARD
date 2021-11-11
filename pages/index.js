import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="http://codeby.vteximg.com.br/arquivos/ids/159942-800-1029/trufa-tradicional.png?v=636916452526400000" name="Trufas" />
      </div>
    </main>
  );
};

export default HomePage;
