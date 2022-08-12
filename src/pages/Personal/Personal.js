import { useEffect, useState } from "react";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import Timeline from "../../components/Timeline/Timeline";
import { StyledBox } from "./Personal.style";

function Personal() {
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
      <StyledBox>
        {loading ? (
          <LoadingBox/>
        ) : (
          <>
            <Timeline/>
          </>
        )}
      </StyledBox>
    </div>
  );
}

export default Personal;
