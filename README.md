# TravelTrucks - Camper Rental Service

A modern web application for searching and renting campers with a wide selection of vehicles and convenient filtering system.

## 🚀 Features

- **Homepage** with attractive hero banner and call-to-action button
- **Campers catalog** with filtering by location, vehicle type, and equipment
- **Detailed camper page** with interactive photo gallery (lightbox), reviews, and booking form
- **Advanced filtering system** with multiple criteria selection
- **Favorites list** with localStorage persistence (survives page refresh)
- **"Load More" functionality** for progressive loading of camper cards
- **Toast notifications** for successful booking confirmations

## 🛠 Technologies

- **React** - UI library with modern hooks
- **Redux Toolkit** - modern state management solution
- **React Router** - routing with nested routes support
- **Axios** - HTTP client for API requests
- **CSS Modules** - scoped styling for components
- **React Toastify** - beautiful user notifications
- **Vite** - fast build tool with hot reload


## 📦 Installation and Setup

### System Requirements

- Node.js version 18.0.0 or higher
- npm version 8.0.0 or higher (or yarn)

### Step-by-step Guide

1. **Clone the repository:**

  
   git clone https://github.com/fd1134/traveltrucks-react-frontend.git
   cd traveltrucks
   

2. **Install dependencies:**

 
   npm install
   

3. **Start development server:**

 
   npm run dev

4. **Open browser at:** `http://localhost:5173`


## 🎯 Implementation Features

### State Management (Redux Toolkit)

The project uses modern Redux Toolkit with three main slices:

- **`campers`** - stores campers list, current camper, loading state
- **`filters`** - active search filters (location, vehicle type, equipment)
- **`favorites`** - list of favorite camper IDs (persisted in localStorage)

### API Integration

- All API requests are separated into a service layer (`src/services/api.js`)
- Uses axios for HTTP requests
- Implements error handling and loading states
- Supports filtering and pagination

### Component Architecture

- Each component has its own folder with JSX file and CSS module
- Uses functional components with hooks


### Routing

- React Router v6 with nested routes support
- Lazy loading for pages optimization
- SPA support in production (vercel.json)

## 🌐 API

The project uses MockAPI for demonstration purposes:

**Base URL:** `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io`

**Endpoints:**

- `GET /campers` - get list of all campers
- `GET /campers/:id` - get details of specific camper

**Filtering:** Implemented on frontend with support for:

- Location search (case-insensitive)
- Vehicle type filtering (panelTruck, fullyIntegrated, alcove)
- Equipment filtering (AC, transmission, kitchen, TV, bathroom)

## 🚀 Deployment

The project is ready for deployment on cloud platforms.



