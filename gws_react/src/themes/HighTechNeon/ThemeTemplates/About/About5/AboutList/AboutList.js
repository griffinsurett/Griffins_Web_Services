// AboutList.js
import React from "react";
// import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";
// import "../../../styled-circle.css";
// import Section from "../../../themeComponents/Section/Section"; // Import your Section component
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import ContentTemplate from "../../../../themeComponents/ContentTemplate/ContentTemplate";

const About = () => {
  const listItems = [
    {
      title: 'Clear Communication"',
      description: "We speak your language, not tech jargon.",
      icon: faCode,
    },
    {
      title: "Customized Solutions",
      description: "We tailor our services to your unique needs.",
      icon: faCode,
    },
    {
      title: "Transparency and Honesty",
      description: "We're open and honest in all our dealings.",
      icon: faCode,
        },
        {
          title: "Transparency and Honesty",
          description: "We're open and honest in all our dealings.",
          icon: faCode,
            },
    // Add more items here as needed
  ];

  return (
    <>
        <div className="about-icon-list flex justify-center item-align-start justify-center wrap">
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              hasIcon={true}
              icon={item.icon}
              title={item.title}
              titleTag="h6"
              iconPadding={"17px"}
              description={item.description}
              className="custom-icon-list-item-class text-left bottom-space w50"
            />
          ))}
        </div>
    </>
  );
};

export default About;
