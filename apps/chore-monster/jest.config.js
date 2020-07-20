module.exports = {
  name: 'chore-monster',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/chore-monster',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
