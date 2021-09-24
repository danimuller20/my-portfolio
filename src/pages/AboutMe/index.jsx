// import P from 'prop-types';
import styles from './aboutMe.module.scss'
import myPhoto from '../../images/eu.jpeg'
export const AboutMe = () => {
  return (
    <section className={styles.aboutMeContainer}>
      <div className={styles.aboutMeSubContainer}>
        <div className={styles.storyContainer}>
          <img className={styles.mySelf} src={myPhoto} alt={"My self smiling"}/>
          <h2 className={styles.subTitle}><span>About Me</span></h2>
          <p className={styles.aboutMeStory}>
            Hi! I'm from Florianópolis - Brazil. I'm a front-end
            developer at <a href="https://www.jungledevs.com/"
            rel="noopener noreferrer" target="_blank">Jungle Devs</a> and 
            I'm studying full-stack web development 
            at <a href="https://www.betrybe.com/" rel="noopener noreferrer"
            target="_blank">Trybe</a> School.
            I have a degree in Archival Science from the Federal University of Santa Catarina.
            My main hobbies are cooking, reading and hiking.
            On this landing page I want to introduce you a little about me.
            </p>
        </div>
      </div>
    </section>
  );
};

// AboutMe.propTypes = {
//   children: P.node.isRequired,
// };