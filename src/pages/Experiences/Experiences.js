import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { useStyles } from "./Experiences.style";

import { experiencesJSON } from "../../assets/experiencesJSON";

function Experiences() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [experienceData, setexperienceData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    try {
      setLoading(true);

      setexperienceData(experiencesJSON);
      console.log(experiencesJSON);

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
        <Box className={classes.cardContainer}>
          {experienceData.map((data) => (
            <ExperienceCard
              key={data.id}
              company={data?.company}
              date={data?.date}
              title={data?.title}
              department={data?.department}
              responsibilities={data?.responsibilities}
              projects={data?.projects}
              website={data?.website}
            />
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Experiences;
