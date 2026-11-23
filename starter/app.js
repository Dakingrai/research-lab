/* Renders whichever page this is: the Resources tab (#groups) and a paper's notes page (#paper, papers/<slug>.html)
   from resources.js; the Research programs tab (#programs), a program's page (#program, program.html?p=<slug>) and a
   project's page (#project, project.html?p=<slug>) from programs.js. Resources: grouped by section in order of first use, rows in file order. The tab has one
   control, a filter by reading status (#filter); no sorting or other controls. */
(function () {
  // the site's name, used in page titles; intake sets it, and the same name goes in every page's header
  var SITE = 'My lab';
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function plural(n, word) { return n + ' ' + word + (n === 1 ? '' : 's'); }

  // YYYY-MM-DD, YYYY-MM or YYYY -> "27 May 2025", "Oct 2026", "2026"
  function fmtDate(s) {
    var p = String(s || '').split('-');
    if (p.length === 3) return Number(p[2]) + ' ' + MONTHS[Number(p[1]) - 1] + ' ' + p[0];
    if (p.length === 2) return MONTHS[Number(p[1]) - 1] + ' ' + p[0];
    return p[0];
  }

  function capitalise(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }

  // first author et al. beyond three; one to three in full
  function fmtAuthors(a) {
    if (!a || !a.length) return '';
    return a.length > 3 ? a[0] + ' et al.' : a.join(', ');
  }

  // where it is published: the venue when the data gives one, else "arXiv <id>" or the bare host
  function fmtSource(r) {
    if (r.venue) return r.venue;
    var m = /arxiv\.org\/(?:abs|pdf)\/([^?#]+?)(?:v\d+)?(?:\.pdf)?(?:[?#].*)?$/.exec(r.url);
    if (m) return 'arXiv ' + m[1];
    try { return new URL(r.url).hostname.replace(/^www\./, ''); } catch (e) { return ''; }
  }

  function newTabLink(text, href) {
    var a = el('a', null, text);
    a.href = href;
    a.target = '_blank';   // leaves the app, so a new tab
    a.rel = 'noopener';
    return a;
  }

  // the metadata line: authors · affiliation · source · date · PDF. The source links to the landing page,
  // since the title links to the notes page.
  function fillMeta(m, r, base) {
    var bits = [];
    var lead = [fmtAuthors(r.authors), r.affiliation].filter(Boolean);
    if (lead.length) bits.push(document.createTextNode(lead.join(' · ')));
    var src = fmtSource(r);
    if (src) bits.push(newTabLink(src, r.url));
    var date = fmtDate(r.published);
    if (date) bits.push(document.createTextNode(date));
    if (r.pdf) bits.push(newTabLink('PDF', r.pdf));
    bits.forEach(function (b, i) {
      if (i) m.appendChild(document.createTextNode(' · '));
      m.appendChild(b);
    });
    if (r.authors && r.authors.length) m.title = r.authors.join(', ');
  }

  function resourceRow(r) {
    var li = el('li');
    var t = el('div', 'r-title');
    var a = el('a', null, r.title);
    a.href = r.slug ? 'papers/' + encodeURIComponent(r.slug) + '.html' : r.url;
    t.appendChild(a);
    li.appendChild(t);
    var m = el('div', 'meta');
    fillMeta(m, r);
    li.appendChild(m);
    if (r.summary) li.appendChild(el('div', 'summary', r.summary));
    return li;
  }

  var FILTERS = ['all', 'reading', 'completed', 'unread'];

  // anything missing or unknown counts as unread
  function readStatus(r) {
    return r.status === 'reading' || r.status === 'completed' ? r.status : 'unread';
  }

  function renderFilter(bar, root) {
    FILTERS.forEach(function (f) {
      var b = el('button', null, capitalise(f));
      b.type = 'button';
      b.setAttribute('aria-pressed', f === 'all' ? 'true' : 'false');
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(bar.children, function (x) {
          x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
        });
        renderResources(root, f);
      });
      bar.appendChild(b);
    });
  }

  function renderResources(root, filter) {
    var all = window.RESOURCES || [];
    var shown = !filter || filter === 'all' ? all : all.filter(function (r) { return readStatus(r) === filter; });
    var order = [], groups = {};
    shown.forEach(function (r) {
      if (!groups[r.section]) { groups[r.section] = []; order.push(r.section); }
      groups[r.section].push(r);
    });

    document.getElementById('count').textContent = shown.length === all.length
      ? plural(all.length, 'resource')
      : shown.length + ' of ' + plural(all.length, 'resource');

    root.textContent = '';
    order.forEach(function (name) {
      var items = groups[name];
      var sec = el('section', 'group');
      var h = el('h2', null, name);
      h.appendChild(el('span', 'n', String(items.length)));
      sec.appendChild(h);
      var ul = el('ul', 'resources');
      items.forEach(function (r) { ul.appendChild(resourceRow(r)); });
      sec.appendChild(ul);
      root.appendChild(sec);
    });
  }

  // papers/<slug>.html: title, metadata line and summary come from resources.js; the notes are written by hand
  // in the page's #notes, which reads "No notes yet." while empty.
  function renderPaper(root) {
    var slug = root.getAttribute('data-slug'), all = window.RESOURCES || [], r = null;
    for (var i = 0; i < all.length; i++) if (all[i].slug === slug) r = all[i];
    if (!r) { document.getElementById('title').textContent = 'No such paper.'; return; }
    document.title = r.title + ' — ' + SITE;
    document.getElementById('title').textContent = r.title;
    fillMeta(document.getElementById('meta'), r);
    document.getElementById('summary').textContent = r.summary || '';
    var notes = document.getElementById('notes');
    if (notes && !notes.children.length && !notes.textContent.trim()) {
      notes.className = 'count';
      notes.textContent = 'No notes yet.';
    }
  }

  /* ---- Research programs: the list, a program's page, a project's page (design rules 32-44) ---- */

  function resourceByUrl(url) {
    var all = window.RESOURCES || [];
    for (var i = 0; i < all.length; i++) if (all[i].url === url) return all[i];
    return null;
  }

  // ?p=<slug> names the program or project a page is about
  function slugParam() {
    var m = /[?&]p=([^&#]+)/.exec(location.search);
    return m ? decodeURIComponent(m[1]) : '';
  }

  function programBySlug(slug) {
    var all = window.PROGRAMS || [];
    for (var i = 0; i < all.length; i++) if (all[i].slug === slug) return all[i];
    return null;
  }

  // project slugs are unique across programs; returns {program, project}
  function projectBySlug(slug) {
    var all = window.PROGRAMS || [];
    for (var i = 0; i < all.length; i++) {
      var ps = all[i].projects || [];
      for (var j = 0; j < ps.length; j++) if (ps[j].slug === slug) return { program: all[i], project: ps[j] };
    }
    return null;
  }

  // status as a plain word, then the start date at the data's precision
  function statusLine(x) {
    return [capitalise(x.status), x.started ? 'started ' + fmtDate(x.started) : ''].filter(Boolean).join(' · ');
  }

  // a program's own page outside the app (a challenge's site), as its bare host at the end of the line (rule 34)
  function appendProgramLink(m, pg) {
    if (!pg.url) return;
    var host;
    try { host = new URL(pg.url).hostname.replace(/^www\./, ''); } catch (e) { return; }
    m.appendChild(document.createTextNode(' · '));
    m.appendChild(newTabLink(host, pg.url));
  }

  // a row in the Resources row style: title (a link), metadata, summary
  function linkRow(title, href, meta, summary) {
    var li = el('li');
    var t = el('div', 'r-title');
    var a = el('a', null, title);
    a.href = href;
    t.appendChild(a);
    li.appendChild(t);
    li.appendChild(el('div', 'meta', meta));
    if (summary) li.appendChild(el('div', 'summary', summary));
    return li;
  }

  // a program's mark: its own illustration, shown whole (rule 42). Decorative beside the program's name in a
  // list, so empty alt there; described on the program's own page.
  function markImg(pg, alt) {
    var img = el('img');
    img.src = pg.image;
    img.alt = alt;
    return img;
  }

  // the Research programs tab lists programs only; projects appear on a program's page (rules 33-34)
  function renderPrograms(root) {
    var all = window.PROGRAMS || [];
    document.getElementById('count').textContent = plural(all.length, 'program');
    var ul = el('ul', 'resources');
    all.forEach(function (pg) {
      var href = 'program.html?p=' + encodeURIComponent(pg.slug);
      var row = linkRow(pg.name, href, statusLine(pg), pg.aim);
      appendProgramLink(row.querySelector('.meta'), pg);
      if (!pg.image) { ul.appendChild(row); return; }
      // mark in the left column, the row's title, metadata and aim in the right
      var li = el('li', 'with-mark');
      var fig = el('a', 'mark');
      fig.href = href;
      fig.tabIndex = -1;   // the title is the link a keyboard reaches; the mark repeats it for the mouse
      fig.appendChild(markImg(pg, ''));
      var text = el('div', 'with-mark-text');
      while (row.firstChild) text.appendChild(row.firstChild);
      li.appendChild(fig);
      li.appendChild(text);
      ul.appendChild(li);
    });
    root.appendChild(ul);
  }

  function setKicker(pg) {
    var k = document.getElementById('kicker');
    k.textContent = '';
    var back = el('a', null, 'Research programs');
    back.href = 'programs.html';
    k.appendChild(back);
    if (!pg) return;
    k.appendChild(document.createTextNode(' · '));
    var up = el('a', null, pg.name);
    up.href = 'program.html?p=' + encodeURIComponent(pg.slug);
    k.appendChild(up);
  }

  // a program's page: kicker, then its mark in the left column beside the name, status line and aim, then its
  // projects as rows (rule 35)
  function renderProgram(root) {
    var pg = programBySlug(slugParam());
    if (!pg) { document.getElementById('count').textContent = 'No such program.'; return; }
    document.title = pg.name + ' — ' + SITE;
    document.getElementById('title').textContent = pg.name;
    var m = document.getElementById('meta');
    m.textContent = statusLine(pg);
    appendProgramLink(m, pg);
    document.getElementById('lede').textContent = pg.aim || '';
    if (pg.image) {
      var fig = document.getElementById('mark');
      fig.appendChild(markImg(pg, pg.imageAlt || ''));
      fig.hidden = false;
    } else {
      document.getElementById('head').classList.remove('with-mark');   // no mark: one column
    }
    var ps = pg.projects || [];
    document.getElementById('count').textContent = plural(ps.length, 'project');
    var ul = el('ul', 'resources');
    ps.forEach(function (p) {
      ul.appendChild(linkRow(p.title, 'project.html?p=' + encodeURIComponent(p.slug), statusLine(p), p.question));
    });
    root.appendChild(ul);
  }

  // a project's page: kicker, title, status line, the question, the summary as prose, then Reading
  function renderProject(root) {
    var hit = projectBySlug(slugParam());
    if (!hit) { root.appendChild(el('p', 'count', 'No such project.')); return; }
    var pg = hit.program, p = hit.project;
    document.title = p.title + ' — ' + SITE;
    setKicker(pg);
    document.getElementById('title').textContent = p.title;
    document.getElementById('meta').textContent = statusLine(p);
    if (p.question) root.appendChild(el('p', 'question-page', p.question));
    if (p.summary) {
      var d = el('div', 'prose');
      d.appendChild(el('p', null, p.summary));
      root.appendChild(d);
    }
    var papers = (p.resources || []).map(resourceByUrl).filter(Boolean);
    if (papers.length) {
      var sec = el('section', 'group');
      var h = el('h2', null, 'Reading');
      h.appendChild(el('span', 'n', String(papers.length)));
      sec.appendChild(h);
      var ul = el('ul', 'resources');
      papers.forEach(function (r) { ul.appendChild(resourceRow(r)); });
      sec.appendChild(ul);
      root.appendChild(sec);
    }
  }

  var groups = document.getElementById('groups');
  var filter = document.getElementById('filter');
  if (groups && filter) renderFilter(filter, groups);
  if (groups) renderResources(groups);
  var paper = document.getElementById('paper');
  if (paper) renderPaper(paper);
  var programs = document.getElementById('programs');
  if (programs) renderPrograms(programs);
  var program = document.getElementById('program');
  if (program) renderProgram(program);
  var project = document.getElementById('project');
  if (project) renderProject(project);
})();
