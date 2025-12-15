# PowerShell script to install Node.js using winget
# Run this script as Administrator: Right-click PowerShell → Run as Administrator

Write-Host "🚀 Installing Node.js LTS..." -ForegroundColor Cyan

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "⚠️  This script requires Administrator privileges." -ForegroundColor Yellow
    Write-Host "Please run PowerShell as Administrator and try again." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To run as Administrator:" -ForegroundColor Yellow
    Write-Host "1. Right-click on PowerShell" -ForegroundColor Yellow
    Write-Host "2. Select 'Run as Administrator'" -ForegroundColor Yellow
    Write-Host "3. Navigate to this folder: cd '$PSScriptRoot'" -ForegroundColor Yellow
    Write-Host "4. Run: .\install-nodejs.ps1" -ForegroundColor Yellow
    exit 1
}

# Check if winget is available
try {
    $wingetVersion = winget --version
    Write-Host "✅ Winget found: $wingetVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Winget not found. Please install Windows Package Manager first." -ForegroundColor Red
    Write-Host "Download from: https://aka.ms/getwinget" -ForegroundColor Yellow
    exit 1
}

# Install Node.js LTS
Write-Host ""
Write-Host "Installing Node.js LTS (this may take a few minutes)..." -ForegroundColor Cyan
try {
    winget install OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
    Write-Host ""
    Write-Host "✅ Node.js installed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠️  IMPORTANT: Please close and reopen your terminal/VS Code for changes to take effect." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "After restarting, run these commands to verify:" -ForegroundColor Cyan
    Write-Host "  node --version" -ForegroundColor White
    Write-Host "  npm --version" -ForegroundColor White
    Write-Host ""
    Write-Host "Then install project dependencies:" -ForegroundColor Cyan
    Write-Host "  npm install" -ForegroundColor White
    Write-Host ""
    Write-Host "Finally, start the development server:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
} catch {
    Write-Host ""
    Write-Host "❌ Installation failed. Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternative: Download and install Node.js manually from:" -ForegroundColor Yellow
    Write-Host "https://nodejs.org/" -ForegroundColor Cyan
    exit 1
}

