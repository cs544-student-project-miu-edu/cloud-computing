import Mock from "../mock";

const database = {
  information: {
    name: 'Meseret Amare',
    aboutContent: "Java Developer.",
    //age: 24,
    phone: '+1 641-632-2014',
    //nationality: 'Ethiopian',
    language: 'English, Amahric, Czech, German',
    email: 'meseretamare24@gmail.com',
    address: 'Iowa, USA',
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
      details: " I can provide enterprise application development using Java, Spring Boot, Microservices, AWS Cloud, Ms Azure Cloud React and more."
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
      value: 90
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Databases",
      value: 95
    },
    {
      title: "AWS",
      value: 90
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Java Application Development",
      subtitle: "Your All-in-one Java Application Development Solutions",
      imageUrl: "/images/blog-image-6",
      largeImageUrl: ["/images/blog-image-6.jpg"],
      url: 'https://www.priceff.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2023 - Current",
        position: "Java Developer",
        company: "BlackRock, Inc.",
        details: "Works focus on projects mainly using Java, Spring Boot, Microservices, MS Azure Cloud, Cloud based Database Systems"
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
    // {
    //   id: 1,
    //   title: 'Reasearch https://fes.upce.cz/en/user/8570',
    //   featuredImage: '/images/blog1-depoy-s3-gitaction.webp',
    //   filesource: '../../blog/markdown-html-supported-blog.md',
    //   createDay: "27",
    //   createMonth: 'January',
    //   createYear: "2024"
    // },
    {
      id: 2,
      title: 'Deploying a Web application to AWS S3',
      featuredImage: '/images/blog1-depoy-s3-gitaction.webp',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "27",
      createMonth: 'January',
      createYear: "2024"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1(641)-632-2014'],
    emailAddress: ['meseretamare24@gmail.com'],
    address: "Iowa, USA"
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