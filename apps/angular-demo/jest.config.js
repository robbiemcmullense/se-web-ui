module.exports = {
  name: "advisor",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/advisor",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
