# Inventory Management System

Modern inventory management web app built with **Laravel 12**, **Inertia + React**, **Vite**, and **Tailwind CSS**.

## Features
- Inventory and stock tracking
- User authentication (Laravel Fortify)
- Responsive admin-style UI (React + Tailwind)
- Fast builds and hot reload with Vite

## Tech Stack
- **Backend**: Laravel 12, PHP 8.2+
- **Frontend**: React (Inertia), Tailwind CSS, Vite
- **Auth**: Laravel Fortify

## Requirements
- PHP 8.2+
- Composer
- Node.js 18+ and npm
- MySQL/MariaDB (or another supported Laravel database)

## Setup
1. Install PHP dependencies:
   ```bash
   composer install
   ```
2. Copy env file:
   ```bash
   copy .env.example .env
   ```
3. Generate app key:
   ```bash
   php artisan key:generate
   ```
4. Configure your database in `.env`.
5. Run migrations:
   ```bash
   php artisan migrate
   ```
6. Install frontend dependencies:
   ```bash
   npm install
   ```

## Development
Run Laravel + Vite dev servers:
```bash
composer run dev
```

Or run separately:
```bash
php artisan serve
npm run dev
```

## Build
```bash
npm run build
```

## Lint & Format
```bash
composer run lint
npm run lint
npm run format
```

## Tests
```bash
composer run test
```

## Project Structure
```
app/                Laravel backend (models, controllers, etc.)
resources/js/       React frontend (Inertia pages/components)
resources/css/      Tailwind styles
routes/             Web routes
database/           Migrations and seeders
```

## Environment Notes
- Make sure `.env` has correct DB settings (`DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).
- If you use storage uploads, run:
  ```bash
  php artisan storage:link
  ```

## Scripts (Quick Reference)
From `composer.json`:
- `composer run dev` – run Laravel server, queue, and Vite together
- `composer run setup` – install deps, setup env, migrate, build

From `package.json`:
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run format`

---
If you want me to add screenshots, API docs, or deployment notes, just say the word.
