import flextronLogo from "../assets/images/TrustedClient/3.png";
import fineSkinLogo from "../assets/images/TrustedClient/Fine-skin-Logo1.png";
import kcLogo from "../assets/images/TrustedClient/kc-logo-linear.png";
import lnksiLogo from "../assets/images/TrustedClient/logo.png";
import piLogo from "../assets/images/TrustedClient/pi.png";
import brotekLogo from "../assets/images/TrustedClient/Logo-1-1-300x75.png";
import GCCLogo from "../assets/images/TrustedClient/logo-1.png";
import JSTSLogo from "../assets/images/TrustedClient/Logo-JST-01.jpg";
import UCLogo from "../assets/images/TrustedClient/logo4_New.jpg";
import PatilKakiLogo from "../assets/images/TrustedClient/Patil-kaki.png";

export const navigationItems = [
  { label: "Work", href: "/#portfolio" },
  {
    label: "Solutions",
    href: "/solutions",
    panel: {
      variant: "compact",
      sections: [
        {
          heading: "Solutions",
          groups: [
            {
              links: [
                { label: "MVP Development", href: "/solutions/mvp-development" },
                { label: "SaaS Product Development", href: "/solutions/saas-product-development" },
                { label: "Digital Transformation", href: "/solutions/digital-transformation" },
                { label: "AI & Automation Solutions", href: "/solutions/ai-automation-solutions" },
                { label: "Data & Analytics Solutions", href: "/solutions/data-analytics-solutions" },
                { label: "Cloud & DevOps Transformation", href: "/solutions/cloud-devops-transformation" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    label: "Services",
    href: "/#services",
    panel: {
      variant: "compact",
      sections: [
        {
          heading: "Services",
          groups: [
            {
              links: [
                { label: "AI & Automation", href: "/#services" },
                { label: "Software Development", href: "/#services" },
                { label: "Web Development", href: "/#services" },
                { label: "Mobile App Development", href: "/#services" },
                { label: "Cloud & DevOps", href: "/#services" },
                { label: "API & System Integration", href: "/#services" },
                { label: "UI/UX & Product Design", href: "/#services" },
                { label: "QA & Testing", href: "/#services" },
                { label: "Data Engineering", href: "/#services" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/#industries",
    panel: {
      variant: "compact",
      sections: [
        {
          heading: "Industries",
          groups: [
            {
              links: [
                { label: "Healthcare", href: "/#industries" },
                { label: "FinTech & Banking", href: "/#industries" },
                { label: "E-Commerce & Retail", href: "/#industries" },
                { label: "Education & EdTech", href: "/#industries" },
                { label: "Logistics & Supply Chain", href: "/#industries" },
                { label: "Real Estate & PropTech", href: "/#industries" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    label: "Company",
    href: "/#company",
    panel: {
      variant: "compact",
      sections: [
        {
          heading: "Company",
          groups: [
            {
              links: [
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/about#who-we-are" },
                { label: "Our Process", href: "/process" },
                { label: "Career", href: "/contact" },
              ],
            },
          ],
        },
      ],
    },
  },
];

export const heroContent = {
  eyebrow: "AI-Driven Software Engineering Partner",
  title: "Building AI-Powered Digital Products That Scale Businesses",
  description:
    "Building intelligent software, cloud platforms, and digital products that drive measurable growth.",
  highlights: "AI / ML | React | Node.js | API Integrations | AWS • Azure • GCP",
  primaryCta: "Talk to an Engineer",
  secondaryCta: "View Results",
};

export const trustContent = {
  title: "Our amazing clients",
  subtitle: "Trusted by startups and growing teams worldwide",
  logos: [
    { src: flextronLogo, alt: "Flextron" },
    { src: fineSkinLogo, alt: "Fine Skin Dermatology" },
    { src: kcLogo, alt: "KC" },
    { src: lnksiLogo, alt: "Lnksi" },
    { src: piLogo, alt: "PI" },
    { src: brotekLogo, alt: "Brotek" },
    { src: GCCLogo, alt: "GCC" },
    { src: JSTSLogo, alt: "JSTS" },
    { src: UCLogo, alt: "UC" },
    { src: PatilKakiLogo, alt: "Patil Kaki" },
  ],
};

export const architectureContent = {
  title: "Built for How Modern Digital Businesses Scale",
  description:
    "Modern businesses need more than standalone software, they require scalable applications, cloud-ready infrastructure, intelligent automation, and connected systems that evolve with business growth. At Virat Software Solutions, we combine software engineering, AI, cloud technologies, and seamless integrations to build high-performance digital solutions designed for flexibility, efficiency, and long-term success. Whether launching new products or scaling existing operations, we create technology ecosystems where applications, data, and infrastructure work together seamlessly.",
};

export const solutionsContent = {
  title: "Business Challenges. Engineered Solutions.",
  description:
    "From product launches to enterprise modernization, our solutions help businesses innovate faster, automate operations, and scale with confidence.",
  cards: [
    {
      title: "MVP Development",
      description:
        "Launch faster with a scalable Minimum Viable Product designed to validate ideas, attract early users, and create a strong foundation for future growth.",
      button: "Validate Your Idea",
    },
    {
      title: "SaaS Product Development",
      description:
        "Build secure, subscription-ready SaaS platforms engineered for performance, scalability, and seamless user experiences.",
      button: "Build Your SaaS Platform",
    },
    {
      title: "Digital Transformation",
      description:
        "Modernize legacy workflows, systems, and operations with technology solutions built to improve efficiency, agility, and business performance.",
      button: "Accelerate Transformation",
    },
    {
      title: "AI & Automation Solutions",
      description:
        "Leverage AI, machine learning, and intelligent automation to streamline operations, improve decision-making, and unlock new growth opportunities.",
      button: "Explore AI Solutions",
    },
    {
      title: "Data & Analytics Solutions",
      description:
        "Turn fragmented data into actionable insights through scalable analytics, connected systems, and data-driven decision frameworks.",
      button: "Unlock Data Intelligence",
    },
    {
      title: "Cloud & DevOps Transformation",
      description:
        "Build resilient cloud infrastructure, automate deployments, and optimize delivery pipelines for scalable, secure, and high-performing systems.",
      button: "Modernize Your Infrastructure",
    },
  ],
};

export const portfolioContent = {
  title: "Solutions We've Built",
  description:
    "From SaaS platforms and mobile applications to AI solutions and cloud-powered systems, discover how we help businesses build scalable technology, modernize operations, and drive measurable growth.",
  cards: [
    {
      name: "Patil Kaki",
      logo: PatilKakiLogo,
      logoAlt: "Patil Kaki logo",
      link: "https://patilkaki.com/",
      title: "Digital Commerce Experience for D2C Food Brand",
      description:
        "Created a scalable e-commerce platform for an authentic snack brand focused on immersive storytelling, frictionless purchasing, promotional campaigns, and optimized customer journeys to support direct-to-consumer growth.",
      tech: ["Shopify / CMS", "E-commerce", "JavaScript", "Payment Gateway Integration", "Conversion Optimization"],
    },
    {
      name: "Kloud Connect",
      logo: lnksiLogo,
      logoAlt: "Kloud Connect logo",
      link: "https://www.kloudconnect.com.au/",
      title: "SaaS Product Website for Practice Management Platform",
      description:
        "Developed a conversion-focused SaaS website for an accounting practice management solution, highlighting workflow automation, billing, reporting, and operational efficiency while supporting product visibility and qualified lead acquisition.",
      tech: ["WordPress / CMS", "Frontend Development", "Analytics Integration", "Lead Forms", "SEO Optimization"],
    },
    {
      name: "FineSkin",
      logo: fineSkinLogo,
      logoAlt: "FineSkin Clinic logo",
      link: "https://fineskin.com/",
      title: "Digital Booking & Skincare Commerce Platform",
      description:
        "Launched a premium appointment scheduler and online store for a cosmetic surgery clinic, boosting bookings by 35% through calendar syncing and unified checkout.",
      tech: ["E-commerce", "Frontend Development", "Analytics Integration", "SEO Optimization"],
    },
    {
      name: "Flextron",
      logo: flextronLogo,
      logoAlt: "Flextron Technologies logo",
      link: "https://www.flextron.com/",
      title: "Custom ERP & Automation for Manufacturing Plant",
      description:
        "Designed and engineered an automated ERP solution managing inventory tracking, real-time machine telemetry, and predictive maintenance schedules for a multi-facility manufacturer.",
      tech: ["JavaScript", "Frontend Development", "Analytics Integration", "Lead Forms"],
    },
  ],
};

export const servicesContent = {
  title: "Services Built for Modern Digital Growth",
  description:
    "From product development and cloud engineering to AI and system integrations, we deliver technology services designed to help businesses innovate, scale, and operate efficiently.",
  cards: [
    {
      title: "AI & Automation",
      description:
        "Build intelligent systems and automated workflows using AI, machine learning, and modern technologies to improve efficiency, decision-making, and business operations.",
      button: "Explore AI Solutions",
    },
    {
      title: "Software Development",
      description:
        "Design and develop scalable custom software solutions tailored to business processes, operational requirements, and long-term growth objectives.",
      button: "Build Custom Software",
    },
    {
      title: "Web Development",
      description:
        "Create high-performance, responsive web applications and platforms optimized for usability, scalability, and seamless digital experiences.",
      button: "Develop Your Web Solution",
    },
    {
      title: "Mobile App Development",
      description:
        "Build secure, intuitive, and scalable mobile applications for iOS, Android, and cross-platform environments designed for real-world users.",
      button: "Launch a Mobile App",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Modernize infrastructure with cloud architecture, automated deployments, scalable environments, and DevOps practices built for reliability and speed.",
      button: "Talk to Cloud Engineers",
    },
    {
      title: "API & System Integration",
      description:
        "Connect applications, platforms, and business systems through reliable APIs and integrations that improve data flow, automation, and operational efficiency.",
      button: "Integrate Your Systems",
    },
    {
      title: "UI/UX & Product Design",
      description:
        "Design user-centric digital experiences that combine usability, visual clarity, and product thinking to improve engagement and customer satisfaction.",
      button: "Design Better Experiences",
    },
    {
      title: "QA & Testing",
      description:
        "Ensure software quality through structured testing, performance validation, and quality assurance processes built for stable, reliable releases.",
      button: "Strengthen Quality",
    },
    {
      title: "Data Engineering",
      description:
        "Build scalable data pipelines, connected data systems, and analytics foundations that transform business data into actionable intelligence.",
      button: "Unlock Data Value",
    },
  ],
};

export const ctaContent = {
  title: "We've Engineered Digital Products Loved by Millions Across the Globe",
}

export const processContent = {
  title: "Our Development Process",
  description:
    "A structured delivery approach built to transform ideas into scalable software, faster launches, and measurable business outcomes.",
  cta: "View Our Process",
  steps: [
    {
      title: "Discovery & Strategy",
      description:
        "We collaborate with stakeholders to understand business goals, technical requirements, user expectations, and growth objectives before defining a clear execution roadmap.",
    },
    {
      title: "Solution Design & Architecture",
      description:
        "Our team designs scalable system architecture, application workflows, cloud infrastructure, integrations, and technical foundations built for long-term performance.",
    },
    {
      title: "Agile Development & Engineering",
      description:
        "We build secure, scalable software using modern technologies, iterative delivery, and engineering best practices across web, mobile, SaaS, AI, and cloud solutions.",
    },
    {
      title: "Quality Assurance & Validation",
      description:
        "Every solution undergoes structured testing for functionality, usability, security, performance, and real-world reliability before deployment.",
    },
    {
      title: "Deployment, Optimization & Growth",
      description:
        "We launch, monitor, optimize, and continuously evolve digital solutions to support business growth, operational efficiency, and changing market needs.",
    },
  ],
};

export const industriesContent = {
  title: "Industries We Serve",
  description:
    "Purpose-built technology solutions for evolving business models, operational complexity, and digital growth.",
  cta: "Get a Solution Built for Your Industry",
  supportingText: "Discuss Your Business Requirements",
  items: [
    "Healthcare",
    "FinTech & Banking",
    "E-Commerce & Retail",
    "Education & EdTech",
    "Logistics & Supply Chain",
    "Real Estate & PropTech",
  ],
};

export const techStackContent = {
  title: "Technologies and Platforms We Use",
  description:
    "With AI-powered developers skilled in 150+ advanced technologies and platforms, we build scalable and customized solutions aligned to your business goals.",
  categories: [
    {
      title: "AI/ML",
      items: [
        { name: "OpenAI", icon: "SiOpenai" },
        { name: "Anthropic", icon: "SiAnthropic" },
        { name: "Hugging Face", icon: "SiHuggingface" },
        { name: "TensorFlow", icon: "SiTensorflow" },
        { name: "PyTorch", icon: "SiPytorch" },
        { name: "Scikit-learn", icon: "SiScikitlearn" },
        { name: "LangChain", icon: "SiLangchain" },
        { name: "Keras", icon: "SiKeras" },
        { name: "Jupyter", icon: "SiJupyter" },
        { name: "MLflow", icon: "SiMlflow" },
        { name: "Pandas", icon: "SiPandas" },
        { name: "NumPy", icon: "SiNumpy" },
        { name: "Streamlit", icon: "SiStreamlit" },
        { name: "Anaconda", icon: "SiAnaconda" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "SiReact" },
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "HTML5", icon: "SiHtml5" },
        { name: "Sass", icon: "SiSass" },
        { name: "Tailwind CSS", icon: "SiTailwindcss" },
        { name: "Redux", icon: "SiRedux" },
        { name: "Vite", icon: "SiVite" },
        { name: "Framer", icon: "SiFramer" },
        { name: "Webpack", icon: "SiWebpack" },
        { name: "Babel", icon: "SiBabel" },
        { name: "Angular", icon: "SiAngular" },
        { name: "Vue.js", icon: "SiVuedotjs" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express", icon: "SiExpress" },
        { name: "NestJS", icon: "SiNestjs" },
        { name: "Fastify", icon: "SiFastify" },
        { name: "Django", icon: "SiDjango" },
        { name: "FastAPI", icon: "SiFastapi" },
        { name: "Laravel", icon: "SiLaravel" },
        { name: "Spring Boot", icon: "SiSpringboot" },
        { name: "ASP.NET Core", icon: "SiDotnet" },
        { name: "GraphQL", icon: "SiGraphql" },
        { name: "Apollo GraphQL", icon: "SiApollographql" },
        { name: "Postman", icon: "SiPostman" },
        { name: "Ruby on Rails", icon: "SiRubyonrails" },
        { name: "PHP", icon: "SiPhp" },
        { name: "Go", icon: "SiGo" },
      ],
    },
    {
      title: "Mobile",
      items: [
        { name: "Flutter", icon: "SiFlutter" },
        { name: "Expo", icon: "SiExpo" },
        { name: "Kotlin", icon: "SiKotlin" },
        { name: "Swift", icon: "SiSwift" },
        { name: "iOS", icon: "SiIos" },
        { name: "Android", icon: "SiAndroid" },
        { name: "Ionic", icon: "SiIonic" },
        { name: "Xcode", icon: "SiXcode" },
        { name: "Android Studio", icon: "SiAndroidstudio" },
        { name: "React Native", icon: "RiSmartphoneLine" },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: "SiMongodb" },
        { name: "PostgreSQL", icon: "SiPostgresql" },
        { name: "MySQL", icon: "SiMysql" },
        { name: "Redis", icon: "SiRedis" },
        { name: "Firebase", icon: "SiFirebase" },
        { name: "Supabase", icon: "SiSupabase" },
        { name: "SQLite", icon: "SiSqlite" },
        { name: "Prisma", icon: "SiPrisma" },
        { name: "Neo4j", icon: "SiNeo4J" },
        { name: "Elasticsearch", icon: "SiElasticsearch" },
        { name: "Airtable", icon: "SiAirtable" },
      ],
    },
    {
      title: "Frameworks",
      items: [
        { name: "Next.js", icon: "SiNextdotjs" },
        { name: "React", icon: "SiReact" },
        { name: "NestJS", icon: "SiNestjs" },
        { name: "FastAPI", icon: "SiFastapi" },
        { name: "Django", icon: "SiDjango" },
        { name: "Laravel", icon: "SiLaravel" },
        { name: "Spring Boot", icon: "SiSpringboot" },
        { name: "ASP.NET Core", icon: "SiDotnet" },
        { name: "Expo", icon: "SiExpo" },
        { name: "Prisma", icon: "SiPrisma" },
        { name: "GraphQL", icon: "SiGraphql" },
        { name: "Apollo", icon: "SiApollographql" },
      ],
    },
    {
      title: "Cloud",
      items: [
        { name: "Vercel", icon: "SiVercel" },
        { name: "Netlify", icon: "SiNetlify" },
        { name: "Render", icon: "SiRender" },
        { name: "Railway", icon: "SiRailway" },
        { name: "Heroku", icon: "SiHeroku" },
        { name: "DigitalOcean", icon: "SiDigitalocean" },
        { name: "Cloudflare", icon: "SiCloudflare" },
        { name: "Cloudflare Workers", icon: "SiCloudflareworkers" },
        { name: "Google Cloud", icon: "SiGooglecloud" },
        { name: "Google Cloud Storage", icon: "SiGooglecloudstorage" },
        { name: "Google Cloud Spanner", icon: "SiGooglecloudspanner" },
        { name: "Google Cloud Composer", icon: "SiGooglecloudcomposer" },
      ],
    },
    {
      title: "DevOps",
      items: [
        { name: "Docker", icon: "SiDocker" },
        { name: "Kubernetes", icon: "SiKubernetes" },
        { name: "GitHub Actions", icon: "SiGithubactions" },
        { name: "Terraform", icon: "SiTerraform" },
        { name: "Jenkins", icon: "SiJenkins" },
        { name: "Ansible", icon: "SiAnsible" },
        { name: "CircleCI", icon: "SiCircleci" },
        { name: "Git", icon: "SiGit" },
        { name: "GitHub", icon: "SiGithub" },
        { name: "GitLab", icon: "SiGitlab" },
        { name: "Bitbucket", icon: "SiBitbucket" },
        { name: "Nginx", icon: "SiNginx" },
        { name: "Prometheus", icon: "SiPrometheus" },
        { name: "Grafana", icon: "SiGrafana" },
        { name: "Sentry", icon: "SiSentry" },
        { name: "Datadog", icon: "SiDatadog" },
        { name: "Argo", icon: "SiArgo" },
      ],
    },
    {
      title: "Ecommerce",
      items: [
        { name: "Shopify", icon: "SiShopify" },
        { name: "WooCommerce", icon: "SiWoocommerce" },
        { name: "Woo", icon: "SiWoo" },
        { name: "BigCommerce", icon: "SiBigcommerce" },
        { name: "PrestaShop", icon: "SiPrestashop" },
        { name: "Salesforce Commerce", icon: "SiSalesforce" },
        { name: "Webflow Commerce", icon: "SiWebflow" },
        { name: "Wix Stores", icon: "SiWix" },
      ],
    },
    {
      title: "CMS",
      items: [
        { name: "WordPress", icon: "SiWordpress" },
        { name: "Strapi", icon: "SiStrapi" },
        { name: "Sanity", icon: "SiSanity" },
        { name: "Contentful", icon: "SiContentful" },
        { name: "Webflow", icon: "SiWebflow" },
        { name: "Wix", icon: "SiWix" },
        { name: "Notion", icon: "SiNotion" },
        { name: "HubSpot", icon: "SiHubspot" },
      ],
    },
    {
      title: "Platforms",
      items: [
        { name: "Google Cloud", icon: "SiGooglecloud" },
        { name: "Firebase", icon: "SiFirebase" },
        { name: "Supabase", icon: "SiSupabase" },
        { name: "Cloudflare", icon: "SiCloudflare" },
        { name: "GitHub Pages", icon: "SiGithubpages" },
        { name: "Gitpod", icon: "SiGitpod" },
        { name: "Vercel", icon: "SiVercel" },
        { name: "Netlify", icon: "SiNetlify" },
        { name: "Railway", icon: "SiRailway" },
        { name: "Render", icon: "SiRender" },
        { name: "Heroku", icon: "SiHeroku" },
        { name: "DigitalOcean", icon: "SiDigitalocean" },
      ],
    },
  ],
};

export const testimonialsContent = {
  title: "What Our Clients Say",
  quotes: [
    {
      quote: "We came in with a half-defined product idea and a tight timeline. The Virat team helped structure the requirements, challenged a few assumptions, and got us to a usable MVP faster than expected.",
      name: "Michael Carter",
      designation: "CEO, Atlas Mobility",
    },
    {
      quote: "Good communication, solid engineering, and no unnecessary complexity. They integrated well with our internal team and handled both frontend and backend work without friction.",
      name: "Sarah Johnson",
      designation: "Product Lead, FinFlow Labs",
    },
    {
      quote: "We hired Virat to improve our existing platform. The codebase was messy, timelines were slipping, and performance issues were affecting users. The team approached it methodically and delivered noticeable improvements.",
      name: "Daniel Brooks",
      designation: "CTO, RetailBridge US",
    },
    {
      quote: "What I appreciated most was that they focused on solving the business problem, not just completing development tasks. The process was straightforward, transparent, and easy to work with.",
      name: "Emily Rodriguez",
      designation: "Operations Director, LogiCore Systems",
    },
  ],
};

export const blogContent = {
  title: "Here we are able to show our blog's section.",
};

export const faqContent = {
  title: "Frequently Asked Questions About Software Development Services",
  items: [
    {
      question: "1. How long does it take to develop a custom software solution?",
      answer:
        "Project timelines depend on scope, complexity, integrations, and business requirements. An MVP may take a few weeks, while enterprise software, SaaS platforms, or AI-powered systems can require several months of iterative development.",
    },
    {
      question: "2. What types of software solutions does Virat Software Solutions build?",
      answer:
        "We build custom software, web applications, mobile apps, SaaS platforms, AI solutions, cloud-native systems, APIs, and integrated digital products designed for modern business operations.",
    },
    {
      question: "3. Which industries do you work with?",
      answer:
        "We support businesses across industries including SaaS, ecommerce, healthcare, finance, logistics, education, manufacturing, and technology-driven organizations.",
    },
    {
      question: "4. What technologies do you use for software development?",
      answer:
        "Our technology stack includes .NET, React, Next.js, Node.js, Flutter, Python, TensorFlow, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, and Google Cloud Platform.",
    },
    {
      question: "5. Can you help with MVP development for startups?",
      answer:
        "Yes. We help startups validate ideas, launch MVPs quickly, prioritize essential features, and create scalable foundations for future product growth.",
    },
    {
      question: "6. Do you provide cloud, DevOps, and deployment support?",
      answer:
        "Yes. We help businesses design, deploy, automate, and optimize cloud infrastructure using modern DevOps practices, CI/CD pipelines, containerization, and cloud platforms.",
    },
    {
      question: "7. Can your team work with our existing systems or internal development team?",
      answer:
        "Absolutely. We can collaborate with internal teams, extend engineering capabilities, modernize existing systems, or integrate with ongoing development workflows.",
    },
    {
      question: "8. How do you ensure software quality and reliability?",
      answer:
        "We follow structured QA processes including functional testing, usability validation, performance testing, bug tracking, and continuous quality reviews throughout development.",
    },
    {
      question: "9. Do you offer ongoing maintenance and post-launch support?",
      answer:
        "Yes. Beyond development, we provide ongoing maintenance, optimization, feature enhancements, monitoring, and technical support to help solutions evolve with business needs.",
    },
    {
      question: "10. Can you scale the development team based on project requirements?",
      answer:
        "Yes. Our engagement models allow teams to scale based on project size, delivery timelines, technical complexity, and evolving business priorities.",
    },
  ],
};

export const finalCtaContent = {
  title: "Let's Build Something That Works for Your Business",
  description:
    "If you are looking for a software development company that focuses on real results, scalable systems, and long-term support, Virat Software Solutions is ready to work with you.",
  fields: {
    name: "Your name",
    email: "Email Address",
    phone: "Phone number",
    project: "What are you building?",
    message: "Your message",
  },
  options: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "SaaS Product Development",
    "AI & Automation Solutions",
    "Cloud & DevOps",
    "API & System Integration",
    "UI/UX & Product Design",
    "QA & Testing",
    "Other",
  ],
  button: "Start the Conversation",
};

export const aboutContent = {
  title: "Technology Built for Business Growth",
  description:
    "Virat Software Solutions helps businesses design, build, and scale modern digital products through custom software development, AI solutions, cloud engineering, and intelligent automation.",
  supporting:
    "From startups validating ideas to organizations modernizing systems, we create scalable technology designed for performance, adaptability, and long-term growth.",
  highlights: "AI / ML | .NET | React | Cloud & DevOps | SaaS | API Integrations",
  traits: ["Efficient", "Adaptable", "Innovative"],
  whoWeAreTitle: "Engineering Solutions With Purpose",
  whoWeAre:
    "At Virat Software Solutions, we believe technology delivers the most value when it solves real business problems. We combine software engineering, product thinking, and modern technologies to build web applications, mobile apps, SaaS platforms, cloud solutions, and AI-driven systems that help businesses move faster and scale smarter. Our focus is simple — practical execution, scalable architecture, and long-term technology partnerships.",
  whatWeBuildTitle: "Solutions Built Around Modern Business Needs",
  whatWeBuild:
    "Businesses today require more than development alone. They need scalable applications, connected systems, cloud infrastructure, and intelligent automation that support evolving operations and growth.",
  whatWeBuildList: [
    "Custom Software Solutions",
    "SaaS Products & Digital Platforms",
    "Web & Mobile Applications",
    "AI & Automation Systems",
    "Cloud & DevOps Infrastructure",
    "API & System Integrations",
  ],
  approachTitle: "Built for Long-Term Technology Partnerships",
  approach:
    "Every project starts with understanding the business problem, technical requirements, and growth objectives before development begins. Our delivery approach combines strategy, architecture, agile engineering, testing, and continuous optimization to create software that is reliable, scalable, and ready for real-world use. Whether launching an MVP, modernizing an existing platform, or building enterprise-grade solutions, we focus on outcomes that support sustainable business growth.",
};

export const contactContent = {
  title: "Let's Talk About Your Business",
  description:
    "Whether you're building a new product, modernizing existing systems, or exploring AI, cloud, and software solutions, we're ready to understand your goals and help shape the right approach.",
  contactTitle: "Get in Touch",
  contactDescription:
    "We're here to help turn ideas into scalable digital solutions. Connect with our team through the channel that works best for you.",
  location: "India",
  formTitle:
    "Tell us what you're building, improving, or scaling. Our team will review your requirements and get back to you with the next steps.",
  fields: finalCtaContent.fields,
  options: finalCtaContent.options,
  button: finalCtaContent.button,
  faqsTitle: "Frequently Asked Questions About Working With Virat Software Solutions",
  faqs: [
    {
      question: "1. How do I get started with your software development team?",
      answer:
        "You can contact our team through the form, email, or phone. Share your project goals, technical requirements, or business challenges, and we’ll discuss the right development approach, timeline, and next steps.",
    },
    {
      question: "2. Can I discuss my software idea before having detailed requirements?",
      answer:
        "Yes. Many clients contact us during the early planning stage. We help businesses validate ideas, define requirements, explore technical options, and shape scalable solution strategies before development begins.",
    },
    {
      question: "3. Do you provide project estimates and technical consultation?",
      answer:
        "Yes. Based on your requirements, project scope, features, and technology needs, our team can provide guidance on timelines, delivery approach, and development estimates.",
    },
    {
      question: "4. What types of projects does Virat Software Solutions work on?",
      answer:
        "We build custom software solutions, web applications, mobile apps, SaaS platforms, AI systems, cloud-native applications, APIs, automation solutions, and digital transformation initiatives.",
    },
    {
      question: "5. Do you work with startups, SMBs, and enterprise businesses?",
      answer:
        "Yes. We work with startups, growing businesses, and enterprise teams looking for scalable software solutions, engineering expertise, and long-term technology support.",
    },
    {
      question: "6. Can your team support existing applications or ongoing development projects?",
      answer:
        "Absolutely. We can improve, modernize, extend, or support existing software systems, collaborate with internal teams, and help optimize active development projects.",
    },
    {
      question: "7. Which technologies do you use for software development?",
      answer:
        "Our technology stack includes .NET, React, Next.js, Node.js, Flutter, Python, TensorFlow, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Azure, and Google Cloud Platform.",
    },
    {
      question: "8. Do you offer software development services for international clients?",
      answer:
        "Yes. We collaborate with businesses across different regions and support remote communication, agile delivery, and distributed project workflows.",
    },
    {
      question: "9. How quickly can your team respond after I submit the contact form?",
      answer:
        "Most inquiries receive an initial response within one business day. We review project requirements carefully to ensure productive and relevant discussions.",
    },
    {
      question: "10. Can I contact you for AI, cloud, SaaS, or digital transformation projects?",
      answer:
        "Yes. Our team supports projects across AI & automation, cloud engineering, SaaS product development, web & mobile applications, API integrations, and digital transformation initiatives.",
    },
  ],
};

export const privacyContent = {
  title: "Privacy Policy",
  intro: "Let’s build something together. Feel free to contact us anytime.",
  paragraphs: [
    "At Virat Software Solutions, we respect your privacy and are committed to protecting your information. When you use our website or services, we may collect and use certain information to provide you with better services and improve your experience. If you do not provide certain information, we may not be able to offer some of our services effectively.",
    "This Privacy Policy explains how we collect, use, disclose, and protect your information. We recommend that you read this policy carefully to understand our practices.",
  ],
  sections: [
    {
      title: "Personal Information",
      paragraphs: [
        "We may collect personal information that you provide to us when you contact us or use our services. This may include your name, email address, phone number, and company details.",
        "We use this information to understand your requirements, communicate with you, and provide our software development services. We may also use it to improve our services and offer better solutions.",
        "We do not sell or misuse your personal information. We may disclose your information only in the following situations: with your permission, if required by law, or to protect our legal rights and interests.",
      ],
    },
    {
      title: "Non-Personal Information",
      paragraphs: [
        "We may collect non-personal information such as browser type, device information, usage data, and pages visited. This information helps us understand how users interact with our website and allows us to improve our services and overall user experience.",
        "If non-personal information is combined with personal information, we treat it as personal information.",
      ],
    },
    {
      title: "Information from Your Use of Our Services",
      paragraphs: [
        "When you use our website or services, we may collect information about how you interact with them. This may include the pages you visit, features you use, time spent on the website, and other interaction data.",
        "This information helps us improve performance, fix issues, and provide better services.",
      ],
    },
    {
      title: "Information Security",
      paragraphs: [
        "We take appropriate measures to protect your information from unauthorized access, misuse, or disclosure. We use secure systems and follow standard practices to keep your data safe.",
      ],
    },
    {
      title: "Links to Other Websites",
      paragraphs: [
        "Our website may contain links to third-party websites. These websites are not operated by us, and we are not responsible for their content or privacy practices. We recommend reviewing their privacy policies before sharing your information.",
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this page regularly to stay informed about how we protect your information.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: ["If you have any questions or concerns about this Privacy Policy or your data, you can contact us at:", "Email", "Phone"],
    },
  ],
};

export const termsContent = {
  title: "Terms & Conditions",
  intro:
    "Let’s build something together. By using our website and services, you agree to the following terms and conditions.",
  paragraphs: [
    "At Virat Software Solutions, we provide software development and related services to businesses and individuals. These Terms & Conditions explain how you can use our website and services and outline your responsibilities when working with us.",
    "By accessing our website or using our services, you agree to comply with these terms. If you do not agree, please do not use our website or services.",
  ],
  sections: [
    {
      title: "Use of Services",
      paragraphs: [
        "You agree to use our services only for lawful purposes. You must not use our website or services in any way that may cause harm to our business, services, or other users.",
        "We reserve the right to refuse service, suspend access, or terminate services if we find any misuse or violation of these terms.",
      ],
    },
    {
      title: "Project Engagement",
      paragraphs: [
        "When you engage with us for a project, you agree to provide accurate and complete information about your requirements. Project timelines, deliverables, and costs will be defined and agreed upon before the start of the project.",
        "Any changes in requirements may affect timelines and pricing.",
      ],
    },
    {
      title: "Payments & Billing",
      paragraphs: [
        "All payments must be made as per the agreed terms before or during the project. Delays in payment may result in delays in project delivery or suspension of services.",
        "We reserve the right to revise pricing based on project scope changes.",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "All content, designs, code, and deliverables created during the project will be transferred to you upon full payment, unless otherwise agreed.",
        "We reserve the right to showcase completed projects in our portfolio for marketing purposes unless restricted by agreement.",
      ],
    },
    {
      title: "Confidentiality",
      paragraphs: [
        "We respect the confidentiality of your project and business information. Any sensitive data shared with us will be handled securely and will not be disclosed without your permission, except where required by law.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "We strive to deliver high-quality services, but we are not responsible for any indirect or unforeseen damages resulting from the use of our services or website.",
      ],
    },
    {
      title: "Third-Party Services",
      paragraphs: [
        "Our services may include integrations or tools provided by third parties. We are not responsible for the performance, security, or policies of these third-party services.",
      ],
    },
    {
      title: "Termination of Services",
      paragraphs: ["We reserve the right to terminate or suspend services if:", "Terms are violated", "Payments are not made", "Misuse of services is detected"],
    },
    {
      title: "Changes to Terms",
      paragraphs: [
        "We may update these Terms & Conditions from time to time. Any changes will be posted on this page. Continued use of our services means you accept the updated terms.",
      ],
    },
    {
      title: "Contact Us",
      paragraphs: ["If you have any questions about these Terms & Conditions, you can contact us:", "Email", "Phone"],
    },
  ],
};

export const footerContent = {
  companyName: "Virat Software Solutions",
  companySummary: "Engineering custom software solutions with scalability, clarity, and long-term impact.",
  tech: [
    ".NET Development",
    "React Development",
    "Node.js Development",
    "Python Development",
    "Flutter Development",
    "React Native Development",
    "AWS Development",
    "AI Development",
    "Next.js Development",
  ],
  hireResources: [
    "Hire Full Stack Developers",
    "Hire Web Developers",
    "Hire Mobile App Developers",
    "Hire AI Developers",
    "Hire DevOps Engineers",
    "Hire Development Team",
  ],
  companyLinks: [
    { label: "About Us", href: "/about" },
    { label: "Career", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
  stayConnected: "Stay Connected",
  contacts: [
    {
      icon: "mail",
      value: "sales@viratsoftwaresolutions.com",
      href: "mailto:sales@viratsoftwaresolutions.com",
    },
    {
      icon: "phone",
      value: "+91 99983 47578",
      href: "tel:+919998347578",
    },
  ],
  social: ["Whatsapp", "Linkedin", "Github"],
  copyright: "© 2026 Virat Software Solutions. All Rights Reserved.",
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
  ],
};
