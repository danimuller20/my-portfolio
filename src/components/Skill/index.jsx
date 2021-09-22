import styles from './skill.module.scss'

export const Skill = ({image, description}) => {
  return (<div className={styles.toolsContainer}>
    {image && 
      <img src={image} 
            alt={`${description} icon`}
      />
    }
    <p>{description}</p>
  </div>
  )
}