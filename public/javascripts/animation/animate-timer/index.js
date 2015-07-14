(function() {
  var appendEls, attachEvents, enableTransitions, nthDigit, reset, setAttributes, setClasses, startClock, tick;

  nthDigit = function(int, nth) {
    return parseInt(int.toString().substr(nth, 1));
  };

  setAttributes = function() {
    var hours, minutes, seconds, timeNow;
    timeNow = new Date();
    hours = timeNow.getHours();
    if (hours > 12) {
      hours -= 12;
    }
    $('.js-clock[data-dur="hh"]').attr('data-cur', hours + 1);
    minutes = timeNow.getMinutes();
    if (minutes < 10) {
      $('.js-clock[data-dur="mm"]').attr('data-cur', 1);
      $('.js-clock[data-dur="m"]').attr('data-cur', minutes + 1);
    } else {
      $('.js-clock[data-dur="mm"]').attr('data-cur', nthDigit(minutes, 0) + 1);
      $('.js-clock[data-dur="m"]').attr('data-cur', nthDigit(minutes, 1) + 1);
    }
    seconds = timeNow.getSeconds();
    minutes = timeNow.getMinutes();
    if (seconds < 10) {
      $('.js-clock[data-dur="ss"]').attr('data-cur', 1.);
      return $('.js-clock[data-dur="s"]').attr('data-cur', seconds + 1);
    } else {
      $('.js-clock[data-dur="ss"]').attr('data-cur', nthDigit(seconds, 0) + 1);
      return $('.js-clock[data-dur="s"]').attr('data-cur', nthDigit(seconds, 1) + 1);
    }
  };

  tick = function($el) {
    var $active;
    $active = $el.find('.dial--active');
    $active.removeClass('dial--active');
    $active.addClass('dial--flipped');
    $active.next().removeClass('dial--next').addClass('dial--active');
    $active.next().next().addClass('dial--next').removeClass('dial--later');
    if ($active.next().hasClass('dial--last')) {
      return setTimeout((function() {
        return reset($el);
      }), 300, $el);
    }
  };

  enableTransitions = function($el) {
    return $el.removeClass('transitions-off');
  };

  reset = function($el) {
    $el.addClass('transitions-off');
    $el.children().removeClass('dial--flipped');
    $el.children().removeClass('dial--active');
    $el.children().removeClass('dial--next');
    $el.children().first().addClass('dial--active');
    $el.children(':nth-child(2)').addClass('dial--next');
    $el.children(':nth-child(n+3)').addClass('dial--later');
    setTimeout((function() {
      return enableTransitions($el);
    }), 300, $el);
    tick($el);
    if ($el.attr('data-dur') === 's') {
      $(document).trigger('10s');
    }
    if ($el.attr('data-dur') === 'ss') {
      $(document).trigger('60s');
    }
    if ($el.attr('data-dur') === 'm') {
      $(document).trigger('10m');
    }
    if ($el.attr('data-dur') === 'mm') {
      return $(document).trigger('60m');
    }
  };

  setClasses = function($el) {
    var curIndex;
    curIndex = parseInt($el.attr('data-cur'));
    $el.children(':nth-child(' + curIndex + ')').addClass('dial--active');
    $el.children(':nth-child(' + (curIndex + 1) + ')').addClass('dial--next');
    $el.children(':lt(' + curIndex + ')').addClass('dial--flipped');
    $el.children(':gt(' + curIndex + ')').addClass('dial--later');
    return tick($el);
  };

  startClock = function() {
    return setInterval(function() {
      return tick($('.js-clock[data-dur="s"]'));
    }, 1000);
  };

  appendEls = function() {
    return $('.js-clock').each(function() {
      var $el, end, k, l, start;
      $el = $(this);
      start = parseInt($(this).attr('data-start'));
      end = parseInt($(this).attr('data-end'));
      k = start;
      while (k <= end) {
        if ((k + 1) > end) {
          l = 0;
        } else {
          l = k + 1;
        }
        $el.append('<div class="dial"><span>' + k + '</span><span>' + l + '</span>');
        k++;
      }
      $el.prepend('<div class="dial"><span>0</span><span>0</span></div>');
      $el.append('<div class="dial dial--last"><span>0</span><span>0</span></div>');
      return setClasses($el);
    });
  };

  attachEvents = function() {
    $('.js-clock').on('click', function(e) {
      var $active, $el;
      e.preventDefault();
      $el = $(this);
      $active = $el.find('.dial--active');
      return tick($el);
    });
    $(document).on('10s', function() {
      return tick($('.js-clock[data-dur="ss"]'));
    });
    $(document).on('60s', function() {
      return tick($('.js-clock[data-dur="m"]'));
    });
    return $(document).on('10m', function() {
      tick($('.js-clock[data-dur="mm"]'));
      $(document).on('60m', function() {});
      return tick($('.js-clock[data-dur="hh"]'));
    });
  };

  $(document).ready(function() {
    setAttributes();
    appendEls();
    attachEvents();
    return startClock();
  });

}).call(this);
