// -r ts-node/register
// -r tsconfig-paths/register
// --watch-extensions ts
// test/**/*.ts
module.exports = {
  require: 'ts-node/register',
  spec: ['test/**/*.test.ts'],
  'watch-files': ['lib/**/*.ts', 'test/**/*.test.ts'],
};
