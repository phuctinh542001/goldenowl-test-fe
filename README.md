


# Getting started
First look at the project in: [Demo](https://goldenowl-test-fe.vercel.app/)
## How To Run Locally
### Step 1: Clone the repository
```bash
git clone https://github.com/phuctinh542001/goldenowl-test-fe.git
```
```bash
cd goldenowl-test-fe
```
### Step 2: Install Dependencies
```bash
npm install
```
### Step 3: Start project
```bash
npm run dev
```

## Config Backend locally
### Step 1: Run Backend repository successfully
### Step 2: Change path API
Go to **src/App.jsx** and change:
```bash
https://goldenowl-test-be.vercel.app/api/products
```
To 
```bash
http://localhost:8080/api/products
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh