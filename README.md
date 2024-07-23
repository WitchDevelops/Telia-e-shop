# Turborepo Tailwind CSS starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-tailwind
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make sharing one `tailwind.config.js` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Understanding the Apps

This project has everything you need for a full-fledged `Next.js` application with comprehensive tooling:

-`Apps`:

- `apps/web` : Your main Next.js application. This is where you'll build your web app's user interface (UI), pages, routing logic, and all user interaction features.

- `apps/docs` : A dedicated Next.js application for your project documentation. Create guides, API references, tutorials, and more to help users understand your project.

## Understanding the Apps

**`apps/web` vs. `apps/docs`:**

| Feature         | `apps/web` (Your Web App)                       | `apps/docs` (Your Documentation)             |
| --------------- | ----------------------------------------------- | -------------------------------------------- |
| Purpose         | Core application logic, UI, and user experience | Guides, API references, tutorials, etc.      |
| Deployment      | Main website or web app                         | Subdirectory (e.g., `/docs`) on your website |
| Content Type    | Pages, components, interactive elements         | Markdown, code snippets, explanations        |
| Target Audience | End-users                                       | Developers, users seeking information        |

## [ESLint config] (https://turbo.build/repo/docs/guides/tools/eslint)

## Installation and Setup

1. Clone the Repository: `git clone `
2. Install Dependencies: `cd <project-directory>`
   `npm install`
3. Turbo CLI: This project uses Turborepo, which provides the turbo command-line interface (CLI) for efficient task management. Make sure you have Turbo installed globally: `npm install turbo --global`
4. Start development servers

## Basic Commands

This Turborepo starter provides several convenient commands to manage your development workflow:

| Command            | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| npm run dev        | Starts development servers for both the web app (at http://localhost:3000) and the docs app (at http://localhost:3001). |
| npm run build      | Builds both apps for production, generating optimized output in the dist folder.                                        |
| npm run start      | Starts the production server for the web app (usually after building with npm run build).                               |
| npm run lint       | Runs ESLint to analyze your code for potential errors and style issues.                                                 |
| npm run type-check | Checks your TypeScript code for type errors.                                                                            |
| npm run format     | Formats all code using Prettier to maintain consistent style.                                                           |
| npm run clean      | Clears the Turborepo cache to optimize build times and resolve potential issues.                                        |

## Turbo Tasks

Turborepo also offers a powerful task runner for more advanced scenarios. You can use the `turbo` command directly in your terminal.

| Command                  | Description                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| turbo build --filter=web | Builds only the web app.                                                                                      |
| turbo lint --filter=ui   | Lints only the ui package.                                                                                    |
| turbo dev --parallel     | Runs development servers for both apps concurrently, potentially improving performance on multi-core systems. |
