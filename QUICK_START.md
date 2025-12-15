# 🚀 Quick Start Guide

## The Problem
Node.js is not installed on your system, which is required to run this React project.

## Quick Fix (Choose One Method)

### Method 1: Automatic Installation (Recommended)

1. **Open PowerShell as Administrator:**
   - Press `Win + X`
   - Select "Windows PowerShell (Admin)" or "Terminal (Admin)"
   - Click "Yes" when prompted

2. **Navigate to project folder:**
   ```powershell
   cd C:\Users\srijan\Desktop\Tutelar_new
   ```

3. **Run the installation script:**
   ```powershell
   .\install-nodejs.ps1
   ```

4. **Close and reopen VS Code** after installation completes

5. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```

6. **Install dependencies:**
   ```bash
   npm install
   ```

7. **Run the project:**
   ```bash
   npm run dev
   ```

---

### Method 2: Manual Installation

1. **Download Node.js:**
   - Go to: https://nodejs.org/
   - Click "Download Node.js (LTS)" - the green button
   - Save the installer (.msi file)

2. **Install Node.js:**
   - Double-click the downloaded file
   - Click "Next" through the installation wizard
   - ✅ Make sure "Add to PATH" is checked (usually checked by default)
   - Click "Install"
   - Click "Finish"

3. **Restart VS Code completely:**
   - Close VS Code
   - Reopen VS Code
   - Open your project folder

4. **Open Terminal in VS Code:**
   - Press `` Ctrl + ` `` (backtick key)
   - Or: Terminal → New Terminal

5. **Verify Node.js is installed:**
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers like `v20.x.x` and `10.x.x`

6. **Install project dependencies:**
   ```bash
   npm install
   ```
   This will take 1-2 minutes. Wait for it to complete.

7. **Start the development server:**
   ```bash
   npm run dev
   ```

8. **Open your browser:**
   - The terminal will show: `Local: http://localhost:5173`
   - Press `Ctrl + Click` on the URL, or copy-paste it into your browser

---

## ✅ Success Checklist

After installation, you should see:
- [ ] `node --version` shows a version number
- [ ] `npm --version` shows a version number  
- [ ] `npm install` completes without errors
- [ ] `node_modules` folder is created
- [ ] `npm run dev` starts the server
- [ ] Website opens at http://localhost:5173

---

## 🆘 Still Having Issues?

1. **Make sure VS Code terminal is restarted** after Node.js installation
2. **Check if Node.js is in PATH:**
   - Open new PowerShell window
   - Run: `$env:PATH -split ';' | Select-String -Pattern 'node'`
   - Should show Node.js path

3. **Try manual PATH addition** (if needed):
   - Find Node.js installation: Usually `C:\Program Files\nodejs\`
   - Add to System PATH (see TROUBLESHOOTING.md for details)

4. **Reinstall Node.js** if nothing works

---

## 📝 What Happens After Installation?

Once Node.js is installed:
1. `npm install` downloads all required packages (React, Vite, Tailwind, etc.)
2. `npm run dev` starts a local web server
3. Your website runs at http://localhost:5173
4. Any code changes automatically refresh in the browser

---

**Need help?** Check `TROUBLESHOOTING.md` for detailed solutions.

