/* Light or dark. Loaded in every page's <head>, before the body is drawn, so a chosen mode never flashes.
   With no choice saved the page follows the device (tokens.css's prefers-color-scheme block); a choice sets
   data-theme="light" or "dark" on <html>, which tokens.css honours either way, and is kept in this browser.
   The switch is one text button at the right of the header's first line, naming the mode it switches to. */
(function () {
  // intake sets KEY from the app's name, so two apps on one host keep separate choices
  var KEY = 'my-lab-theme', root = document.documentElement;
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function current() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  var s = saved();
  if (s === 'light' || s === 'dark') root.setAttribute('data-theme', s);

  function label(b) {
    var other = current() === 'dark' ? 'light' : 'dark';
    b.textContent = other === 'dark' ? 'Dark' : 'Light';
    b.setAttribute('aria-label', 'Switch to ' + other + ' mode');
  }
  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header.site');
    if (!header) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'theme-switch';
    label(b);
    b.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* private window: the choice lasts this page only */ }
      label(b);
      document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    });
    var nav = header.querySelector('nav');
    header.insertBefore(b, nav);
    // the device changing its mode matters only while no choice is saved
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var update = function () { if (!root.getAttribute('data-theme')) label(b); };
      if (mq.addEventListener) mq.addEventListener('change', update);
    }
  });
})();
