import loader from '../../assets/loader.png';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <>
      <div className={style['container']}>
        <img src={loader} alt="" />
      </div>
    </>
  );
};

export default Loader;
