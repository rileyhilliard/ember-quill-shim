(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Quill'],
      __esModule: true,
    };
  }

  define('quill', [], vendorModule);
})();
