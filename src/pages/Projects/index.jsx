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

  console.log(loading);

  return (
    loading ?  <p>Loading...</p> :
    (
    <section className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.allProjectsContainer}>
        {projects.projects.map(({
            displayName, description, website, images}, ) => {
          return (
            <Project
              key={displayName}
              displayName={displayName}
              description={description}
              website={website}
              thumbnail={images[0].resolutions.desktop.url}
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