import styles from "./Discover.module.css";
import covers from"../../assets/covers.jpg";
import microphone from"../../assets/microphone.svg";
import albums from"../../assets/albums.svg";
import more from"../../assets/more.svg";

function PageTwo () {

    return (
    <div className={styles.BodyPageTwo}>
        <div className={styles.LeftContainer}>
            <h1 className={styles.Title}>Discover new music</h1>
                 <div className={styles.BottonsDiscover}>
                    <div className={styles.Button}>
                        <img src={microphone} alt="microphone button" />
                        <p>Charts</p>
                    </div>
                    <div className={styles.Button}>
                        <img src={albums} alt="albums button" />
                        <p>Albums</p>
                    </div>
                    <div className={styles.Button}>
                        <img src={more} alt="more button" />
                        <p>More</p>
                    </div>
                </div>
            <h5>By joining you can benefit by listening to the latest albums released.</h5>
        </div>
        <div className={styles.CenterImage}>
            <img src={covers} alt="album covers" />
        </div>
    </div>
    )
}
export default PageTwo