import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import Timeline from "../../components/Timeline/Timeline";
import { useStyles } from "./Personal.style";

function Personal() {
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
    <div>
      <Container className={classes.containerStyle}>
        {loading ? (
          <LoadingBox/>
        ) : (
          <>
            <Timeline/>
          </>
        )}
      </Container>
    </div>
  );
}

export default Personal;
