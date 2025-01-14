const { spawn } = require('child_process');

// Function to log memory usage every 5 seconds
setInterval(() => {
  const memoryUsage = process.memoryUsage();
  console.log(`
    Memory Usage:
    - RSS: ${(memoryUsage.rss / 1024 / 1024).toFixed(2)} MB
    - Heap Total: ${(memoryUsage.heapTotal / 1024 / 1024).toFixed(2)} MB
    - Heap Used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB
    - External: ${(memoryUsage.external / 1024 / 1024).toFixed(2)} MB
  `);
}, 5000);

// Run the React build script with increased memory limit
const buildProcess = spawn('node', [
  '--max-old-space-size=10240', // 10GB memory limit
  'node_modules/react-scripts/scripts/build.js'
], { stdio: 'inherit' });

// Log exit code or errors
buildProcess.on('close', (code) => {
  console.log(`Build process exited with code ${code}`);
  process.exit(code);
});

buildProcess.on('error', (error) => {
  console.error('Build process failed:', error);
});