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
      {/* <style>{"body { background-color: #EBECF0; }"}</style> */}
      {loading ? (
          <Box>
          <Skeleton animation="pulse" width="240">
            loading
          </Skeleton>
        </Box>
      ) : (
        <>
        <h1>Experiences</h1>
        </>
      )}
      {/* <Container className={classes.subContainer}>
        <Container className={classes.loginCard}>
          <Container className={classes.logoDiv}>
            <Avatar
              variant="rounded"
              alt=" "
              src="/static/images/avatar/3.jpg"
              className={classes.img}
            />
            <Typography variant="h5">Experiences</Typography>
          </Container>
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            className={classes.loginButton}
          >
            Experiences
          </Button>
        </Container>
        <Container className={classes.linkContainer}>
          <Link href="#">Experiences</Link>
        </Container>
      </Container> */}
    </Container>
  );
}

export default ProjectDetail;
