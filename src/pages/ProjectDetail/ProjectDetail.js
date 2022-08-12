import { useEffect, useState } from "react";
import { Skeleton, Box } from "@mui/material";

function ProjectDetail() {
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
    <Box>
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
    </Box>
  );
}

export default ProjectDetail;
