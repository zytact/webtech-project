# WebTech Project

A modern web application built with Next.js, showcasing the latest web technologies and best practices.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Linting & Formatting**: Biome
- **Package Manager**: pnpm
- **Git Hooks**: Husky (pre-commit hooks)

## Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd webtech-project
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Start the development server**:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linting with Biome
- `pnpm format` - Format code with Biome

## Development Guidelines

- **Code Style**: Follow Biome's recommended rules (2-space indentation)
- **Imports**: Use path aliases `@/*` for `./src/*`
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Types**: Strict typing required, use Readonly props for immutability
- **Error Handling**: Use try/catch for async operations
- **Classes**: Sort with `useSortedClasses` rule

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting:
   ```bash
   pnpm lint
   pnpm format
   ```
5. Commit your changes (pre-commit hooks will run automatically)
6. Push to your branch and create a pull request

## Git Hooks

This project uses Husky for Git hooks. Pre-commit hooks will automatically run linting and formatting checks before each commit.

## Deployment

Build the application for production:

```bash
pnpm build
pnpm start
```
