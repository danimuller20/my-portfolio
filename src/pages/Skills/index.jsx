// import P from 'prop-types';
import styles from './skills.module.scss';
import { Skill } from '../../components/Skill';
import {frontEnd, backEnd, other} from '../../utils/skills';
export const Skills = () => {

  const renderStack = (stack) => {
    return (
      stack.map(({image, description, stack}) => {
        return (
          stack ? (
            <tr key={Math.random()}>
              <th className={styles.stackName}>{stack}</th>
            </tr>
          ) : (
            <tr key={Math.random()}>
              <td>
                <Skill
                  image={image}
                  description={description}
                  stack={stack}
                />
              </td>
            </tr>
          )
          )
        })
    )
  }

  return (
    <section className={styles.skillsContainer}>
      <h2>Skills</h2>
      <h3>Frameworks and tools:</h3>
        <table className={styles.tools}>
          <tbody>
            {renderStack(frontEnd)}
          </tbody>
          <tbody>
            {renderStack(backEnd)}
          </tbody>
          <tbody>
            {renderStack(other)}
          </tbody>
        </table>
    </section>
  );
};

// Skills.propTypes = {
//   children: P.node.isRequired,
// };