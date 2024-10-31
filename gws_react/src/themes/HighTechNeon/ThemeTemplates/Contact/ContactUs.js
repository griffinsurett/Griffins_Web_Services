// ContactUs.js
import React from "react";
import InputField from "../../themeComponents/Form-Fields/InputField";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import Section from "../../themeComponents/Section/Section";
import "./contact-us.css";
import TextareaField from "../../themeComponents/Form-Fields/TextareaField";
import Button from "../../themeComponents/Buttons/Button";
import IconListItem from "../../themeComponents/ListItem/ListItem";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contactInfo = [
  {
    icon: faPhone,
    label: "Phone",
    value: "(732) 939-1309",
    href: "tel:7329391309",
  },
  {
    icon: faEnvelope,
    label: "Email",
    value: "griffin@griffinswebservices.com",
    href: "mailto:griffin@griffinswebservices.com",
  },
];

function ContactUs() {
  return (
    <Section
      className={
        "flex justify-center item-align-center full-height responsive column"
      }
      shadowClass={"left-shadow bottom"}
    >
      <div className="flex justify-center item-align-center bottom-space">
        <ContentTemplate
          ifButton={false}
          ifParagraph={true}
          heading="Contact Us."
          paragraphClass={
            "flex justify-center column about-paragraphs morethan-half-container"
          }
          paragraph1={
            "Discover answers to common questions about Griffin's Web Services."
          }
          paragraph1Class={"top-paragraph responsive-center"}
          buttonBottom={true}
          className={"contact-sec-header column responsive-center"}
          textSectionClass={"smaller-bottom-space"}
        />
        <div className="contact-info large-screens bottom-space">
          {contactInfo.map((info, index) => (
            <IconListItem
              key={index}
              hasIcon={true}
              icon={info.icon}
              title={info.label}
              description={info.value}
              href={info.href}
              className="contact-info-item responsive-center flex item-align-center"
            />
          ))}
        </div>
      </div>
      <form className="contact-form top-space bottom-space">
        <div className="form-group column">
          <div className="form-group">
            <div className="name-fields flex justify-between">
              <InputField name="firstName" placeholder="First Name" />
              <InputField name="lastName" placeholder="Last Name" />
            </div>
            <div className="contact-fields flex justify-between">
              <InputField name="email" placeholder="Email" />
              <InputField name="phone" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form-group subject-message">
            <InputField name="subject" placeholder="Subject" />
            <TextareaField name="message" placeholder="Message" className="textarea-field" />
          </div>
        </div>
        <Button type="submit" text="Submit" className="p-large" />
      </form>
    </Section>
  );
}

export default ContactUs;
