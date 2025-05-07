import styles from './headerComponent.module.css'

const HeaderComponent = () => {
    return (
        <header className={styles.parentContainer}>
            <h1 className={styles.title}>Social Media Dashboard</h1>
            <span className={styles.subtitle}>Total Followers: 23,004</span>
        </header>
    )

}

export default HeaderComponent