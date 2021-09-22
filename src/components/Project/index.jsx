// import P from 'prop-types';
import styles from './project.module.scss'
export const Project = ({displayName, description, website, thumbnail  }) => {
  return (
    <a href={website}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.projectContainer}>
      <img src={thumbnail} alt={displayName}/>
      <div>
        <h3>{displayName}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};


// Project.propTypes = {
//   children: P.node.isRequired,
// };