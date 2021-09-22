import linkedin from '../../images/linkedin-icon.png';
import github from '../../images/github-icon.png';
import instagram from '../../images/instagram-icon.png';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <a href="https://www.linkedin.com/in/daniela-muller-8b2415154/"
            rel="noopener noreferrer" target="_blank">
          <img src={linkedin} alt="linkedin icon" />
        </a>
        <a href="https://github.com/danimuller20" rel="noopener noreferrer" target="_blank">
          <img src={github} alt="github icon" />
        </a>
        <a href="https://www.instagram.com/danimuller20/" rel="noopener noreferrer" target="_blank">
          <img src={instagram} alt=" instagram icon" />
        </a>
      </div>
        <p>&copy; Copyright 2021 Daniela Muller</p>
    </footer>
  );
};
