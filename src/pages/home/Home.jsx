import styles from './Home.module.css'
import landingGirl from '../../assets/landing-page-girl.png'

function PageOne () {

return (

    <div className={styles.homeCard}>

    <div className={styles.imageContainer}>
        <img className={styles.girlImg} src={landingGirl} alt="image of a girl with headphones on"/>
    </div>
        
    <div className={styles.circleTop}></div>

    <div className={styles.textButtonCard}>

        <h1 className={styles.titlePageOne}>Feel the Music</h1>

        <p className={styles.textPageOne}>Stream over 20 thousand songs with one click</p>
        
    </div>

    <div className={styles.circleBottomLeft}></div>

    <div className={styles.circleBottomRight}></div>

</div>

)

}

export default PageOne