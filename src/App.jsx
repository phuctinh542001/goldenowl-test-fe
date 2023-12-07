import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from './utils/localStorage';

import Card from './components/Card/Card';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Loader from './components/Loader/Loader';

import './App.css';

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localCart = getFromLocalStorage('cart');
    if (localCart) {
      setCartList([...localCart]);
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://goldenowl-test-be.vercel.app/api/products',
      );
      const result = await response.json();
      setShoes(result);
      setLoading(false);
    } catch (error) {
      throw new Error('Network request failed');
    }
  };

  const handleAddtoCart = (product) => {
    const updatedCart = [
      ...cartList,
      {
        ...product,
        quantity: 1,
      },
    ];
    setCartList([...updatedCart]);
    setToLocalStorage('cart', updatedCart);
  };

  const handleRemove = (product) => {
    const updatedCart = cartList.filter((item) => {
      return item.id !== product.id;
    });
    setCartList([...updatedCart]);
    setToLocalStorage('cart', updatedCart);
  };

  const handlePlus = (product) => {
    const updatedCart = cartList.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCartList([...updatedCart]);
    setToLocalStorage('cart', updatedCart);
  };

  const handleMinus = (product) => {
    if (product.quantity === 1) {
      handleRemove(product);
    } else {
      const updatedCart = cartList.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      setCartList([...updatedCart]);
      setToLocalStorage('cart', updatedCart);
    }
  };

  return (
    <div className="container">
      <Card title="Our Products">
        {loading && <Loader />}
        {!loading &&
          shoes.map((shoe) => {
            if (cartList.length !== 0) {
              for (let item of cartList) {
                if (item.id === shoe.id) {
                  return (
                    <Product
                      key={shoe.id}
                      product={shoe}
                      added={true}
                      handleAddtoCart={handleAddtoCart}
                    />
                  );
                }
              }
            }

            return (
              <Product
                key={shoe.id}
                product={shoe}
                handleAddtoCart={handleAddtoCart}
              />
            );
          })}
      </Card>
      <Card
        title="Your cart"
        totalPrice={
          cartList.length === 0
            ? '0'
            : cartList
                .reduce((total, item) => {
                  return total + item.quantity * item.price;
                }, 0)
                .toFixed(2)
        }
      >
        {cartList.length === 0
          ? 'Your cart is empty'
          : cartList.map((shoe) => {
              return (
                <Cart
                  key={shoe.id}
                  product={shoe}
                  handleMinus={handleMinus}
                  handlePlus={handlePlus}
                  handleRemove={handleRemove}
                />
              );
            })}
      </Card>
    </div>
  );
};

export default App;
