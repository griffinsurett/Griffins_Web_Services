// AboutList.js

import React from "react";
import Box from "../../../../themeComponents/Box/Box";
import Icon from "../../../../themeComponents/Icon/Icon";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const listItems = [
    { title: 'Clear Communication, Limited "Tech Talk"', icon: faCode },
    { title: "Customized Solutions That Fit Your Needs", icon: faCode },
    { title: "Transparency and Honesty", icon: faCode },
    { title: "Results That Drive Your Business Forward", icon: faCode },
    { title: "Experienced, Friendly Professionals Who Care", icon: faCode },
    { title: "A Local, Jersey Shore-Based", icon: faCode },
  ];

  return (
    <div className="about-icon-list flex justify-center item-align-center wrap text-center box-gap">
      {listItems.map((item, index) => (
        <Box 
          key={index}
          className="about-info-box w30 flex column item-align-center justify-center space"
          staggeredAnimation={true} // Enable staggered animation
          index={index} // Provide index for staggered delay calculation
          delayBase={100} // Base delay of 100ms
        >
          <Icon icon={item.icon} size="md" className="styled-icon dynamic-border-effect" iconPadding="12px" />
          <h6 className="p-small top-space">{item.title}</h6>
        </Box>
      ))}
    </div>
  );
};

export default About;
