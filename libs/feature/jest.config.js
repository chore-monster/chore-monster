module.exports = {
  name: 'feature',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
