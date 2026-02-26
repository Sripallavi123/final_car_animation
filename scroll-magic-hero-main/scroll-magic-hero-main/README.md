# ITZFIZZ — Scroll Animation Demo

An interactive scroll-driven animation built with React, GSAP & ScrollTrigger. A car races across a road revealing the headline text, while stat cards fade in as you scroll.

## ✨ Features

- **Scroll-triggered car animation** — car moves across the viewport as user scrolls
- **Text reveal effect** — headline is progressively unmasked by the green trail
- **Stat card fade-ins** — four stat cards appear sequentially during the scroll
- **Pinned viewport** — the animation section stays pinned while the scroll progresses

## 🛠 Tech Stack

- **React** + **TypeScript**
- **Vite** — fast dev server & build
- **GSAP** + **ScrollTrigger** — scroll-driven animations
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — component library

## 🚀 Getting Started

```sh
# Clone the repo
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📁 Project Structure

```
src/
├── assets/          # Images (car-top-view.png)
├── components/ui/   # Reusable UI components
├── pages/
│   └── Index.tsx    # Main scroll animation page
├── index.css        # Global styles & CSS variables
└── App.tsx          # App entry & routing
```

## 📄 License

MIT
