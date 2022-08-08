import React, { useEffect, useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import authAxios from '../../components/axios'

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import LoadingBox from "../../components/LoadingBox/LoadingBox";

import { projectsJson } from "../../assets/projectsJSON";

function Projects() {
  const [loading, setLoading] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');

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
          <ImageList variant="masonry"
            sx={isMobile ?
              { display: 'flex', flexDirection: 'column', }
              : {}} cols={4} gap={20} >
            {projectData.map((data) => (
              <ImageListItem key={data.projectID} loading="lazy">
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
          </ImageList>
        </>
      )}
    </Box>
  );
}

export default Projects;
