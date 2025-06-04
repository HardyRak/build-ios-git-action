import { expect } from '@wdio/globals';

describe('Ionic List App', () => {
  it('should display the device time', async () => {
    await browser.pause(3000);

    const deviceTime = await browser.getDeviceTime();
    console.log('Device time==============================>', deviceTime);
  });

});
