(function (document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 112,  // ~80 for header, 32 for padding

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function () {
      this.scrollToCurrent();
      $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
      $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function () {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function (href, pushToHistory) {
      var match, anchorOffset;

      if (!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if (match) {
        anchorOffset = $(match).offset().top - this.getFixedOffset();
        window.scrollTo(0, anchorOffset);

        // Add the state to history as-per normal anchor links
        if (HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function (e) {
      if (this.scrollIfAnchor(window.location.hash) && e) {
        e.preventDefault();
      }
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function (e) {
      var elem = e.target;

      if (this.scrollIfAnchor(elem.getAttribute('href'), true)) {
        e.preventDefault();
      }
    }
  };

  $(document).ready($.proxy(anchorScrolls, 'init'));
})(window.document, window.history, window.location);

$(document).ready(function () {

    // open links external to /docs in new tabs
    $('a[href^=http').each(function () {
      $(this).attr("target", "_blank");
    });  
  
  // menu icon behaviour
  $('.hamburger').click(function () {
    const content = document.querySelector('.main');
    const nav = document.querySelector('.site-nav');
    const searchBar = document.querySelector('.main-header');

    // scroll to the top
    window.scrollTo(0, 0);

    nav.classList.toggle('nav-open');
    nav.classList.toggle('offset');
    searchBar.classList.toggle('nav-open');
    content.classList.toggle('no-offset')

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      hamburgers.forEach(function (hamburger) {
        hamburger.classList.toggle("is-active");
      });
    }
  });

});