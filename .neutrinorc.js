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
        name: 'cep-lib'
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
