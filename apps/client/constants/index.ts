import { Campaign, User } from '@/utils/types/temp';

export const notFound = {
  title: '404',
  description: 'The page you are looking for does not exist',
  imageUrl: 'https://utfs.io/f/2ff6e834-de13-44ff-ba8b-b4f951a983b4-oxgjvd.png',
};

export const footerLinks = [
  {
    label: 'Campaigns',
    href: '/',
  },
  {
    label: 'Start a campaign',
    href: '/',
  },
  {
    label: 'About us',
    href: '/',
  },
  {
    label: 'Github',
    href: '/',
  },
];

export const menuNavLinks = [
  {
    label: 'Campaigns',
    href: '/',
  },
  {
    label: 'Saved & Contributed',
    href: '/',
  },
  {
    label: 'Account',
    href: '/account',
  },
];

export const accountNavLinks = [
  {
    label: 'Account',
    href: '/account',
  },
  {
    label: 'Security',
    href: '/account/security',
  },
];

// ! FAKE TEMP DATA

export const users: User[] = [
  {
    id: 1,
    fullName: 'Naomi Liu',
    username: 'naomiliu',
    email: 'naomie.liu@test.com',
    avatarUrl:
      'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
    title: 'CEO NeuraTech & former Google software engineer',
    location: 'San Francisco, CA',
    links: {
      website: 'https://naomiliu.com',
      twitter: 'https://twitter.com/naomiliu',
      instagram: 'https://instagram.com/naomiliu',
      linkedIn: 'https://linkedin.com/in/naomiliu',
    },
    subscribers: [
      {
        userId: 2,
        subscribedDate: new Date().toDateString(),
        user: {
          id: 2,
          fullName: 'Miguel Santos',
          username: 'miguelsantos',
          email: 'miguel@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Product Manager',
          location: 'Sao Paulo, Brazil',
          links: {
            website: 'https://miguelsantos.com',
            twitter: 'https://twitter.com/miguelsantos',
            instagram: 'https://instagram.com/miguelsantos',
            linkedIn: 'https://linkedin.com/in/miguelsantos',
          },
          subscribers: [],
          subscribedTo: [],
        },
      },
      {
        userId: 3,
        subscribedDate: new Date().toDateString(),
        user: {
          id: 3,
          fullName: 'Keiko Tanaka',
          username: 'keikotanaka',
          email: 'keiko@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Graphic Designer',
          location: 'Tokyo, Japan',
          links: {
            website: 'https://keikotanaka.art',
            twitter: 'https://twitter.com/keikotanaka',
            instagram: 'https://instagram.com/keikotanaka',
            linkedIn: 'https://linkedin.com/in/keikotanaka',
          },
          subscribers: [],
          subscribedTo: [],
        },
      },
      {
        userId: 4,
        subscribedDate: new Date().toDateString(),
        user: {
          id: 4,
          fullName: 'Amara Singh',
          username: 'amarasingh',
          email: 'amara@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Chief Scientist',
          location: 'New Delhi, India',
          links: {
            website: 'https://amarasingh.tech',
            twitter: 'https://twitter.com/amarasingh',
            instagram: 'https://instagram.com/amarasingh',
            linkedIn: 'https://linkedin.com/in/amarasingh',
          },
          subscribers: [],
          subscribedTo: [],
        },
      },
      {
        userId: 5,
        subscribedDate: new Date().toDateString(),
        user: {
          id: 5,
          fullName: 'Fatima Zahra',
          username: 'fatimazahra',
          email: 'fatima@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'AI Researcher',
          location: 'Casablanca, Morocco',
          links: {
            website: 'https://fatimazahra.ai',
            twitter: 'https://twitter.com/fatimazahra',
            instagram: 'https://instagram.com/fatimazahra',
            linkedIn: 'https://linkedin.com/in/fatimazahra',
          },
          subscribers: [],
          subscribedTo: [],
        },
      },
      {
        userId: 6,
        subscribedDate: new Date().toDateString(),
        user: {
          id: 6,
          fullName: "Liam O'Brien",
          username: 'liamobrien',
          email: 'liam@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Blockchain Developer',
          location: 'Dublin, Ireland',
          links: {
            website: 'https://liamobrien.io',
            twitter: 'https://twitter.com/liamobrien',
            instagram: 'https://instagram.com/liamobrien',
            linkedIn: 'https://linkedin.com/in/liamobrien',
          },
          subscribers: [],
          subscribedTo: [],
        },
      },
    ],
    subscribedTo: [
      {
        userId: 3,
        subscribedDate: new Date().toDateString(),
        user: {
          id: 3,
          fullName: 'Keiko Tanaka',
          username: 'keikotanaka',
          email: 'keiko@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Graphic Designer',
          location: 'Tokyo, Japan',
          links: {
            website: 'https://keikotanaka.art',
            twitter: 'https://twitter.com/keikotanaka',
            instagram: 'https://instagram.com/keikotanaka',
            linkedIn: 'https://linkedin.com/in/keikotanaka',
          },
          subscribers: [],
          subscribedTo: [],
        },
      },
      {
        userId: 5,
        subscribedDate: new Date().toDateString(),
        user: {
          id: 5,
          fullName: 'Fatima Zahra',
          username: 'fatimazahra',
          email: 'fatima@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'AI Researcher',
          location: 'Casablanca, Morocco',
          links: {
            website: 'https://fatimazahra.ai',
            twitter: 'https://twitter.com/fatimazahra',
            instagram: 'https://instagram.com/fatimazahra',
            linkedIn: 'https://linkedin.com/in/fatimazahra',
          },
          subscribers: [],
          subscribedTo: [],
        },
      },
    ],
  },
  {
    id: 2,
    fullName: 'Miguel Santos',
    username: 'miguelsantos',
    email: 'miguel@example.com',
    avatarUrl:
      'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
    title: 'Product Manager',
    location: 'Sao Paulo, Brazil',
    links: {
      website: 'https://miguelsantos.com',
      twitter: 'https://twitter.com/miguelsantos',
      instagram: 'https://instagram.com/miguelsantos',
      linkedIn: 'https://linkedin.com/in/miguelsantos',
    },
    subscribers: [],
    subscribedTo: [],
  },

  {
    id: 3,
    fullName: 'Keiko Tanaka',
    username: 'keikotanaka',
    email: 'keiko@example.com',
    avatarUrl:
      'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
    title: 'Graphic Designer',
    location: 'Tokyo, Japan',
    links: {
      website: 'https://keikotanaka.art',
      twitter: 'https://twitter.com/keikotanaka',
      instagram: 'https://instagram.com/keikotanaka',
      linkedIn: 'https://linkedin.com/in/keikotanaka',
    },
    subscribers: [],
    subscribedTo: [],
  },

  {
    id: 4,
    fullName: 'Amara Singh',
    username: 'amarasingh',
    email: 'amara@example.com',
    avatarUrl:
      'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
    title: 'Chief Scientist',
    location: 'New Delhi, India',
    links: {
      website: 'https://amarasingh.tech',
      twitter: 'https://twitter.com/amarasingh',
      instagram: 'https://instagram.com/amarasingh',
      linkedIn: 'https://linkedin.com/in/amarasingh',
    },
    subscribers: [],
    subscribedTo: [],
  },

  {
    id: 5,
    fullName: 'Fatima Zahra',
    username: 'fatimazahra',
    email: 'fatima@example.com',
    avatarUrl:
      'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
    title: 'AI Researcher',
    location: 'Casablanca, Morocco',
    links: {
      website: 'https://fatimazahra.ai',
      twitter: 'https://twitter.com/fatimazahra',
      instagram: 'https://instagram.com/fatimazahra',
      linkedIn: 'https://linkedin.com/in/fatimazahra',
    },
    subscribers: [],
    subscribedTo: [],
  },

  {
    id: 6,
    fullName: "Liam O'Brien",
    username: 'liamobrien',
    email: 'liam@example.com',
    avatarUrl:
      'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
    title: 'Blockchain Developer',
    location: 'Dublin, Ireland',
    links: {
      website: 'https://liamobrien.io',
      twitter: 'https://twitter.com/liamobrien',
      instagram: 'https://instagram.com/liamobrien',
      linkedIn: 'https://linkedin.com/in/liamobrien',
    },
    subscribers: [],
    subscribedTo: [],
  },
];

export const user: User = {
  id: 1,
  fullName: 'Naomi Liu',
  username: 'naomiliu',
  email: 'naomie.liu@test.com',
  avatarUrl:
    'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
  title: 'CEO NeuraTech & former Google software engineer',
  location: 'San Francisco, CA',
  links: {
    website: 'https://naomiliu.com',
    twitter: 'https://twitter.com/naomiliu',
    instagram: 'https://instagram.com/naomiliu',
    linkedIn: 'https://linkedin.com/in/naomiliu',
  },
  subscribers: [
    {
      userId: 2,
      subscribedDate: new Date().toDateString(),
      user: {
        id: 2,
        fullName: 'Miguel Santos',
        username: 'miguelsantos',
        email: 'miguel@example.com',
        avatarUrl:
          'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
        title: 'Product Manager',
        location: 'Sao Paulo, Brazil',
        links: {
          website: 'https://miguelsantos.com',
          twitter: 'https://twitter.com/miguelsantos',
          instagram: 'https://instagram.com/miguelsantos',
          linkedIn: 'https://linkedin.com/in/miguelsantos',
        },
        subscribers: [],
        subscribedTo: [],
      },
    },
    {
      userId: 3,
      subscribedDate: new Date().toDateString(),
      user: {
        id: 3,
        fullName: 'Keiko Tanaka',
        username: 'keikotanaka',
        email: 'keiko@example.com',
        avatarUrl:
          'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
        title: 'Graphic Designer',
        location: 'Tokyo, Japan',
        links: {
          website: 'https://keikotanaka.art',
          twitter: 'https://twitter.com/keikotanaka',
          instagram: 'https://instagram.com/keikotanaka',
          linkedIn: 'https://linkedin.com/in/keikotanaka',
        },
        subscribers: [],
        subscribedTo: [],
      },
    },
    {
      userId: 4,
      subscribedDate: new Date().toDateString(),
      user: {
        id: 4,
        fullName: 'Amara Singh',
        username: 'amarasingh',
        email: 'amara@example.com',
        avatarUrl:
          'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
        title: 'Chief Scientist',
        location: 'New Delhi, India',
        links: {
          website: 'https://amarasingh.tech',
          twitter: 'https://twitter.com/amarasingh',
          instagram: 'https://instagram.com/amarasingh',
          linkedIn: 'https://linkedin.com/in/amarasingh',
        },
        subscribers: [],
        subscribedTo: [],
      },
    },
    {
      userId: 5,
      subscribedDate: new Date().toDateString(),
      user: {
        id: 5,
        fullName: 'Fatima Zahra',
        username: 'fatimazahra',
        email: 'fatima@example.com',
        avatarUrl:
          'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
        title: 'AI Researcher',
        location: 'Casablanca, Morocco',
        links: {
          website: 'https://fatimazahra.ai',
          twitter: 'https://twitter.com/fatimazahra',
          instagram: 'https://instagram.com/fatimazahra',
          linkedIn: 'https://linkedin.com/in/fatimazahra',
        },
        subscribers: [],
        subscribedTo: [],
      },
    },
    {
      userId: 6,
      subscribedDate: new Date().toDateString(),
      user: {
        id: 6,
        fullName: "Liam O'Brien",
        username: 'liamobrien',
        email: 'liam@example.com',
        avatarUrl:
          'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
        title: 'Blockchain Developer',
        location: 'Dublin, Ireland',
        links: {
          website: 'https://liamobrien.io',
          twitter: 'https://twitter.com/liamobrien',
          instagram: 'https://instagram.com/liamobrien',
          linkedIn: 'https://linkedin.com/in/liamobrien',
        },
        subscribers: [],
        subscribedTo: [],
      },
    },
  ],
  subscribedTo: [
    {
      userId: 3,
      subscribedDate: new Date().toDateString(),
      user: {
        id: 3,
        fullName: 'Keiko Tanaka',
        username: 'keikotanaka',
        email: 'keiko@example.com',
        avatarUrl:
          'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
        title: 'Graphic Designer',
        location: 'Tokyo, Japan',
        links: {
          website: 'https://keikotanaka.art',
          twitter: 'https://twitter.com/keikotanaka',
          instagram: 'https://instagram.com/keikotanaka',
          linkedIn: 'https://linkedin.com/in/keikotanaka',
        },
        subscribers: [],
        subscribedTo: [],
      },
    },
    {
      userId: 5,
      subscribedDate: new Date().toDateString(),
      user: {
        id: 5,
        fullName: 'Fatima Zahra',
        username: 'fatimazahra',
        email: 'fatima@example.com',
        avatarUrl:
          'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
        title: 'AI Researcher',
        location: 'Casablanca, Morocco',
        links: {
          website: 'https://fatimazahra.ai',
          twitter: 'https://twitter.com/fatimazahra',
          instagram: 'https://instagram.com/fatimazahra',
          linkedIn: 'https://linkedin.com/in/fatimazahra',
        },
        subscribers: [],
        subscribedTo: [],
      },
    },
  ],
};

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: 'NeuraTech',
    subtitle:
      'Imagine a world where advanced technology seamlessly integrates with the human body, restoring lost capabilities and enabling new possibilities.',
    thumbnailUrl:
      'https://utfs.io/f/ee6011e2-4de4-4598-98ba-bac80fed1a12-wg2rwb.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'NeuraTech is pioneering the future of neurotechnology with cutting-edge solutions designed to enhance cognitive functions and restore lost capabilities. Join us in revolutionizing healthcare and human potential.',
    targetAmount: 500000,
    currentAmount: 350000,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    creator: {
      id: 1,
      fullName: 'Naomi Liu',
      username: 'naomiliu',
      email: 'naomie.liu@test.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'CEO NeuraTech & former Google software engineer',
      location: 'San Francisco, CA',
      links: {
        website: 'https://naomiliu.com',
        twitter: 'https://twitter.com/naomiliu',
        instagram: 'https://instagram.com/naomiliu',
        linkedIn: 'https://linkedin.com/in/naomiliu',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 2,
        amount: 50000,
        user: {
          id: 2,
          fullName: 'Miguel Santos',
          username: 'miguelsantos',
          email: 'miguel@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Product Manager',
          location: 'Sao Paulo, Brazil',
          links: {
            website: 'https://miguelsantos.com',
            twitter: 'https://twitter.com/miguelsantos',
            instagram: 'https://instagram.com/miguelsantos',
            linkedIn: 'https://linkedin.com/in/miguelsantos',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-02-01'),
      },
      {
        userId: 3,
        amount: 30000,
        user: {
          id: 3,
          fullName: 'Keiko Tanaka',
          username: 'keikotanaka',
          email: 'keiko@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Graphic Designer',
          location: 'Tokyo, Japan',
          links: {
            website: 'https://keikotanaka.art',
            twitter: 'https://twitter.com/keikotanaka',
            instagram: 'https://instagram.com/keikotanaka',
            linkedIn: 'https://linkedin.com/in/keikotanaka',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-03-15'),
      },
      {
        userId: 3,
        amount: 25000,
        user: {
          id: 3,
          fullName: 'Alex Martinez',
          username: 'alexmartinez',
          email: 'alex@example.com',
          avatarUrl: 'https://example.com/avatar-alex.png',
          title: 'Software Engineer',
          location: 'San Francisco, USA',
          links: {
            website: 'https://alexmartinez.dev',
            twitter: 'https://twitter.com/alexmartinez',
            instagram: 'https://instagram.com/alexmartinez',
            linkedIn: 'https://linkedin.com/in/alexmartinez',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-04-20'),
      },
      {
        userId: 4,
        amount: 15000,
        user: {
          id: 4,
          fullName: 'Emma Johnson',
          username: 'emmajohnson',
          email: 'emma@example.com',
          avatarUrl: 'https://example.com/avatar-emma.png',
          title: 'Marketing Specialist',
          location: 'London, UK',
          links: {
            website: 'https://emmajohnson.co.uk',
            twitter: 'https://twitter.com/emmajohnson',
            instagram: 'https://instagram.com/emmajohnson',
            linkedIn: 'https://linkedin.com/in/emmajohnson',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-05-10'),
      },
      {
        userId: 5,
        amount: 20000,
        user: {
          id: 5,
          fullName: 'Sofia Gomez',
          username: 'sofiagomez',
          email: 'sofia@example.com',
          avatarUrl: 'https://example.com/avatar-sofia.png',
          title: 'UX Designer',
          location: 'Madrid, Spain',
          links: {
            website: 'https://sofiagomezdesigns.com',
            twitter: 'https://twitter.com/sofiagomez',
            instagram: 'https://instagram.com/sofiagomez',
            linkedIn: 'https://linkedin.com/in/sofiagomez',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-06-05'),
      },
      {
        userId: 6,
        amount: 18000,
        user: {
          id: 6,
          fullName: 'Liam Smith',
          username: 'liamsmith',
          email: 'liam@example.com',
          avatarUrl: 'https://example.com/avatar-liam.png',
          title: 'Data Scientist',
          location: 'Toronto, Canada',
          links: {
            website: 'https://liamsmith.io',
            twitter: 'https://twitter.com/liamsmith',
            instagram: 'https://instagram.com/liamsmith',
            linkedIn: 'https://linkedin.com/in/liamsmith',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-07-12'),
      },
      {
        userId: 7,
        amount: 22000,
        user: {
          id: 7,
          fullName: 'Nina Patel',
          username: 'ninapatel',
          email: 'nina@example.com',
          avatarUrl: 'https://example.com/avatar-nina.png',
          title: 'Content Creator',
          location: 'Mumbai, India',
          links: {
            website: 'https://ninapatel.com',
            twitter: 'https://twitter.com/ninapatel',
            instagram: 'https://instagram.com/ninapatel',
            linkedIn: 'https://linkedin.com/in/ninapatel',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-08-01'),
      },
      {
        userId: 8,
        amount: 12000,
        user: {
          id: 8,
          fullName: 'Omar Ali',
          username: 'omarali',
          email: 'omar@example.com',
          avatarUrl: 'https://example.com/avatar-omar.png',
          title: 'Business Analyst',
          location: 'Dubai, UAE',
          links: {
            website: 'https://omarali.biz',
            twitter: 'https://twitter.com/omarali',
            instagram: 'https://instagram.com/omarali',
            linkedIn: 'https://linkedin.com/in/omarali',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-09-15'),
      },
      {
        userId: 9,
        amount: 14000,
        user: {
          id: 9,
          fullName: 'Anna Kim',
          username: 'annakim',
          email: 'anna@example.com',
          avatarUrl: 'https://example.com/avatar-anna.png',
          title: 'Sales Manager',
          location: 'Seoul, South Korea',
          links: {
            website: 'https://annakim.com',
            twitter: 'https://twitter.com/annakim',
            instagram: 'https://instagram.com/annakim',
            linkedIn: 'https://linkedin.com/in/annakim',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-10-05'),
      },
      {
        userId: 10,
        amount: 16000,
        user: {
          id: 10,
          fullName: 'Carlos Lopez',
          username: 'carloslopez',
          email: 'carlos@example.com',
          avatarUrl: 'https://example.com/avatar-carlos.png',
          title: 'Entrepreneur',
          location: 'Buenos Aires, Argentina',
          links: {
            website: 'https://carloslopez.com',
            twitter: 'https://twitter.com/carloslopez',
            instagram: 'https://instagram.com/carloslopez',
            linkedIn: 'https://linkedin.com/in/carloslopez',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-11-01'),
      },
      {
        userId: 11,
        amount: 21000,
        user: {
          id: 11,
          fullName: 'Jasmine Lee',
          username: 'jasminelee',
          email: 'jasmine@example.com',
          avatarUrl: 'https://example.com/avatar-jasmine.png',
          title: 'Legal Advisor',
          location: 'Sydney, Australia',
          links: {
            website: 'https://jasminelee.com',
            twitter: 'https://twitter.com/jasminelee',
            instagram: 'https://instagram.com/jasminelee',
            linkedIn: 'https://linkedin.com/in/jasminelee',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-12-15'),
      },
    ],
    creationDate: new Date('2023-12-01'),
  },
  {
    id: 2,
    title: 'QuantumLeap',
    subtitle:
      'Step into the quantum age with cutting-edge computing solutions that redefine the limits of possibility.',
    thumbnailUrl:
      'https://utfs.io/f/8bf85d21-9ad2-4e6c-96d3-460fe4663022-ldvwjh.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'QuantumLeap is at the forefront of quantum computing, developing powerful algorithms and hardware to solve the world’s most complex problems. Join us as we push the boundaries of science and technology.',
    targetAmount: 750000,
    currentAmount: 750000,
    startDate: new Date('2024-02-01'),
    endDate: new Date('2024-11-30'),
    creator: {
      id: 4,
      fullName: 'Amara Singh',
      username: 'amarasingh',
      email: 'amara@example.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'Chief Scientist',
      location: 'New Delhi, India',
      links: {
        website: 'https://amarasingh.tech',
        twitter: 'https://twitter.com/amarasingh',
        instagram: 'https://instagram.com/amarasingh',
        linkedIn: 'https://linkedin.com/in/amarasingh',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 5,
        amount: 100000,
        user: {
          id: 5,
          fullName: 'Fatima Zahra',
          username: 'fatimazahra',
          email: 'fatima@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'AI Researcher',
          location: 'Casablanca, Morocco',
          links: {
            website: 'https://fatimazahra.ai',
            twitter: 'https://twitter.com/fatimazahra',
            instagram: 'https://instagram.com/fatimazahra',
            linkedIn: 'https://linkedin.com/in/fatimazahra',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-04-10'),
      },
      {
        userId: 6,
        amount: 75000,
        user: {
          id: 6,
          fullName: "Liam O'Brien",
          username: 'liamobrien',
          email: 'liam@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Blockchain Developer',
          location: 'Dublin, Ireland',
          links: {
            website: 'https://liamobrien.io',
            twitter: 'https://twitter.com/liamobrien',
            instagram: 'https://instagram.com/liamobrien',
            linkedIn: 'https://linkedin.com/in/liamobrien',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-05-05'),
      },
    ],
    creationDate: new Date('2024-01-15'),
  },
  {
    id: 3,
    title: 'BioFusion',
    subtitle:
      'Revolutionizing healthcare with biotechnological advancements that promise a healthier future for all.',
    thumbnailUrl:
      'https://utfs.io/f/7b465695-3c15-4739-85fe-731000119bda-8ejw70.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'BioFusion is dedicated to developing innovative biotechnologies that enhance medical treatments and improve quality of life. Be part of a movement that’s transforming healthcare from the ground up.',
    targetAmount: 600000,
    currentAmount: 300000,
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-12-31'),
    creator: {
      id: 7,
      fullName: 'Elena Petrova',
      username: 'elenapetrova',
      email: 'elena@example.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'Biotech Innovator',
      location: 'Moscow, Russia',
      links: {
        website: 'https://elenapetrova.bio',
        twitter: 'https://twitter.com/elenapetrova',
        instagram: 'https://instagram.com/elenapetrova',
        linkedIn: 'https://linkedin.com/in/elenapetrova',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 8,
        amount: 50000,
        user: {
          id: 8,
          fullName: 'Chen Wei',
          username: 'chenwei',
          email: 'chen@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Geneticist',
          location: 'Beijing, China',
          links: {
            website: 'https://chenwei.gen',
            twitter: 'https://twitter.com/chenwei',
            instagram: 'https://instagram.com/chenwei',
            linkedIn: 'https://linkedin.com/in/chenwei',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-06-20'),
      },
      {
        userId: 9,
        amount: 60000,
        user: {
          id: 9,
          fullName: 'Raj Patel',
          username: 'rajpatel',
          email: 'raj@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Biomedical Engineer',
          location: 'Mumbai, India',
          links: {
            website: 'https://rajpatel.bio',
            twitter: 'https://twitter.com/rajpatel',
            instagram: 'https://instagram.com/rajpatel',
            linkedIn: 'https://linkedin.com/in/rajpatel',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-07-01'),
      },
    ],
    creationDate: new Date('2024-02-01'),
  },
  {
    id: 4,
    title: 'EcoSustain',
    subtitle:
      'Harnessing technology to create sustainable solutions for a greener planet.',
    thumbnailUrl:
      'https://utfs.io/f/9cb8cd9d-2747-4563-a9c8-e7fd6a8a082d-aa6imf.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'EcoSustain focuses on developing eco-friendly technologies that reduce carbon footprint and promote sustainable living. Join us in making the world a better place for future generations.',
    targetAmount: 400000,
    currentAmount: 220000,
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-11-30'),
    creator: {
      id: 10,
      fullName: 'Anna Schmidt',
      username: 'annaschmidt',
      email: 'anna@example.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'Environmental Scientist',
      location: 'Berlin, Germany',
      links: {
        website: 'https://annaschmidt.eco',
        twitter: 'https://twitter.com/annaschmidt',
        instagram: 'https://instagram.com/annaschmidt',
        linkedIn: 'https://linkedin.com/in/annaschmidt',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 8,
        amount: 50000,
        user: {
          id: 8,
          fullName: 'Chen Wei',
          username: 'chenwei',
          email: 'chen@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Geneticist',
          location: 'Beijing, China',
          links: {
            website: 'https://chenwei.gen',
            twitter: 'https://twitter.com/chenwei',
            instagram: 'https://instagram.com/chenwei',
            linkedIn: 'https://linkedin.com/in/chenwei',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-06-20'),
      },
      {
        userId: 9,
        amount: 60000,
        user: {
          id: 9,
          fullName: 'Raj Patel',
          username: 'rajpatel',
          email: 'raj@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Biomedical Engineer',
          location: 'Mumbai, India',
          links: {
            website: 'https://rajpatel.bio',
            twitter: 'https://twitter.com/rajpatel',
            instagram: 'https://instagram.com/rajpatel',
            linkedIn: 'https://linkedin.com/in/rajpatel',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-07-01'),
      },
    ],
    creationDate: new Date('2024-02-01'),
  },
  {
    id: 4,
    title: 'EcoSustain',
    subtitle:
      'Harnessing technology to create sustainable solutions for a greener planet.',
    thumbnailUrl:
      'https://utfs.io/f/ee6011e2-4de4-4598-98ba-bac80fed1a12-wg2rwb.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'EcoSustain focuses on developing eco-friendly technologies that reduce carbon footprint and promote sustainable living. Join us in making the world a better place for future generations.',
    targetAmount: 400000,
    currentAmount: 220000,
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-11-30'),
    creator: {
      id: 10,
      fullName: 'Anna Schmidt',
      username: 'annaschmidt',
      email: 'anna@example.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'Environmental Scientist',
      location: 'Berlin, Germany',
      links: {
        website: 'https://annaschmidt.eco',
        twitter: 'https://twitter.com/annaschmidt',
        instagram: 'https://instagram.com/annaschmidt',
        linkedIn: 'https://linkedin.com/in/annaschmidt',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 11,
        amount: 50000,
        user: {
          id: 11,
          fullName: 'Carlos Hernandez',
          username: 'carloshernandez',
          email: 'carlos@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Green Tech Entrepreneur',
          location: 'Madrid, Spain',
          links: {
            website: 'https://carloshernandez.eco',
            twitter: 'https://twitter.com/carloshernandez',
            instagram: 'https://instagram.com/carloshernandez',
            linkedIn: 'https://linkedin.com/in/carloshernandez',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-05-01'),
      },
      {
        userId: 12,
        amount: 60000,
        user: {
          id: 12,
          fullName: 'Sara Khan',
          username: 'sarakhan',
          email: 'sara@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Climate Change Activist',
          location: 'Karachi, Pakistan',
          links: {
            website: 'https://sarakhan.com',
            twitter: 'https://twitter.com/sarakhan',
            instagram: 'https://instagram.com/sarakhan',
            linkedIn: 'https://linkedin.com/in/sarakhan',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-06-15'),
      },
    ],
    creationDate: new Date('2024-03-01'),
  },
  {
    id: 5,
    title: 'AI4Good',
    subtitle:
      'Leveraging artificial intelligence to solve the world’s most pressing problems.',
    thumbnailUrl:
      'https://utfs.io/f/5a25fde3-cede-45d7-bd57-bb4429da6ea7-8n1phh.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'AI4Good is dedicated to using artificial intelligence to address global challenges such as poverty, health crises, and climate change. Join us in harnessing AI for a better world.',
    targetAmount: 800000,
    currentAmount: 500000,
    startDate: new Date('2024-05-01'),
    endDate: new Date('2024-12-31'),
    creator: {
      id: 13,
      fullName: 'Linda Wong',
      username: 'lindawong',
      email: 'linda@example.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'AI Specialist',
      location: 'Sydney, Australia',
      links: {
        website: 'https://lindawong.ai',
        twitter: 'https://twitter.com/lindawong',
        instagram: 'https://instagram.com/lindawong',
        linkedIn: 'https://linkedin.com/in/lindawong',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 14,
        amount: 70000,
        user: {
          id: 14,
          fullName: 'Ahmed El-Sayed',
          username: 'ahmedelsayed',
          email: 'ahmed@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Data Scientist',
          location: 'Cairo, Egypt',
          links: {
            website: 'https://ahmedelsayed.com',
            twitter: 'https://twitter.com/ahmedelsayed',
            instagram: 'https://instagram.com/ahmedelsayed',
            linkedIn: 'https://linkedin.com/in/ahmedelsayed',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-06-01'),
      },
      {
        userId: 15,
        amount: 80000,
        user: {
          id: 15,
          fullName: 'Monica Johnson',
          username: 'monicajohnson',
          email: 'monica@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Machine Learning Engineer',
          location: 'Toronto, Canada',
          links: {
            website: 'https://monicajohnson.ml',
            twitter: 'https://twitter.com/monicajohnson',
            instagram: 'https://instagram.com/monicajohnson',
            linkedIn: 'https://linkedin.com/in/monicajohnson',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-07-10'),
      },
    ],
    creationDate: new Date('2024-04-01'),
  },
  {
    id: 6,
    title: 'SpaceXploration',
    subtitle:
      'Bringing the wonders of space closer to humanity with advanced technology and innovation.',
    thumbnailUrl:
      'https://utfs.io/f/a6e9e39e-a756-422b-8c38-3c85e1d8792a-wwz5i3.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'SpaceXploration aims to make space exploration more accessible through cutting-edge technology and innovative solutions. Join us in pushing the boundaries of what is possible in space.',
    targetAmount: 1000000,
    currentAmount: 700000,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2025-05-31'),
    creator: {
      id: 16,
      fullName: 'Ivan Ivanov',
      username: 'ivanivanov',
      email: 'ivan@example.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'Aerospace Engineer',
      location: 'Moscow, Russia',
      links: {
        website: 'https://ivanivanov.space',
        twitter: 'https://twitter.com/ivanivanov',
        instagram: 'https://instagram.com/ivanivanov',
        linkedIn: 'https://linkedin.com/in/ivanivanov',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 17,
        amount: 120000,
        user: {
          id: 17,
          fullName: 'Emily Zhang',
          username: 'emilyzhang',
          email: 'emily@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Astrophysicist',
          location: 'Beijing, China',
          links: {
            website: 'https://emilyzhang.space',
            twitter: 'https://twitter.com/emilyzhang',
            instagram: 'https://instagram.com/emilyzhang',
            linkedIn: 'https://linkedin.com/in/emilyzhang',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-08-01'),
      },
      {
        userId: 18,
        amount: 130000,
        user: {
          id: 18,
          fullName: 'Luca Rossi',
          username: 'lucarossi',
          email: 'luca@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Space Scientist',
          location: 'Rome, Italy',
          links: {
            website: 'https://lucarossi.space',
            twitter: 'https://twitter.com/lucarossi',
            instagram: 'https://instagram.com/lucarossi',
            linkedIn: 'https://linkedin.com/in/lucarossi',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-09-15'),
      },
    ],
    creationDate: new Date('2024-05-01'),
  },
  {
    id: 7,
    title: 'MedTech Innovators',
    subtitle:
      'Pioneering medical technology advancements to improve patient care and outcomes.',
    thumbnailUrl:
      'https://utfs.io/f/40ee4270-067e-4a23-a32a-065cb81b52cd-xlgaw0.jpg',
    videoUrl:
      'https://utfs.io/f/7dafb336-611d-4085-beb5-05ac9cee5d56-40l0sq.mp4',
    documentUrl:
      'https://utfs.io/f/36f7c310-659e-422d-941c-8b3222aa0555-d1tiug.pdf',
    description:
      'MedTech Innovators is focused on developing advanced medical technologies that enhance patient care and improve health outcomes. Join us in transforming the healthcare landscape.',
    targetAmount: 700000,
    currentAmount: 450000,
    startDate: new Date('2024-07-01'),
    endDate: new Date('2025-06-30'),
    creator: {
      id: 19,
      fullName: 'Sophia Martins',
      username: 'sophiamartins',
      email: 'sophia@example.com',
      avatarUrl:
        'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
      title: 'Biomedical Engineer',
      location: 'Lisbon, Portugal',
      links: {
        website: 'https://sophiamartins.com',
        twitter: 'https://twitter.com/sophiamartins',
        instagram: 'https://instagram.com/sophiamartins',
        linkedIn: 'https://linkedin.com/in/sophiamartins',
      },
      subscribers: [],
      subscribedTo: [],
    },
    contributors: [
      {
        userId: 8,
        amount: 50000,
        user: {
          id: 8,
          fullName: 'Chen Wei',
          username: 'chenwei',
          email: 'chen@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Geneticist',
          location: 'Beijing, China',
          links: {
            website: 'https://chenwei.gen',
            twitter: 'https://twitter.com/chenwei',
            instagram: 'https://instagram.com/chenwei',
            linkedIn: 'https://linkedin.com/in/chenwei',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-06-20'),
      },
      {
        userId: 9,
        amount: 60000,
        user: {
          id: 9,
          fullName: 'Raj Patel',
          username: 'rajpatel',
          email: 'raj@example.com',
          avatarUrl:
            'https://utfs.io/f/3c36aa0e-763a-4deb-a4b5-e4ad5a6cfb8a-5nt0h7.png',
          title: 'Biomedical Engineer',
          location: 'Mumbai, India',
          links: {
            website: 'https://rajpatel.bio',
            twitter: 'https://twitter.com/rajpatel',
            instagram: 'https://instagram.com/rajpatel',
            linkedIn: 'https://linkedin.com/in/rajpatel',
          },
          subscribers: [],
          subscribedTo: [],
        },
        date: new Date('2024-07-01'),
      },
    ],
    creationDate: new Date('2024-05-01'),
  },
];
export const projectDescription = `Welcome to NeuraTech: Revolutionizing the Future of Healthcare and Human Potential.

NeuraTech is on a mission to push the boundaries of what’s possible in the realm of neurotechnology. Imagine a world where advanced technology seamlessly integrates with the human body, restoring lost capabilities and unlocking new possibilities. At NeuraTech, we believe that the future is now, and we are dedicated to making this vision a reality.

**Our Vision**:
Our mission is to revolutionize healthcare by developing cutting-edge neurotechnology solutions. We aim to enhance cognitive functions, restore lost capabilities, and unlock new potential in the human mind and body. Through innovation, dedication, and collaboration with leading experts in neuroscience, AI, and biomedical engineering, we are poised to make a significant impact on the world.

**The Challenge**:
Millions of people around the globe suffer from neurological disorders, cognitive impairments, and physical disabilities that limit their quality of life. Traditional treatments and therapies often fall short, providing limited relief and sometimes causing additional complications. There is a pressing need for innovative solutions that address these challenges more effectively and holistically.

**Our Approach**:
At NeuraTech, we are developing a suite of advanced neurotechnology products designed to transform healthcare. Our primary focus areas include:

BCIs are devices that enable direct communication between the brain and external devices. Our BCIs are designed to help individuals with severe disabilities regain control over their environment, communicate more effectively, and even restore lost motor functions.


These are artificial devices that replace or enhance the function of a missing or impaired part of the nervous system. Our neuroprosthetics are designed to provide better integration with the body, improved functionality, and a more natural user experience.


We are developing devices that can enhance cognitive functions such as memory, attention, and problem-solving skills. These devices have the potential to help individuals with cognitive impairments, as well as healthy individuals looking to optimize their mental performance.


Combining the power of artificial intelligence with neurotherapy, we are creating personalized treatment plans that adapt to the unique needs of each patient. This approach aims to provide more effective and efficient therapies for a range of neurological conditions.

**Our Team**:
Our team is composed of leading experts in neuroscience, AI, biomedical engineering, and healthcare. We are passionate about pushing the boundaries of what is possible and dedicated to making a real difference in the lives of individuals around the world. Our collaborative approach ensures that we are always at the forefront of innovation, leveraging the latest research and technology to develop our products.

**Current Progress**:
We have made significant strides in our research and development efforts. Our prototypes have shown promising results in preclinical trials, and we are now gearing up for clinical trials to further validate our technologies. We have also established partnerships with leading research institutions and healthcare providers to ensure the successful deployment of our products.

**Your Support**
To bring our vision to life, we need your support. Your contributions will help us fund the next phase of our research, conduct clinical trials, and bring our products to market. By supporting NeuraTech, you are not only investing in groundbreaking technology but also in a future where advanced neurotechnology can significantly improve the lives of millions of people.

**How You Can Help**:
1. **Donate**:
    Your financial contributions will directly support our research and development efforts. Every dollar brings us closer to our goal of transforming healthcare through neurotechnology.

2. **Spread the Word**:
    Help us raise awareness about NeuraTech and our mission. Share our campaign with your friends, family, and social networks to amplify our message and reach a broader audience.

3. **Partner with Us**:
    If you are a researcher, healthcare provider, or organization interested in collaborating with us, we would love to hear from you. Together, we can achieve even greater advancements in neurotechnology.

**Our Commitment**:
Looking ahead, we aim to expand our product offerings, explore new applications of our technology, and continue our research to stay at the cutting edge of neurotechnology. Our long-term vision includes developing fully integrated neurotechnology solutions that not only restore lost functions but also enhance human capabilities beyond their natural limits.

Thank you for taking the time to learn about NeuraTech and our mission. With your support, we can make a significant impact on the future of healthcare and unlock new possibilities for human potential. Together, we can revolutionize the field of neurotechnology and improve the lives of millions around the world.`;
