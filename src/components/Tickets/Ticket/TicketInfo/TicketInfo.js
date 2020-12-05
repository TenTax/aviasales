import styles from './TicketInfo.module.css';

const TicketInfo = ({title, text}) => {
    return (
        <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}

export default TicketInfo;