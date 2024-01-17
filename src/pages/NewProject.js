import styles from './NewProject.module.css'

import ProjectForm from '../components/project/ProjectForm'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Novo Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm />
    </div>
  )
}

export default NewProject