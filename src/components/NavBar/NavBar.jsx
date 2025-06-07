import styles from './styles.module.css';
import delivery from '../../images/UI/delivery.svg';

const NavBar = () => {
    return ( 
        <div className={styles.navBar}>
            <div className={styles.location}>
                <div className={styles.icon}>
                    <img src={delivery} alt="delivery" />
                </div>
                <p className={styles.address}>г.Москва, ул. Тверская д.1</p>
            </div>
        </div>
     );
}
 
export default NavBar;