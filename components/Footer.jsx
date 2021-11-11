import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      App NextJs <span className={styles.brand}>Carrinho de Compras</span> &copy;{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
