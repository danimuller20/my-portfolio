// import P from 'prop-types';
import styles from './aboutMe.module.scss'
import myPhoto from '../../images/eu.jpeg'
export const AboutMe = () => {
  return (
    <section className={styles.aboutMeContainer}>
      <h2 className={styles.aboutMe}>About Me</h2>
      <div className={styles.aboutMeSubContainer}>
        <img className={styles.mySelf} src={myPhoto} alt={"My self smiling"}/>
        <div className={styles.storyContainer}>
          <h3 className={styles.subTitle}>My name is <span>Daniela Muller</span></h3>
          <p className={styles.aboutMeStory}>I am a software developer and passionate about front-end.
            I am currently studying at <a href="https://www.betrybe.com/"
            rel="noopener noreferrer"
            target="_blank">Trybe</a>,
            where I gained programming experience and
            learned programming. I have a degree in Archival Science from the Federal University 
            of Santa Catarina.</p>
        </div>
      </div>
    </section>
  );
};

// AboutMe.propTypes = {
//   children: P.node.isRequired,
// };