## 📬 Project Overview: Email Archiving with OAuth Integration

This project is part of an **Email-Based Bid Management System**, focusing on securely archiving emails and attachments using **Gmail API**, **Google Drive**, and **OAuth 2.0**. It fetches and stores emails from authorized Gmail accounts, saves metadata in a **PostgreSQL** database, and uploads attachments to **Google Drive**. This foundational service enables future extensions like bid classification and multi-vendor tracking.

> 🔐 OAuth-secured, metadata-driven, and built for scalability.
> ✨ Supabase Auth App – Vite + React + ShadCN UI + TypeScript
---
![image](https://github.com/user-attachments/assets/155b2dbe-eb7f-4401-9858-ce0ccefd8a5a)
![image](https://github.com/user-attachments/assets/77fe7456-74ca-4538-b822-1c6bfde56c63)
![image](https://github.com/user-attachments/assets/628b3cf7-2fa0-4660-91a1-01c21a4796ef)

## 🚀 Tech Stack

- ⚡ **Vite** – Lightning-fast bundler for modern web projects
- ⚛️ **React** – UI library for building component-based apps
- 🔐 **Supabase** – Open-source Firebase alternative for auth, database, and storage
- 🦄 **ShadCN/UI** – Accessible components styled with Tailwind CSS
- 🌪 **Tailwind CSS** – Utility-first CSS framework
- 🧠 **TypeScript** – Type-safe development
- 🐾 **ESLint & Prettier** – Linting and formatting for cleaner code
- 🐰 **Bun** – (optional) Used for lock file and modern JS runtime

---

## 📁 Project Structure

```bash
├── public/                # Static assets
├── src/                   # Main source code (components, pages, logic)
├── supabase/              # Supabase configuration and service utils
├── components.json        # ShadCN component mapping
├── tailwind.config.ts     # TailwindCSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig*.json         # TypeScript configurations
├── eslint.config.js       # ESLint configuration
├── package.json           # Project metadata and scripts
├── bun.lockb              # Bun lock file (if Bun used)
└── README.md              # Project documentation
````

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
# or
bun install
```

### 3. Set up Supabase

* Create a project at [https://supabase.com](https://supabase.com)
* Get your `SUPABASE_URL` and `SUPABASE_ANON_KEY`
* Create a `.env` file and add:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run the development server

```bash
npm run dev
```

---

## ✅ Features

* 🔐 Supabase email/password authentication
* 🎨 Pre-built UI components with ShadCN (Buttons, Forms, Cards, etc.)
* 💨 Tailwind CSS utility classes for rapid design
* ⚙️ Modular code structure
* 🌐 Fast Vite dev server and HMR

---

## 🧪 Scripts

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

---

## 📦 Deployment

You can deploy this app easily to:

* **Vercel**
* **Netlify**
* **Cloudflare Pages**

Just make sure to include the `.env` variables in your dashboard.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤖 Built With Help From AI

Bootstrapped and scaffolded using AI tools to speed up initial development and component design.

---

## 🙌 Credits

* [ShadCN UI](https://ui.shadcn.dev/)
* [Vite](https://vitejs.dev/)
* [Supabase](https://supabase.com/)
* [Tailwind CSS](https://tailwindcss.com/)
