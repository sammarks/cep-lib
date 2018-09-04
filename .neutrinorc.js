module.exports = {
  options: {
    output: '.',
    mains: {
      index: 'index',
      cep: 'cep',
      csinterface: 'csinterface/index'
    },
  },
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/library',
      {
        name: 'cep-lib',
        babel: {
          presets: [
            ['babel-preset-env', {
              targets: {
                browsers: ['chrome 27']
              }
            }]
          ]
        }
      }
    ],
    [
      '@neutrinojs/jest',
      {
        globals: {
          window: true
        }
      }
    ]
  ]
};
