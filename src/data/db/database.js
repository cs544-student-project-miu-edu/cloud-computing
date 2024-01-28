import Mock from "../mock";

const database = {
  information: {
    name: 'Meseret Amare',
    aboutContent: "I'm Java Developer.",
    //age: 24,
    phone: '+1 641-233-9829',
    //nationality: 'Ethiopian',
    language: 'English, Amahric, Czech, German',
    email: 'meseret.amare24@gmail.com',
    address: '1000 N 4th St, Fairfield, Iowa, USA',
    freelanceStatus: 'Available',
    socialLinks: {
      //facebook: 'https://facebook.com',
      //twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/meseretamare24/',
      dribbble: '',
      github: 'https://github.com/Mesi-hub'
    },
    brandImage: '/images/meseret-brand.jpeg',
    aboutImage: '/images/meseret-brand.jpeg',
    aboutImageLg: '/images/meseret-brand.jpeg',
    cvfile: '/files/CV.pdf'
  },
  services: [
    {
      title: "Application Development",
      icon: 'brush-alt',
      details: " I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "I'm a web application develper based in Iowa. I have a passion for creating intiutive and dyanmci websites. Let's make something special."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "Java",
      value: 95
    },
    {
      title: "Spring Boot",
      value: 95
    },
    {
      title: "MS Azure Cloud",
      value: 70
    },
    {
      title: "ReactJS",
      value: 85
    },
    {
      title: "Databases",
      value: 96
    },
    {
      title: "AWS",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Dynamic pricing",
      subtitle: "Your All-in-one Dynamic Pricing Solution",
      imageUrl: "/images/portfolio1-pricff.png",
      largeImageUrl: ["/images/portfolio1-pricff-lg.png"],
      url: 'https://www.priceff.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2013 - Current",
        position: "Java Developer",
        company: "ITC Infotech",
        details: "I mainly worked on projects focusing on Java and supporting the front-end development whenever required."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2022",
        graduation: "MS in Computer Science",
        university: "Maharishi International University, USA",
        details: "A unique computer professioinals masters porgram which teaches the latest programming technologies used in the industry."
      }  
    ]
  },
  blogs: [
    {
      id: 2,
      title: 'How to Deploy a React App to Amazon S3 using Github Actions',
      featuredImage: '/images/blog1-depoy-s3-gitaction.webp',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "27",
      createMonth: 'January',
      createYear: "2024"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1 641-233-9829'],
    emailAddress: ['meseretamare24@gmail.com'],
    address: "1000 N 4th St, Fairfield, Iowa, USA"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});