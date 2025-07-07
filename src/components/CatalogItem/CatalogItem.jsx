import styles from './styles.module.css';

const CatalogItem = ({text, image, imageAlt, backgroundColor, href}) => {
    return ( 
        <a className={`${styles.catalogItem} ${backgroundColor ? styles[backgroundColor] : ''}`} href={href}>
            <h3 className={styles.title}>{text}</h3>
            <div className={styles.image}>
                <img src={image} alt={imageAlt} />
            </div>
        </a>
     );
}
 
export default CatalogItem;