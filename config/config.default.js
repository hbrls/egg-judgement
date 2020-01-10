const fs = require('fs');
const path = require('path');


module.exports = app => {
  const config = {
    props: {},
  };

  config.keys = app.name + 'default-dev-key';

  config.security = {
    csrf: false,
  };

  return config;
};
