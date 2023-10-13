module.exports = (env, baseConfig) => {
  baseConfig.output.assetModuleFilename = "static/media/[name].[hash][ext]";
  return baseConfig;
};
