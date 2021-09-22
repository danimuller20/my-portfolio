// import P from 'prop-types';
import styles from './header.module.scss';
import computerLogo from '../../images/monitor-coding-svgrepo-com.svg'
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img 
          className={styles.computerLogo} 
          src={computerLogo} 
          alt={"monitor-coding-svgrepo-com"}/>
          <h2 className={styles.subTitle}> Hello, I am </h2>
          <h1 className={styles.title}> Daniela Muller</h1>
          <h2 className={styles.subTitle} >Front End Developer</h2>
      </div>
    </header>
  );
};

// Header.propTypes = {
//   children: P.node.isRequired,
// };