
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anderson Soares",
  title: "Hi, I'm Anderson",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Java / JavaScript / Angular / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1jhXu2wd3ucdODLVjBEmiO8FJxWoAwXxg/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/andersonfls",
  linkedin: "https://www.linkedin.com/in/andersonfr/?locale=en_US",
  gmail: "anderson.frsoares0@catolica.edu.br",
  gitlab: "https://github.com/andersonfls",
  facebook: "",
  medium: "https://medium.com/@polga99",
  stackoverflow: "https://pt.stackoverflow.com/users/206257/anderson-soares"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ 7+ years building highly interactive and scalable web and mobile applications"),
    emoji("⚡ 3+ years working only with back-end micro-services "),
    emoji("⚡ Integration of third party services such as Rest API's / Firebase/ other System's")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "Javascript / Angular",  //Insert stack or technology you have experience in
      progressPercentage: "60%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "React Native",
      progressPercentage: "50%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Unbox",
      companylogo: require("./assets/images/unbox_color-logo.png"),
      date: "Jul 2020 – Present",
      desc: "Working with Mobile development for the 2 biggest bank in Brazil, with 18 million active users and 8 millions daily access.",
      href: "https://unboxculture.com/",
      descBullets: [
        "Buiding new components",
        "Manage the integration between the modules and services"
      ]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Unicef",
      companylogo: require("./assets/images/unicef-logo-3.jpg"),
      date: "Jul 2019 – Jun 2020",
      desc: "Partnership between Unicef, World Bank Group and the Angola Government",
      href: "https://www.minea.gv.ao/",
      descBullets: [
        "With this system the government can access real time data manage the problems with water supply and predict the regions that will be running out of potable water.",
        "Functionalities: Register (Employees, provinces, report problems...), Canvas Reports, Leaflet js, Interative maps and many others."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "4Quality",
      companylogo: require("./assets/images/4quality-logo.png"),
      date: "Jul 2017 – May 2019",
      desc: "Software developer working for an financial supplementary Pension Institution by an outsourcing company",
      href: "http://www.4quality.com.br/",
      descBullets: [
        "Construction of a module for communication and sending data to the Federal Revenue Service, for a private pension institute with more than 100 thousand members.",
        "Integrate the company's internal systems (data processing), working with Spring bath for process management"
      ]
    },
    {
      role: "Java Developer",
      company: "Objetiva I.T",
      companylogo: require("./assets/images/obj-it-logo.png"),
      date: "Oct 2015 – May 2017",
      desc: "Software developer working with Health and Financial Software's maintained by the company",
      href: "https://objetivait.com.br/",
      descBullets: [
        "Manage all health systems of the public institution, including users, queries and integrations with other systems of the company",
        "Build new features for the Health management and Credit Platform"
      ]
    },
    {
      role: "Developer Intern",
      company: "Brazil Government",
      companylogo: require("./assets/images/mte-logo.png"),
      href: "https://mpt.mp.br/",
      date: "Oct 2013 – Jun 2014",
      desc: "Software developer Intern",
      descBullets: [
        "Responsible for developing front-end pages in JSF, Html, Css.",
        "Responsible for monitoring the management software process"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "andersonfls", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO IMPROVE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/banco-do-brasil-logo.jpg"),
      link: "https://www.bb.com.br/"
    },
    {
      image: require("./assets/images/postalis-logo2.png"),
      link: "http://www.postalis.org.br/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Master the Mainframe Finalist",
      subtitle: "Finalist in a coding challenge in Cobol and Mainframe",
      image: require("./assets/images/master-main.jpeg"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Guide Blog", url: "https://www.ibm.com/br-pt/it-infrastructure/z/education/master-the-mainframe-contest" }
      ]
    },
    {
      title: "DevOps Essentials Professional",
      subtitle: "DEPC certificate",
      image: require("./assets/images/devops.png"),
      footerLink: [{ name: "View Certificate", url: "" }]
    },

    {
      title: "Cobol Developer",
      subtitle: "Completed Certifcation from Cobol Development",
      image: require("./assets/images/ucb_logo.png"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55-61984412490",
  email_address: "anderson.frsoares@catolica.edu.br"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
