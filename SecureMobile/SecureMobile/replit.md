# replit.md

## Overview

This is a full-stack web application built with React and Express.js that serves as a landing page for Android security applications. The project showcases three security apps: SecureWall Firewall, CyberGuard Antivirus, and PrivacyShield Anti-Spy. It features a modern, responsive design with smooth animations and a comprehensive UI component library.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Shared TypeScript schema definitions
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Landing Page**: Complete marketing website with multiple sections
- **UI Components**: Comprehensive component library including buttons, cards, dialogs, forms, and navigation
- **Layout Components**: Navigation, hero section, features, reviews, and footer
- **Mobile-First Design**: Responsive components optimized for all screen sizes

### Backend Components
- **Express Server**: RESTful API server with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Development Tools**: Vite integration for SSR and hot module replacement

### Shared Components
- **Schema Definitions**: Type-safe database schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles requests and delegates to storage layer
3. **Data Storage**: Storage interface provides CRUD operations (currently in-memory)
4. **Response Handling**: Type-safe responses flow back through the system
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for React
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for creating component variants

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Development
- **Server**: tsx runs the Express server with TypeScript support
- **Client**: Vite dev server with HMR and React Fast Refresh
- **Database**: Drizzle Kit pushes schema changes directly to database

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production

### Environment Configuration
- **Database**: Uses `DATABASE_URL` environment variable for PostgreSQL connection
- **Development Detection**: Automatically configures based on `NODE_ENV`
- **Replit Integration**: Special handling for Replit environment with cartographer plugin

### Database Management
- **Schema**: Located in `shared/schema.ts` for type safety
- **Migrations**: Generated in `./migrations` directory
- **Connection**: Configured for PostgreSQL with Neon Database serverless driver

The application is designed to be easily deployable to various platforms with minimal configuration changes, supporting both traditional hosting and serverless deployment patterns.