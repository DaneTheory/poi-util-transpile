module.exports = {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          electron: '1.8',
        },
        loose: true,
      },
    ],
    require.resolve('@babel/preset-stage-0'),
    require.resolve('@babel/preset-react'),
  ],
  plugins: [
    require.resolve('babel-plugin-dynamic-import-node'),
    require.resolve('babel-plugin-add-module-exports'),
  ],
  ignore: [],
  only: [/.es$/],
  babelrc: false,
}
