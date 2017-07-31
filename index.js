/* eslint-env node */
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-quill-shim',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/quill.js');
    this.import('vendor/shims/quill.js');
  },

  treeForVendor(vendorTree) {
    var quillTree = new Funnel(path.join(this.project.root, 'node_modules', 'quill', 'dist'), {
      files: ['quill.js', 'quill.snow.css', 'quill.core.css'],
    });

    return new MergeTrees([vendorTree, quillTree]);
  },
};
