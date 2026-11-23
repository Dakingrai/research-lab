# Design rules

Read this before adding or changing anything visual in this app, whether you are a person or a coding agent. Values come from `tokens.css`; use the variables, never raw hex or px. The look follows a few principles: one quiet column of serif titles and sans metadata; rows, not cards; colour only where it means something; states as plain words; one photograph on Resources and at most one illustration per program. Keeping to these rules keeps every fork recognisably the same tool.

## The page

1. White page (`--bg`), one column (`--col-main`), text flush left. No sidebars, cards, shadows or boxes; the one exception is a long page's contents list (rule 29). Separate things with space or `--hairline`, never a border box.
2. The interface is `--sans`: nav, labels, metadata, summaries, counts. A resource's title, the page title and section headings are `--serif`. Code is `--mono`.
3. Page heading `--fs-title` serif weight 400; section heading `--fs-h2` serif weight 400. Never bold a heading.
4. Header: site name in `--ink` weight 500 on the left, tabs on the right, the Light/Dark switch (`theme.js`) a `--fs-meta` `--ink-2` text button at the right of the first line. Tabs are `--fs-body` `--ink-2`; the active tab is `--ink` with a 2px `--ink` underline. No colour, pill or background on tabs.
5. One hairline under the header; otherwise only the hairlines between rows.
6. Order of a tab: header, page title, lede, masthead if the tab has one, content.

## Photographs

7. At most one photograph per tab, its masthead, between the lede and the content, full column width. Resources uses `--masthead-resources-ratio` up to `--masthead-resources-max-h`; any later tab uses `--masthead-ratio` between `--masthead-min-h` and `--masthead-max-h`. `object-fit: cover`.
8. No text, caption, credit, border, shadow or overlay. Corner radius `--radius`. Alt text is one plain sentence.
9. Dark mode applies `filter: var(--photo-dim)` and nothing else.
10. Nothing in or around the masthead animates.
11. Resources uses `images/masthead-resources-{880,1760}.jpg` (the classroom), with `srcset` and `sizes` matching `--col-main`. A new tab may get its own photograph, following rules 7–10. Research programs has none; a program's own illustration is its mark (rule 42).
12. Photographs appear only as mastheads.

## The list of resources

13. Above the list, one line: the reading-status filter at the left, the count at the right in `--fs-meta` `--ink-3`, "N resources", or "N of M resources" while a filter is chosen.
14. Grouped by `section`, in order of first use in `resources.js`; rows keep the file's order (newest first within a section). No sorting, search or pagination.
15. A section heading is `--fs-h2` serif `--ink` with its count in `--sans` `--fs-meta` `--ink-3`; `--s-7` above, `--s-3` below.
16. One resource is one row: title line, metadata line, summary. Rows separated by `--hairline`, `--s-4` padding above and below.
17. Title `--serif` `--fs-item` `--ink`, linking to `papers/<slug>.html`; no underline at rest, 1px `--rule` underline on hover. Nothing else on the title line.
18. Metadata line `--sans` `--fs-meta` `--ink-2`, ` · ` separated: authors (one to three in full, else first author "et al.", full list as the line's `title`), affiliation if any, where it is published (`venue`, else `arXiv <id>`, else the bare host), date at the data's precision (`8 Nov 2023`, `Oct 2026`, `2026`), then `PDF` when the data has one.
19. The source and `PDF` link to `url` and `pdf` in a new tab, `--ink-2` with a 1px `--rule` underline, `--ink` on hover. Never an icon or blue.
20. Summary `--sans` `--fs-body` `--ink-2`, in full, `--s-2` above; our own words, one to three sentences, never the abstract.
21. Nothing in a row is coloured. `--interact` means *you can touch this*, `--highlight` *look here*; neither is used on this tab. `--cat-*` and `--seq-*` are for marks in figures only.

## The reading-status filter

22. A `role="group"` labelled "Filter by reading status": All, Reading, Completed, Unread as text buttons, `--sans` `--fs-meta`, `--s-4` apart. Unchosen `--ink-2`, `--ink` on hover; chosen `--ink` weight 500 with `aria-pressed="true"`. No underline, border, background, pill or colour.
23. While a filter other than All is chosen, empty sections are hidden and the count reads "N of M resources". Nothing animates.
24. A paper's status appears nowhere on its row; the filter is where it lives.

## A paper's notes page

25. `papers/<slug>.html`: header with Resources active, kicker `Resources` (a link, `--fs-meta`), the title as `h1`, the metadata line (rule 18), then the sections "AI-generated summary" and "Notes" as `h2`. Title, metadata and summary come from `resources.js`.
26. Notes are prose in `--col-text`, `--serif` `--fs-prose` / `--lh-prose`; subheadings `h3` at `--fs-item` weight 400. Empty notes read "No notes yet." in `--fs-meta` `--ink-3`.
27. Links in prose are `--ink` with a 1px `--rule` underline, `--ink` underline on hover.
28. "Surname et al." in a notes page links to that paper's notes page by `cite.js`, `a.cite`, the colour of the text around it.
29. A notes page with four or more heading entries gets a contents list from `toc.js`: in the left margin at 1280px and wider, under the title below that; the section being read is `--ink` weight 500. List pages have none.

## The Research programs tab

32. The tab is three pages: `programs.html` lists the programs, `program.html?p=<slug>` is one program with its projects, `project.html?p=<slug>` is one project. All three keep the header with Research programs the active tab.
33. `programs.html`: header, page title, lede, one count line in `--fs-meta` `--ink-3` reading `N programs`, then one row per program in the order of `programs.js`. Programs only: projects appear only on their program's page. No sections.
34. A program row is a Resources row (rules 16–21): title links to its program page; metadata line reads status as a plain word ` · started <date>`, then the host of `url` (for example `ndif.us`) as a new-tab link styled as rule 19 when the program has one; summary is the aim. A program with a mark shows it in a left column, `--mark-size-row` wide (`--mark-size-sm` below 600px), `--s-5` from the text (`--s-4` on a phone), top-aligned; the mark links to the program page but is skipped by the keyboard and has empty alt, since the title says the same.
35. `program.html`: kicker, then the program's mark in a left column, `--mark-size` wide (`--mark-size-page-sm` below 600px), `--s-6` from the text (`--s-4` on a phone), top-aligned, beside the program's name as the page title, one metadata line (status ` · ` started ` · ` host link) and the aim as the lede (`--fs-lede` `--ink-2`); then one count line `N projects` and one row per project in the data's order, full width. Without a mark the title block is one column.
36. A project row: title links to its project page; metadata line status ` · ` started; summary is the research question.
37. `project.html`: kicker, title, one metadata line (status ` · ` started), the question block, the summary as prose, then the Reading section.
38. The kicker is `--sans` `--fs-meta` `--ink-3`, `--s-2` above the title. On a program page it is `Research programs`; on a project page `Research programs · <program name>`, both links in `--ink-2` with a 1px `--rule` underline, `--ink` on hover.
39. The question block (`.question-page`) is the question in `--serif` `--fs-h2` weight 400 `--ink`, a 2px `--rule` line on its left, `--s-4` left padding. No background, box, colour or label.
40. The summary is prose in `--col-text`, `--serif` `--fs-prose` / `--lh-prose` `--ink`.
41. The Reading section opens with `Reading` (`--fs-h2` serif) and its count, then the project's papers as full Resources rows in the data's order. Omitted when the project lists none.
42. A program may have one mark: its own illustration (`image` and `imageAlt` in `programs.js`, a file in `images/`, SVG where there is one). It appears in the left column of its row on `programs.html` and of its page's title block (rules 34–35), square, shown whole and never cropped. No caption, credit, border, shadow, radius, filter or overlay, and it does not animate. A program without one shows nothing there. Project pages carry no image.
43. Status is always a plain word, never a coloured tag, badge or icon. Nothing on these pages is coloured.
44. Nothing else on a program or project page (experiments, notes, submissions, deadlines, progress) unless it is needed; anything new should follow the patterns above (rows, plain-word states, ink links).

## Motion and focus

30. Motion is `--dur` with `--ease`. Nothing animates on load.
31. Focus rings are `--interact-wash` at 3px with a 1px `--interact` edge, never removed.

## Before you ship a change

- [ ] No raw colour or size values; every one is a token.
- [ ] No feature was added that the page does not need.
- [ ] Reads correctly at 375px and in dark mode, with no sideways scroll.
- [ ] At most one image on a page (the Resources masthead, or a program's mark in its row or beside its title), with alt text, nothing over it.
- [ ] The count equals the objects in `resources.js`; section counts add up to it.
- [ ] Every paper has a `papers/<slug>.html`.
- [ ] On Research programs, the count equals the programs in `programs.js`, the list shows no projects, and each program page's count equals its projects.
- [ ] A project's Reading rows are the same rows the Resources tab shows; every url in `resources` matches an entry in `resources.js`.
- [ ] Tabs: active tab underlined in ink, not coloured. Headings not bold.
