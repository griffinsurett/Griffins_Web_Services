import React from "react";
import ListItem from "../../../../themeComponents/ListItem/ListItem";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import IntersectionObserverComponent from "../../../../ScrollAnimations";

const AboutList = () => {
  const listItems = [
    {
      title: 'Clear Communication',
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
      title: "Quality Assurance",
      description: "We maintain high standards in our work.",
      icon: faCode,
    },
    // Additional items can be added here
  ];

  return (
    <div className="about-icon-list flex justify-center item-align-start wrap">
      {listItems.map((item, index) => (
        <IntersectionObserverComponent 
          key={index} 
          inViewClass="fade-in" 
          outViewClass="fade-out" 
          delayIn={index * 200} // Stagger effect: delay each item based on index
        >
          <ListItem
            hasIcon={true}
            icon={item.icon}
            title={item.title}
            titleTag="h6"
            iconPadding="17px"
            description={item.description}
            className="custom-icon-list-item-class text-left bottom-space w50"
          />
        </IntersectionObserverComponent>
      ))}
    </div>
  );
};

export default AboutList;
