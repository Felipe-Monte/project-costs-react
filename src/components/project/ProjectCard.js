import styles from './ProjectCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard({id, name, budget, category, handleRemove}){
  return(
    <div>
      <h1>{name}</h1>
      <h2>{category}</h2>
      <p>{id}</p>
    </div>
  ) 
}

export default ProjectCard