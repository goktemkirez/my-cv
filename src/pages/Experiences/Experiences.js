import { useEffect, useState } from "react";
// import authAxios from '../../components/axios'

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import { StyledBox } from "./Experiences.style";

import { experiencesJSON } from "../../assets/experiencesJSON";

function Experiences() {
  const [loading, setLoading] = useState(false);
  const [experienceData, setexperienceData] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        setLoading(true);

        // const result = await authAxios.get(`/Experiences`);
        setexperienceData(experiencesJSON);
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
    <StyledBox>
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          {experienceData.sort(function(a, b){return b.experienceID - a.experienceID}).map((data) => (
            <ExperienceCard
              key={data.experienceID}
              company={data?.company}
              date={data?.date}
              title={data?.title}
              department={data?.department}
              responsibilities={data?.responsibilities}
              projects={data?.projects || null }
              website={data?.website}
            />
          ))}
        </>
      )}
    </StyledBox>
  );
}

export default Experiences;
