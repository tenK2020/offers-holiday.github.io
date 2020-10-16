(function(root, factory) {
  try {
    // commonjs
    if (typeof exports === 'object') {
      module.exports = factory();
    // global
    } else {
      root.SalesPopups = factory();
    }
  } catch(error) {
    console.log('Isomorphic compatibility is not supported at this time for SalesPopups.')
  }
})(this, function() {

  // We need DOM to be ready
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }

  // Create SalesPopups object
  SalesPopups = {
    // In case toast creation is attempted before dom has finished loading!
    create: function() {
      console.error([
        'DOM has not finished loading.',
        '\tInvoke create method when DOM\s readyState is complete'
      ].join('\n'))
    }
  };
  var autoincrement = 0;

  // Initialize library
  function init() {
    console.log("initialized");

    // Toast container
    var container = document.createElement('div');
    container.id = 'salespopups-container';
    document.body.appendChild(container);

    // @Override
    // Replace create method when DOM has finished loading
    SalesPopups.create = function(options) {
      var toast = document.createElement('div');
      toast.id = ++autoincrement;
      toast.id = 'toast-' + toast.id;
      toast.className = 'salespopups-toast';

      // text
      if (options.text) {
          var p = document.createElement('p');
          p.className = 'salespopups-text';
          p.innerHTML = options.text;
          toast.appendChild(p);
      }

      // title
      if (options.title) {
        var h4 = document.createElement('h4');
        h4.className = 'salespopups-title';
        h4.innerHTML = options.title;
        toast.appendChild(h4);
      }

      // text
      if (options.ago) {
          var p = document.createElement('p');
          p.className = 'salespopups-time-ago';
          p.innerHTML = options.ago;
          toast.appendChild(p);
      }

      // icon
      if (options.icon) {
        var img = document.createElement('img');
        img.src = options.icon;
        img.className = 'salespopups-icon';
        toast.appendChild(img);
      }

      // click callback
      if (typeof options.callback === 'function') {
        toast.addEventListener('click', options.callback);
      }

      // toast api
      toast.hide = function() {
        toast.className += ' salespopups-fadeOut';
        toast.addEventListener('animationend', removeToast, false);
      };

      // autohide
      if (options.timeout) {
        setTimeout(toast.hide, options.timeout);
      }

      if (options.type) {
        toast.className += ' salespopups-' + options.type;
      }

      toast.addEventListener('click', toast.hide);


      function removeToast() {
        document.getElementById('salespopups-container').removeChild(toast);
      }

      document.getElementById('salespopups-container').appendChild(toast);
      return toast;

    }
  }

  return SalesPopups;

});