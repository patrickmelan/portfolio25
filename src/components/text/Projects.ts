const projects = [
  {
    title: "Drexel Basketball Stat Tracker",
    description:
      "I developed a full-stack web application for the Drexel Women's Basketball team to track player statistics, ranging from team-specific defensive stats to general stats. It serves as an online solution and portal for coaches and staff instead of using pen and paper.",
    image: "/drexel.png",
    technologies: [
      {
        name: "Next.js",
        canHover: true,
        hover: [
          {
            name: "Next.js",
            icon: "/next.svg",
            desc: "The React framework created and maintained by Vercel.",
          },
        ],
      },
      {
        name: "Adobe Document Generator",
        canHover: true,
        hover: [
          {
            name: "Adobe Document Generator",
            icon: "/adobe.svg",
            desc: "The React framework created and maintained by Vercel.",
          },
        ],
      },
    ],
    github: "https://www.github.com/",
    demo: "https://www.github.com/",
    category: ["Personal"],
  },
  {
    title: "Parent Compass Website",
    description:
      "Developed a website for Parent Compass, a company that brings parents together with parental coaches to improve their family relationships",
    image: "/pclogofull.svg",
    technologies: [
      {
        name: "Next.js",
        canHover: true,
        hover: [
          {
            name: "Next.js",
            icon: "/next.svg",
            desc: "The React framework created and maintained by Vercel.",
          },
        ],
      },
    ],
    github: "",
    demo: "https://www.parentcompasscoaching.com/",
    category: ["Client Work"],
  },
  {
    title: "RepuDish (work in progress)",
    description:
      "RepuDish is a full-stack web app for restaurant owners to collect anonymous feedback from customers, all without ruining their online reputation. It is currently a work in progress and has not been released yet.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      {
        name: "Next.js",
        canHover: true,
        hover: [
          {
            name: "Next.js",
            icon: "/next.svg",
            desc: "The React framework created and maintained by Vercel.",
          },
        ],
      },
      {
        name: "Stripe",
        canHover: true,
        hover: [
          {
            name: "Stripe",
            icon: "/stripe.svg",
            desc: "Payment handling and processing for user subscriptions.",
          },
        ],
      },
      {
        name: "MongoDB",
        canHover: true,
        hover: [
          {
            name: "MongoDB",
            icon: "/mongodb.svg",
            desc: "Database for storing user data and restaurant data.",
          },
        ],
      },
      {
        name: "Auth.js",
        canHover: true,
        hover: [
          {
            name: "Auth.js",
            icon: "authjs.svg",
            desc: "Handles user authentication and connects to database through MongoDB adapter",
          },
        ],
      },
      {
        name: "Google Gemini",
        canHover: true,
        hover: [
          {
            name: "Google Gemini",
            icon: "googlegemini.svg",
            desc: "Analyzes user feedback and provides insight to restaurant owners ",
          },
        ],
      },
      {
        name: "Resend",
        canHover: true,
        hover: [
          {
            name: "Resend",
            icon: "resend.svg",
            desc: "Sends email notifications to users after an action",
          },
        ],
      },
    ],
    demo: "https://demo.com",
    category: ["Personal", "AI"],
  },
  /*{
    title: "CRUSH'd Website",
    description:
      "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: [
      {
        name: "AWS",
        canHover: true,
        hover: [
          {
            name: "Athena",
            icon: "/athena.svg",
            desc: "example",
          },
        ],
      },
    ],
    demo: "https://www.idcrushthat.com/",
    category: ["Client Work"],
  },*/
  {
    title: "Polity Data Request Form",
    description:
      "I built Polity, a premier government data consulting company, a full-stack web app using React and AWS that allows them to visually show clients their data in a beautiful dashboard before a data migration. ",
    image:
      "https://cdn.prod.website-files.com/689a291b8f338acb6e4aed69/689a291b8f338acb6e4aed7c_logo.svg",
    technologies: [
      {
        name: "AWS",
        canHover: true,
        hover: [
          {
            name: "Athena",
            icon: "/athena.svg",
            desc: "Creates and queries current and archived data tables",
          },
          {
            name: "S3",
            icon: "/s3.svg",
            desc: "Securely stores React app bundle and municipal data for visualization",
          },
          {
            name: "CloudFront",
            icon: "/cdn.svg",
            desc: "Distributes React bundle globally with low latency and high availability",
          },
          {
            name: "EC2",
            icon: "/ec2.svg",
            desc: "Runs custom API code on a managed virtual server",
          },
          {
            name: "Glue",
            icon: "/glue.svg",
            desc: "Crawls S3 buckets and updates schema for Athena queries",
          },
          {
            name: "DynamoDB",
            icon: "/dynamo.svg",
            desc: "Stores user actions and metadata in a real-time NoSQL database",
          },
          {
            name: "Route 53",
            icon: "/r53.svg",
            desc: "Routes domain traffic to CloudFront and API requests to EC2",
          },
        ],
      },
      {
        name: "Clerk",
        canHover: true,
        hover: [
          {
            name: "Clerk",
            icon: "clerk.svg",
            desc: "Provides simple authentication functionalities for app users",
          },
        ],
      },
    ],
    category: ["Client Work"],
    demo: "https://www.polityinc.com/"
  },
];

export default projects;
