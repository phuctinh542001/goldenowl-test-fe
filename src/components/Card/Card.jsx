import styles from './Card.module.css';
import nike from '../../assets/nike.png';

const Card = ({title, totalPrice = 0, children}) => {
  return (
    <div className={styles['container']}>
      <div className={styles['icon']}>
        <img src={nike} alt="" />
      </div>
      <div className={styles['title']}>
        <h1>{title}</h1>
        <span>{totalPrice !== 0 ? `$${totalPrice}` : ''}</span>
      </div>
      <div className={styles['body']}>
        {children}
      </div>
    </div>
  );
};

export default Card;
