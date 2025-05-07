import CardOverviewContainer from '../cardOverviewContainer/CardOverviewContainer'
import styles from './overviewDataContainer.module.css'
import { SOCIAL_MEDIA_INFO } from '../../constants/socialMediaInfo'
import { v4 } from 'uuid'
import OverviewLikes from '../overviewLikes/OverviewLikes'

const OverviewDataContainer = () => {
return (
    <section className={styles.overviewDataContainer}>
          <h2 className={styles.title}>Overview - Today</h2>

        {SOCIAL_MEDIA_INFO.map(socialMedia => 
          <div className={styles.cardsContainer}>
          <CardOverviewContainer key={v4()} {...socialMedia} /> 
          <OverviewLikes key={v4()} {...socialMedia} />
          </div>
        )}

    </section>
)
}

export default OverviewDataContainer