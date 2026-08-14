# O Store

A production-ready e-commerce storefront and admin dashboard starter built with Next.js 16, TypeScript, Tailwind CSS, and a Supabase-ready architecture.

## Features

- Premium storefront with mobile-first design
- Product catalog, category pages, and product detail screens
- Responsive admin dashboard overview for sales and inventory
- Supabase-ready environment configuration
- Clean project structure for staged implementation

## Getting started

1. Install dependencies:
   npm install
2. Copy the environment template:
   cp .env.example .env.local
3. Start the app:
   npm run dev
4. Open http://localhost:3000

## Staged implementation status

This project currently includes:

- Stage 1: Project setup
- Stage 2: Database schema and environment prep
- Stage 3: Authentication scaffolding ready for Supabase integration
- Stage 4: Storefront home and product pages
- Stage 5: Product system with mock catalog data
- Stage 6: Cart and checkout flows planned next
- Stage 7: Orders and admin dashboards
- Stage 8: Inventory and coupon systems planned next
- Stage 9: Reviews, SEO, and security hardening planned next

## Deployment

- Frontend: Vercel
- Database/auth/storage: Supabase
- Add environment variables in Vercel and Supabase before deployment

## Notes

This starter intentionally keeps several advanced flows as TODOs until the next implementation stage, in order to avoid fake functionality.
