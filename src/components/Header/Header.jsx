import styles from './styles.module.css';
import logo from '../../images/logo.png';
import MenuButton from '../MenuButton/MenuButton';
import SearchBar from '../SearchBar/SearchBar';
import NavButton from '../NavButton/NavButton';
import orders from '../../images/orders.svg';
import cart from '../../images/cart.svg';
import user from '../../images/user.svg';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.content}>

                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <MenuButton />
                </div>

                <div className={styles.searchWrapper}>
                    <SearchBar />
                </div>

                <div className={styles.buttonsWrapper}>
                    <NavButton icon={orders} iconAlt={'orders'} text={'Заказы'} />
                    <NavButton icon={cart} iconAlt={'cart'} text={'Корзина'} showCounter={true} />
                    <NavButton icon={user} iconAlt={'user'} text={'Войти'} />
                </div>
            </div>

            <div className={styles.navContainer}>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;