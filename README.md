# Next.js Starter

This is a slightly-opinionated starter kit to get Next.js projects off the ground quickly.

Get your project started quick with:

- Next.js
- TypeScript in strict mode
- Tailwind CSS
- Prettier formatting
- ESLint
- React Testing Library

Plus some handy extra's:

- Debug the server and client directly in VSCode
- Use [tailwind-merge](https://github.com/dcastil/tailwind-merge) to merge/override Tailwind CSS classes (see components/Logo)
- Light/dark theme support

## 💡 Opinions

It might be worth reviewing the opinions/assumptions behind this starter kit:

- Some things are much more easily removed than correctly set up quickly (ie. linting, tests)
- Tailwind is the **only** way I want to style things
- TypeScript provides benefits even if you don't write any types, disable strict mode if you please
- Linting should be focused on mostly on errors + maintainabiity and follow established best practices
- A global store is not included because it's often not needed and you should critically choose the right option (ie. probably [not redux](https://github.com/pmndrs/zustand))

## ⚡️ Quick Start

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/GriffinSauce/next-starter)

## 🚀 Getting Started

Run the following command to create a new project with this Starter:

```
yarn create next-app my-app -e https://github.com/GriffinSauce/next-starter

# or

npx create-next-app my-app -e https://github.com/GriffinSauce/next-starter
```

(note: using npx / npm you may want to remove some yarn files from the root)

Once the project and dependencies are finished installing, you can navigate to that directory and start up the development server with:

```
yarn dev

# or

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your new project!

## 🛠️ Tooling

Some recommended tools:

- VSCode [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to check your code for issues
- VSCode [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) to support Tailwind `@apply` statements in .css files
- VSCode [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to get suggestions and linting
- VSCode [HeadWind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) to autosort Tailwind classes
- VSCode [Prettier formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to auto-format your code

Note: `.vscode/setting.json` is checked in, you probably want to add that to `.gitignore`.

## 📚 Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
