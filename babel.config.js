module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@navigation': './src/navigation',
        '@components': './src/components',
        '@store': './src/store',
        '@styles': './src/styles',
        '@assets': './assets',
        '@screens': './src/screens',
        '@hooks': './src/hooks',
        '@utils': './src/utils',
        '@services': './src/services',
        '@redux': './src/redux',
        '@mocks': './src/mocks',
      }
    }]
  ]
};
