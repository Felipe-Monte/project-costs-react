import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Projects.module.css";

import LinkButton from "../layout/LinkButton";
import Message from "../layout/Message";
import Container from "../layout/Container";
import ProjectCard from "../project/ProjectCard";

function Projects() {
  const location = useLocation();

  const [projects, setProjects] = useState([]);

  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>
      {message && <Message msg={message} type="success" />}
      <Container customClass="start">
        {
          projects.length > 0 && 
            projects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category.name}
              />
          ))}
      </Container>
    </div>
  );
}

export default Projects;