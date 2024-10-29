# ClimateGuard - Emergency Weather & Community Response Platform

A real-time weather monitoring and community emergency response platform built with React and TypeScript.

## Overview

ClimateGuard helps communities stay informed and coordinated during weather-related events by providing:

- Real-time weather monitoring and alerts
- Emergency resource coordination 
- Community updates and event management
- Help channel for assistance requests
- Interactive climate zone visualization

## Challenge Response

### Project Summary
ClimateGuard: A community-driven platform connecting vulnerable populations with real-time weather alerts and emergency resources.

### Challenge Description
ClimateGuard addresses the critical need for equitable access to weather-related emergency services and information. Our platform focuses on extreme weather events including floods, hurricanes, and severe storms, particularly impacting underserved urban and rural communities. The solution combines real-time weather monitoring with community-driven support systems, ensuring that vulnerable populations have both the information and resources needed to prepare for and respond to extreme weather events.

### Justice-Centered Vision
ClimateGuard promotes climate justice by democratizing access to critical weather information and emergency resources. The platform eliminates technological barriers through an intuitive interface, supports multiple languages, and facilitates community-led response initiatives. By enabling direct community participation and resource sharing, we ensure that marginalized voices are centered in emergency response efforts.

### Community Engagement Plan
- **Identification**: Partner with local community organizations and leaders
- **Participation**: Community-driven content and resource sharing
- **Cultural Relevance**: Multilingual support and culturally-sensitive communication
- **Alternative Approaches**: Focus on building trust through:
  - Community leader involvement
  - Local organization partnerships
  - Adaptation to community feedback
  - Respect for existing support networks

### Implementation Plan
1. **Phase 1: Foundation**
   - Weather monitoring infrastructure
   - Emergency resource directory
   - Basic community features

2. **Phase 2: Community Integration**
   - Local leader onboarding
   - Community resource mapping
   - Training programs

3. **Phase 3: Expansion**
   - Additional language support
   - Enhanced accessibility features
   - Mobile app development

### Interdisciplinary Collaboration
ClimateGuard combines expertise from:
- Environmental Science: Weather monitoring and prediction
- Social Work: Community engagement and support
- Technology: Platform development and accessibility
- Public Health: Emergency response coordination
- Urban Planning: Resource distribution and accessibility

### Key Features

- **Weather Dashboard**: Live weather data, forecasts, and climate risk assessments
- **Emergency Resources**: Quick access to emergency contacts, shelters, and medical facilities
- **Community Updates**: Event announcements, registration, and coordination
- **Help Channel**: Platform for posting assistance requests and coordinating community support
- **Interactive Maps**: Visual climate and weather pattern analysis

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Recharts for data visualization
- Lucide React for icons

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser to view the application (URL will be shown in terminal)

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── contexts/       # React context providers
  ├── data/          # Static data and types
  ├── pages/         # Page components
  └── main.tsx       # Application entry point
```

## Features

### Weather Monitoring
- Real-time weather data display
- Interactive climate zone maps
- Weather alerts and notifications
- Historical weather data analysis

### Emergency Resources
- Emergency contact directory
- Shelter locations and availability
- Medical facility information
- Resource deployment tracking

### Community Features
- Event management and registration
- Community updates and announcements
- Help request system
- Resource sharing coordination

### User Interface
- Responsive design for all devices
- Intuitive navigation
- Real-time updates
- Accessible interface

## Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Variables
Create a `.env` file in the root directory:
```
VITE_API_URL=your_api_url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by OpenWeather API
- Icons from Lucide React
- UI components styled with Tailwind CSS