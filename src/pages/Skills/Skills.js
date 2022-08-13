import { useEffect, useState } from "react";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import SkillCard from "../../components/SkillCard/SkillCard";
import { StyledBox } from "./Skills.style";

import { skills } from "../../assets/skillsJSON";

function Skills() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);

      setData(skills);
      console.log(skills);
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
        <LoadingBox />
      ) : (
        <>
          {data.map((data) => (
            <SkillCard
              key={data.id}
              name={data?.name}
              score={data?.score}
              img={data?.img}
            />
          ))}
        </>
      )}
    </StyledBox>
  );
}

export default Skills;
