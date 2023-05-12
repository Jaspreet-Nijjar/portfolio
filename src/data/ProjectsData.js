import saintk9 from '../assets/project-images/saintk9.png';
import currency from '../assets/project-images/currency.png';
import password from '../assets/project-images/password.png';
import shopping from '../assets/project-images/shopping.png';

export const ProjectsData = [
  {
    img: saintk9,
    title: 'Saint K9 Training',
    description:
      "My first React project created using a custom Figma design with the aim of promoting a company's dog training services.",
    tech: ['React', 'JavaScript', 'CSS'],
    code: 'https://github.com/Jaspreet-Nijjar/saint-k9-training',
    preview: 'https://jn-saint-k9-training.netlify.app/',
  },

  {
    img: shopping,
    title: 'Ecommerce Product Store',
    description:
      'A simple e-commerce product store using the context hook to add functionalities. ',
    tech: ['React', 'JavaScript', 'CSS'],
    code: 'https://github.com/Jaspreet-Nijjar/ecommerce-store',
    preview: 'https://jn-ecommerce-project.netlify.app/',
  },

  {
    img: currency,
    title: 'Currency Converter',
    description:
      'A React project which fetches data from an external API and is used to calculate the exchange rates between two amounts.',
    tech: ['React', 'JavaScript', 'CSS'],
    code: 'https://github.com/Jaspreet-Nijjar/react-currency-converter',
    preview: 'https://jn-currency-converter-react.netlify.app/',
  },

  {
    img: password,
    title: 'Password Generator',
    description:
      'A JavaScript app which allows you to choose your length of password and generate a random password.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    code: 'https://github.com/Jaspreet-Nijjar/password-generator',
    preview: 'https://jn-password-generator.netlify.app/',
  },
];
