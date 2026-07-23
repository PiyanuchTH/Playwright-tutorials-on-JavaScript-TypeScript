// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  retries:2, //run test again
  workers: 3, //run test in sequence
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  projects:[
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        trace: 'on',
        ...devices['iphone 13'], //ระบุรุ่น apple ได้เลย
      },
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on',
        video: 'retain-on-failure', //บันทึกวีดีโอเฉพาะตอนที่ test fail
        ignoreHTTPSErrors: true, //ใช้สำหรับเว็บที่มี https ไม่ถูกต้อง SSL certificate Error
        permissions: ['geolocation'], //อนุญาตให้เข้าถึง location ของเครื่อง
        // ...devices['Galaxy Tab S9+'], //android device
        // viewport: { width: 720, height: 720 }, //ระบุความกว้างและสูงของหน้าจอ
      },
    }
  ]
  
});

module.exports = config;

