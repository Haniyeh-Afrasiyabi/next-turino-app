# Turino - Tour Booking Platform

**Turino is a modern and responsive platform for browsing, selecting, and booking nature and historical tours, developed using Next.js 14 and cutting-edge technologies.**

---

## 🚀 Technologies Used

- **Next.js 14** with App Router (React 18)
- **React Context API** for global state management (Authentication, UI state)
- **React Hook Form** and **Yup** for robust form validation
- **React Query (Tanstack Query)** for server state management and API caching
- **React Toastify** for toast notifications
- **Next/Image** for optimized image loading
- **Tailwind CSS** for styling
- **Intl.DateTimeFormat** with Persian locale for Jalali calendar date formatting
- **Custom fonts** integrated via Next.js `localFont`
- **Cookies** for secure token storage and authentication handling

---

## 📦 Project Structure

- `src/app/` - Main Next.js app routes and layouts
- `src/components/` - Reusable UI components (TourCard, SearchForm, Modals, etc.)
- `src/components/modules/` - Larger UI modules (TourDetail, UserTransactions, UserTours, etc.)
- `src/core/context/` - React Context providers for authentication and UI states
- `src/core/services/` - API service functions (fetch tours, user data, transactions)
- `public/images/` - Static assets and images
- `src/fonts/` - Custom font files

---

## 🔐 Authentication

- Phone number login via OTP verification
- Access tokens stored in cookies (HttpOnly and Secure) on the backend, managed client-side as well
- Authenticated routes protected using HOC `withAuth`
- Login state managed via React Context
- Redirects and modals prompt user login when accessing protected features (like booking)
- Error handling with friendly toast messages

---

## ✅ Features

### Tours

- Display list of tours with search and filtering
- Responsive tour cards with images, prices, capacity, and details
- Mobile-friendly "Show More" toggle for long lists
- Detailed tour pages with images, itinerary, capacity, transport, insurance, and pricing
- Add tours to basket with authentication check

### User Area

- View user transactions history with formatted date and price
- View purchased tours with Persian date formatting
- Informative empty states when no transactions or tours exist

### UI / UX

- Fully RTL design with Persian language support
- Custom fonts integrated for consistent typography
- Loading indicators for async data fetches
- Toast notifications for success and errors
- Metadata (title, favicon) set in app layout for SEO and UX

---

## 🛠️ Detailed Development Process & Implemented Features

### 1. **Project Initialization**

- Started the project using `create-next-app` with Next.js 14 and enabled the new **App Router**.
- Set up **Tailwind CSS** for styling and configured custom fonts using Next.js `localFont` API.
- Configured project structure under `src/app` and organized components modularly.

### 2. **Authentication System**

- Implemented phone number based login with OTP verification.
- Managed authentication state globally via React Context (`LoginContext`).
- Tokens stored securely in HttpOnly cookies by the backend, with client-side logic to maintain session.
- Created a Higher-Order Component (`withAuth`) to protect pages that require login.
- Designed modals for login and OTP input, shown conditionally based on auth state.
- Handled errors and notifications with **React Toastify**, informing users about login status.

### 3. **Tours Management**

- Built API service functions (`src/core/services/config.js`) to fetch tours, individual tour details, user tours, and transactions.
- Developed a responsive **TourList** component that:
  - Shows tours with pagination and a mobile-friendly "Show More" button.
  - Dynamically adjusts visible tours based on screen size using window resize events.
- Created **TourDetail** pages that display:
  - Tour images with optimized `<Image>` component.
  - Tour attributes: title, price, capacity, insurance info, transportation.
  - Ability to add tours to basket with proper user authentication checks.
- Implemented loading states and error handling while fetching tour data.

### 4. **User Transactions & Purchased Tours**

- Developed pages to show **User Transactions** and **User Tours**:
  - Data fetched using React Query and API calls.
  - Dates formatted to Persian Jalali calendar using `Intl.DateTimeFormat` with Persian locale.
  - Show empty states with friendly messages if no data exists.
- Ensured both pages require authentication and redirect if user is not logged in.

### 5. **UI/UX Enhancements**

- Fully **Right-to-Left (RTL)** layout with Persian language support.
- Custom fonts and consistent typography applied site-wide.
- Global loading spinners and skeleton loaders for better feedback during data fetches.
- Toast notifications for user feedback on actions (success, error).
- Responsive design for mobile and desktop with flexible layouts.
- Implemented a custom image slider with smooth transitions for the "Why Turino?" section.
- Added SEO-friendly metadata (`title`, `favicon`) inside the root layout, improving browser tab display and search engine ranking.

### 6. **State Management & Performance**

- Used React Context API for managing authentication and UI state globally.
- Employed **React Query (Tanstack Query)** to cache API responses and manage server state, reducing redundant requests.
- Optimized image loading via Next.js `Image` component to serve responsive, cached images.
- Debounced user inputs (e.g., in search forms) to reduce unnecessary re-renders and API calls.
- Applied best practices for error handling and user notifications.

### 7. **Routing and Navigation**

- Utilized Next.js 14 App Router for file-system based routing.
- Created nested layouts and route groups for modular UI.
- Protected sensitive routes with `withAuth` HOC.
- Implemented client-side navigation and redirects after actions like login and booking.

### 8. **Other Key Implementations**

- Custom toast notifications integrated with RTL support for better UX in Persian.
- Cookie management utilities for reading, setting, and deleting tokens on client side.
- Modal confirmations before sensitive actions like deleting or booking.
- Responsive and accessible buttons, forms, and inputs across the application.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
