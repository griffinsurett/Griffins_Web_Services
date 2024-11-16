// Content.js
// Define site settings separately
const siteSettings = {
  siteTitle: "Griffin's Web Services",
  siteDescription:
    "Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
  siteAuthor: "Griffin's Web Services",
  BusinessName: "Griffin's Web Services LLC",
  get Copyright() {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    return `Copyright © ${currentYear} ${this.BusinessName}`;
  },
};

// Define collections separately
const collections = [
  {
    id: 1,
    collection: "about",
    heading: "Who We Are",
    title: "About Us",
    paragraphs: [
      "Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
      `${siteSettings.siteTitle} is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations.`
    ],
    button: { text: "Learn More", link: "#" },
    items: [
      {
        title: "Clear Communication",
        description: "We speak your language, not tech jargon.",
      },
      {
        title: "Customized Solutions",
        description: "We tailor our services to your unique needs.",
      },
      {
        title: "Transparency and Honesty",
        description: "We're open and honest in all our dealings.",
      },
      {
        title: "Quality Assurance",
        description: "We maintain high standards in our work.",
      },
    ],
  },
  {
    id: 6,
    collection: "contact",
    heading: "Contact Us.",
    paragraph: `Discover answers to common questions about ${siteSettings.siteTitle}.`,
    contactInfo: [
      {
        icon: "faPhone",
        label: "Phone",
        value: "(732) 939-1309",
        href: "tel:7329391309",
      },
      {
        icon: "faEnvelope",
        label: "Email",
        value: "griffin@griffinswebservices.com",
        href: "mailto:griffin@griffinswebservices.com",
      },
    ],
    socialMedia: [
      {
        platform: "Facebook",
        href: "https://facebook.com/griffinswebservices",
        icon: "faFacebook",
      },
      {
        platform: "Twitter",
        href: "https://twitter.com/griffinswebservices",
        icon: "faTwitter",
      },
      {
        platform: "LinkedIn",
        href: "https://linkedin.com/company/griffins-web-services",
        icon: "faLinkedin",
      },
      {
        platform: "Instagram",
        href: "https://instagram.com/griffinswebservices",
        icon: "faInstagram",
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
    id: 2,
    collection: "services",
    heading: "What We Offer",
    title: "Our Services",
    paragraph: "Explore our wide range of services.",
    button: { text: "Get Started", link: "#" },
    items: [
      {
        icon: "faLaptop",
        title: "Website Services",
        description:
          "We design, develop, manage, and host custom, responsive websites that engage users and enhance your brand’s online presence.",
        href: "#websites",
      },
      {
        icon: "faChartLine",
        title: "Digital Marketing",
        description:
          "Boost your brand’s reach with our SEO, influencer, social media, and targeted digital ad campaigns.",
        href: "#digital-marketing",
      },
      {
        icon: "faWandMagicSparkles",
        title: "Branding and Identity",
        description:
          "Build a strong, memorable brand identity that resonates with your audience through impactful visuals and strategic messaging.",
        href: "#branding",
      },
      {
        icon: "faPaintBrush",
        title: "Graphic Design",
        description:
          "Capture attention with unique logos and visual designs that communicate your brand’s identity.",
        href: "#graphic-design",
      },
      {
        icon: "faRobot",
        title: "AI and Automation",
        description:
          "Boost efficiency with AI-powered automation solutions that streamline workflows and provide actionable insights.",
        href: "#ai",
      },
      {
        icon: "faGlobe",
        title: "Software Consulting",
        description:
          "Get expert guidance on selecting and implementing tech solutions to support your business goals.",
        href: "#software-consulting",
      },
    ],
  },
  {
    id: 3,
    collection: "testimonials",
    heading: "Hear From Our Clients",
    title: "Our Testimonials",
    button: { text: "Get Started", link: "#" },
    items: [
      {
        name: "Kenn Faria",
        quote:
          "Working with this team brought our vision to life! The website captures our services perfectly and has brought in a steady stream of clients.",
        position: "Owner, Faria's Demolition",
      },
      {
        name: "Anthony Gonzales",
        quote:
          "Highly recommend! Griffin was professional and efficient with a great website that has helped us grow our business exponentially.",
        position: "Owner, Pronto Junk Removal",
      },
      {
        name: "Darius Clark",
        quote:
          "From branding to the e-commerce platform, everything was done with precision and creativity. Griffin has been able to 5x business and I’m beyond satisfied with the results.",
        position: "CEO of i-75 CPA Review",
      },
      {
        name: "Arold Norelus",
        quote:
          "Griffin truly captured my brand’s essence. The website has been a game-changer for my courses and community engagement.",
        position: "Best-Selling Author",
      },
      {
        name: "Tarun Kumar",
        quote:
          "Professional, skilled, and efficient! Our new site is not only beautiful but effectively showcases our client success stories.",
        position: "Owner, Koi Crest Marketing",
      },
      {
        name: "Richard Faria",
        quote:
          "An excellent experience from start to finish. The site has helped position us as a leader in our industry.",
        position: "Owner, Koi Crest Marketing",
      },
    ],
  },
  {
    id: 4,
    collection: "projects",
    heading: "Our Work",
    title: "Our Projects",
    paragraph:
      "Discover our recent projects and see how we've helped businesses like yours succeed.",
    button: { text: "More Projects", link: "#" },
    items: [
      {
        id: 1,
        name: "i-75 CPA Review",
        description:
          "Developed multiple e-commerce sites with landing pages, branding, and digital marketing solutions.",
        link: "https://i75cpareview.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 2,
        name: "Faria's Demolition",
        description:
          "Created a comprehensive website showcasing demolition services, including project galleries and contact forms.",
        link: "https://fariasdemolition.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 3,
        name: "Pronto Junk Removal",
        description:
          "Built a service-oriented site with booking functionality and optimized for lead generation in junk removal.",
        link: "https://prontojunkremovalnj.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 4,
        name: "Koi Solar",
        description:
          "Designed a clean, informative site to promote solar solutions, emphasizing brand trust and environmental impact.",
        link: "https://koisolarofficial.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 5,
        name: "Certified Bag Chasers",
        description:
          "Created a personal brand website for a best-selling author and course creator, featuring courses, testimonials, and community-building resources.",
        link: "https://certifiedbagchasers.com/",
        image: "https://picsum.photos/200/300",
      },
      {
        id: 6,
        name: "Koi Crest Marketing",
        description:
          "Built a digital marketing agency website with case studies and service offerings, highlighting client success stories.",
        link: "https://koicrest.com/",
        image: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    id: 5,
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
        title: "How does Griffin's Web Services handle security, and what ongoing support is provided?",
        content:
          `At ${siteSettings.siteTitle}, security is a priority for every site we build. We carefully choose trusted plugins and top-tier hosting services, known for their robust security measures, for all our clients. However, ongoing maintenance requires an extended management plan.`,
      },
      {
        title:
          "Privacy Policies, Terms and Conditions, etc. How does Griffin's Web Services clarify to users information about these types of privacy issues?",
        content:
          "We are not legal experts and recommend consulting with a lawyer to ensure compliance with all privacy and legal regulations.",
      },
      {
        title: "Can you help me with email marketing?",
        content:
          `Absolutely, with ${siteSettings.siteTitle}, we can set your website up with all the tools to create an effective email marketing campaign. We can help you create email lists as well as design the user interface for people to sign up as well as provide you with a team of individuals who can manage your day-to-day email marketing campaigns.`,
      },
      {
        title:
          "I run a restaurant and I'm looking for a website that can handle reservations and online orders. Can Griffin's Web Services help with this?",
        content:
          "Absolutely! At Griffin’s Web Services, we specialize in building custom websites for restaurants and various other local businesses. We can seamlessly integrate popular reservation platforms and develop a custom reservation system.",
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

// Export Content as an object combining siteSettings and collections
const Content = {
  siteSettings,
  collections,
};

export default Content;
