# iLearnova Landing Page Components

This document describes all the landing page components created to replicate the ilearnova.com website.

## Component Structure

All landing page components are located in `/components/landing/` directory.

## Components List

### 1. **Navigation.tsx**
- Fixed navigation bar at the top
- Contains logo, menu links, and "Get Started" button
- Responsive with mobile hamburger menu
- Sticky positioning with backdrop blur effect

### 2. **HeroSection.tsx**
- Full-screen hero section with animated background
- Auto-rotating slides for Students, Teachers, and Parents
- Mouse-tracking gradient effect
- Floating animated icons (GraduationCap, Star, BookOpen, CheckCircle)
- CTA buttons: "Get Started" and "Watch Demo"
- Image showcase with floating stat badges
- Slide indicators for manual navigation

### 3. **StudentTeacherCards.tsx**
- Two side-by-side cards
- Student card (blue gradient)
- Teacher card (teal gradient)
- Hover scale effects
- CTA buttons for each audience

### 4. **SuccessSection.tsx**
- "Our Success" heading
- Description of school achievements
- Dark gradient background

### 5. **FeaturesSection.tsx**
- "All-In-One Cloud Software" section
- Three feature cards:
  - Online Billing, Invoicing, & Contracts
  - Easy Scheduling & Attendance Tracking
  - Customer Tracking
- Icons positioned above cards
- Hover animations on icons

### 6. **WhatIsSection.tsx**
- "What is Ilearnova?" heading
- Platform description
- Centered content with teal accent color

### 7. **ClassroomSection.tsx**
- Two-column layout
- Left: Text content about physical classroom features
- Right: Illustration image
- Hover scale effect on image

### 8. **OurFeaturesSection.tsx**
- "Our Features" section
- Two-column layout with image and feature list
- Three bullet points with icons:
  - Teachers Podium space
  - TA/presenter positioning
  - Student visibility
- Animated decorative circles
- Hover slide-in effect on list items

### 9. **ToolsSection.tsx**
- "Tools For Teachers And Learners" section
- Light background (gray-50)
- Two-column layout
- Image with hover scale effect

### 10. **ClassManagementSection.tsx**
- "Class Management Tools for Educators" section
- Description of management features
- Image with decorative animated circle
- Hover scale effect

### 11. **OneOnOneSection.tsx**
- "One-on-One Discussions" section
- Two-column layout (reversed order)
- Description of private discussion features
- Image with hover effect

### 12. **Footer.tsx**
- Four-column footer layout:
  - Logo & description
  - Quick Links
  - Resources
  - Contact information
- Social links placeholders
- Copyright notice
- Responsive design

## Main Page Integration

The main page (`/app/page.tsx`) imports and renders all components in order:

```tsx
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import StudentTeacherCards from "@/components/landing/StudentTeacherCards";
import SuccessSection from "@/components/landing/SuccessSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import ClassroomSection from "@/components/landing/ClassroomSection";
import OurFeaturesSection from "@/components/landing/OurFeaturesSection";
import ToolsSection from "@/components/landing/ToolsSection";
import ClassManagementSection from "@/components/landing/ClassManagementSection";
import OneOnOneSection from "@/components/landing/OneOnOneSection";
import Footer from "@/components/landing/Footer";
```

## Features Implemented

### Animations
- Bounce animations on icons
- Pulse effects on badges
- Hover scale transformations
- Slide-in transitions
- Auto-rotating hero slides
- Mouse-tracking gradient background

### Responsive Design
- Mobile-first approach
- Breakpoints for sm, md, lg, xl screens
- Hamburger menu for mobile
- Flexible grid layouts
- Responsive text sizes

### Styling
- Tailwind CSS utility classes
- Gradient backgrounds (slate-900, purple-900)
- Custom color schemes (yellow, orange, teal, purple)
- Backdrop blur effects
- Shadow effects (shadow-2xl)
- Border radius (rounded-3xl, rounded-full)

### Icons
- Lucide React icons throughout
- GraduationCap, Users, Award, BookOpen, CheckCircle, Star, Play, ChevronRight, Mail, Phone, MapPin, Menu, X

## Images Used

All images are sourced from the original site:
- `https://dimatech-lsm-frontend.vercel.app/group1.png` - Hero image
- `https://dimatech-lsm-frontend.vercel.app/group-80.svg` - Billing icon
- `https://dimatech-lsm-frontend.vercel.app/group-81.svg` - Scheduling icon
- `https://dimatech-lsm-frontend.vercel.app/group-79.svg` - Tracking icon
- `https://dimatech-lsm-frontend.vercel.app/group-17.svg` - Classroom illustration
- `https://dimatech-lsm-frontend.vercel.app/group-86@2x.png` - Feature icon
- `https://dimatech-lsm-frontend.vercel.app/group-88@2x.png` - Feature icon
- `https://dimatech-lsm-frontend.vercel.app/group-122.svg` - Tools illustration
- `https://dimatech-lsm-frontend.vercel.app/group124.png` - Management illustration
- `https://dimatech-lsm-frontend.vercel.app/group106.png` - Discussion illustration

## Next Steps

To further customize:
1. Update links in Navigation to point to actual routes
2. Replace placeholder images with your own assets
3. Modify text content to match your branding
4. Add more interactive features
5. Implement actual functionality for CTA buttons
6. Add form components for contact/signup
7. Integrate with backend API
8. Add SEO metadata

## Color Scheme

- **Primary**: Yellow-400 to Orange-500 (gradients)
- **Secondary**: Teal-500, Purple-900
- **Background**: Slate-900, Purple-900 (dark theme)
- **Accent**: Blue-500, Indigo-600, Emerald-500, Cyan-700
- **Text**: White, Gray-300, Gray-200

## Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Black: 900
