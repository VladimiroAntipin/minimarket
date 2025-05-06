import styles from './styles.module.css';

const NavButton = ({ icon, iconAlt, text, onClick, showCounter = false }) => {
    const handleClick = () => {
        onClick();
    }
    return (
        <div className={styles.navButton} onClick={handleClick}>
            <div className={styles.icon}>
                <img src={icon} alt={iconAlt} />
                {showCounter && <p className={styles.counter}>0</p>}  
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default NavButton;