interface Comment {
  author: string;
  content: string;
  date: string;
}

export interface HelpPost {
  id: number;
  type: 'discussion' | 'fundraising' | 'rescue';
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: Comment[];
  raised?: number;
  goal?: number;
}

export const helpPosts: HelpPost[] = [
  {
    id: 1,
    type: 'fundraising',
    title: 'Help Rebuild Green Valley Community Center',
    content: 'Our community center was severely damaged by recent floods. We need your support to rebuild and make it stronger than ever. The center serves as a crucial gathering point and emergency shelter for our community.',
    author: 'Sarah Chen',
    date: '2024-03-15',
    likes: 245,
    raised: 75000,
    goal: 150000,
    comments: [
      {
        author: 'Michael Wong',
        content: 'This center means so much to our community. Count me in!',
        date: '2024-03-15'
      },
      {
        author: 'Emily Parker',
        content: 'Just donated! Hope we can reach the goal soon.',
        date: '2024-03-15'
      }
    ]
  },
  {
    id: 2,
    type: 'rescue',
    title: 'Elderly Residents Need Evacuation Assistance',
    content: 'Several elderly residents in the Oakwood Apartments need help evacuating due to the approaching storm. We need volunteers with 4x4 vehicles and medical training if possible.',
    author: 'Dr. James Martinez',
    date: '2024-03-14',
    likes: 89,
    comments: [
      {
        author: 'Lisa Thompson',
        content: 'I have a 4x4 and basic medical training. On my way!',
        date: '2024-03-14'
      },
      {
        author: 'Robert Chen',
        content: 'I can help with transportation. DMing you my contact details.',
        date: '2024-03-14'
      }
    ]
  },
  {
    id: 3,
    type: 'discussion',
    title: 'Community Preparedness Workshop Feedback',
    content: 'What did everyone think about yesterday\'s workshop? I found the emergency communication section particularly helpful.',
    author: 'Alex Johnson',
    date: '2024-03-13',
    likes: 56,
    comments: [
      {
        author: 'Emma Davis',
        content: 'The hands-on demonstrations were excellent. Would love to see more of those!',
        date: '2024-03-13'
      },
      {
        author: 'David Wilson',
        content: 'Great workshop! The emergency kit checklist was very comprehensive.',
        date: '2024-03-13'
      }
    ]
  },
  {
    id: 4,
    type: 'fundraising',
    title: 'Support Local Farm Recovery After Storm Damage',
    content: 'The recent storms have devastated our small organic farm that supplies fresh produce to local food banks. We need help replacing damaged equipment and rebuilding greenhouses to continue serving our community.',
    author: 'Maria Rodriguez',
    date: '2024-03-15',
    likes: 178,
    raised: 12000,
    goal: 35000,
    comments: [
      {
        author: 'Tom Baker',
        content: 'Our restaurant will match donations up to $5000. This farm is vital to our community!',
        date: '2024-03-15'
      }
    ]
  },
  {
    id: 5,
    type: 'rescue',
    title: 'Emergency Pet Evacuation Needed',
    content: 'Local animal shelter in flood-prone area needs help evacuating 20+ animals. Need volunteers with carriers and vehicles. Time-sensitive request!',
    author: 'Kelly Martinez',
    date: '2024-03-15',
    likes: 122,
    comments: [
      {
        author: 'Sam Wilson',
        content: 'I have a van and several carriers. Will be there in 30 minutes.',
        date: '2024-03-15'
      }
    ]
  },
  {
    id: 6,
    type: 'discussion',
    title: 'Solar Panel Installation for Emergency Power',
    content: 'Looking for recommendations on reliable solar installers for backup power systems. After the last outage, many of us want to be better prepared.',
    author: 'Chris Zhang',
    date: '2024-03-14',
    likes: 89,
    comments: [
      {
        author: 'Patricia Lee',
        content: 'We used SunTech Solutions last month. Great service and competitive pricing.',
        date: '2024-03-14'
      }
    ]
  },
  {
    id: 7,
    type: 'fundraising',
    title: 'Emergency Medical Supply Fund',
    content: 'Raising funds to stock emergency medical supplies in community centers across high-risk areas. These supplies will be crucial during natural disasters when medical services are stretched thin.',
    author: 'Dr. Sarah Williams',
    date: '2024-03-14',
    likes: 156,
    raised: 8500,
    goal: 25000,
    comments: [
      {
        author: 'Mark Johnson',
        content: 'As a paramedic, I can help create the supply list and train volunteers.',
        date: '2024-03-14'
      }
    ]
  },
  {
    id: 8,
    type: 'rescue',
    title: 'Volunteers Needed for Sandbag Station',
    content: 'Urgent: Need strong volunteers to help fill and distribute sandbags at the community center. Flooding expected in the next 48 hours.',
    author: 'Fire Chief Thompson',
    date: '2024-03-15',
    likes: 67,
    comments: [
      {
        author: 'Mike Chen',
        content: 'Bringing 5 people from our construction crew to help.',
        date: '2024-03-15'
      }
    ]
  },
  {
    id: 9,
    type: 'discussion',
    title: 'Creating Neighborhood Emergency Response Teams',
    content: 'Would anyone be interested in forming local emergency response teams? We could organize training sessions and create communication protocols.',
    author: 'Linda Park',
    date: '2024-03-13',
    likes: 145,
    comments: [
      {
        author: 'Robert Kim',
        content: 'Great idea! I\'m CERT certified and happy to help coordinate.',
        date: '2024-03-13'
      },
      {
        author: 'Jessica Martinez',
        content: 'Our block would definitely participate. Let\'s set up a meeting!',
        date: '2024-03-14'
      }
    ]
  },
  {
    id: 10,
    type: 'fundraising',
    title: 'School Emergency Preparedness Program',
    content: 'Fundraising to implement emergency preparedness programs in local schools. Includes emergency supplies, educational materials, and training for staff and students.',
    author: 'Principal Anderson',
    date: '2024-03-12',
    likes: 234,
    raised: 15000,
    goal: 45000,
    comments: [
      {
        author: 'Teacher Smith',
        content: 'This is crucial for our students\' safety. The PTA is fully supporting this initiative.',
        date: '2024-03-12'
      }
    ]
  }
];