import styles from './styles.module.css';
import Catalog from "../../components/Catalog/Catalog";
import Products from "../../components/Products/Products";
import Carousel from "../../components/Carousel/Carousel";

const Home = ({ onAddToCart, onMoreClick }) => {
    return (
        <>
            <Carousel />
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <span>Минимаркет -&nbsp;</span>
                    <span>продукты&nbsp;</span>
                    <span>с доставкой!</span>
                </div>
            </div>
            <Catalog />
            <Products onAddToCart={onAddToCart} onMoreClick={onMoreClick} />
        </>
    );
}

export default Home;