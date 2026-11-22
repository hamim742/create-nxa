# create-nxa 🚀

A professional, SEO-friendly, and feature-rich CLI tool to instantly bootstrap new **Next.js** projects with a modern starter template. Save hours of boilerplate setup with pre-configured routing, state management, styling, and authentication.

[![npm version](https://img.shields.io/npm/v/create-nxa.svg?style=flat-flat)](https://www.npmjs.com/package/create-nxa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why use create-nxa?

Setting up a production-ready Next.js application with Tailwind CSS, Redux Toolkit, and Authentication from scratch can be time-consuming. `create-nxa` solves this by providing a clean, optimized, and fully configured starter boilerplate in seconds, letting you focus on writing code instead of configuring tooling.

---

## 🆕 What's New in v2.1.0

*   **Professional landing page**: A polished, responsive home page (hero, features, tech stack, project structure) now ships by default, replacing the stock Next.js starter screen.
*   **Navbar & Footer**: Ready-made shared components with a dark/light theme toggle.
*   **Working dark mode**: Theme switching via `next-themes` now works with Tailwind's class-based `dark:` variant.
*   **Cleaner template**: Removed unused default Next.js assets and updated SEO metadata.

---

## ✨ Features Included

*   **Modern Framework**: Next.js 16 (App Router) with Turbopack support for ultra-fast local compilation.
*   **Styling & UI**: Tailwind CSS v4 pre-configured with responsive layouts and modern design tokens.
*   **State Management**: Redux Toolkit (`@reduxjs/toolkit` and `react-redux`) setup out of the box with a pre-configured base API slice for RTK Query.
*   **Authentication Flow**: Built-in `AuthContext` provider and custom React hooks for user authentication (Login, Register, Logout, and persistent session state).
*   **Utility Hooks & Libs**: Preloaded with essential utilities like `formatDate`, `useDebounce`, `useLocalStorage`, `tailwind-merge`, and `clsx`.
*   **Linting & Code Style**: Pre-configured ESLint and Prettier for clean, consistent code.
*   **Default Landing Page**: Modern, professional home page with navbar, footer and theme toggle — ready to customize.
*   **Ready-to-use App Layouts**: Includes pre-designed Authentication Layout, responsive Admin Dashboard Layout with sidebar, and general Public Layouts.

---

## 🚀 Quick Start

Run the following command in your terminal to bootstrap a new application:

```bash
npx create-nxa <your-project-name>
```

For example:
```bash
npx create-nxa my-dashboard-app
```

Then start the dev server and open `http://localhost:3000` to see your new landing page:
```bash
cd my-dashboard-app
npm run dev
```

---

## 📁 Directory Structure

```text
my-app/
├── src/
│   ├── app/
│   │   ├── (authLayout)/          # Login & Register routes
│   │   ├── (dashboardLayout)/     # Admin Dashboard overview
│   │   └── (commonLayout)/        # Landing page (Navbar + Footer)
│   ├── components/                # Shared layout & UI components
│   ├── constants/                 # Route paths and app-wide constants
│   ├── context/                   # AuthContext providers
│   ├── hooks/                     # Custom React hooks (e.g., useLocalStorage)
│   ├── lib/                       # Third-party configurations (Axios, API clients)
│   ├── providers/                 # Combined provider wrapper
│   ├── redux/                     # Redux toolkit store and API slices
│   ├── schemas/                   # Validation schemas (Zod or custom)
│   ├── types/                     # TypeScript interfaces and types
│   └── utils/                     # Formatting & helper functions
├── public/                        # Static assets (images, icons)
├── .env.example                   # Template environment variables
├── eslint.config.mjs              # Linting configurations
└── tsconfig.json                  # TypeScript compiler options
```

---

## 🛠️ Available Scripts

Once your project is created, navigate to the folder and run:

### Development Server
```bash
npm run dev
```
Starts the app in development mode with Turbopack at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Compiles and builds the application for production.

### Start Production Server
```bash
npm run start
```
Starts the built application in production mode.

### Linting
```bash
npm run lint
```
Lints and checks for style or formatting issues.

---

## 💡 Keywords & Use Cases

This starter kit is ideal for:
- **Next.js Boilerplate with Redux Toolkit**: Easily manage global states and RTK queries in Next.js App Router.
- **Tailwind CSS v4 Starter**: Harness the power of Tailwind CSS v4's new engine with pre-configured modern layouts.
- **Next.js Authentication Boilerplate**: Preconfigured login, registration, and logout flows using Context API.
- **Admin Dashboard Layout**: A ready-to-use sidebar navigation layout for admin panels and dashboard overview.
- **Turbopack Development**: Fast local compilation with Turbopack for next-generation developer experience.

---

## 📝 License

This project is licensed under the MIT License.

