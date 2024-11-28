// Content.js
// Import all required icons
import RelationalUtil from "./Utils/RelationsUtil";
import autoSlug from "./Utils/AutoSlug";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLaptop,
  faCogs,
  faChartBar,
  faComments,
  faChartLine,
  faWandMagicSparkles,
  faPaintBrush,
  faRobot,
  faGlobe,
  faCode,
  faTools,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { title } from "framer-motion/client";

// Define site settings separately
const siteSettings = {
  siteTitle: "Griffin's Web Services",
  siteTagline: "Websites and All Things Digital",
  siteDescription:
    "Your Jersey Shore-based digital powerhouse for stunning, custom websites and dynamic online solutions that engage audiences and deliver results.",
  siteAuthor: "Griffin's Web Services",
  BusinessName: "Griffin's Web Services LLC",
  get Copyright() {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    return `Copyright © ${currentYear} ${this.BusinessName}`;
  },
};

const pages = [
  {
    id: "homepage",
    sections: [
      "hero",
      "services",
      "about",
      "projects",
      "testimonials",
      "faq",
      "contact",
    ],
    slug: "/", // Internal route
  },
];

// Define collections separately
const collections = [
  {
    id: 1,
    collection: "about",
    heading: "Who We Are",
    title: "About Us",
    hasPage: true,
    sections: ["hero", "about"],
    redirectFrom: ["/about"],
    paragraphs: [
      "Your Jersey Shore-based Digital Powerhouse for Website Creation, Digital Marketing, Branding, IT Consulting, and more.",
      `Since 2019, the founder of ${siteSettings.siteTitle} has served as the Chief Technology Officer of i-75 CPA Review, providing expert web design, development, hosting, management, branding, and IT consulting. Through innovative strategies and tailored solutions, these efforts have helped the business grow by over 100x, establishing i-75 as a leader in its industry, and I am very much excited to do the same for your business.`,
    ],
    button: { text: "Learn More", link: "#" },
    aboutInfo: [
      {
        title: "Mission",
        statement:
          "Our mission is to empower businesses at the Jersey Shore and beyond by providing innovative digital solutions that drive exponential growth and sustainable success.",
      },
      {
        title: "Vision",
        statement:
          "We envision a future where every business, regardless of size, thrives in the digital age with tailored strategies, cutting-edge technology, and impactful design.",
      },
    ],
    items: [
      {
        title: "Effective Communication",
        description:
          "We ensure every step of the process is clear, collaborative, and focused on your goals.",
        icon: faComments, // Represents communication and collaboration
      },
      {
        title: "Custom Solutions",
        description:
          "Our services are tailored to meet your unique challenges and business objectives.",
        icon: faCogs, // Represents customization and innovative solutions
      },
      {
        title: "Measurable Results",
        description:
          "We deliver proven strategies that drive real growth and success for your business.",
        icon: faChartBar, // Symbolizes measurable performance and results
      },
    ],
  },
  {
    id: 2,
    collection: "contact",
    title: "Contact Us",
    heading: "Contact Us.",
    paragraph: `Discover answers to common questions about ${siteSettings.siteTitle}.`,
    hasPage: true,
    sections: ["hero", "contact"],
    redirectFrom: ["/contact"],
    contactInfo: [
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
    ],
    socialMedia: [
      {
        platform: "Facebook",
        href: "https://facebook.com/griffinswebservices",
        icon: faFacebook,
      },
      {
        platform: "X",
        href: "https://twitter.com/griffinswebservices",
        icon: faXTwitter,
      },
      {
        platform: "LinkedIn",
        href: "https://linkedin.com/company/griffins-web-services",
        icon: faLinkedin,
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/griffinswebservices",
        icon: faInstagram,
      },
    ],
    formFields: [
      { name: "firstName", placeholder: "First Name" },
      { name: "lastName", placeholder: "Last Name" },
      { name: "email", placeholder: "Email" },
      { name: "phone", placeholder: "Phone Number" },
      { name: "subject", placeholder: "Subject" },
      { name: "message", placeholder: "Message" },
    ],
    button: { text: "Submit", link: "#" },
  },
  {
    id: 3,
    collection: "services",
    heading: "What We Offer",
    title: "Our Services",
    hasPage: true,
    itemsHasPage: true, // Indicates that individual items also have pages
    slug: "/services",
    sections: ["hero", "projects", "services", "about", "testimonials", "faq"],
    redirectFrom: ["/service", "/our-services"],
    paragraph: "Explore our wide range of services.",
    button: { text: "Get Started", link: "#" },
    items: [
      {
        icon: faPaintBrush,
        title: "Web Design and Development",
        description:
          "Create visually stunning, user-friendly websites and web-apps that are robust, responsive, and built with cutting-edge technologies to captivate your audience and ensure seamless functionality.",
        slug: "/web-creation", // Link for the item
        sections: ["hero", "projects", "services", "about", "testimonials", "faq"],
      },
      {
        icon: faGlobe,
        title: "Web Hosting and Management",
        description:
          "Provide secure and reliable web hosting alongside comprehensive site management to ensure your website stays online, updated, and performing at its best.",
          slug: "/web-hosting", // Link for the item
          sections: ["hero", "projects", "services", "about", "testimonials", "faq"],
        },
      {
        icon: faWandMagicSparkles,
        title: "Brand Design and Strategy",
        description:
          "Your website is your brand's home. To connect and convert, your branding must be on point, with exceptional logos, visuals, and strategies that make you stand out.",
          slug: "/branding", 
          sections: ["hero", "projects", "services", "about", "testimonials", "faq"],
        },
      {
        icon: faChartLine,
        title: "Digital Marketing",
        description:
          "Expand your reach with targeted marketing services, including SEO, social media, email campaigns, and analytics.",
          // slug: "/services/digital-marketing", 
          sections: ["hero", "projects", "services", "about", "testimonials", "faq"],
        },
      {
        icon: faRobot,
        title: "IT Consulting",
        description:
          "We provide expert consulting to guide you through all your tech needs, from IT solutions to leveraging AI, ensuring your business thrives in the digital age.",
          slug: "/it-consulting", // Link for the item
          sections: ["hero", "projects", "services", "about", "testimonials", "faq"],
        },
      {
        icon: faTools, // or a relevant infrastructure/setup icon
        title: "Infrastructure Setup",
        description:
          "Set up the essential infrastructure for your website, including CRM integration, analytics setup, tag management, and other tools to ensure seamless tracking, reporting, and optimization.",
          slug: "/infrastructure-setup", // Link for the item
          sections: ["hero", "projects", "services", "about", "testimonials", "faq"],
        },
    ],
  },   
  {
    id: 4,
    collection: "testimonials",
    heading: "Hear From Our Clients",
    title: "Our Testimonials",
    hasPage: true, // Indicates that individual items also have pages
    // itemsHasPage: true,
    slug: "/testimonials",
    sections: ["hero", "testimonials"],
    redirectFrom: ["/testimonial"],
    button: { text: "Get Started", link: "#" },
    items: [
      {
        name: "Kenn Faria",
        slug: "/kenn-faria",
        quote:
          "Working with this team brought our vision to life! The website captures our services perfectly and has brought in a steady stream of clients.",
        position: "Owner, Faria's Demolition",
      },
      {
        name: "Anthony Gonzales",
        slug: "/anthony-gonzales",
        quote:
          "Highly recommend! Griffin was professional and efficient with a great website that has helped us grow our business exponentially.",
        position: "Owner, Pronto Junk Removal",
      },
      {
        name: "Darius Clark",
        slug: "/darius-clark",
        quote:
          "From branding to the e-commerce platform, everything was done with precision and creativity. Griffin has been able to 5x business and I’m beyond satisfied with the results.",
        position: "CEO of i-75 CPA Review",
      },
      {
        name: "Arold Norelus",
        slug: "/arold-norelus",
        quote:
          "Griffin truly captured my brand’s essence. The website has been a game-changer for my courses and community engagement.",
        position: "Best-Selling Author",
      },
      {
        name: "Tarun Kumar",
        slug: "/tarun-kumar",
        quote:
          "Professional, skilled, and efficient! Our new site is not only beautiful but effectively showcases our client success stories.",
        position: "Owner, Koi Crest Marketing",
      },
      {
        name: "Richard Faria",
        slug: "/richard-faria",
        quote:
          "An excellent experience from start to finish. The site has helped position us as a leader in our industry.",
        position: "Owner, Koi Crest Marketing",
      },
    ],
  },
  {
    id: 5,
    collection: "projects",
    heading: "Our Work",
    title: "Our Projects",
    hasPage: true, 
    slug: "/projects",
    itemsHasPage: true,
    sections: ["hero", "projects", "testimonials"],
    paragraph:
      "Discover our recent projects and see how we've helped businesses like yours succeed.",
    button: { text: "More Projects", link: "#" },
    items: [
      {
        id: 1,
        name: "i-75 CPA Review",
        sections: ["hero", "services"],
        description:
          "Developed multiple e-commerce sites with landing pages, branding, and digital marketing solutions.",
        slug: "/i-75-cpa-review",
        link: "https://i75cpareview.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "Faria's Demolition",
        description:
          "Created a comprehensive website showcasing demolition services, including project galleries and contact forms.",
          slug: "/projects/farias-demolition",
          link: "https://fariasdemolition.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 3,
        name: "Pronto Junk Removal",
        description:
          "Built a service-oriented site with booking functionality and optimized for lead generation in junk removal.",
          slug: "/pronto-junk-removal",
          link: "https://prontojunkremovalnj.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 4,
        name: "Koi Solar",
        description:
          "Designed a clean, informative site to promote solar solutions, emphasizing brand trust and environmental impact.",
          slug: "/koi-solar",
          link: "https://koisolarofficial.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 5,
        name: "Certified Bag Chasers",
        description:
          "Created a personal brand website for a best-selling author and course creator, featuring courses, testimonials, and community-building resources.",
          slug: "/certified-bag-chasers",
          link: "https://certifiedbagchasers.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 6,
        name: "Koi Crest Marketing",
        description:
          "Built a digital marketing agency website with case studies and service offerings, highlighting client success stories.",
          slug: "/koi-crest-marketing",
          link: "https://koicrest.com/",
        image: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    id: 6,
    collection: "pricing",
    heading: "Our Pricing Plans",
    title: "Choose a Plan",
    paragraph:
      "We offer flexible pricing plans for businesses of all sizes. Find the perfect plan for you.",
    items: [
      {
        title: "Basic Plan",
        description: "For small businesses just getting started.",
        price: "$19",
        paymentType: "per month",
        bulletPoints: ["1 Website", "Basic Support", "Email Hosting"],
        button: { text: "Choose Plan", link: "#" },
        isFeatured: false,
      },
      {
        title: "Pro Plan",
        description: "For growing businesses that need more features.",
        price: "$49",
        paymentType: "per month",
        bulletPoints: ["3 Websites", "Priority Support", "SEO Tools"],
        button: { text: "Choose Plan", link: "#" },
        isFeatured: true,
      },
      {
        title: "Enterprise Plan",
        description: "For large organizations with advanced needs.",
        price: "$99",
        paymentType: "per month",
        bulletPoints: [
          "Unlimited Websites",
          "Dedicated Support",
          "Advanced Analytics",
        ],
        button: { text: "Choose Plan", link: "#" },
        isFeatured: false,
      },
    ],
  },
  {
    id: 7,
    collection: "faq",
    heading: "Frequently Asked Questions",
    title: "FAQ",
    paragraph: `Discover answers to common questions about ${siteSettings.siteTitle}.`,
    items: [
      {
        title: "Is the domain name included with the website?",
        content:
          "Setting up your domain is included and part of the process as well as the SSL Certificate with our hosting provider, however buying the domain name is not included with the price of the website. And something you will have to do, however, not to worry it will usually only cost you around $8-$12 a year and super easy to buy it. We will assist you in doing so and then you can leave the rest of the work to us!",
      },
      {
        title: "Can you make my website mobile-friendly?",
        content:
          "Absolutely. 100%, With the growing number of mobile users, it’s crucial to have a website that looks and works great on all devices. All of our websites are designed to be responsive, meaning they will adapt to the screen size of the device they’re being viewed on.",
      },
      {
        title: "What's your cancellation policy for the site management plan?",
        content:
          "Our goal is to make our clients happy and satisfied with our services. If for any reason you wish to cancel your monthly plan, just let us know.",
      },
      {
        title: `How does ${siteSettings.siteTitle} handle security, and what ongoing support is provided?`,
        content: `At ${siteSettings.siteTitle}, security is a priority for every site we build. We carefully choose trusted plugins and top-tier hosting services, known for their robust security measures, for all our clients. However, ongoing maintenance requires an extended management plan.`,
      },
      {
        title: `Privacy Policies, Terms and Conditions, etc. How does ${siteSettings.siteTitle} clarify to users information about these types of privacy issues?`,
        content:
          "We are not legal experts and recommend consulting with a lawyer to ensure compliance with all privacy and legal regulations.",
      },
      {
        title: "Can you help me with email marketing?",
        content: `Absolutely, with ${siteSettings.siteTitle}, we can set your website up with all the tools to create an effective email marketing campaign. We can help you create email lists as well as design the user interface for people to sign up as well as provide you with a team of individuals who can manage your day-to-day email marketing campaigns.`,
      },
      {
        title:
          "I run a restaurant and I'm looking for a website that can handle reservations and online orders. Can Griffin's Web Services help with this?",
        content: `Absolutely! At ${siteSettings.siteTitle}, we specialize in building custom websites for restaurants and various other local businesses. We can seamlessly integrate popular reservation platforms and develop a custom reservation system.`,
      },
      {
        title: "Can you help me with social media?",
        content:
          "Yes, we can help you integrate social media tools for platforms like Facebook, Instagram, and TikTok into your website and provide a team to manage your campaigns.",
      },
      {
        title: "What types of businesses have you worked with in the past?",
        content:
          "We have worked with a broad range of businesses across various sectors such as restaurants, local services, e-commerce, online courses, and more.",
      },
      {
        title: "How does your quote process work?",
        content:
          "You can book a quote directly on our website. We’ll arrange a consultation, where we’ll discuss your requirements and expectations, and then provide you with a detailed quote for your project.",
      },
    ],
  },
];

autoSlug(collections);

collections.forEach((collection) => {
  // Add collection-level pages
  if (collection.hasPage) {
    pages.push({
      id: collection.collection,
      sections: collection.sections,
      slug: collection.slug,
    });
  }

  // Add item-level pages if applicable
  if (Array.isArray(collection.items)) {
    collection.items.forEach((item) => {
      if (item.slug) {
        pages.push({
          id: item.slug, // Automatically generated or existing slug
          sections: item.sections || [],
          slug: item.slug,
        });
      }
    });
  }
  
});


// Initialize RelationalUtil
const relationalUtil = new RelationalUtil({ collections });

// Adding more relations
// Define bidirectional relationships
relationalUtil.relate("services", "/web-creation", "projects", "/i-75-cpa-review");
relationalUtil.relate("services", "/web-creation", "projects", "/farias-demolition");
relationalUtil.relate("services", "/web-creation", "projects", "/certified-bag-chasers");
relationalUtil.relate("services", "/web-creation", "projects", "/koi-solar");
relationalUtil.relate("services", "/web-creation", "projects", "/pronto-junk-removal");
relationalUtil.relate("services", "/web-creation", "projects", "/koi-crest-marketing");
relationalUtil.relate("services", "/web-hosting", "projects", "/i-75-cpa-review");
relationalUtil.relate("services", "/web-hosting", "projects", "/farias-demolition");
relationalUtil.relate("services", "/web-hosting", "projects", "/certified-bag-chasers");
relationalUtil.relate("services", "/web-hosting", "projects", "/koi-solar");
relationalUtil.relate("services", "/web-hosting", "projects", "/pronto-junk-removal");
relationalUtil.relate("services", "/web-hosting", "projects", "/koi-crest-marketing");
relationalUtil.relate("services", "/branding", "projects", "/certified-bag-chasers");
relationalUtil.relate("projects", "/certified-bag-chasers", "services", "/branding");
relationalUtil.relate("services", "/digital-marketing", "projects", "/koi-crest-marketing");
relationalUtil.relate("projects", "/koi-crest-marketing", "services", "/digital-marketing");
relationalUtil.relate("projects", "/pronto-junk-removal", "services", "/web-hosting");
relationalUtil.relate("services", "/it-consulting", "projects", "/koi-solar");
relationalUtil.relate("projects", "/koi-solar", "services", "/it-consulting");
relationalUtil.relate("services", "/infrastructure-setup", "projects", "/certified-bag-chasers");
relationalUtil.relate("projects", "/certified-bag-chasers", "services", "/infrastructure-setup");
relationalUtil.relate("projects", "/i-75-cpa-review", "testimonials", "/darius-clark");
relationalUtil.relate("projects", "/certified-bag-chasers", "testimonials", "/arold-norelus");
relationalUtil.relate("testimonials", "/arold-norelus", "projects", "/certified-bag-chasers");
relationalUtil.relate("projects", "/farias-demolition", "testimonials", "/kenn-faria");
relationalUtil.relate("testimonials", "/kenn-faria", "projects", "/farias-demolition");
relationalUtil.relate("projects", "/pronto-junk-removal", "testimonials", "/anthony-gonzales");
relationalUtil.relate("testimonials", "/anthony-gonzales", "projects", "/pronto-junk-removal");
relationalUtil.relate("testimonials", "/tarun-kumar", "projects", "/koi-crest-marketing");
relationalUtil.relate("projects", "/koi-crest-marketing", "testimonials", "/tarun-kumar");
relationalUtil.relate("faq", 0, "services", "/web-creation"); // Is the domain name included with the website?
relationalUtil.relate("faq", 0, "services", "/web-hosting");
relationalUtil.relate("faq", 1, "services", "/web-creation"); // Can you make my website mobile-friendly?
relationalUtil.relate("faq", 3, "services", "/web-creation"); // How does Griffin's Web Services handle security?
relationalUtil.relate("faq", 3, "services", "/web-hosting");
relationalUtil.relate("faq", 3, "services", "/it-consulting");
relationalUtil.relate("faq", 2, "services", "/web-hosting"); // What's your cancellation policy?
relationalUtil.relate("faq", 4, "services", "/branding"); // Privacy Policies, Terms and Conditions?
relationalUtil.relate("faq", 5, "services", "/digital-marketing"); // Can you help me with email marketing?
relationalUtil.relate("faq", 5, "services", "/infrastructure-setup");
relationalUtil.relate("faq", 6, "services", "/infrastructure-setup"); // Website for reservations/online orders?
relationalUtil.relate("faq", 7, "services", "/digital-marketing"); // Can you help me with social media?
relationalUtil.relate("faq", 8, "services", "/it-consulting"); // What types of businesses have you worked with?
relationalUtil.relate("faq", 9, "services", "/web-creation"); // How does your quote process work?
relationalUtil.relate("faq", 9, "services", "/branding");
relationalUtil.relate("faq", 9, "services", "/digital-marketing");
// Infer indirect relationships
relationalUtil.inferIndirectRelationships();

const Content = {
  siteSettings,
  collections,
  pages,
};

export default Content;
