import ProductCategory from '../ProductCategory/ProductCategory';
import styles from './styles.module.css';

const Products = () => {
    return (
        <div className={styles.products}>
            <h2 className={styles.title}>Популярные продукты</h2>

            <div className={styles.container}>
                <ProductCategory backgroundColor={'milk'} title={'Из молока'} textColor={'lightblue'} />
                <ProductCategory backgroundColor={'meat'} title={'Мясо, птица'} textColor={'red'} />
            </div>
        </div>
    );
}

export default Products;