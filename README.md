# ADmyBRAND Insights - Analytics Dashboard

A modern, AI-powered analytics dashboard for digital marketing agencies built with Next.js 14+, TypeScript, and Tailwind CSS.

## ✨ Features

### 📊 Dashboard Features
- **Overview Page** with key metrics cards (Revenue, Users, Conversions, Growth %)
- **Interactive Charts** - Line chart, bar chart, pie/donut chart using Recharts
- **Data Table** with sorting, filtering, and pagination
- **Responsive Design** - Perfect on desktop, tablet, and mobile devices

### 🎨 UI/UX Features
- **Modern Design System** - Consistent colors, typography, and spacing
- **Beautiful Visual Hierarchy** - Clear information architecture
- **Smooth Animations** - Micro-interactions, hover effects, loading states
- **Dark/Light Mode Toggle** - Full theme support
- **Loading Skeletons** - Beautiful placeholder states

### ⚡ Technical Features
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Real-time Updates** (simulated with intervals)
- **Export Functionality** (PDF/CSV)
- **Advanced Filters** with date ranges

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── dashboard/         # Dashboard components
│   ├── providers/         # Context providers
│   └── ui/                # Reusable UI components
└── lib/
    ├── mock-data.ts       # Sample data
    └── utils.ts           # Utility functions
```

## 🎯 Key Components

- **Header** - Navigation with theme toggle and user menu
- **MetricCard** - Animated metric display cards
- **Charts** - Revenue, channel performance, device distribution
- **DataTable** - Campaign performance table
- **LoadingSkeleton** - Placeholder components

## 🎨 Design System

The dashboard uses a modern design system with:
- **Primary Colors**: Blue to Emerald gradient
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first approach

## 📊 Mock Data

The dashboard includes realistic mock data for:
- Revenue metrics and trends
- User engagement data
- Campaign performance
- Channel distribution
- Device analytics

## 🔧 Built With

- [Next.js 14+](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Recharts](https://recharts.org/) - Data visualization
- [Lucide React](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme switching
- [bolt.new](https://bolt.new/) - AI-powered development environment

### Environment Variables
If you add any environment variables, make sure to configure them in your Vercel project settings.

## 📄 License

© 2024 ADmyBRAND Insights. Built as a showcase project.
