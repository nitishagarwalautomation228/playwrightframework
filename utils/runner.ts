import { execSync } from 'child_process';

// Step 1: Get the NODE_ENV (default to 'qa' if undefined)
const env = process.env.NODE_ENV?.toLowerCase() || 'qa';

// Step 2: Block production environment
if (env === 'prod') {
  console.error('❌ Tests should NOT be run in production environment. Aborting...');
  process.exit(1); // Exit with failure
}

// Step 3: Log the environment
console.log(`✅ Running Playwright tests in "${env}" environment...`);

// Step 4: Trigger Playwright tests
try {
  execSync('npx playwright test', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Playwright tests failed.');
  process.exit(1);
}
