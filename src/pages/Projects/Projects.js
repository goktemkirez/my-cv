import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import { useStyles } from "./Projects.style";

import {items} from "../../assets/projectsJSON";

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
      
      setProjectData(items);
      console.log(items);
      
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
              key={data.id}
              name={data?.name}
              img={data?.img}
              description={data?.description}
              codeUrl={data?.code_url}
              liveUrl={data?.live_url}
            />
          ))}
        </>
      )}
    </Container>
  );
}

export default Projects;
