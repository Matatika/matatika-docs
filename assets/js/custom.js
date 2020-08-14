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

  function regexAlternate(array) {
    let regex_string = '';
    array.forEach(function (e, i) {

      regex_string += e;
      if (i !== e.length - 1) {
        regex_string += '|';
      }
    });

    return regex_string;
  }
  const languages = ['curl', 'python', 'node'];
  const HEADING_REGEX = new RegExp(`${regexAlternate(languages)}[^\s]*`, 'i');

  // for every ul of 'tabs' class
  $('ul.tabs').each(function (i) {
    let base_ul = $(this);

    let id = null;
    if (i != 0) {
      id = `tabs-${i}`;
    } else {
      id = 'tabs';
    }

    let base_div = $(`<div id="${id}"></div>`).insertAfter(base_ul);

    let tabs = [];

    // find code snippet headings
    base_ul.children('li').each(function () {
      let base_ul_li = $(this);
      // maybe rework?
      let name = base_ul_li.clone().children().remove().end().text().trim();
      tabs.push({ name: name, contents: base_ul_li.find('li') });
      base_ul_li.remove();
    });

    if (tabs.length) {

      tab_buttons_div = $('<div class="tabs"></div>').appendTo(base_div);
      base_ul.remove();

      tabs.forEach(function (tab) {
        $(`<button>${tab.name}</button>`).appendTo(tab_buttons_div);
      });

      tabs.forEach(function (tab) {
        tab_contents_div = $(`<div class="tab-contents"></div>`).appendTo(base_div);
        tab.contents.each(function () {
          let html = $(this).html();
          $(`<div>${html}</div>`).appendTo(tab_contents_div);
        });
      });
    }

  });
}


$(document).ready(function () {

  createSnippetTabs();
  $('.tabs').show();
  $('.tab-contents').hide();

  $('.tabs button').click(function () {
    let index = $(this).index();
    $(this).parent().siblings('.tab-contents').hide();
    $(this).parent().siblings('.tab-contents').eq(index).show();
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
