// import P from 'prop-types';
import domainIcon from '../../images/domain-web.png';
import gitHubIcon from '../../images/github-web.png';
import styles from './project.module.scss';
export const Project = ({displayName, description, website, thumbnail, githubUrl }) => {
  console.log(githubUrl);
  return (
    <div className={styles.projectContainer}>
      <img src={thumbnail} alt={displayName}/>
      <div>
        <div className={styles.icons}>
          <h3>{displayName}</h3>
          <div>
            <a href={website} rel="noopener noreferrer" target="_blank">
              <img src={domainIcon} alt={'web icon'}/>
            </a> 
            <a href={githubUrl} rel="noopener noreferrer" target="_blank">
              <img src={gitHubIcon} alt={'github icon'}/>       
            </a> 
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};


// Project.propTypes = {
//   children: P.node.isRequired,
// };