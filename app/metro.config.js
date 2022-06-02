const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../');
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);
const { transformer, resolver } = config;

config.watchFolders = [workspaceRoot];

(config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]),
  (module.exports = (async () => {
    const {
      resolver: { sourceExts, assetExts },
    } = await getDefaultConfig();
    return {
      transformer: {
        ...transformer,
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        ...resolver,
        assetExts: assetExts.filter((ext) => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
      },
    };
  })());
