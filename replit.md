# Rishikesh Sarangi — Portfolio

A personal developer portfolio built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui, and Framer Motion.

## Architecture

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui components with custom glassmorphism theme
- **Animations:** Framer Motion
- **Data fetching:** TanStack Query v5
- **Routing:** React Router DOM v6

## Key Features

- **Bento Grid Projects layout** — curated projects use `col-span` / `row-span` for varied card sizes (large, wide, tall, small)
- **GitHub Auto-Sync** — `src/hooks/use-github-repos.ts` fetches all public repos from `Rishicreates20` via the GitHub REST API on every page load. New repos (not in the hardcoded list) appear automatically under "Auto-synced from GitHub" with a live indicator
- Dark-first glassmorphism design with teal/cyan primary accent
- Responsive navbar, animated hero, skills tabs, experience timeline, contact form, footer

## Project Structure

```
src/
  components/         # All page sections + shadcn UI primitives
    HeroSection.tsx
    ProjectsSection.tsx   ← Bento Grid + GitHub sync
    SkillsSection.tsx
    ExperienceSection.tsx
    AboutSection.tsx
    ContactSection.tsx
    Navbar.tsx / Footer.tsx
  hooks/
    use-github-repos.ts   ← GitHub API hook (TanStack Query)
    use-theme.tsx
    use-mobile.tsx
  pages/
    Index.tsx
    NotFound.tsx
  lib/utils.ts
  index.css             ← CSS vars, Tailwind, custom utilities
```

## GitHub Integration

- GitHub username: `Rishicreates20`
- API endpoint: `https://api.github.com/users/Rishicreates20/repos?sort=updated&per_page=100`
- Filters out forks and archived repos
- Caches results for 10 minutes (staleTime)
- Repos matching hardcoded `HARDCODED_GITHUB_URLS` are deduped — only net-new repos appear in the GitHub section
- Every time you create a new GitHub repo it will automatically show up in the portfolio

## Running

The workflow "Start application" runs `npm run dev` on port 5000.
