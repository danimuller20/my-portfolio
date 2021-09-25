// import P from 'prop-types';
import {useState, useEffect} from 'react';
import { fetchGitConnect } from '../../api/gitConnect';
import { Project } from '../../components/Project';
import styles from './projects.module.scss'

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitConnect()
      .then(res => {
        setProjects(res);
        setLoading(false);
      })
  }, [])

  return (
    loading ?  <p className={styles.loader}>Loading...</p> :
    (
    <section className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.allProjectsContainer}>
        {projects.projects.map(({
            displayName, description, website, images, githubUrl} ) => {
          return (
            <Project
              key={displayName}
              displayName={displayName}
              description={description}
              website={website}
              thumbnail={images[0].resolutions.desktop.url}
              githubUrl={githubUrl}
            />
          )
        })}
      </div>
    </section>
    )
  );
};

// Projects.propTypes = {
//   children: P.node.isRequired,
// };