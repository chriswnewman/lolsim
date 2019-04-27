module.exports = {
  name: "lolsim",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/lolsim/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
