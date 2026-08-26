# Personal Portfolio & Dev Blog

Welcome to my personal corner of the internet! This site is a combination of my portfolio and developer blog (blog posts coming soon). 

I built it to share the software projects I'm working on, write down things I learn along the way, and document my journey as a developer. Take a look around, check out my work, or read through my posts!

**See it live:** [https://emahove.co.za](https://emahove.co.za)



## Tech Stack & Architecture

- **Framework:** [VitePress](https://vitepress.dev) (Vue 3 + Vite static site generator)
- **Styling & Theme:** [Catppuccin](https://github.com/catppuccin/vitepress) (Latte / Mocha)
- **Language:** TypeScript
- **Analytics:** [Umami Analytics](https://umami.is) (Privacy-focused, cookie-free telemetry)
- **Hosting & Deployment:** [Netlify](https://www.netlify.com) (Automated CI/CD linked to GitHub main branch)



## Features

- **Project Showcase:** Structured catalog detailing core development stacks and features.
- **Technical Blog:** Markdown-powered articles focusing on problem-solving and software topics.
- **Fully Responsive Layout:** Optimized viewing experience across mobile, tablet, and desktop screens.


## Local Development Setup

Follow these steps to spin up a local copy of this portfolio site for development or testing:

### Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18+ recommended) and a package manager installed.

### 1. Clone the Repository
```bash
git clone https://github.com/emmanuelmahove/dev-porfolio
cd dev-porfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
This project isolates telemetry keys from source control. Duplicate the example configuration template:
```bash
cp .env.example .env
```
Open the newly created `.env` file and supply your tracking instances:
```env
VITE_UMAMI_SCRIPT_URL=https://cloud.umami.is/script.js
VITE_UMAMI_SITE_ID=your-private-website-id
```

### 4. Run Development Server
```bash
npm run dev
```
Your local server will spin up and the site can be accessed at `http://localhost:5173`.


## Deployment & Production

Production builds are compiled cleanly through standard scripts:

```bash
# Build the static site files
npm run build

# Preview the built production files locally
npm run preview
```

### CI/CD Deployment
This project is deployed to **Netlify** using automatic webhooks. 

**Important Deployment Note:** For analytics to record properly in the build phase, you must declare `VITE_UMAMI_SCRIPT_URL` and `VITE_UMAMI_SITE_ID` as **Environment Variables** within your Netlify Site Configuration dashboard.


## License

Distributed under the MIT License. See `LICENSE` for more details.


## Connect With Me

- **LinkedIn:** [emmanuel-mahove](https://www.linkedin.com/in/emmanuel-mahove)
- **Stack Overflow:** [emmanuel-mahove](https://stackoverflow.com/users/11770891/emmanuel-mahove)
- **GitHub:** [@emmanuelmahove](https://github.com/emmanuelmahove)
