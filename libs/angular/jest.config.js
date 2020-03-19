module.exports = {
  name: 'myangularlib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/myangularlib',
  snapshotSerializers: [
    'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
