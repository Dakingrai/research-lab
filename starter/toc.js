/* The contents list of a long page (design rule 29). Loaded on note, experiment, paper notes
   and project pages, after the page's own scripts. Built from <main>: each section's h2, and under it the section's h3 and
   numbered .q items as a second level. Shown only when that gives four or more entries. Two copies are made: one
   fixed in the left margin (shown at 1280px and wider, see app.css) and one under the lede (shown below that). In
   the margin, the section whose heading last passed the top third of the window is marked current. */
(function () {
  var main = document.querySelector('main');
  if (!main) return;
  var heads = Array.prototype.slice.call(main.querySelectorAll('h2'));
  // a heading without an id gets one from its text, never one the page already uses
  function ensureId(node) {
    if (node.id) return node.id;
    var b = words(node).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
    var id = b, n = 2;
    while (document.getElementById(id)) id = b + '-' + n++;
    node.id = id;
    return id;
  }

  // entries: [{node, subs: [node]}]; the second level is what sits inside the heading's own section
  var entries = heads.map(function (h) {
    var box = h.closest('section') || h.parentNode;
    var subs = box === main ? [] : Array.prototype.slice.call(box.querySelectorAll('h3, .q'));
    return { node: h, subs: subs };
  });
  var total = entries.reduce(function (n, e) { return n + 1 + e.subs.length; }, 0);
  if (total < 4) return;
  entries.forEach(function (e) { ensureId(e.node); e.subs.forEach(ensureId); });

  // a heading's words without the count that list pages put beside it (span.n)
  function words(node) {
    var c = node.cloneNode(true);
    Array.prototype.slice.call(c.querySelectorAll('.n')).forEach(function (n) { n.remove(); });
    return c.textContent.trim();
  }

  function link(node, text) {
    var a = document.createElement('a');
    a.href = '#' + node.id;
    a.textContent = text;
    return a;
  }

  function build(cls) {
    var nav = document.createElement('nav');
    nav.className = 'toc ' + cls;
    nav.setAttribute('aria-label', 'Contents');
    var label = document.createElement('p');
    label.className = 'toc-h';
    label.textContent = 'Contents';
    nav.appendChild(label);
    var ol = document.createElement('ol');
    entries.forEach(function (e) {
      var li = document.createElement('li'), a = link(e.node, words(e.node));
      a.setAttribute('data-for', e.node.id);
      li.appendChild(a);
      if (e.subs.length) {
        var sub = document.createElement('ol'), k = 0;
        e.subs.forEach(function (s) {
          // numbered checks carry their number from CSS; write it into the entry
          var text = s.classList.contains('q') ? (++k) + '. ' + s.textContent : s.textContent;
          var sl = document.createElement('li');
          sl.appendChild(link(s, text));
          sub.appendChild(sl);
        });
        li.appendChild(sub);
      }
      ol.appendChild(li);
    });
    nav.appendChild(ol);
    return nav;
  }

  var side = build('toc-side'), top = build('toc-top');
  main.parentNode.appendChild(side);
  var after = main.querySelector('.lede') || main.querySelector('.meta') || main.querySelector('h1');
  if (after) after.parentNode.insertBefore(top, after.nextSibling);
  else main.insertBefore(top, main.firstChild);

  var marks = Array.prototype.slice.call(side.querySelectorAll('a[data-for]'));
  function mark() {
    var cur = entries[0].node.id, line = window.innerHeight / 3;
    entries.forEach(function (e) { if (e.node.getBoundingClientRect().top < line) cur = e.node.id; });
    marks.forEach(function (a) {
      if (a.getAttribute('data-for') === cur) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', mark, { passive: true });
  window.addEventListener('resize', mark);
  mark();
})();
