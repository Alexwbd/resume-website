import { motion } from "framer-motion";
import styles from '@/styles/Home.module.css'

const Profile = () => {
    return( <motion.div className={styles.containerDiv}>
    <img src="/profilbilden.jpg" className={styles.profileimage}/>
    <div className={styles.infoText}>
      <p>
        Hi, i'm Alex. I'm an aspiring <strong className={styles.strongText}>Front-end Developer</strong>,
        and i love working with the front-end part of Web Development.
        I'm open to other peoples wisdom, or anything anyone want to teach me within Tech.
      </p>
      <br/>
      <div className={styles.skillsList}>
        <p className={styles.skillsP}>
          Skills: 
        </p>
            <div className={styles.imgDivs}>
              <img src="/html5.webp" className={styles.devIcons}/>
                <div className={styles.hoverToolTip}>HTML</div>
              </div>
            <div className={styles.imgDivs}>
              <img src="/css.webp" className={styles.devIcons}/>
              <div className={styles.hoverToolTip}>CSS</div>
              </div>
            <div className={styles.imgDivs}>
              <img src="/jscript.png" className={styles.devIcons}/>
              <div className={styles.hoverToolTip}>JavaScript</div>
              </div>
            <div className={styles.imgDivs}>
              <img src="/react.png" className={styles.devIcons}/>
              <div className={styles.hoverToolTip}>ReactJs</div>
              </div>
            <div className={styles.imgDivs}>
              <img src="/next--js.png" className={styles.devIcons}/>
              <div className={styles.hoverToolTip}>NextJs</div>
            </div>
            <div className={styles.imgDivs}>
              <img src="/tailwind.png" datatooltip="meow" className={styles.tailwind}/>
              <div className={styles.hoverToolTip}>Tailwind</div>
            </div>
      </div>

    </div>
  </motion.div>)
}
export default Profile