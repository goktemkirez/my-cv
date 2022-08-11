import React, { useEffect, useState } from "react";
import { Box, ImageListItem } from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import authAxios from '../../components/axios'

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import LoadingBox from "../../components/LoadingBox/LoadingBox";

import { projectsJson } from "../../assets/projectsJSON";

function Projects() {
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        setLoading(true);

        const result = await authAxios.get(`/Projects`);
        setProjectData(result.data ? result.data : projectsJson);
      } catch (error) {
        console.log("error", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    getDatas();
  }, []);

  return (
    <Box>
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          <Masonry columns={{xs:1, sm:2, md:3, lg:4}} spacing={2} sx={{margin:0}}>
            {projectData.map((data) => (
              <ImageListItem key={data.projectID} >
                <ProjectCard
                  key={data.projectID}
                  name={data?.title}
                  img={data?.videoUrl}
                  description={data?.detail}
                  codeUrl={data?.codeUrl}
                  liveUrl={data?.liveUrl}
                />
              </ImageListItem>
            ))}
          </Masonry>
        </>
      )}
    </Box>
  );
}

export default Projects;
