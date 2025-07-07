import styles from './styles.module.css';
import { useState } from 'react';
import Icon from '../../images/UI/Chat.png';
import Send from '../../images/UI/send.png';

const Chat = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className={styles.chatButton} onClick={handleToggle}>
                <img src={Icon} alt="icon" />
            </div>

            {isActive &&
                <div className={styles.chat}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Поддержка</h2>
                        <p className={styles.closeButton} onClick={handleToggle}>X</p>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.messageIn}>Авторизуйтесь чтобы использовать чат поддержки!</p>
                        <p className={styles.messageOut}>Авторизуйтесь чтобы использовать чат поддержки!</p>
                    </div>
                    <div className={styles.footer}>
                        <textarea type='text' className={styles.input} />
                        <button type='submit' className={styles.submitButton}>
                            <img src={Send} alt="send" />
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default Chat;