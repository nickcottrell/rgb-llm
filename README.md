RGB-LLM Prompt Mapper

A minimal open-source React + Vite app for reasoning about three poles of any problem using the RGB color model. Each axis (R, G, B) represents a tension or emphasis. The sliders produce both a structured JSON output and a color swatch as intuitive feedback.

⸻

🚀 Getting Started

Install

npm install

Run Dev Server

npm run dev

Open http://localhost:5173.

Build

npm run build

The build artifacts go into dist/.




⸻

🌐 Deploy (GitHub Pages)

This repo is prepped for GitHub Pages using Vite + Actions.
    1.    Edit vite.config.ts and set the base to your repo name:

base: '/rgb-llm/',


    2.    Push to main.
    3.    GitHub Actions will build and deploy automatically.
    4.    Your site will be available at:

https://<username>.github.io/rgb-llm/



⸻

📖 Usage

See USAGE.md for details on:
    •    How to frame opposites vs. independent poles
    •    How to interpret the color swatch (black/white/grey/bright)
    •    Example applications (Good vs Fast vs Cheap, Creative Writing, etc.)

⸻

🛠 Tech Stack
    •    React + TypeScript
    •    Vite (bundler, dev server)

⸻


DEMO

https://nickcottrell.github.io/rgb-llm/

