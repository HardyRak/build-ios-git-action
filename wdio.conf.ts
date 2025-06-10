export const config: WebdriverIO.Config = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',

  port: 4723,
  specs: ['test/specs/**/*.spec.ts'],
  exclude: [],

  maxInstances: 10,

  hostname: 'localhost',
  logLevel: 'info' as const,
  capabilities: [
      {
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 15',
        'appium:platformVersion': '17.0',
        'appium:app': 'ios/App/DerivedData/Build/Products/Release-iphoneos/App.app',
      },
  ],
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['appium'],
  framework: 'mocha',
  reporters: ['junit', 'allure'],
  mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
  },
};
