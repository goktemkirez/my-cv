import { useEffect, useState } from "react";
import authAxios from '../../components/axios'

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import { StyledBox } from "./Experiences.style";

import { experiencesJSON } from "../../assets/experiencesJSON";

function Experiences() {
  const [loading, setLoading] = useState(false);
  const [experienceData, setexperienceData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        setLoading(true);

        const result = await authAxios.get(`/Experiences`);
        setexperienceData(result.data ? result.data : experiencesJSON);
        setData(result.data);
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

  useEffect(() => {
    const logData = async () => {
      console.log(data);
    };
    logData();
  }, [data]);

  return (
    <StyledBox>
      {loading ? (
        <LoadingBox />
      ) : (
        <>
          {experienceData.map((data) => (
            <ExperienceCard
              key={data.experienceID}
              company={data?.company}
              date={data?.date}
              title={data?.title}
              department={data?.department}
              responsibilities={data?.experienceResponsibilities}
              projects={data?.experienceProjects}
              website={data?.website}
            />
          ))}
        </>
      )}
    </StyledBox>
  );
}

export default Experiences;
