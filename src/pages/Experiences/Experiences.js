import { useEffect, useState } from "react";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import { StyledBox } from "./Experiences.style";

import { experiencesJSON } from "../../assets/experiencesJSON";

function Experiences() {
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
    <StyledBox>
      {loading ? (
        <LoadingBox/>
      ) : (
        <>
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
        </>
      )}
    </StyledBox>
  );
}

export default Experiences;
