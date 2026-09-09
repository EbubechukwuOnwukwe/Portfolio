# Ebubechukwu Onwukwe — Personal Portfolio

A modern, fully responsive personal portfolio website built with React, TypeScript, and Framer Motion. Features smooth page transitions, animated UI elements, a working contact form, and a filterable projects showcase.

---

## 🚀 Live Site

> Deployed on **Vercel** — [View Live](https://http://ebubechukwuonwukwe.vercel.app/)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript 6](https://www.typescriptlang.org/) |
| Build Tool | [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion 12](https://www.framer-motion.com/) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Icons | [React Icons v5](https://react-icons.github.io/react-icons/) |
| Contact Form | [Web3Forms](https://web3forms.com/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
Portfolio/
└── frontend/
    ├── public/                   # Static public assets
    ├── src/
    │   ├── assets/               # Images, PDF resume, favicon
    │   ├── components/
    │   │   ├── NavBar.tsx        # Responsive navigation bar
    │   │   ├── Footer.tsx        # Footer with quick links, social icons & privacy modal
    │   │   ├── Hero.tsx          # Homepage hero section
    │   │   └── TechStack.tsx     # Tech stack display component
    │   ├── pages/
    │   │   ├── Home.tsx          # Landing page
    │   │   ├── Projects.tsx      # Filterable projects grid
    │   │   ├── About.tsx         # About me page
    │   │   └── Contact.tsx       # Contact form (powered by Web3Forms)
    │   ├── App.tsx               # Root app with routing & page transitions
    │   ├── main.tsx              # React entry point
    │   ├── index.css             # Global styles
    │   └── App.css               # App-level styles
    ├── index.html                # HTML entry point
    ├── vite.config.ts            # Vite configuration
    ├── vercel.json               # Vercel SPA rewrite rules
    ├── tsconfig.json             # TypeScript config
    ├── package.json              # Dependencies & scripts
    └── .env                      # Environment variables (not committed)
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/EbubechukwuOnwukwe/Portfolio.git
   cd Portfolio/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file inside the `frontend/` directory:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

   > Get your free access key at [web3forms.com](https://web3forms.com/).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`.

---

## 📜 Available Scripts

Run these from inside the `frontend/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🌐 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section and tech stack showcase |
| `/projects` | Projects | Filterable grid of personal and professional projects |
| `/about` | About | Background, skills, and experience |
| `/contact` | Contact | Contact form powered by Web3Forms |

---

## ✨ Key Features

- **Page transitions** — Smooth fade-in/out animations between routes via Framer Motion's `AnimatePresence`
- **Filterable projects** — Filter by category (React, Django, Full-Stack, Mobile)
- **URL sanitization** — All project links are validated to only allow `http`/`https` schemes before rendering
- **Working contact form** — Sends emails via Web3Forms with full error handling and network failure recovery
- **Responsive design** — Fully adaptive layout from mobile through to desktop (xl)
- **Privacy modal** — Footer includes a privacy policy modal overlay
- **Resume download** — Direct PDF resume download from the footer

---

## 🚢 Deployment

This project is deployed on **Vercel**. The `vercel.json` at the root of `frontend/` handles SPA client-side routing by rewriting all routes to `index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

To deploy your own instance:

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com/)
3. Set the **Root Directory** to `frontend`
4. Add the `VITE_WEB3FORMS_ACCESS_KEY` environment variable in the Vercel dashboard
5. Deploy 🎉

---

## 🔐 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | Public access key for the Web3Forms contact form API | Yes |

> **Note:** `VITE_` prefixed variables are bundled into the client. The Web3Forms access key is a **public-facing form token** (not a server secret) by design — it identifies your form inbox, not authenticates a privileged operation.

---

## 👤 Author

**Ebubechukwu Onwukwe** — Full-Stack Developer

- GitHub: [@EbubechukwuOnwukwe](https://github.com/EbubechukwuOnwukwe)
- LinkedIn: [ebubechukwu-onwukwe](https://www.linkedin.com/in/ebubechukwu-onwukwe)
- Twitter / X: [@Ebubechukw32885](https://x.com/Ebubechukw32885)
- Email: ebube5298@gmail.com
