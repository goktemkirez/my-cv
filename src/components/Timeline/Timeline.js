import React, {useEffect, useState} from "react";
import PersonOutlined from '@material-ui/icons/PersonOutlined';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useStyles } from "./Timeline.style";
import noImage from '../../assets/images/noImage.png';

import {personalJSON} from "../../assets/personalJSON";

const Timeline = (props) => {
  const classes = useStyles();
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
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
          contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
          date={data?.date}
          iconStyle={{ background: '#2196F3', color: '#fff' }}
          icon={<PersonOutlined />}
        >
          <h3 className="vertical-timeline-element-title">{data?.title}</h3>
          <br/>
          <h4 className="vertical-timeline-element-subtitle">{data?.area1}</h4>
          {data?.area2.map((item, i) => (
            <h5 key={i}>• {item}</h5>
          ))}
          <img className={classes.timelineCardImage} src={data?.img ? data?.img : noImage} alt="" />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
