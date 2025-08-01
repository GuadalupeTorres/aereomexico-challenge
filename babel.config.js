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
        '@assets': './src/assets',
        '@screens': './src/screens',
      }
    }]
  ]
};
