# figma-starter

Starter kit for creating Figma plugins

## Features

-   🏆 Full React support
-   🚀 Full Typescript support
-   ✨ ESLint + Prettier setup
-   ⚡️ Development mode with auto reload
-   🤖 Production mode with bundle optimization
-   🔥 Yarn v2 for dependencies management
-   💄 Emotion CSS in JS library for writing CSS
-   🎉 SVGR setup for svg management

## System Requirements

Node.js v11.7.0+

## How to use

1. Download this respository content
1. Create your own repository for plugin and change project info on your personal in `manifest.json` / `package.json` (optional)
1. Install dependencies: run `yarn` in terminal
1. Sync plugin with Figma: in desktop app "Plugins" -> "Development" -> "New plugin" -> "Link existing plugin"
1. For development: `yarn dev` and run plugin from Figma "Plugins" menu (Watch mode)
1. For production: `yarn prod` and run plugin from Figma "Plugins" menu (Optimized version)

## Project structure

**ui.tsx** – entrypoint for all interface code (iframe). Outputs in `build/ui.html`

**code.ts** – entrypoint for all figma logic code (sandbox). Outputs in `build/code.js`

**components** – folder with React components (.tsx)

**utils** – folder with scripts (.ts)

**icons** – folder with icons (.svg)

## VSCode setup

Project uses Yarn PnP feature so you need to show VSCode how to properly resolve your dependencies.

In your terminal run command:

```
yarn pnpify --sdk
```

And after that choose pnpify version of Typescript: open any TS file -> "Command + Shift + P" -> "Typescript: Select Typescript Version..." -> choose version with "pnpify" in name

Recommended editor settings:

```json
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.suggest.showWords": false,
    "editor.snippetSuggestions": "none",
    "emmet.showAbbreviationSuggestions": false
```

And make sure you don't disable standart typescript and javascript validation!

## Available scripts

| `yarn <command>` | Description                            |
| ---------------- | -------------------------------------- |
| `dev`            | Develop your plugin in watch mode      |
| `prod`           | Build optimized version of your plugin |
| `eslint`         | Lint all your scripts                  |
| `tsc`            | Run typescript check                   |
