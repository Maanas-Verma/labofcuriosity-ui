// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    video: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 60000,
    viewportWidth: 1366,
    viewportHeight: 768,
    scrollBehavior: 'center',
    env: {
      backendUrl: 'https://cmop-staging.icicilabs.com',
      isEncryptedLogin: false,
      waitTime: 0
    }
  }
});
