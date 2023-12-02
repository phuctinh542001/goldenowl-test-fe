import styles from './Product.module.css';
import check from '../../assets/check.png';

const Product = ({ product, added = false, handleAddtoCart }) => {
  return (
    <div className={styles['container']}>
      <div
        className={styles['image']}
        style={{ backgroundColor: product.color }}
      >
        <img src={product.image} alt="" />
      </div>
      <div className={styles['name']}>
        <span>{product.name}</span>
      </div>
      <div className={styles['description']}>
        <p>{product.description}</p>
      </div>
      <div className={styles['bottom']}>
        <div className={styles['price']}>{product.price}</div>
        <div className={styles['button']}>
          {!added && (
            <div
              className={styles['add']}
              onClick={() => {
                handleAddtoCart(product);
              }}
            >
              ADD TO CART
            </div>
          )}
          {added && (
            <div className={styles['check']}>
              <img src={check} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
