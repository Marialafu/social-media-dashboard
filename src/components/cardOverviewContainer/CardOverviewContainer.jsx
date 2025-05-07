import styles from './cardOverviewContainer.module.css'

const CardOverviewContainer = ({views, likes, logoImg, newFollowers}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.container}>
              <span className={styles.likesText}>Page views</span>
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

export default CardOverviewContainer