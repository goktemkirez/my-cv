import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { useStyles } from "./ProjectDetail.style";

function ProjectDetail() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  // const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      setLoading(true);

      // const result = await authAxios.get(`/me`);
      // console.log(result.data);
      // setProfileData(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      // setLoading(false);
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
        <h1>Projects Detail</h1>
        </>
      )}
    </Container>
  );
}

export default ProjectDetail;
