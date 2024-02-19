'use strict';

module.exports = {
  async getInfo({ homey, query }) {
    return homey.app.getInfo(query);
  },
};
