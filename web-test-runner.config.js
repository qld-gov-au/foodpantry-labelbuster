// web-test-runner.config.js
const { playwrightLauncher } = require('@web/test-runner-playwright');

module.exports = {
  files: 'test/**/*.test.js',
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: 'chromium' })],
  testFramework: { config: { ui: 'bdd', timeout: 5000 } },
};
