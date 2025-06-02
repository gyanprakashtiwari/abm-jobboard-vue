# Job Board Application

A Vue.js-based job listing platform with search, filtering, and job posting functionality.

## Features

- Browse job listings with pagination
- Search jobs by title/company
- Filter by job type and location
- View job details
- Post new job listings
- Responsive design

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gyanprakashtiwari/vue-job-board.git
   cd vue-job-board
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173
   ```

## Component Breakdown

### Core Components

- `JobCard.vue`: Compact job listing card
- `JobList.vue`: Main listing page with search/filters
- `JobDetail.vue`: Detailed job view
- `PostJob.vue`: Job submission form
- `Pagination.vue`: Pagination controls

### Supporting Components

- `SearchBar.vue`: Search input with icon
- `JobFilterSidebar.vue`: Filter controls
- `FormField.vue`: Reusable form input
- `ApplyButton.vue`: Job application CTA
- `SuccessModal.vue`: Submission confirmation

## Design Decisions

### Architecture

- **Vue 3 Composition API**: For cleaner component logic
- **Pinia**: State management for jobs data
- **Vue Router**: Navigation between views
- **Bootstrap 5**: Responsive layout and styling
- **Vite**: Fast development build tool

### Key Implementation Choices

1. **Filter System**:

   - Client-side filtering for simplicity
   - URL-encoded state for shareable filters

2. **Form Handling**:

   - Reusable `FormField` component
   - Client-side validation
   - Success modal feedback

3. **Responsive Considerations**:

   - Collapsible filters on mobile
   - Card-based layout adapts to screen size
   - Mobile-first pagination

4. **Performance**:
   - Paginated job listings
   - Computed properties for efficient filtering
   - Lazy-loaded components

## Project Structure

```
src/
├── components/       # Reusable components
├── pages/            # View components
├── router/           # Navigation routes
├── store/            # Pinia state management
├── assets/           # Images/icons
└── App.vue           # Root component
```

## Available Scripts

- `dev`: Start development server
- `build`: Production build
- `preview`: Locally preview production build
- `lint`: Run ESLint
