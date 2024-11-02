const Content = [
    {
        siteSettings: {
            title: "Griffin's Web Services",
            tagline: "Websites and All Things Digital",
            description: "Your premier one-stop shop for website design and development, expert social media and digital marketing, and creative graphic design services.",
            companyName: "Griffin's Web Services LLC",
            copyrightText: "",
            logo: [
                {
                    type: "3dLogo",
                    light: "https://picsum.photos/200/300",
                    dark: "https://picsum.photos/200/300"
                },
                {
                    type: "2dLogo",
                    light: "https://picsum.photos/200/300",
                    dark: "https://picsum.photos/200/300"
                }
            ]
        },
        collections: [
            {
                collection: "About",
                hasSlug: true,
                slug: "about",
                Title: "About Us",
                Heading: "Who We Are",
                excerpt: "Discover Griffin's Web Services: Your Jersey Shore-based Digital Powerhouse for Website Creation, Social Media Management, Digital Marketing, and Graphic Design.",
                description: "Griffin’s Web Services is a comprehensive digital agency rooted in the vibrant community of the Jersey Shore. We are committed to fostering the online growth of your business, meticulously tailoring our strategies to align with your specific needs and aspirations."
            },
            {
                collection: "Contact",
                hasSlug: true,
                slug: "contact",
                Title: "Contact Us",
                Heading: "Get in Touch",
                description: "Discover answers to common questions about Griffin's Web Services.",
                itemsHaveSlug: false,
                items: [
                    {
                        icon: "faPhone",
                        title: "Phone",
                        description: "(732) 939-1309",
                        href: "tel:7329391309",
                    },
                    {
                        icon: "faEnvelope",
                        title: "Email",
                        description: "griffin@griffinswebservices.com",
                        href: "mailto:griffin@griffinswebservices.com",
                    },
                ]
            },
            {
                collection: "Services",
                hasSlug: true,
                slug: "services",
                Title: "Our Services",
                Heading: "What We Offer",
                description: "Explore our wide range of services.",
                itemsHaveSlug: true,
                items: [
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
                ]
            },
            {
                collection: "FAQ",
                hasSlug: true,
                slug: "faq",
                Title: "Frequently Asked Questions",
                Heading: "FAQ",
                description: "Discover answers to common questions about Griffin's Web Services.",
                itemsHaveSlug: false,
                items: [
                    {
                        question: "Is the domain name included with the website?",
                        answer: "Setting up your domain is included and part of the process, as well as the SSL Certificate with our hosting provider. However, buying the domain name is not included with the price of the website. Usually, it costs around $8-$12 a year, and we assist you in purchasing it.",
                    },
                    {
                        question: "Can you make my website mobile-friendly?",
                        answer: "Absolutely. With the growing number of mobile users, it’s crucial to have a website that looks and works great on all devices. All our websites are designed to be responsive, adapting to the screen size of the device they’re being viewed on.",
                    },
                    {
                        question: "What's your cancellation policy for the site management plan?",
                        answer: "If for any reason you wish to cancel your monthly plan, just let us know. Our goal is to keep our clients happy and satisfied.",
                    },
                    {
                        question: "How does Griffin's Web Services handle security, and what ongoing support is provided?",
                        answer: "We prioritize security and partner with top-tier hosting services. Extended Site Management Plan subscribers enjoy regular updates, while clients without this plan are responsible for their ongoing maintenance.",
                    },
                    {
                        question: "Privacy Policies, Terms and Conditions, etc. How does Griffin's Web Services clarify these privacy issues?",
                        answer: "We provide generative reports via plugins, though we recommend consulting a lawyer for comprehensive coverage of legal requirements.",
                    },
                    {
                        question: "Can you help me with email marketing?",
                        answer: "Yes! We can set up all the tools for an effective email marketing campaign, including list building and sign-up interfaces. We also offer campaign management services.",
                    },
                    {
                        question: "I run a restaurant and need online reservations and ordering. Can you help?",
                        answer: "Yes, we specialize in websites for restaurants and local businesses, integrating reservations and online ordering for a complete customer experience.",
                    },
                    {
                        question: "Can you help me with social media?",
                        answer: "Yes, we can integrate social media tools and help develop strategies to effectively engage with your audience, as well as provide content creation and campaign management services.",
                    },
                    {
                        question: "What types of businesses have you worked with in the past?",
                        answer: "We have worked with a wide range of industries, including restaurants, service businesses, e-commerce stores, and online courses.",
                    },
                    {
                        question: "How does your quote process work?",
                        answer: "You can book a quote directly on our website. We’ll arrange a consultation, discuss your requirements, and provide a detailed project quote.",
                    },
                ]
            },
            {
                collection: "Projects",
                hasSlug: true,
                slug: "projects",
                Title: "Our Work",
                Heading: "Our Projects",
                description: "Discover our recent projects and see how we've helped businesses like yours succeed.",
                itemsHaveSlug: true,
                items: [
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
                ]
            },
            {
                collection: "Testimonials",
                hasSlug: true,
                slug: "testimonials",
                Title: "Our Testimonials",
                Heading: "Hear From Our Clients",
                description: `See what our clients say about working with Griffin's Web Services.`,
                itemsHaveSlug: true,
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
                ]
            },
            {
                collection: "WhyChooseUs",
                hasSlug: false,
                Title: "Why Choose Us",
                Heading: "We are transparent, committed, and skilled.",
                description: "Griffin's Web Services is transparent, committed, and skilled.",
                itemsHaveSlug: false,
                items: [
                    {
                        title: "Clear Communication, Limited 'Tech Talk'",
                        description: "We focus on clear, straightforward communication, explaining everything in simple terms.",
                    },
                    {
                        title: "Customized Solutions That Fit Your Needs",
                        description: "Your business is unique; we create solutions that align with your goals and work seamlessly with your setup.",
                    },
                    {
                        title: "Transparency and Honesty",
                        description: "No hidden fees or surprises. We believe in full transparency, so you always know what’s happening.",
                    },
                    {
                        title: "Results That Drive Your Business Forward",
                        description: "Our goal is to help your business succeed with solutions that work for your customers and drive growth.",
                    },
                ]
            },
        ]
    }
];

export default Content;