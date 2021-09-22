// import P from 'prop-types';
import styles from './skills.module.scss';
import { Skill } from '../../components/Skill';
import {skills} from '../../utils/skills';
export const Skills = () => {
  return (
    <section className={styles.skillsContainer}>
      <h2>Skills</h2>
      <h3>Frameworks and tools:</h3>

      <div className={styles.allToolsContainer}>
        {
          skills.map(({image, description}) => {
            return (
              <Skill key={description} image={image} description={description}/>
            )
          })
        }
      </div>
    </section>
  );
};

// Skills.propTypes = {
//   children: P.node.isRequired,
// };