import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './styles.module.css';
import { MenuLinks } from '../../utils/MenuLinks';
const colors = ['orange', 'lighblue', 'green', 'rose', 'darkgreen', 'pink', 'salmon', 'cian', 'yellow'];

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <h2>Каталог интернет-магазина</h2>
            <ul className={styles.items}>
                {MenuLinks.map((link, index) =>(
                  <li className={styles.item} key={link.id}>
                    <CatalogItem text={link.name} image={link.image} imageAlt={link.name} backgroundColor={colors[index % colors.length]}  href={link.subcategories[0].url.split('/')[1]} />
                </li>  
                ))}
                
            </ul>
        </div>
    );
}

export default Catalog;