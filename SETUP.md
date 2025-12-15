# Setup Guide for Tutelar Tech Labs Website

## Prerequisites

### 1. Install Node.js and npm

If you don't have Node.js installed, download and install it from:
- **Official Website**: https://nodejs.org/
- **Recommended Version**: LTS (Long Term Support) version (v20.x or higher)

After installation, verify it's working:
```bash
node --version
npm --version
```

### 2. Install VS Code Extensions (Optional but Recommended)

Open VS Code and install the recommended extensions:
- Press `Ctrl+Shift+X` to open Extensions
- Or go to Extensions → Install Recommended Extensions

**Recommended Extensions:**
- **ESLint** - JavaScript/React linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **TypeScript and JavaScript Language Features** - Better JS/TS support
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Path IntelliSense** - Autocomplete file paths

## Installation Steps

### 1. Install Project Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Motion (animations)
- Lucide React (icons)

### 2. Run Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:5173**

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### npm command not found

If you see "npm is not recognized", you need to:
1. Install Node.js from https://nodejs.org/
2. Restart your terminal/VS Code
3. Verify installation: `node --version` and `npm --version`

### Port 5173 already in use

If the port is busy, Vite will automatically use the next available port (5174, 5175, etc.)

### Module not found errors

Run `npm install` again to ensure all dependencies are installed.

## Project Structure

```
Tutelar_new/
├── src/
│   ├── components/     # All React components
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Need Help?

If you encounter any issues:
1. Make sure Node.js is installed (`node --version`)
2. Delete `node_modules` folder and `package-lock.json`
3. Run `npm install` again
4. Check that all VS Code extensions are installed

