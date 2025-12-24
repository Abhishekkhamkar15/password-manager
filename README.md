# Password Manager

A simple **Password Manager** built with **React** that lets you save, edit, delete, and copy passwords. Data is stored locally in your browser using `localStorage`.

**Live Demo:** [password-manager-omega-nine.vercel.app](https://password-manager-omega-nine.vercel.app)

---

## Features

- Add passwords with **Site/URL**, **Username**, and **Password**.  
- Edit or delete saved passwords.  
- Copy Site, Username, or Password to clipboard.  
- Show/hide password input.  
- Persistent storage with `localStorage`.

---

## Installation

1. Clone the repo:  
```bash
git clone https://github.com/yourusername/password-manager.git

password-manager/
├─ public/
│  └─ icons/       # Contains view, hide, edit, delete, copy icons
├─ src/
│  ├─ components/
│  │  └─ Manager.jsx
│  ├─ App.jsx
│  └─ index.js
├─ package.json
└─ README.md


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
