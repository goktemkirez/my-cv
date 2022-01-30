import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useStyles } from "./Projects.style";

import {items} from "../../assets/jsonData";

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

      let jsonData = require('../../assets/test.json');
      console.log(jsonData);
      
      setProjectData(items);
      console.log(items);

      // const result = await authAxios.get(`/me`);
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
        <Box>
          <Skeleton animation="pulse" width="240">
            loading
          </Skeleton>
        </Box>
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
