import { useEffect, useState } from "react";
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import { Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { StyledAvatar } from "./Timeline.style";
import noImage from "../../assets/images/noImage.png";

import { personalJSON } from "../../assets/personalJSON";

const Timeline = (props) => {
  const [personalData, setPersonalData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    try {
      setPersonalData(personalJSON);
      console.log(personalJSON);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  return (
    <VerticalTimeline>
      {personalData.map((data) => (
        <VerticalTimelineElement
          key={data.id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#24292F", color: "#D7DFE6" }}
          contentArrowStyle={{ borderRight: "7px solid  #24292F" }}
          date={data?.date}
          iconStyle={{ background: "#2196F3", color: "#fff" }}
          icon={<PersonOutlined />}
        >
          <Typography
            variant="h5"
            gutterBottom
            className="vertical-timeline-element-title"
          >
            {data?.title}
          </Typography>
          <Typography
            variant="h6"
            className="vertical-timeline-element-subtitle"
          >
            {data?.area1}
          </Typography>
          {data?.area2.map((item, i) => (
            <Typography variant="body2" key={i}>
              • {item}
            </Typography>
          ))}
          {data?.img && (
            <StyledAvatar variant="rounded" alt=" " src={data?.img} />
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
