import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import authAxios from '../../components/axios'

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import { useStyles } from "./Projects.style";

import {projectsJson} from "../../assets/projectsJSON";

function Projects() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    try {
      setLoading(true);
      
      const result = await authAxios.get(`/Projects`);
      setProjectData(result.data ? result.data : projectsJson);
      console.log(projectData);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };


  return (
    <Container className={classes.containerStyle}>
      {loading ? (
        <LoadingBox/>
      ) : (
        <>
          {projectData.map((data) => (
            <ProjectCard
              key={data.projectID}
              name={data?.title}
              img={data?.videoUrl}
              description={data?.detail}
              codeUrl={data?.codeUrl}
              liveUrl={data?.liveUrl}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default Projects;
