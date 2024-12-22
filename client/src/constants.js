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
  leader
} from './assets/icons';


export const BLOCKS_ONE = {
  title: 'How it works',
  blocks: [
    {
      type: 'special',
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
  ]
}

export const BLOCKS_TWO = {
  title: 'Our values',
  color: '#F5F5FD',
  blocks: [
    {
      type: 'special',
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