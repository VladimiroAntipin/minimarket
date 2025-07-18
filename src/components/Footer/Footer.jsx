import styles from './styles.module.css';
import logo from '../../images/UI/logo.png';
import vk from '../../images/social/vk.png';
import telegram from '../../images/social/telegram.jpg';
import youtube from '../../images/social/youtube.png';
import ok from '../../images/social/Odnoklassniki.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.content}>
                <div className={styles.links}>
                    <h3 className={styles.title}>Покупателю</h3>
                    <a className={styles.link} href='/'>Личный кабинет</a>
                    <a className={styles.link} href='/'>Акции</a>
                    <a className={styles.link} href='/'>Каталоги</a>
                </div>

                <div className={styles.links}>
                    <h3 className={styles.title}>Помощь</h3>
                    <a className={styles.link} href='/'>Статус заказа</a>
                    <a className={styles.link} href='/'>Условия доставки</a>
                    <a className={styles.link} href='/'>Возврат</a>
                    <a className={styles.link} href='/'>Оплата заказа</a>
                    <a className={styles.link} href='/'>Как оформить заказ</a>
                    <a className={styles.link} href='/'>Вопросы и ответы</a>
                </div>

                <div className={styles.links}>
                    <h3 className={styles.title}>О компании</h3>
                    <a className={styles.link} href='/'>О нас</a>
                    <a className={styles.link} href='/'>Магазин</a>
                </div>

                <div className={styles.links}>
                    <h3 className={styles.title}>Контакты</h3>
                    <a className={styles.link} href='/'>+7 999 123-45-67</a>
                    <a className={styles.link} href='/'>contacts@minimarket.ru</a>
                    <div className={styles.social}>
                        <div className={styles.icon}>
                            <img src={vk} alt="vk" />
                        </div>
                        <div className={styles.icon}>
                            <img src={telegram} alt="telegram" />
                        </div>
                        <div className={styles.icon}>
                            <img src={youtube} alt="youtube" />
                        </div>
                        <div className={styles.icon}>
                            <img src={ok} alt="ok" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.copyright}>2025 © "Минимаркет"</div>
        </div>
    );
}

export default Footer;