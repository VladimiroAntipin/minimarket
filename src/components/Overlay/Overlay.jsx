import styles from './styles.module.css';

const Overlay = ({children, onClose}) => {
    const handleClose = () => {
        onClose();
    }
    return ( 
        <div className={styles.overlay} onClick={handleClose}>
            {children}
        </div>
     );
}
 
export default Overlay;