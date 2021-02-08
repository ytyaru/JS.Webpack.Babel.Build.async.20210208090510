module.exports = {
  mode: "production",
  entry: [
    'regenerator-runtime/runtime',
    "./src/Loader.js",
  ],
  output: {
    library: 'Loader',
    libraryExport: 'default',
    libraryTarget: 'var',
    filename: 'Loader.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // ES2020 を ES5 に変換
                ["@babel/preset-env", {useBuiltIns: "usage", corejs: 3, modules:'auto'}],
              ],
              plugins: [
                // private # を使えるようにする
                "@babel/plugin-proposal-private-methods",
                "@babel/plugin-proposal-class-properties",
                // async を使えるようにする
                ["@babel/plugin-transform-runtime", {useESModules: true, regenerator: true,}],
                "@babel/plugin-transform-async-to-generator",
                /*
                */
              ],

              sourceType: "unambiguous",
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向け
  target: ["web", "es5"],
};

