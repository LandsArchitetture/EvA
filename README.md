# Ev.A

A SvelteKit application built with Svelte 5, TailwindCSS, and modern web technologies.

## Prerequisites

- Node.js (v20.x or higher recommended)
- npm (v10.x or higher)

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/LandsArchitetture/EvA.git
cd EvA
npm install
```

The `npm install` command will automatically run the `prepare` script which executes `svelte-kit sync` to set up the SvelteKit project.

## Development

### Starting the Development Server

Start a development server with hot module replacement:

```sh
npm run dev
```

Or start the server and automatically open the app in your browser:

```sh
npm run dev -- --open
```

The development server will be available at `http://localhost:5173` by default.

### Code Formatting

Format all files using Prettier:

```sh
npm run format
```

This will automatically format all files according to the project's Prettier configuration.

### Linting

Check code quality and formatting:

```sh
npm run lint
```

This command runs both Prettier (in check mode) and ESLint to ensure code quality and consistent formatting.

## Testing

### End-to-End Tests

Run Playwright end-to-end tests:

```sh
npm test
```

Or run the e2e tests directly:

```sh
npm run test:e2e
```

**Note:** Before running tests for the first time, you may need to install Playwright browsers:

```sh
npx playwright install
```

The tests will automatically build the project and start a preview server on port 4173 before running.

## Building

### Creating a Production Build

Build the application for production:

```sh
npm run build
```

This creates an optimized production build in the `.svelte-kit/output` directory.

### Preview Production Build

Preview the production build locally:

```sh
npm run preview
```

This will start a local server to preview your production build.

## Project Structure

```
├── e2e/                 # End-to-end tests
├── src/
│   ├── component/       # Svelte components
│   ├── data/           # Data files
│   ├── lib/            # Library code
│   ├── routes/         # SvelteKit routes
│   ├── app.css         # Global styles
│   └── app.html        # HTML template
├── static/             # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint and check formatting
- `npm test` - Run end-to-end tests
- `npm run test:e2e` - Run Playwright tests

## Deployment

The project uses `@sveltejs/adapter-auto` which automatically detects your deployment platform. For specific platforms, you may need to install and configure a different [adapter](https://svelte.dev/docs/kit/adapters).

Popular adapter options:

- `@sveltejs/adapter-node` - For Node.js servers
- `@sveltejs/adapter-vercel` - For Vercel
- `@sveltejs/adapter-netlify` - For Netlify
- `@sveltejs/adapter-static` - For static hosting
