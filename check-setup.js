// Quick setup verification script
// Run with: node check-setup.js

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking project setup...\n');

// Check Node.js version
const nodeVersion = process.version;
console.log(`✅ Node.js version: ${nodeVersion}`);

// Check if node_modules exists
const nodeModulesExists = fs.existsSync(path.join(__dirname, 'node_modules'));
if (nodeModulesExists) {
  console.log('✅ node_modules folder found');
} else {
  console.log('❌ node_modules folder NOT found');
  console.log('   Run: npm install');
}

// Check if package.json exists
const packageJsonExists = fs.existsSync(path.join(__dirname, 'package.json'));
if (packageJsonExists) {
  console.log('✅ package.json found');
} else {
  console.log('❌ package.json NOT found');
}

// Check required source files
const requiredFiles = [
  'src/main.jsx',
  'src/App.jsx',
  'index.html',
  'vite.config.js',
  'tailwind.config.js'
];

console.log('\n📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n🚀 Next steps:');
if (!nodeModulesExists) {
  console.log('   1. Run: npm install');
  console.log('   2. Run: npm run dev');
} else {
  console.log('   Run: npm run dev');
}

console.log('\n✨ Setup check complete!');

