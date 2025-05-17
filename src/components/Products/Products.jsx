import ProductCategory from '../ProductCategory/ProductCategory';
import styles from './styles.module.css';

const Products = ({onAddToCart}) => {
    return (
        <div className={styles.products}>
            <h2 className={styles.title}>Популярные продукты</h2>

            <div className={styles.container}>
                <ProductCategory backgroundColor={'milk'} title={'Из молока'} textColor={'lightblue'} category={'milk'} onAddToCart={onAddToCart}/>
                <ProductCategory backgroundColor={'meat'} title={'Мясо, птица'} textColor={'red'} category={'meat'} onAddToCart={onAddToCart} />
            </div>
        </div>
    );
}

export default Products;