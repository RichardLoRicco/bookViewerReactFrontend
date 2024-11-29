Here’s a detailed README for your project:

---

# Book Viewer React Frontend

A React-based application designed to provide an interactive interface for exploring and managing books and their chapters. This frontend connects to a backend service for data retrieval and enables seamless navigation through a table of contents and individual book details.

## Features

- **Book Navigation**: View books and their respective chapters.
- **Dynamic TOC (Table of Contents)**: Easily browse and jump to different chapters.
- **Modular Components**: Clean and reusable React components.
- **Responsive Layout**: Designed to provide a consistent experience across devices.

## File Structure

Below is an overview of the major files in the project:

### Components

1. **`App.tsx`**  
   - Root component that initializes and manages the application layout and routing.

2. **`MainToc.tsx`**  
   - Displays the table of contents for books. Users can navigate chapters from this component.

3. **`Header.tsx`**  
   - Provides the header layout, including navigation links and branding.

4. **`Nav.tsx`**  
   - Contains the navigation bar logic and design.

5. **`Chapter.tsx`**  
   - Renders individual chapter content, including the text and associated information.

### Utilities

1. **`utils.ts`**  
   - Helper functions for handling reusable logic.

2. **`bookService.ts`**  
   - Provides API interactions for fetching book and chapter data.

### Types

1. **`types.ts`**  
   - Defines TypeScript interfaces and types for managing consistent data structures across components.

### Main Entry

1. **`main.tsx`**  
   - Entry point for rendering the React application.

## Installation

### Prerequisites

- Node.js and npm installed.
- A compatible backend service running.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bookViewerReactFrontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will run at [http://localhost:3000](http://localhost:3000).

4. (Optional) Connect to the backend service by updating the API endpoint in `bookService.ts`.

## Usage

- Access the homepage to view available books.
- Use the navigation bar to switch between views or return to the main Table of Contents.
- Click on chapters within the TOC to view detailed content.

## Technologies Used

- **Frontend Framework**: React
