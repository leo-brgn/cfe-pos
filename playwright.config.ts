import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'./tests',use:{baseURL:'http://127.0.0.1:4173/cfe-pos/',browserName:'chromium'},webServer:{command:'npm run preview -- --host 127.0.0.1',url:'http://127.0.0.1:4173/cfe-pos/',reuseExistingServer:!process.env.CI}});
