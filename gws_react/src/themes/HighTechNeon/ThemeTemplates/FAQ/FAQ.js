import React from "react";
import Accordion from "../../themeComponents/Accordion/Accordion";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; // Updated to ContentTemplate
import Section from "../../themeComponents/Section/Section"; // Import your Section component
import "./faq.css"; // Import your FAQ styles

function FAQ() {
  // Define the FAQ items here
  const faqItems = [
    {
      title: "Is the domain name included with the website?",
      content: "Setting up your domain is included and part of the process as well as the SSL Certificate with our hosting provider, however buying the domain name is not included with the price of the website. And something you will have to do, however, not to worry it will usually only cost you around $8-$12 a year and super easy to buy it. We will assist you in doing so and then you can leave the rest of the work to us!",
    },
    {
      title: "Can you make my website mobile-friendly?",
      content: "Absolutely. 100%, With the growing number of mobile users, it’s crucial to have a website that looks and works great on all devices. All of our websites are designed to be responsive, meaning they will adapt to the screen size of the device they’re being viewed on.",
    },
    {
      title: "What's your cancellation policy for the site management plan?",
      content: "Our goal is to make our clients happy and satisfied with our services. If for any reason you wish to cancel your monthly plan, just let us know.",
    },
    {
      title: "How does Griffin's Web Services handle security, and what ongoing support is provided?",
      content: "At Griffin’s Web Services, security is a priority for every site we build. We carefully choose trusted plugins and top-tier hosting services, known for their robust security measures, for all our clients. However, it’s important to note the distinction in our ongoing support: With an Extended Site Management Plan: Clients subscribed to our monthly management plans providing web hosting and maintenance plans enjoy regular updates to their plugins, maintaining security and functionality. This plan offers a continued partnership to keep your site up-to-date. Without an Extended Site Management Plan: For clients not enrolled in a monthly plan, we did do what we can during the site’s initial build. However, since nothing gets updated on our end after that we cannot make any promises as technology progresses on into the future. So After the initial building of the site, the ongoing maintenance, including updates to plugins and security, falls on you the client. While we strive to provide a solid foundation, continued support and upkeep are not included without an additional payment plan.",
    },
    {
      title: "Privacy Policies, Terms and Conditions, etc. How does Griffin's Web Services clarify to users information about these types of privacy issues?",
      content: "We unfortunately are not legal experts, we provide generative reports of this data thru plugins that are coded to do just this however we cannot make any guarantees of their completeness and their totality in covering every legal angle and we very much advise a consultation with a lawyer if you are concerned about this issue, we are happy to provide any information necessary to any lawyer you choose about this topic.",
    },
    {
      title: "How does Griffin's Web Services handle security, and what ongoing support is provided?",
      content: "This is the content of section 3.",
    },
    {
      title: "Can you help me with email marketing?",
      content: "Absolutely, with Griffin’s Web Services, we can set your website up with all the tools to create an effective email marketing campaign. We can help you create email lists as well as design the user interface for people to sign up as well as provide you with a team of individuals who came manage your day to day email marketing campaigns.",
    },
    {
      title: "I run a restaurant and I'm looking for a website that can handle reservations and online orders. Can Griffin's Web Services help with this?",
      content: "Absolutely! At Griffin’s Web Services, we specialize in building custom websites for restaurants and various other local businesses. We understand the unique needs of the food industry and can craft a site that not only beautifully showcases your menu and ambience, but also streamlines customer interactions. We can seamlessly integrate popular reservation platforms, develop a custom reservation system, and set up a user-friendly online ordering process to offer your customers a comprehensive dining experience from the comfort of their own home. Whether it’s enticing potential customers with an inviting visual representation of your restaurant, or simplifying the reservation and ordering process, our goal is to provide you with a website that enhances your business and customer satisfaction.",
    },
    {
      title: "Can you help me with social media?",
      content: "Yes, when it comes to setting up social media tools for platforms like Facebook, Instagram, and TikTok. We can help you integrate these into your website, develop strategies to effectively engage with your audience on these platforms, and then provide you content creation team that can effectively manage your day-to-day social media and digital marketing campaigns.",
    },
    {
      title: "What types of businesses have you worked with in the past?",
      content: "We have worked with a broad range of businesses across various sectors such as restaurant online ordering websites, local service businesses, e-commerce stores, online courses, etc. Each website we build is unique and tailored to our client’s specific needs and industry.",
    },
    {
      title: "How does your quote process work?",
      content: "You can book a quote directly on our website. We’ll arrange a consultation, where we’ll discuss your requirements and expectations. Based on our conversation, we will then provide you with a detailed quote for your project.",
    },
    // Add more items as needed
  ];

  return (
    <Section
      className={"flex justify-center full-height column"}
      shadowClass={"left-shadow bottom"}
    >
      <ContentTemplate
        className={"flex justify-center text-center column bottom-space"}
        ifButton={false}
        ifParagraph={true}
        heading="Frequently Asked Questions" // Large heading
        headingClass={"text-center bottom-space"}
        title="FAQ" // Smaller title
        buttonText="Get Started"
        buttonLink="#"
        buttonId="faq-header-btn"
        paragraphClass={"flex justify-center column about-paragraphs"}
        paragraph1={
          "Discover answers to common questions about Griffin's Web Services."
        }
        paragraph1Class={"top-paragraph p-large text-center"} 
        buttonBottom={true}
        buttonSecClass={"flex justify-center bottom-space"}
      />
      {/* Pass the FAQ items to the Accordion */}
      <div className="faq-box flex justify-center item-align-center responsive">
        <Accordion items={faqItems} />
        {/* <Accordion items={faqItems} /> */}
      </div>
    </Section>
  );
}

export default FAQ;
