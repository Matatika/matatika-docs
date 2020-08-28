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
      var elem = this.findAnchorTag(e.target);
      if (!elem) elem = e.target;

      if (this.scrollIfAnchor(elem.getAttribute('href'), true)) {
        e.preventDefault();
      }
    },

    findAnchorTag: function (elem, i = 1) {
      if (i >= 5 || !elem) {
        // console.log(`Anchor element not found within ${i} recursions`);
        return false;
      }

      if ($(elem).is('a')) {
        return elem;
      } else {
        return this.findAnchorTag($(elem).parent()[0], i += 1);
      }
    }
  };

  $(document).ready($.proxy(anchorScrolls, 'init'));
})(window.document, window.history, window.location);




function createSnippetTabs() {
  // for every tab section
  $('.tab.tabs-section-start').each(function (i) {
    let first_item = $(this);

    // give multiple tab sections unique ids
    let id = null;
    if (i != 0) {
      id = `tabs-${i}`;
    } else {
      id = 'tabs';
    }

    let base_div = $(`<div id="${id}" class="tabs"></div>`).insertBefore(first_item);
    let tab_buttons_div = $('<div class="tab-button"></div>').appendTo(base_div);
    let tab_content_div = $(`<div class="tab-content"></div>`).appendTo(base_div);
    let tab_div = null;
    let elements = first_item.nextUntil($('.tabs-section-end').first().next()).addBack();

    elements.each(function () {
      let elem = $(this);

      if (elem.hasClass('tab')) {
        let tab_name = elem.text().trim();
        $(`<button>${tab_name}</button>`).appendTo(tab_buttons_div);
        tab_div = $(`<div></div>`).appendTo(tab_content_div);
      } else {
        elem.clone().appendTo(tab_div)
      }

      elem.remove();
    });
  });
}


$(document).ready(function () {

  createSnippetTabs();

  $('.tab-button button').click(function () {
    $(this).addClass('selected-tab');
    $(this).siblings().removeClass('selected-tab');
    let index = $(this).index();
    $(this).parent().siblings('.tab-content').children().hide();
    $(this).parent().siblings('.tab-content').children().eq(index).show();
  });

  $('.tab-button').each(function () {
    $(this).find('button').eq(0).click();
  });

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

  $('#postman-collection-url').after('<button class="copy" alt="copy">Copy</button>');

  $('.copy').click(function (e) {
    const $temp = $('<input>');
    $('body').append($temp);
    $temp.val($('#postman-collection-url').text()).select();
    document.execCommand('copy');
    $('.copy').text("Copied!");
    $temp.remove();
  });

});
