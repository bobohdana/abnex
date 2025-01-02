import analysis from './assets/analysis.png';
import design from './assets/design.png';
import development from './assets/development.png';
import testing from './assets/testing.png';
import deployment from './assets/deployment.png';
import maintenance from './assets/maintenance.png';
import developers from './assets/developers.png';
import designers from './assets/designers.png';
import engineers from './assets/maintenance.png';
import dataEngineers from './assets/data-engineers.png';
import consultants from './assets/consultants.png';
import team from './assets/team.png';
import flexibility from './assets/flexibility.png';
import welcome from './assets/welcome.png';
import success from './assets/success.png';
import security from './assets/security.png';
import slide1 from './assets/tech-slide-1.png';
import slide2 from './assets/tech-slide-2.png';
import slide3 from './assets/tech-slide-3.png';
import slide4 from './assets/tech-slide-4.png';
import slide5 from './assets/tech-slide-5.png';
import slide6 from './assets/slide6.png';
import slide7 from './assets/slide7.png';
import slide8 from './assets/slide8.png';
import whiteBlock from './assets/white-block.svg';
import blockMb from './assets/block-mb.svg';
import blockMb2 from './assets/block-mb-2.svg';

import {
  palette,
  pie,
  git,
  terminal,
  gear,
  file,
  checklist,
  computer,
  referral,
  monitor,
  leader,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
} from './assets/icons';


export const BLOCKS_ONE = {
  title: 'How it works',
  blocks: [
    {
      type: 'special',
      src: whiteBlock,
      img: team,
      label: 'Need a team?',
      text: 'We support you remotely in transforming your urgent needs into effective Tech solutions.',
    },
    {
      label: 'Optimize your recruitment.',
      text: 'Outsource your recruitment and reclaim your time, to form your project team.'
    },
    {
      label: 'Your remote team.',
      text: 'Unlock the power of remote teams: equally efficient, and significantly more cost-effective.',
    }
  ],
}

export const BLOCKS_ONE_MB = {
  ...BLOCKS_ONE,
  blocks: BLOCKS_ONE.blocks.map((item, index) => {
    if (index === 0) {
      return { ...item, src: blockMb};
    }

    if (index === 2) {
      return { 
        ...item, 
        src: blockMb2, 
        type: 'special',
      }
    }

    return item;
  })
}

export const BLOCKS_TWO = {
  title: 'Our values',
  color: '#F5F5FD',
  blocks: [
    {
      type: 'special',
      src: whiteBlock,
      img: flexibility,
      label: 'Flexibility',
      text: 'Offer a flexible work environment, allowing employees to adapt their schedules and work locations according to their needs.',
    },
    {
      label: 'Trust',
      text: 'Build professional relationships based on mutual trust between employees and managers, thus fostering autonomy and individual responsibility.'
    },
    {
      label: 'Innovation',
      text: 'Encourage creativity and innovative thinking remotely, fostering a corporate culture that values new ideas and experimentation.',
    }
  ]
}

export const BLOCKS_TWO_MB = {
  ...BLOCKS_TWO,
  blocks: BLOCKS_TWO.blocks.map((item, index) => {
    if (index === 0) {
      return { ...item, src: blockMb};
    }

    if (index === 2) {
      return { 
        ...item, 
        src: blockMb2, 
        type: 'special',
      }
    }

    return item;
  })
}

export const ITEMS_ONE = [
  {
    title: 'Requirements analysis',
    icon: pie,
    picture: analysis,
  },
  {
    title: 'Design',
    icon: palette,
    picture: design,
  },
    {
    title: 'Development',
    icon: terminal,
    picture: development,
  },
    {
    title: 'Testing',
    icon: file,
    picture: testing,
  },
    {
    title: 'Deployment',
    icon: git,
    picture: deployment,
  },
  {
    title: 'Maintenance',
    icon: gear,
    picture: maintenance,
  },
]

export const ITEMS_TWO = [
  {
    title: 'Developers',
    icon: computer,
    picture: developers,
  },
  {
    title: 'UX UI Designers',
    icon: leader,
    picture: designers,
  },
  {
    title: 'QA Engineers',
    icon: checklist,
    picture: engineers,
  },
  {
    title: 'Data Engineers',
    icon: monitor,
    picture: dataEngineers,
  },
  {
    title: 'AI Consultants',
    icon: referral,
    picture: consultants,
  },
]

export const POLICY = {
  title: 'Privacy Policy',
  intro: "At ABNEX Remote, we place a high value on the privacy and protection of our clients, partners, and users' personal data. This privacy policy outlines the types of information we collect, how we use it, the measures we take to protect it, and your rights regarding your personal data.",
  isTable: true,
  data: [
    {
      id: 'information',
      label: 'Information Collection',
      text: 'We may collect and process the following types of personal data:',
      list: [
        'Identification Information: Name, email address, phone number, postal address.',
        'Login Information: Login credentials, passwords, log data.',
        'Financial Information: Payment details, banking information.',
        'Technical Information: IP address, browser type, operating system, connection times.',
        'Other Information: Any other data you choose to provide to us.',
      ]
    },
    {
      id: 'use',
      label: 'Use of Information',
      text: 'The information collected may be used for the following purposes:',
      list: [
        'To provide and manage our services.',
        'To process your transactions and manage your account.',
        'To improve our website and services.',
        'To communicate with you about updates, special offers, or information about our services.',
        'To comply with our legal and regulatory obligations.',
      ]
    },
    {
      id: 'sharing',
      label: 'Sharing of Information',
      text: 'We only share your personal information with third parties in the following situations:',
      list: [
        'With your explicit consent.',
        'To comply with a legal or regulatory obligation.',
        'With our partners and service providers to deliver our services (subject to confidentiality agreements).',
      ]
    },
    {
      id: 'security',
      label: 'Information Security',
      text: 'We implement technical and organizational security measures to protect your personal data against unauthorized access, loss, disclosure, or destruction. However, please note that no method of electronic transmission or storage is completely secure.',
    },
    {
      id: 'rights',
      label: 'Your Rights',
      text: 'In accordance with applicable data protection laws, you have the following rights:',
      list: [
        'Access: You can request access to the personal data we hold about you.',
        'Rectification: You can request the correction of any inaccurate or incomplete data.',
        'Erasure: You can request the deletion of your personal data.',
        'Objection: You can object to the processing of your personal data.',
        'Portability: You can request the transfer of your personal data to another data controller.',
      ]
    },
    {
      id: 'cookies',
      label: 'Cookies',
      text: 'We use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings.',
    },
    {
      id: 'changes',
      label: 'Changes to the Privacy Policy',
      text: 'We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page and, if necessary, you will be notified by email.',
    },
    {
      id: 'contact',
      label: 'Contact',
      text: 'For any questions or requests regarding this privacy policy or the processing of your personal data, please contact us.'
    }
  ]
}

export const TERMS = {
  title: 'General Terms and Conditions of Use',
  intro: "These General Terms and Conditions of Use (hereinafter “GTC”) govern the access and use of ABNEX Remote's website (hereinafter “the Site”), specialized in recruitment services in the field of tech. By accessing and using our Site, you agree to be bound by these Terms. If you do not accept these terms, please do not use our Site.",
  isTable: true,
  data: [
    {
      id: 'access',
      label: 'Access to the Site',
      text: 'The user undertakes to provide accurate and up-to-date information when creating his account or registering.'
    },
    {
      id: 'use',
      label: 'Use of the Site',
      text: 'You agree to use the Site only for legal purposes and in accordance with these Terms. It is prohibited to:',
      list: [
        'Use the Site in a manner that violates applicable laws and regulations.',
        'Transmit, distribute, or download viruses or other malicious code.',
        'Attempt to compromise the security of the Site or gain unauthorized access to associated systems or networks.',
        'Publish misleading or false job offers.'
      ]
    },
    {
      id: 'content',
      label: 'Content of the Site',
      text: 'All content on the Site, including text, images, graphics, logos and software, is the property of ABNEX Remote or its licensors. Any reproduction, distribution or modification of these contents without prior authorization is strictly prohibited.'
    },
    {
      id: 'protection',
      label: 'Protection of Personal Data',
      text: 'We are committed to protecting your personal data in accordance with our Privacy Policy, available [link to Privacy Policy]. By using our Site, you consent to the collection and use of your personal data as described in this policy.'
    },
    {
      id: 'publication',
      label: 'Publication and Management of Job Offers',
      text: "Businesses can post job offers and consult applications via our platform. It is the company's responsibility to ensure that the information provided is accurate and up to date. We reserve the right to remove any job offers that do not comply with our guidelines."
    },
    {
      id: 'limitation',
      label: 'Limitation of Liability',
      text: 'ABNEX Remote cannot be held liable for direct or indirect damages resulting from the use or inability to use the Site, including data loss or service interruptions. We do not warrant that the Site will be error free or uninterrupted.'
    },
    {
      id: 'amendments',
      label: 'Amendments to the Terms and Conditions',
      text: 'We reserve the right to modify these Terms and Conditions at any time. The amendments will take effect as soon as they are published on the Site. It is your responsibility to regularly consult the Terms and Conditions to be informed of any changes.'
    },
    {
      id: 'law',
      label: 'Applicable Law and Jurisdiction',
      text: 'These GTCs are governed by French law. Any dispute relating to the use of the Site will be subject to the exclusive jurisdiction of the French courts.'
    },
    {
      id: 'contact',
      label: 'Contact',
      text: 'For any questions or complaints regarding these Terms, please contact us.'
    }
  ]
}

export const LEGACY = {
  title: 'Legal Notice',
  data: [
    {
      text: 'This site is operated by ABNEX Remote, a company registered with the Paris Trade and Companies Register under number 479425050.'
    },
    {
      text: 'Publication Director: Thierry Hachem'
    },
    {
      text: 'For any questions or complaints regarding the site, please contact us using the contact form.'
    },
    {
      label: 'Host',
      text: 'The site is hosted by Hostinger.'
    },
    {
      label: 'Intellectual Property',
      text: 'The content of this site, including texts, images, graphics, logos, and videos, is protected by intellectual property laws and belongs to [Company Name] or its licensors. Any reproduction, modification, or distribution of the content without prior written permission is strictly prohibited.'
    },
    {
      label: 'Use of Personal Data',
      text: 'We collect and process your personal data in accordance with our privacy policy, available at [link to the privacy policy].'
    },
    {
      label: 'Cookies',
      text: 'This site uses cookies to enhance your browsing experience. By continuing to use this site, you consent to the use of cookies in accordance with our cookie policy.'
    },
    {
      label: 'Applicable Law and Jurisdiction',
      text: 'These legal notices are governed by French law. Any dispute related to the use of the site will be subject to the exclusive jurisdiction of the French courts.'
    }
  ]
}

export const ABOUT_INFO = [
  {
    title: 'Welcome to Abnex Remote',
    desc: 'Welcome to Abnex Remote, your specialized recruitment agency for remote tech talent. We are dedicated to connecting innovative companies with top-tier professionals who excel in remote work. Our mission is to bridge the gap between businesses and exceptional talent needed to thrive in the fast-paced and ever-evolving tech industry.',
    pic: welcome,
    text: 'At Abnex Remote, we understand the unique challenges and opportunities presented by remote work. Our expertise lies in identifying and selecting highly qualified developers, cybersecurity experts, UX/UI designers, data analysts, and more, ensuring they are perfectly suited to your team and projects. We use the latest recruitment tools and techniques to find the best candidates from around the world, giving you access to a diverse talent pool capable of driving your business forward.'
  },
  {
    title: 'A real success',
    desc: 'Our experience in remote recruitment has proven to be a true success. This system not only allows us to find exceptional talent but also helps reduce operational costs for our clients. By working with remote professionals, you benefit from increased flexibility and efficiency while optimizing your budget.',
    pic: success,
    text: 'We take pride in our personalized approach. We take the time to understand your specific needs and company culture, enabling us to find professionals who not only have the required skills but also align with your vision and values. Whether you are looking to expand your team for a new project or need specialized experts for ongoing support, we are here to help.',
    reverse: true,
  },
  {
    title: 'Confidentiality and security',
    desc: 'Confidentiality and security are at the core of our concerns. We guarantee that all information shared with us is handled with the utmost care and in accordance with the highest security standards. You can trust our ability to protect your sensitive data throughout the recruitment process.',
    pic: security,
    text: 'With our extensive network and global partners, we have the capacity to recruit the best talent wherever they are located. Our global network allows us to offer you a selection of highly qualified candidates, supported by reliable partners who share our commitment to excellence.'
  }
]

export const TECH_CONSULTING = {
  title: 'Tech Consulting',
  description: 'Experience the power of global talent at your fingertips. With our remote recruitment service, we leverage cutting-edge methods to meticulously match your IT needs with the perfect candidates, ensuring a seamless fit for your projects.',
  slides: [
    {
      title: 'Recruitment of Full Stack Developers:',
      description: "A software company aims to develop a new application and is in search of experienced Full Stack developers. Utilizing a remote recruitment platform, it seeks candidates proficient in technologies like JavaScript, Python, and React. Following thorough virtual interviews, it hires talented Full Stack developers who contribute to the application's creation.",
      image: slide1,
    },
    {
      title: 'Hiring Cybersecurity Specialists:',
      description: "Following a cyberattack, a company realizes the importance of a robust cybersecurity team. It seeks experienced cybersecurity specialists proficient in technologies such as SIEM, IDS/IPS, and Firewall through a remote recruitment platform. After conducting in-depth virtual interviews to assess their skills, it hires cybersecurity experts to enhance its IT security infrastructure.",
      image: slide2,
    },
    {
      title: 'Recruitment of UX/UI Designers:',
      description: "A design agency endeavors to create a new user interface for a mobile application. It searches for talented UX/UI designers proficient in tools like Sketch, Adobe XD, and Figma through a remote recruitment platform. After reviewing their portfolios and conducting virtual interviews to discuss their skills, it hires designers to craft an intuitive and appealing interface for the application.",
      image: slide3,
    },
    {
      title: 'Hiring Data Analysis Specialists:',
      description: "An enterprise aims to leverage its data for strategic decision-making. It seeks data analysis specialists proficient in tools such as Python, R, and SQL through a remote recruitment platform. After reviewing their skills and conducting thorough virtual interviews, it recruits data analysts who provide valuable insights for the company.",
      image: slide4,
    },
    {
      title: 'Recruitment of Mobile App Developers:',
      description: "A startup plans to develop a mobile application and seeks talented mobile app developers. It searches for candidates proficient in programming languages like Swift, Kotlin, and Flutter through a remote recruitment platform. After reviewing their code and past projects online, it hires developers who create a compelling and functional mobile application, contributing to the startup's success.",
      image: slide5,
    },
  ]
}

export const SOFTWARE_DEVELOPMENT = {
  title: 'Software Development',
  description: "A software development team is pivotal in transforming your customer's business requirements into robust software solutions. Outsource the software delivery process while maintaining full control over the project and the flexibility to make necessary adjustments at any stage.",
  slides: [
    {
      title: 'Building an e-commerce platform',
      description: "Creating an e-commerce platform with advanced features such as product customization, AI-based recommendations, and secure payments. The development team works remotely to design and implement this solution, using modern web technologies such as React.js, Node.js, and MongoDB.",
      image: slide6,
    },
    {
      title: 'Developing a health tracking application',
      description: "Building a web application that allows users to track their health and fitness remotely. The application uses connected sensors to gather data on physical activity, sleep, and other health parameters, then displays this information in a user-friendly way on a web interface. The development team works remotely to design and develop this application, using technologies such as Angular, Firebase, and GraphQL.",
      image: slide7,
    },
    {
      title: 'Developing a project management application',
      description: "Building a web application to manage projects and tasks remotely. The application enables teams to collaborate effectively, track project progress, and manage resources and budgets. The development team works remotely to design and develop this application, using technologies such as React.js, Redux, and Node.js, with tight integration with popular project management tools such as Jira and Trello.",
      image: slide4,
    },
    {
      title: 'Constructing an online learning platform',
      description: "Creating an online learning platform to offer courses and educational resources remotely. The development team designs and develops this platform using modern web technologies such as Vue.js, Django, and PostgreSQL. The platform offers features such as live video conferencing, online assignments, and discussion forums to facilitate remote learning.",
      image: slide8,
    },
  ],
  lists: [
    {
      label: 'UX UI Designer',
      paragraph: 'Our UX/UI service is committed to designing professional and intuitive interfaces for your website. With our expertise, we ensure an optimal user experience that enhances your credibility and drives conversions.',
      icon: icon1,
    },
    {
      label: 'Developers',
      paragraph: 'Our team of developers is committed to building robust software solutions for your business. With our technical expertise and dedication to quality, we ensure to deliver products that meet your specific needs and contribute to the growth of your company.',
      icon: icon2,
    },
    {
      label: 'QA Engineer',
      paragraph: 'Our QA engineers are dedicated to ensuring the highest quality standards for your software products. With meticulous attention to detail and rigorous testing processes, we strive to deliver reliable and flawless solutions that exceed your expectations.',
      icon: icon3,
    },
    {
      label: 'Business Analyst',
      paragraph: 'Our team of business analysts is focused on understanding your objectives and translating them into actionable insights and requirements. With our expertise in data analysis and industry best practices, we ensure to deliver solutions that drive strategic decision-making and business growth.',
      icon: icon4,
    },
    {
      label: 'Data Engineer',
      paragraph: 'Our data engineers specialize in building robust data pipelines and infrastructure to support your data-driven initiatives. With expertise in data modeling and ETL processes, we deliver scalable solutions for valuable insights.',
      icon: icon5,
    },
    {
      label: 'Architect',
      paragraph: 'Our team of solution architects is committed to designing scalable and innovative solutions tailored to your business needs. With extensive experience and expertise in architecture design, we ensure to deliver robust and future-proof solutions that drive your business forward.',
      icon: icon6,
    },
  ]
}