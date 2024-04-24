# PEACE & BEYOND: Dynamic Travel Itinerary Planner

## Introduction

Peace & Beyond is a dynamic travel itinerary planner that not only helps users plan trips but also adjusts recommendations in real-time based on weather, traffic, and personal preferences. The system integrates AR features for immersive destination previews and leverages free plans of weather and traffic APIs such as Open Weather and Google Maps.

[Travel & Beyond Github Repository](https://github.com/Holy-Morphism/Peace-Beyond)

## Setup Instructions

1. **Clone the repository**: Clone the Peace & Beyond repository to your local machine using the following command:

```
git clone <insert your GitHub repository link here>
```

2. **Install MongoDB**: Peace & Beyond uses MongoDB as its database. If you don't have MongoDB installed, you can download it from [here](https://www.mongodb.com/try/download/community).

3. **Install dependencies and start the server:**

```
cd server
npm install
npm run dev
```

This will install all necessary dependencies and start the server.

4. **Install dependencies and start the client:**

```
cd client
npm install
npm start
```

This will install all necessary dependencies and start the client.

Now, you should be able to access the application at `http://localhost:3000` (or whatever port you've configured).

## Features

### Admin Module

- **User Management**: Admins can create, update, and delete user accounts. User profiles include personal information, travel preferences, and saved itineraries.

- **Itinerary Management**: Admins can view and manage user-generated itineraries. They can approve or reject proposed itineraries and add custom recommendations.

- **Content Management**: Admins can update destination information, attractions, and points of interest. They can add new destinations and remove outdated content.

- **Weather Integration**: The system automatically fetches real-time weather forecasts for each destination from configured data sources. Weather conditions influence itinerary recommendations.

- **Traffic and Transportation**: The system integrates real-time traffic information from sources like Google Maps API. Traffic information affects route recommendations. Admins can set preferences for transportation modes.

### User Module

- **User Authentication**: Users can create accounts and log in securely. Authentication ensures privacy and personalized experiences.

- **Trip Planning**: Users can input travel dates, destinations, and preferences. The system generates personalized itineraries based on user inputs. Users can modify itineraries as needed.

- **Real-Time Recommendations**: The system adjusts recommendations based on real-time factors like weather conditions and traffic congestion, as well as personal preferences.

- **AR Features**: Users can access AR-powered features like virtual tours of destinations and attractions, real-time information overlays, and potentially language translation capabilities for seamless communication.

## Future Enhancements

The AR features and language translation capabilities are currently under consideration and may be added in future updates.

