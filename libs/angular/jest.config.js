module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/myangularlib',

  displayName: 'angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
