# Shakeeb's Personal Portfolio

A modern, minimal, and professional single-page portfolio website built with Next.js 13 App Router, TypeScript, Tailwind CSS, and Framer Motion. Easily customizable to showcase your work, skills, and contact info.

## Features
- Mobile-first, fully responsive layout
- Smooth scroll navigation with active section highlights
- Dark mode toggle
- Animated hero section with typed roles
- Projects, skills, about, and contact sections
- Downloadable resume
- Accessible & semantic HTML (ARIA roles, focus states)
- Animations with Framer Motion & Tailwind transitions

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) v18 or higher

### Installation
1. **Clone this repo:**
   ```bash
   git clone https://github.com/shakeeb/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment:**
   - Copy `.env.example` to `.env.local` and fill in as needed.

4. **Run locally:**
   ```bash
   npm run dev
   ```
   Site: [http://localhost:3000](http://localhost:3000)

### Build For Production
```bash
npm run build
npm start
```

## Project Structure
```
public/         # Images, favicon, resume
src/
  app/          # Next.js App Router entry
  components/   # UI components
  lib/          # Data for skills, projects, testimonials
  utils/        # Utility functions
```

## Configuration
- **Resume**: Replace `public/resume.pdf` with your own resume.
- **Profile Image**: Replace `public/profile.jpg`.
- **Project Images**: Add or update images in `public/projects/`.
- **Data**: Update `src/lib/*.ts` files for projects, skills, testimonials.

## Contact Form
- By default, the contact form sends submissions nowhere. You can integrate an email provider or backend. The API route is set up for extension.

## License
MIT
