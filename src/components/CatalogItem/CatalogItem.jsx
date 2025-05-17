import styles from './styles.module.css';

const CatalogItem = ({text, image, imageAlt, backgroundColor}) => {
    return ( 
        <div className={`${styles.catalogItem} ${backgroundColor ? styles[backgroundColor] : ''}`}>
            <h3 className={styles.title}>{text}</h3>
            <div className={styles.image}>
                <img src={image} alt={imageAlt} />
            </div>
        </div>
     );
}
 
export default CatalogItem;