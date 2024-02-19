'use strict';

const Homey = require('homey');
const { HomeyAPI } = require('homey-api');

// Development
if (process.env.DEBUG === '1') {
  try {
    // eslint-disable-next-line global-require
    require('node:inspector').waitForDebugger();
  } catch (err) {
    // eslint-disable-next-line global-require
    require('node:inspector').open(9229, '0.0.0.0', true);
  }
}

module.exports = class HomepageApiApp extends Homey.App {

  async onInit() {
    this.homeyApi = await HomeyAPI.createAppAPI({ homey: this.homey });
    this.log('App has been initialized');
  }

  // Web-API > getInfo
  async getInfo(params) {
    const info = await this.homeyApi.system.getInfo();
    const storage = await this.homeyApi.system.getStorageInfo();
    return {
      cpu: `${((info.loadavg[0] / info.cpus.length) * 100).toFixed(0)} %`,
      mem: `${((100 / info.totalmem) * (info.totalmem - info.freemem)).toFixed(0)} %`,
      storage: `${((100 / storage.total) * (storage.total - storage.free)).toFixed(0)} %`,
      temp: `${info.videoCoreTemperature} °C`,
    };
  }

};
