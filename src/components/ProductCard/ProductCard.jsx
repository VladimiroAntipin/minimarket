import styles from './styles.module.css';
import image from '../../images/fish.jpeg'

const ProductCard = () => {
    return ( 
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={image} alt='' />
            </div>
            <div className={styles.container}>
                <p className={styles.name}>Product Name</p>
                <p className={styles.price}>100,<span>90</span> руб</p>
            </div>

            <div className={styles.button}>+</div>
        </div>
     );
}
 
export default ProductCard;