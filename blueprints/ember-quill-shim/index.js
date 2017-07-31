/* eslint-env node */
module.exports = {
  description: '',

  afterInstall() {
    return this.addPackageToProject('quill');
  }
};
