import Overlay from '../Overlay/Overlay';
import styles from './styles.module.css';

const Modal = ({title, onclose, children}) => {
    const handleClose = () => {
        onclose()
    }
    return ( 
        <Overlay>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <p onClick={handleClose}>x</p>
                </div>

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Overlay>
     );
}
 
export default Modal;