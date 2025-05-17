import styles from './styles.module.css';

const ProductCard = ({product, onAddToCart}) => {
    return ( 
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={product.image} alt={'product'} />
            </div>
            <div className={styles.container}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.price}>{product.price},<span>{product.cents}</span> руб</p>
            </div>

            <div className={styles.button} onClick={() => onAddToCart(product)}>+</div>
        </div>
     );
}
 
export default ProductCard;