# WebTech Project

A modern web application built with Next.js, showcasing the latest web technologies and best practices.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Linting & Formatting**: Biome
- **Package Manager**: bun
- **Git Hooks**: Husky (pre-commit hooks)

## Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd webtech-project
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Start the development server**:

   ```bash
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run linting with Biome
- `bun format` - Format code with Biome

## Development Guidelines

- **Code Style**: Follow Biome's recommended rules (2-space indentation)
- **Imports**: Use path aliases `@/*` for `./src/*`
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Types**: Strict typing required, use Readonly props for immutability
- **Error Handling**: Use try/catch for async operations
- **Classes**: Sort with `useSortedClasses` rule

## Contributing

Fork the repository and clone it to your local machine. Create a new branch for your changes:

```bash
git checkout -b my-new-branch
```

Add upstream:

```bash
git remote add upstream https://github.com/GourabAdhikari/webtech-project.git
```

Before pushing your changes, pull the latest changes from upstream:

```bash
git pull upstream main
```

and check for linting errors with the following command:

```bash
bun lint
```

make sure to format:

```bash
bun format
```

## Git Hooks

This project uses Husky for Git hooks. Pre-commit hooks will automatically run linting and formatting checks before each commit.

## Deployment

Build the application for production:

```bash
bun build
bun start
```
