# 🚐 Van Life - Van Rental Platform

A modern web application built with React and TypeScript for browsing and renting campervans. This project features a complete rental platform with user authentication, van listings, and a host dashboard for managing rental properties.

## 📋 Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
-   [Project Structure](#project-structure)
-   [Environment Variables](#environment-variables)
-   [Available Scripts](#available-scripts)
-   [Authentication](#authentication)
-   [Routing](#routing)
-   [Firebase Integration](#firebase-integration)
-   [Development](#development)

## ✨ Features

### Public Features

-   **Van Browsing**: Browse available vans with filtering by type (Simple, Luxury, Rugged)
-   **Van Details**: View detailed information about each van including pricing and photos
-   **Responsive Design**: Mobile-friendly interface with modern UI
-   **Filter System**: Dynamic URL-based filtering with search params

### Host Features (Authenticated)

-   **Dashboard**: Overview of income, reviews, and listed vans
-   **Van Management**: View and manage your listed vans
-   **Income Tracking**: Monitor rental income (placeholder)
-   **Reviews**: View customer reviews (placeholder)
-   **Van Details**: Detailed van information with pricing and photos tabs

### Authentication

-   Firebase Authentication integration
-   Protected routes for host features
-   Persistent login state with localStorage
-   Redirect after login to requested page

## 🛠 Tech Stack

-   **Frontend Framework**: React 19.1.1
-   **Language**: TypeScript + JSX
-   **Build Tool**: Vite 7.1.7
-   **Routing**: React Router DOM 7.9.4
-   **Backend**: Firebase (Firestore Lite + Authentication)
-   **Mock API** (Development): MirageJS 0.1.48
-   **Styling**: CSS Modules
-   **Linting**: ESLint 9

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn
-   Firebase account (for production)

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd van-life
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory:

    ```env
    VITE_ENV=local  # Use 'local' for MirageJS, 'production' for Firebase
    VITE_API_KEY=your_firebase_api_key
    VITE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_PROJECT_ID=your_firebase_project_id
    VITE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VITE_APP_ID=your_firebase_app_id
    VITE_MEASUREMENT_ID=your_firebase_measurement_id
    ```

4. **Start the development server**

    ```bash
    npm run dev
    ```

5. **Open your browser**

    Navigate to `http://localhost:5173`

## 📁 Project Structure

```
van-life/
├── public/                 # Static assets
├── src/
│   ├── api/               # API integration
│   │   ├── firebase.ts    # Firebase configuration
│   │   └── index.ts       # API functions
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable components
│   │   ├── AboutContent/
│   │   ├── AuthRequired/  # Protected route wrapper
│   │   ├── Badge/         # Van type badges
│   │   ├── ErrorDetail/   # Error display
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── HostVanLayout/ # Host van detail layout
│   │   ├── Layout/        # Main app layout
│   │   └── Loading/       # Loading state
│   ├── pages/
│   │   ├── About/
│   │   ├── Home/
│   │   ├── Host/          # Host dashboard and features
│   │   │   ├── Dashboard/
│   │   │   ├── Incomes/
│   │   │   ├── Nav/
│   │   │   ├── Reviews/
│   │   │   ├── Vans/
│   │   │   └── common/    # Shared host components
│   │   ├── Login/
│   │   ├── NotFound/
│   │   └── Vans/          # Public van browsing
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions
│   ├── App.jsx            # Main app component & routing
│   ├── main.jsx           # App entry point
│   ├── server.js          # MirageJS mock server
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🔐 Environment Variables

| Variable                   | Description                                |
| -------------------------- | ------------------------------------------ |
| `VITE_ENV`                 | Environment mode (`local` or `production`) |
| `VITE_API_KEY`             | Firebase API key                           |
| `VITE_AUTH_DOMAIN`         | Firebase auth domain                       |
| `VITE_PROJECT_ID`          | Firebase project ID                        |
| `VITE_STORAGE_BUCKET`      | Firebase storage bucket                    |
| `VITE_MESSAGING_SENDER_ID` | Firebase messaging sender ID               |
| `VITE_APP_ID`              | Firebase app ID                            |
| `VITE_MEASUREMENT_ID`      | Firebase measurement ID                    |

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🔒 Authentication

The app uses Firebase Authentication with email/password sign-in.

**Test Credentials** (MirageJS - Development only):

-   Email: `b@b.com`
-   Password: `p123`

Protected routes automatically redirect to `/login` if the user is not authenticated, and return to the requested page after successful login.

## 🗺 Routing

### Public Routes

-   `/` - Home page
-   `/about` - About page
-   `/vans` - Browse all vans
-   `/vans/:id` - Van detail page
-   `/login` - Login page

### Protected Routes (Requires Authentication)

-   `/host` - Host dashboard
-   `/host/income` - Income tracking
-   `/host/vans` - Host's van list
-   `/host/vans/:id` - Host van details
-   `/host/vans/:id/pricing` - Van pricing details
-   `/host/vans/:id/photos` - Van photos
-   `/host/reviews` - Customer reviews

## 🔥 Firebase Integration

The app integrates with Firebase for:

1. **Firestore Lite**: Van data storage and retrieval
2. **Authentication**: User login and session management

### API Functions

-   [`getVans()`](src/api/index.ts) - Fetch all vans
-   [`getVan(id)`](src/api/index.ts) - Fetch a single van by ID
-   [`getHostVans(id)`](src/api/index.ts) - Fetch vans by host ID
-   [`loginUser(credentials)`](src/api/index.ts) - Authenticate user

## 👨‍💻 Development

### Mock Data (MirageJS)

When `VITE_ENV=local`, the app uses MirageJS for mock API responses. The mock server is configured in [src/server.js](src/server.js) with:

-   6 sample vans (various types and prices)
-   1 test user account
-   Login endpoint simulation

### Key Components

-   **[`Badge`](src/components/Badge/Badge.tsx)**: Reusable badge component for van types
-   **[`VansList`](src/pages/Host/common/VansList/VansList.tsx)**: Reusable van list component
-   **[`HostVanLayout`](src/components/HostVanLayout/HostVanLayout.tsx)**: Nested layout for host van details with tabs
-   **[`AuthRequired`](src/components/AuthRequired/AuthRequired.tsx)**: HOC for protecting routes

### Utilities

-   [`genNewSearchParamString()`](src/utils/functions.ts) - Generate URL search param strings
-   [`genNewSearchParamsObj()`](src/utils/functions.ts) - Update search params state

## 🎨 Styling

-   Custom CSS with modular approach
-   Responsive design with mobile-first approach
-   Color palette:
    -   Primary: `#ff8c38` (Orange)
    -   Background: `#fff7ed` (Cream)
    -   Dark: `#161616`
    -   Text: `#4d4d4d`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the Scrimba React course.

## 🙏 Acknowledgments

-   Scrimba for the course and project inspiration
-   Firebase for backend services
-   MirageJS for development mock server

---

Built with ❤️ using React, TypeScript, and Vite
