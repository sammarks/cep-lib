module.exports = {
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
