import styles from './cardDataContainer.module.css'
import {USER_INFO} from '../../constants/userInfo'

const CardDataContainer = ({name, followers, newFollowers, todayFollowers, logoImg}) => {

    const followersTextClass = `${styles.text} ${styles.followers}`
    const newFollowersClass = `${styles.subtext} ${styles[newFollowers]}`

    // let defineNewFollowers =
    // if (newFollowers === true)
    //   {'/assets/images/icon-up.svg'
    // } else {'/assets/images/icon-down.svg'}

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeaderContainer}>
              <img className={styles.icon} src={logoImg} alt=""/>
              <span className={styles.text}>@nathanf</span>
            </div>
            <div className={styles.cardMainContainer}>
              <span className={styles.numberText}>{followers}</span>
              <span className={followersTextClass}>FOLLOWERS</span>
            </div>
            <div className={styles.cardFooterContainer}>
              <img src="/assets/images/icon-up.svg" alt="" />
              <span className={newFollowersClass}>12 Today</span>
            </div>
          </div>
    )

}

export default CardDataContainer