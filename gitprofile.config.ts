// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'XargsUK', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['XargsUK/gitprofile','XargsUK/prisma-cloud-docs','XargsUK/XargsUK','XargsUK/github-readme-stats'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        projects: ['XargsUK/checkov-prismaless-vscode', 'XargsUK/aesr-s3-config-sender'],
      },
    },
    external: {
    },
  },
  seo: {
    title: 'Brad Duncan - DevOps Engineer',
    description: 'A passionate AWS DevOps engineer from Manchester',
    imageURL: '',
  },
  social: {
    linkedin: 'braddunc',
    twitter: '',
    mastodon: 'xargsuk@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'xargsuk',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'AWS',
    'Linux',
    'Docker',
    'Kubernetes',
    'Node.js',
    'Grafana',
    'MySQL',
    'PostgreSQL',
    'Git',
    'MongoDB',
    'Nginx/HAProxy/Apache',
    'Python',
    'Elastic Stack',
    'TICK',
  ],
  experiences: [
  ],
  certifications: [
    {
      name: 'AWS Certified Developer - Associate',
      body: 'Amazon Web Services',
      year: 'Dec 2023',
      link: 'https://www.credly.com/badges/5ac73561-9da4-4d3b-9701-d6a31262fda6',
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      body: 'Amazon Web Services',
      year: 'Dec 2020',
      link: 'https://www.credly.com/badges/e9c6dd36-7b12-4723-a59d-98412826504d',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      body: 'Amazon Web Services',
      year: 'May 2019',
      link: 'https://www.credly.com/badges/5dca9be8-6844-4e45-8c12-17400d6ae624',
    },
    {
      name: 'CompTIA Linux+ ce Certification',
      body: 'CompTIA',
      year: 'Oct 2018',
      link: 'https://www.credly.com/badges/5ac73561-9da4-4d3b-9701-d6a31262fda6',
    },
    {
      name: 'ITIL® Foundation Certificate in IT Service Management',
      body: 'Axelos/PeopleCert (GR671378972BD)',
      year: 'Mar 2022',
      link: 'https://www.peoplecert.org/for-corporations/certificate-verification-service',
    },
    {
      name: 'Azure AZ-900',
      body: 'Microsoft',
      year: 'Jan 2024',
      link: 'https://learn.microsoft.com/en-us/users/bradduncan/credentials/7258686557668e3c',
    },
  ],
  educations: [
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'xargsuk', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;