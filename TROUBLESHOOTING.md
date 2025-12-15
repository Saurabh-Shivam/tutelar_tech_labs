# Troubleshooting Guide

## Issue: Project Not Running

### Problem: Node.js is not installed

**Symptoms:**
- Error: `'node' is not recognized`
- Error: `'npm' is not recognized`
- No `node_modules` folder exists

### Solution:

#### Step 1: Install Node.js

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version
   - Choose Windows Installer (.msi) for 64-bit

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard
   - ✅ Make sure "Add to PATH" is checked (usually checked by default)
   - Click "Install"

3. **Verify Installation:**
   - Close and reopen VS Code/Terminal
   - Open a new terminal in VS Code (`Ctrl + `` `)
   - Run these commands:
     ```bash
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., v20.x.x and 10.x.x)

#### Step 2: Install Project Dependencies

Once Node.js is installed, run:

```bash
npm install
```

This will create the `node_modules` folder and install all required packages.

#### Step 3: Run the Development Server

```bash
npm run dev
```

The website should open at: **http://localhost:5173**

---

## Alternative: Using Chocolatey (Windows Package Manager)

If you have Chocolatey installed:

```powershell
choco install nodejs-lts
```

Then restart your terminal and run `npm install`.

---

## Still Having Issues?

### Check Node.js Installation Path

1. Open PowerShell as Administrator
2. Check if Node.js is in PATH:
   ```powershell
   $env:PATH -split ';' | Select-String -Pattern 'node'
   ```

### Manual PATH Addition (if needed)

1. Find where Node.js is installed (usually `C:\Program Files\nodejs\`)
2. Add it to System PATH:
   - Press `Win + X` → System → Advanced system settings
   - Click "Environment Variables"
   - Under "System variables", find "Path" → Edit
   - Add: `C:\Program Files\nodejs\`
   - Click OK on all dialogs
   - Restart VS Code

---

## Quick Checklist

- [ ] Node.js installed from nodejs.org
- [ ] VS Code/Terminal restarted after Node.js installation
- [ ] `node --version` shows a version number
- [ ] `npm --version` shows a version number
- [ ] `npm install` completed successfully
- [ ] `node_modules` folder exists
- [ ] `npm run dev` starts the server

---

## Common Errors After Installation

### Error: "Port 5173 already in use"
**Solution:** Vite will automatically use the next available port (5174, 5175, etc.)

### Error: "Cannot find module"
**Solution:** Run `npm install` again

### Error: "EACCES permission denied"
**Solution:** Run terminal as Administrator or use `npm install --legacy-peer-deps`

