exports.config = {
  tests: './scenario/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:8000'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test'
}