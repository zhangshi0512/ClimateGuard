interface Schedule {
  time: string;
  activity: string;
}

interface Registration {
  details: string;
  capacity?: number;
  deadline?: string;
}

interface RelatedUpdate {
  id: number;
  title: string;
  description: string;
}

export interface CommunityUpdate {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  fullContent: string;
  schedule?: Schedule[];
  registration?: Registration;
  relatedUpdates?: RelatedUpdate[];
}

export const communityUpdates: CommunityUpdate[] = [
  {
    id: 1,
    title: "Emergency Preparedness Workshop",
    date: "2024-03-15",
    location: "Community Center",
    description: "Join us this Saturday for a comprehensive workshop on emergency preparedness. Learn essential skills and create your family emergency plan.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
    fullContent: "Our Emergency Preparedness Workshop is designed to help community members develop comprehensive emergency plans and build essential skills. Led by experienced emergency response professionals, this interactive workshop will cover various aspects of emergency preparedness, from creating family emergency plans to assembling emergency kits.",
    schedule: [
      { time: "9:00 AM", activity: "Registration and Welcome" },
      { time: "9:30 AM", activity: "Emergency Planning Basics" },
      { time: "10:30 AM", activity: "Break" },
      { time: "10:45 AM", activity: "Hands-on Emergency Kit Assembly" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Emergency Response Scenarios" },
      { time: "2:30 PM", activity: "Q&A Session" },
      { time: "3:00 PM", activity: "Workshop Conclusion" }
    ],
    registration: {
      details: "Space is limited to 50 participants. Registration is required. Please bring a notepad and any specific questions you may have about emergency preparedness.",
      capacity: 50,
      deadline: "2024-03-14"
    },
    relatedUpdates: [
      {
        id: 3,
        title: "Community Flood Response Training",
        description: "Special training session on flood response and evacuation procedures."
      }
    ]
  },
  {
    id: 2,
    title: "New Weather Station Installation",
    date: "2024-03-14",
    location: "North District",
    description: "Local weather monitoring capabilities enhanced with new station deployment. This upgrade will provide more accurate and timely weather data for our community.",
    image: "https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=800&q=80",
    fullContent: "We're excited to announce the successful installation of our new state-of-the-art weather station in the North District. This advanced monitoring system will significantly enhance our ability to track local weather conditions and provide more accurate, timely weather data to our community. The station includes sensors for temperature, humidity, wind speed and direction, precipitation, and atmospheric pressure.",
    relatedUpdates: [
      {
        id: 1,
        title: "Emergency Preparedness Workshop",
        description: "Learn essential skills and create your family emergency plan."
      }
    ]
  },
  {
    id: 3,
    title: "Community Flood Response Training",
    date: "2024-03-20",
    location: "Fire Station #5",
    description: "Special training session on flood response and evacuation procedures. All community members are encouraged to attend.",
    image: "https://images.unsplash.com/photo-1525466760727-1d8be8721154?auto=format&fit=crop&w=800&q=80",
    fullContent: "Join us for a comprehensive training session on flood response and evacuation procedures. This hands-on training will cover essential aspects of flood safety, including early warning signs, evacuation protocols, and emergency response procedures. Our experienced trainers will guide you through various scenarios and provide practical tips for protecting your family and property during flood events.",
    schedule: [
      { time: "10:00 AM", activity: "Introduction to Flood Safety" },
      { time: "11:00 AM", activity: "Evacuation Procedures" },
      { time: "12:00 PM", activity: "Lunch Break" },
      { time: "1:00 PM", activity: "Practical Exercises" },
      { time: "2:30 PM", activity: "Emergency Communication" },
      { time: "3:30 PM", activity: "Closing Session" }
    ],
    registration: {
      details: "This training is open to all community members. While registration is not required, it is recommended to ensure adequate materials for all participants.",
    },
    relatedUpdates: [
      {
        id: 1,
        title: "Emergency Preparedness Workshop",
        description: "Learn essential skills and create your family emergency plan."
      }
    ]
  }
];