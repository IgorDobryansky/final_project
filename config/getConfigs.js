const GlobalConfig = require("../models/GlobalConfig");

module.exports = async () => {
  const configs = await GlobalConfig.findOne({ customId: "global-configs" });
  console.log('1configs', configs);
  console.log('1configs GlobalConfig', GlobalConfig);
  console.log('1configs GlobalConfig', GlobalConfig["global-configs"]);
  return configs;
};
