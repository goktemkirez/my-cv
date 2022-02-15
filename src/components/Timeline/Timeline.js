import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { useStyles } from "./Timeline.style";
import pp from '../../assets/images/pp.jpg';

const Timeline = (props) => {
  const classes = useStyles();

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
        contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MenuIcon />}
      >
        <h3 className="vertical-timeline-element-title">Sayfa Test Aşamasındadır</h3>
        <h4 className="vertical-timeline-element-subtitle">Test</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
        <img className={classes.timelineCardImage} src={pp} alt=""/>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
        contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MenuIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
        contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
        date="2008 - 2010"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MenuIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
        contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
        date="2006 - 2008"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MenuIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
          User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
        contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
        date="April 2013"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<MenuIcon />}
      >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>
          Strategy, Social Media
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
        contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
        date="November 2012"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<MenuIcon />}
      >
        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>
          Creative Direction, User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#24292F', color: '#D7DFE6' }}
        contentArrowStyle={{ borderRight: '7px solid  #24292F' }}
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<MenuIcon />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          Creative Direction, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<MenuIcon />}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
