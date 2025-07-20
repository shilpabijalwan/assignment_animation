# Assignment Animation

A visually rich, interactive React application featuring animated UI components, carousels, and prompt-based cards. Built with Vite, Tailwind CSS, and Flowbite React, this project demonstrates modern front-end techniques and creative UI/UX patterns.

## Features

- **Animated Carousels**: Two types of carousel components (`CarouselComponent` and `CarouselQueue`) display user avatars, usage stats, and prompt information with smooth transitions and navigation arrows.
- **Branching AI Cards**: Central card layout with branching path options, allowing users to explore different prompt directions and boost prompt precision.
- **Modal Popups**: Interactive modals display carousel components for enhanced user engagement.
- **Theme Toggle**: Switch between light and dark modes with a custom animated toggle button.
- **Prompt Service Card**: Pre-made template prompts and export options (PDF, PNG, JPG) to jumpstart creativity.
- **Responsive & Stylish**: Custom CSS and Tailwind classes for a modern, responsive, and visually appealing design.

## Screenshots

![Main UI](public/Screenshot%202025-07-18%20191955.png)
![Carousel Example](public/Screenshot%202025-07-18%20192539.png)

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite React](https://flowbite-react.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd assignment_animation
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/App.jsx` — Main app layout, orchestrates LeftSection, MiddlePart, and RightSection.
- `src/components/` — All UI components:
  - `LeftSection.jsx` — Trial info, top users, and generate button.
  - `MiddlePart.jsx` — Central AI card layout, branching cards, and modal trigger.
  - `RightSection.jsx` — Theme toggle, prompt stats, and prompt service card.
  - `Carousel.jsx` — Main carousel with animated cards.
  - `CarouselQueue.jsx` — Queue-style carousel for prompt usage.
  - `Modal.jsx` — Modal popup for carousels.
  - `ThemeButton.jsx` — Animated theme toggle button.
- `public/` — Static assets and images.
- `src/App.css` — Custom styles for cards, gradients, and effects.

## Customization
- **Styling**: Modify `src/App.css` and Tailwind classes for custom themes.
- **Images**: Replace images in `public/` or update image URLs in carousel data.
- **Prompts**: Edit carousel data arrays in `Carousel.jsx` and `CarouselQueue.jsx` for new prompt content.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

