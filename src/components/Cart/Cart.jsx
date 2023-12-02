import styles from './Cart.module.css';
import minus from '../../assets/minus.png';
import plus from '../../assets/plus.png';
import trash from '../../assets/trash.png';

const Cart = ({ product, handleMinus, handlePlus, handleRemove }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['left']}>
        <div
          className={styles['image-bg']}
          style={{ backgroundColor: product.color }}
        >
          <div className={styles['image']}>
            <img src={product.image} alt="" />
          </div>
        </div>
      </div>
      <div className={styles['right']}>
        <div className={styles['name']}>{product.name}</div>
        <div className={styles['price']}>{product.price}</div>
        <div className={styles['action']}>
          <div className={styles['count']}>
            <div
              className={styles['count-btn']}
              onClick={() => {
                handleMinus(product);
              }}
            >
              <img src={minus} alt="" />
            </div>
            <div className={styles['count-number']}>{product.quantity}</div>
            <div
              className={styles['count-btn']}
              onClick={() => {
                handlePlus(product);
              }}
            >
              <img src={plus} alt="" />
            </div>
          </div>
          <div
            className={styles['remove']}
            onClick={() => {
              handleRemove(product);
            }}
          >
            <img src={trash} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
