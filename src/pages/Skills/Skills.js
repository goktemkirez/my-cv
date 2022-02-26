import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import LoadingBox from "../../components/LoadingBox/LoadingBox";
import SkillCard from "../../components/SkillCard/SkillCard";
import { useStyles } from "./Skills.style";

import { skills } from "../../assets/skillsJSON";

function Skills() {
  const classes = useStyles();
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
    <div>
      <Container className={classes.containerStyle}>
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
      </Container>
    </div>
  );
}

export default Skills;
