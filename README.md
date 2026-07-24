# Product Listing Application

A responsive product listing page built with Next.js (App Router), React, TypeScript, and Tailwind CSS. This project fetches and displays data from the public Fake Store API, featuring client-side filtering, responsive grid layouts, and polished error/loading state handling.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites
- Node.js (v18.17 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation & Execution

1. **Clone the repository** (or navigate to the extracted project folder):
   ```bash
   git clone <your-repository-url>
   cd <project-folder-name>

2. Install dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev

4. Open the application:

   Navigate to http://localhost:3000 in your browser to view the project.

## 🛠️ What I Would Improve With More Time

Custom Backend Architecture: I would transition away from the mock public API and integrate a dedicated backend service (such as Node.js with a database like MongoDB) to handle server-side pagination, robust search algorithms, and structured data models.

UI/UX & Visual Polish: I would refine the loading states by implementing highly accurate skeleton loaders that match the exact dimensions of the cards, ensuring a completely pixel-perfect visual transition before the data loads.

Advanced Filtering & Performance: I would add a custom useDebounce hook to the search input to optimize rendering performance, alongside additional filtering options (like sorting by price or category).