import styles from './styles.module.css';
import { ProductsList } from '../../utils/ProductsList';
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsPageLayout = ({ category, onAddToCart, onMoreClick }) => {
    const filteredProducts = ProductsList.filter(product => product.category === category);

    const brandsCount = filteredProducts.reduce((sum, product) => {
        sum[product.brend] = (sum[product.brend] || 0) + 1;
        return sum;
    }, {});

    const countriesCount = filteredProducts.reduce((sum, product) => {
        sum[product.country] = (sum[product.country] || 0) + 1;
        return sum;
    }, {});

    const minPrice = Math.min(...filteredProducts.map(product => product.price));
    const maxPrice = Math.max(...filteredProducts.map(product => product.price));

    const [selectedMinPrice, setSelectedMinPrice] = useState(minPrice);
    const [selectedBrands, setSelectedBrands] = useState({});
    const [selectedCountries, setSelectedCountries] = useState({});

    const handlePriceChange = (event) => {
        setSelectedMinPrice(Number(event.target.value));
    };

    const handleBrandChange = (event) => {
        const brand = event.target.name;
        const checked = event.target.checked;
        setSelectedBrands(prevState => ({ ...prevState, [brand]: checked }));
    };
    const handleCountryChange = (event) => {
        const country = event.target.value;
        const checked = event.target.checked;
        setSelectedCountries(prevState => ({ ...prevState, [country]: checked }));
    };

    const anyBrandSelected = Object.values(selectedBrands).some(value => value);
    const anyCountrySelected = Object.values(selectedCountries).some(value => value);

    const filteredProductsByFilters = filteredProducts.filter(product => {
        const brandCondition = !anyBrandSelected || selectedBrands[product.brend];
        const countryCondition = !anyCountrySelected || selectedCountries[product.country];
        const priceCondition = product.price >= selectedMinPrice;
        return brandCondition && countryCondition && priceCondition;
    });

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <label className={styles.filterName}>Бренд</label>
                    {Object.entries(brandsCount).map(([brand, count]) => (
                        <div className={styles.filterItem} key={brand}>
                            <input type="checkbox" name={brand} checked={!!selectedBrands[brand]} onChange={handleBrandChange} />
                            <p className={styles.text}>{brand} ({count})</p>
                        </div>
                    ))}
                </div>

                <div className={styles.filter}>
                    <label className={styles.filterName}>Цена</label>
                    <div className={styles.filterItem}>
                        <p className={styles.text}>Мин. {selectedMinPrice}</p>
                        <input type="range" name="price" min={minPrice} max={maxPrice} value={selectedMinPrice} onChange={handlePriceChange} />
                        <p className={styles.text}>Мах. {maxPrice}</p>
                    </div>
                </div>

                <div className={styles.filter}>
                    <label className={styles.filterName}>Страна производителя</label>
                    {Object.entries(countriesCount).map(([country, count]) => (
                        <div className={styles.filterItem} key={country}>
                            <input type="checkbox" name='country' value={country} checked={!!selectedCountries[country]} onChange={handleCountryChange} />
                            <p className={styles.text}>{country} ({count})</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.productCards}>
                {filteredProductsByFilters.length === 0 ? (
                    <div className={styles.noProducts}>
                        Нет продуктов с такими параметрами
                    </div>
                ) : (
                    filteredProductsByFilters.map((product, index) => (
                        <ProductCard key={index} product={product} onAddToCart={onAddToCart} onMoreClick={onMoreClick} />
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductsPageLayout;