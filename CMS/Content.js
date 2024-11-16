// Content.js

const content = [
    {
      section: "about",
      collection: [
        {
          id: 1,
          heading: "Who We Are",
          title: "About Us",
          paragraphs: [
            "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
            "Griffin’s Web Services is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations.",
          ],
          button: { text: "Learn More", link: "#" },
        },
        {
          id: 2,
          heading: "Who We Are",
          title: "About Us",
          paragraphs: [
            "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
            "Griffin’s Web Services is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations.",
          ],
          button: { text: "Learn More", link: "#" },
        },
        {
          id: 3,
          heading: "Who We Are",
          title: "About Us",
          paragraphs: [
            "Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
            "Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
          ],
          button: { text: "Learn More", link: "#" },
          logo: { width: "360px", everdarkLogo: true },
          aboutList: [
            "Clear Communication, Limited 'Tech Talk'",
            "Customized Solutions That Fit Your Needs",
            "Transparency and Honesty",
          ],
        },
        {
          id: 4,
          heading: "Who We Are",
          title: "About Us",
          paragraphs: [
            "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
            "Griffin’s Web Services is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations.",
          ],
          button: { text: "Learn More", link: "#" },
          aboutList: [
            "Clear Communication, Limited 'Tech Talk'",
            "Customized Solutions That Fit Your Needs",
            "Transparency and Honesty",
          ],
        },
        {
          id: 5,
          heading: "Who We Are",
          title: "About Us",
          paragraphs: [
            "Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design. Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
          ],
          button: { text: "Learn More", link: "#" },
          aboutList: [
            { title: "Clear Communication", description: "We speak your language, not tech jargon." },
            { title: "Customized Solutions", description: "We tailor our services to your unique needs." },
            { title: "Transparency and Honesty", description: "We're open and honest in all our dealings." },
            { title: "Quality Assurance", description: "We maintain high standards in our work." },
          ],
        },
      ],
    },
    {
      section: "services",
      collection: [
        {
          id: 1,
          heading: "What We Offer",
          title: "Our Services",
          paragraph: "Explore our wide range of services.",
          button: { text: "Get Started", link: "#" },
          servicesData: [
            {
              icon: "faLaptop",
              title: "Website Services",
              description: "We design, develop, manage, and host custom, responsive websites that engage users and enhance your brand’s online presence.",
              href: "#websites",
            },
            {
              icon: "faChartLine",
              title: "Digital Marketing",
              description: "Boost your brand’s reach with our SEO, influencer, social media, and targeted digital ad campaigns.",
              href: "#digital-marketing",
            },
            {
              icon: "faWandMagicSparkles",
              title: "Branding and Identity",
              description: "Build a strong, memorable brand identity that resonates with your audience through impactful visuals and strategic messaging.",
              href: "#branding",
            },
            {
              icon: "faPaintBrush",
              title: "Graphic Design",
              description: "Capture attention with unique logos and visual designs that communicate your brand’s identity.",
              href: "#graphic-design",
            },
            {
              icon: "faRobot",
              title: "AI and Automation",
              description: "Boost efficiency with AI-powered automation solutions that streamline workflows and provide actionable insights.",
              href: "#ai",
            },
            {
              icon: "faGlobe",
              title: "Software Consulting",
              description: "Get expert guidance on selecting and implementing tech solutions to support your business goals.",
              href: "#software-consulting",
            },
          ],
        },
      ],
    },
    {
      section: "testimonials",
      collection: [
        {
          id: 1,
          heading: "Hear From Our Clients",
          title: "Our Testimonials",
          button: { text: "Get Started", link: "#" },
          testimonials: [
            {
              name: "Kenn Faria",
              quote: "Working with this team brought our vision to life! The website captures our services perfectly and has brought in a steady stream of clients.",
              position: "Owner, Faria's Demolition",
            },
            {
              name: "Anthony Gonzales",
              quote: "Highly recommend! Griffin was professional and efficient with a great website that has helped us grow our business exponentially.",
              position: "Owner, Pronto Junk Removal",
            },
            {
              name: "Darius Clark",
              quote: "From branding to the e-commerce platform, everything was done with precision and creativity. Griffin has been able to 5x business and I’m beyond satisfied with the results.",
              position: "CEO of i-75 CPA Review",
            },
            {
              name: "Arold Norelus",
              quote: "Griffin truly captured my brand’s essence. The website has been a game-changer for my courses and community engagement.",
              position: "Best-Selling Author",
            },
            {
              name: "Tarun Kumar",
              quote: "Professional, skilled, and efficient! Our new site is not only beautiful but effectively showcases our client success stories.",
              position: "Owner, Koi Crest Marketing",
            },
            {
              name: "Richard Faria",
              quote: "An excellent experience from start to finish. The site has helped position us as a leader in our industry.",
              position: "Owner, Koi Crest Marketing",
            },
          ],
        },
      ],
    },
    {
      section: "projects",
      collection: [
        {
          id: 1,
          heading: "Our Work",
          title: "Our Projects",
          paragraph: "Discover our recent projects and see how we've helped businesses like yours succeed.",
          button: { text: "More Projects", link: "#" },
          projects: [
            {
              name: "i-75 CPA Review",
              description: "Developed multiple e-commerce sites with landing pages, branding, and digital marketing solutions.",
              link: "https://i75cpareview.com/",
              image: "https://picsum.photos/200/300",
            },
            {
              name: "Faria's Demolition",
              description: "Created a comprehensive website showcasing demolition services, including project galleries and contact forms.",
              link: "https://fariasdemolition.com/",
              image: "https://picsum.photos/200/300",
            },
            {
              name: "Pronto Junk Removal",
              description: "Built a service-oriented site with booking functionality and optimized for lead generation in junk removal.",
              link: "https://prontojunkremovalnj.com/",
              image: "https://picsum.photos/200/300",
            },
            {
              name: "Koi Solar",
              description: "Designed a clean, informative site to promote solar solutions, emphasizing brand trust and environmental impact.",
              link: "https://koisolarofficial.com/",
              image: "https://picsum.photos/200/300",
            },
            {
              name: "Certified Bag Chasers",
              description: "Created a personal brand website for a best-selling author and course creator, featuring courses, testimonials, and community-building resources.",
              link: "https://certifiedbagchasers.com/",
              image: "https://picsum.photos/200/300",
            },
            {
              name: "Koi Crest Marketing",
              description: "Built a digital marketing agency website with case studies and service offerings, highlighting client success stories.",
              link: "https://koicrest.com/",
              image: "https://picsum.photos/200/300",
            },
          ],
        },
      ],
    },
    {
      section: "pricing",
      collection: [
        {
          id: 1,
          heading: "Our Pricing Plans",
          title: "Choose a Plan",
          paragraph: "We offer flexible pricing plans for businesses of all sizes. Find the perfect plan for you.",
          pricingData: [
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
              bulletPoints: ["Unlimited Websites", "Dedicated Support", "Advanced Analytics"],
              button: { text: "Choose Plan", link: "#" },
              isFeatured: false,
            },
          ],
        },
      ],
    },
  ];
  
  export default content;
  