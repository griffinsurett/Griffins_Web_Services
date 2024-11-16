// ContactUs.js
import React from "react";
import { getCollection } from "../../../../../CMS/Utils/GetCollection";
import InputField from "../../../themeComponents/Form-Fields/InputField";
import TextareaField from "../../../themeComponents/Form-Fields/TextareaField";
import Button from "../../../themeComponents/Buttons/Button";
import ContentTemplate from "../../../themeComponents/ContentTemplate/ContentTemplate";
import Section from "../../../themeComponents/Section/Section";
import IconListItem from "../../../themeComponents/ListItem/ListItem";
import IntersectionObserverComponent from "../../../ScrollAnimations";
import "./contact-us.css";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import fallback icons

function ContactUs() {
  const contactContent = getCollection("contact");

  if (!contactContent) {
    return <div>Error: Contact content not found</div>;
  }

  return (
    <Section
      className="flex justify-center item-align-start full-height responsive responsive-center"
      shadowClass="left-shadow bottom"
    >
      <ContentTemplate
        className="contact-sec-header column responsive-center sticky-section"
        contentWrapClass="column"
        ifButton={false}
        ifParagraph={true}
        heading={contactContent.heading}
        paragraphClass="flex justify-center column about-paragraphs"
        paragraph1={contactContent.paragraph}
        paragraph1Class="top-paragraph responsive-center smaller-bottom-space"
        buttonBottom={true}
        textSectionClass="smaller-bottom-space"
      >
        <div className="contact-info top-space bottom-space">
          {contactContent.contactInfo.map((info, index) => (
            <IconListItem
              key={index}
              hasIcon={true}
              icon={
                info.icon === "faPhone"
                  ? faPhone
                  : info.icon === "faEnvelope"
                  ? faEnvelope
                  : null // Add additional icon mapping if necessary
              }
              title={info.label}
              description={info.value}
              href={info.href}
              className="contact-info-item responsive-center flex item-align-center responsive responsive-center bottom-space"
            />
          ))}
        </div>
      </ContentTemplate>

      <form className="contact-form top-space bottom-space">
        <div className="form-group column">
          <div className="form-group">
            <div className="name-fields flex justify-between">
              {contactContent.formFields.slice(0, 2).map((field, index) => (
                <InputField
                  key={index}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
            <div className="contact-fields flex justify-between">
              {contactContent.formFields.slice(2, 4).map((field, index) => (
                <InputField
                  key={index}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </div>
          <div className="form-group subject-message">
            {contactContent.formFields.slice(4, 5).map((field, index) => (
              <InputField
                key={index}
                name={field.name}
                placeholder={field.placeholder}
              />
            ))}
            {contactContent.formFields.slice(5, 6).map((field, index) => (
              <TextareaField
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                className="textarea-field"
              />
            ))}
          </div>
        </div>

        <IntersectionObserverComponent inViewClass="fade-in" delayIn={300}>
          <Button
            type="submit"
            text={contactContent.button.text}
            className="p-large self-right"
          />
        </IntersectionObserverComponent>
      </form>
    </Section>
  );
}

export default ContactUs;
