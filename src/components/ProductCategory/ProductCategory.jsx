import ProductCard from '../ProductCard/ProductCard';
import styles from './styles.module.css';

const ProductCategory = ({ title, backgroundColor, textColor }) => {
    return (
        <div className={styles.productCategory}>
            <div className={`${styles.titleContainer} ${backgroundColor ? styles[backgroundColor] : ''}`}>
                <h2 className={`${styles.title} ${textColor ? styles[textColor] : ''}`}>{title}</h2>
            </div>
            <div className={styles.cardsContainer}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default ProductCategory;