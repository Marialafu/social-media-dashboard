import CardDataContainer from '../cardDataContainer/CardDataContainer'
import styles from './generalDataContainer.module.css'
import { v4 } from 'uuid'
import {SOCIAL_MEDIA_INFO} from '../../constants/socialMediaInfo'

const GeneralDataContainer = () => {

    return (
        <section className={styles.generalDataContainer}>
        {SOCIAL_MEDIA_INFO.map(socialMedia => {
            return <CardDataContainer key={v4()} {...socialMedia} />
        })}
        </section>
    )

}

export default GeneralDataContainer