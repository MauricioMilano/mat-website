# Callseg Consórcio Website

A modern web application for Callseg Consórcio, a financial service that enables customers to acquire assets through consortium plans without paying traditional interest rates.

## 📋 Overview

This website showcases Callseg's consortium services in partnership with Porto Seguro, offering plans for:
- **Real Estate** (Imóveis): R$70.000 - R$900.000 with terms up to 200 months
- **Vehicles** (Auto): R$25.000 - R$200.000 with terms of 50-90 months
- **Heavy Equipment** (Pesados): R$180.000 - R$360.000 with 120-month terms

The platform emphasizes transparency, zero-interest financing (only administrative fees apply), and the ability to use a "lance" (bid) to increase chances of early contemplation.

## 🚀 Features

- **Interactive Consortium Calculator**: Simulate payments with different lance values and contemplation timelines
- **Plan Comparison**: Detailed breakdown of available consortium categories
- **Step-by-Step Guide**: Visual explanation of how consortiums work
- **WhatsApp Integration**: Direct contact with specialists
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Modern UI**: Built with ShadCN components and Tailwind CSS

## 🛠️ Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN (Radix UI primitives)
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/
│   ├── Calculator.tsx     # Interactive payment simulator
│   ├── Hero.tsx           # Main banner section
│   ├── HowItWorks.tsx     # Step-by-step process explanation
│   ├── Plans.tsx          # Consortium plan details
│   └── ui/                # Reusable UI components
├── pages/
│   ├── Index.tsx          # Main page
│   └── NotFound.tsx       # 404 page
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
└── App.tsx                # Root application component
```

## 🔧 Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Build for production:
   ```bash
   pnpm build
   ```
5. Preview production build:
   ```bash
   pnpm preview
   ```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm build:dev` - Build for development mode
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## 🎯 How Consortiums Work

1. **Choose a Plan**: Select asset type and credit value
2. **Simulate & Define Lance**: Use the calculator to estimate payments and set your lance amount/percentage
3. **Contact via WhatsApp**: Talk to specialists to formalize your participation
4. **Participate in Assemblies**: Monthly drawings where contemplation occurs
5. **Receive Credit Letter**: When contemplado, use your credit to purchase as cash buyer

## 💰 Key Benefits

- **Zero Interest**: Only pay administrative fees (no financial charges)
- **Flexible Terms**: Long payment periods adapted to your budget
- **Purchasing Power**: Negotiate as cash buyer when contemplado
- **Institutional Security**: Regulated by Central Bank of Brazil
- **Specialized Consulting**: Expert guidance on lance strategy and planning

## 📞 Contact

WhatsApp: (12) 98291-0109

## ©️ 2026 Callseg Consórcio
All rights reserved.