/* Links paper citations to the paper's reading-notes page, opened in a new tab. Loaded last, after resources.js
   and the page's own scripts, on note, experiment, paper notes, program and project pages.
   In <main>, every "Surname et al." whose surname is the last name of the first author of exactly one paper in
   resources.js becomes a link to papers/<slug>.html. A surname shared by two papers' first authors is
   ambiguous and left as text; link those by hand. A paper's exact title in quotes ("…" or “…”), the way a
   single-author paper or a blog note is cited, links the same way, the quotes left outside the link. Text already inside a link, a heading, a numbered check (.q), the
   contents list, a figure's SVG, a form control or a script is left alone, and a paper's own page does not link to
   itself. Citations linked to papers/ pages by hand are made to open in a new tab too. */
(function () {
  var all = window.RESOURCES || [];
  var main = document.querySelector('main');
  if (!main || !all.length) return;

  // papers/ sits beside this script, so its address gives the right path from any page
  var me = document.currentScript && document.currentScript.src;
  function href(slug) { return new URL('papers/' + encodeURIComponent(slug) + '.html', me || location.href).href; }

  var self = main.getAttribute('data-slug');   // set on a paper's own notes page
  var bySurname = {};
  all.forEach(function (r) {
    if (!r.slug || !r.authors || !r.authors.length) return;
    var parts = r.authors[0].trim().split(/\s+/), surname = parts[parts.length - 1];
    (bySurname[surname] = bySurname[surname] || []).push(r);
  });
  var names = Object.keys(bySurname).filter(function (s) { return bySurname[s].length === 1; });
  var byTitle = {};
  all.forEach(function (r) { if (r.slug && r.title) byTitle[r.title] = r; });
  var titles = Object.keys(byTitle).sort(function (a, b) { return b.length - a.length; });
  if (!names.length && !titles.length) return;

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  // groups: 1 the character before a surname, 2 the surname; 3 the opening quote, 4 a title
  var alts = [];
  alts.push(names.length ? '(^|[^\\p{L}])(' + names.map(esc).join('|') + ') et al\\.' : '(?!)()()');
  alts.push(titles.length ? '(["“])(' + titles.map(esc).join('|') + ')["”]' : '(?!)()()');
  var re = new RegExp(alts.join('|'), 'gu');
  var SKIP = 'a, h1, h2, h3, h4, .q, .toc, svg, button, input, select, textarea, script, style, label, output';

  // a citation: new tab, and class cite so it takes the colour of the text it sits in (app.css)
  function newTab(a) { a.target = '_blank'; a.rel = 'noopener'; a.classList.add('cite'); }

  function link(textNode) {
    var s = textNode.nodeValue, m, last = 0, frag = null;
    re.lastIndex = 0;
    while ((m = re.exec(s))) {
      var r, start, cite;
      if (m[2]) { r = bySurname[m[2]][0]; start = m.index + m[1].length; cite = m[2] + ' et al.'; }
      else { r = byTitle[m[4]]; start = m.index + m[3].length; cite = m[4]; }
      if (r.slug === self) continue;
      frag = frag || document.createDocumentFragment();
      frag.appendChild(document.createTextNode(s.slice(last, start)));
      var a = document.createElement('a');
      a.href = href(r.slug);
      a.textContent = cite;
      a.title = r.title;
      newTab(a);
      frag.appendChild(a);
      last = start + cite.length;
    }
    if (!frag) return;
    frag.appendChild(document.createTextNode(s.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  }

  var walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      if (!/ et al\.|["“]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      return n.parentElement && n.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  var found = [];
  while (walker.nextNode()) found.push(walker.currentNode);
  found.forEach(link);

  // citations linked by hand to a paper's notes page ("Wu et al.") open in a new tab as well; other links to
  // papers/, such as the titles of Reading rows, keep opening in place
  Array.prototype.forEach.call(main.querySelectorAll('a[href*="papers/"]'), function (a) {
    if (/ et al\.$/.test(a.textContent.trim())) newTab(a);
  });
})();
