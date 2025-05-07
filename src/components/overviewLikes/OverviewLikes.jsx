import styles from './overviewLikes.module.css'

const OverviewLikes = ({likes, logoImg, todayFollowers, followers}) => {

    // let percentaje = 

    return (
        <div className={styles.cardContainer}>
            <div className={styles.container}>
                <span className={styles.likesText}>Likes</span>
                <img src={logoImg} alt="" />
            </div>
            <div className={styles.container}>
                <span className={styles.likesNumber}>{likes}</span>
                <div className={styles.percentaje}>
                    <img className={styles.img} src="/assets/images/icon-up.svg" alt="" />
                    <div>2%</div>
                </div>
            </div>
        </div>
    )
}

export default OverviewLikes