module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@screens': './screens',
            '@components': './components',
            '@assets': './assets',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};
