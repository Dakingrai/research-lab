# House rules

The rules every app's design system in this lab must pass. They are patterns, not values: each app chooses its own colours, sizes and widths at intake (`intake.md`) and writes them in its own `rules.md` and `tokens.css`. A rule here says what must be true; the app's rules say how.

**How they are used.**
- At intake, the agent checks the proposed system against every rule here and says in the app's `decisions.md` how each is met.
- An app may depart from a rule through a decision in its own `decisions.md` that names the rule and gives the reason. The app's `rules.md` then states the exception, so its coding agent never has to read this file.
- These rules were worked out on research-reading tools: lists of papers, notes, programs and projects. An app of a different kind (a shop, a dashboard, a game) should expect to depart from several, and say why.
- A rule changes only when the person who owns this lab accepts the change; record the date and the reason at the end of this file.

## Lists

### H1. An item in a list is a row, not a card or a table cell

A row is the item's title, one metadata line under it, then a short summary in full. Rows are separated by a hairline and space only: no box, no shadow, no background, no table grid. The title is the larger serif text and the link; everything else in the row is smaller sans text.

Why: a card adds chrome to every item and says nothing; a table breaks on long fields such as author lists.

### H2. Long author lists show the first author and "et al."

One to three authors are shown in full; four or more show the first author followed by "et al.". The complete list stays in the data and is shown on hover (the metadata line's `title`), so nothing is lost and no control is added.

Why: the full list buries the venue and date; the first three names can be identical across papers by one group.

### H3. A state is a plain word, never a colour, badge or icon

Statuses (draft, active, reading, done and so on) are written as words in the metadata or status line, in the line's own colour. No coloured tag, pill, badge, icon or progress bar.

Why: a colour per state is a legend to learn, and colour is reserved for the few fixed meanings each app gives it (H6).

## Navigation

### H4. Tabs are text; the active tab is marked in ink, not colour

Tabs are plain text in the secondary ink. The active tab is in the main ink with an underline in ink. No pill, background, border box or accent colour on any tab.

Why: the accent colour means "you can press this", and the active tab is the one thing you cannot usefully press.

## Colour and links

### H5. Links in a list are ink; colour is not how a link is recognised

A title in a list is in ink, with no underline at rest and a faint underline on hover; its position in the row already says it is a link. Links inside prose are ink with a faint underline at rest. Small links on a metadata line (`PDF`, a source) are the line's colour with a faint underline. No link anywhere is the browser's default blue, including links inside figures, captions and tables.

Why: blue on every title would make the touch-this colour the most common colour on the page.

### H6. Each colour carries one fixed meaning, and grey carries the rest

Text, rules and structure are in neutrals. An app gives each non-neutral colour one meaning, writes it down, and uses it for nothing else: typically one colour for "you can press this" (controls) and one for "look here" (emphasis), plus categorical colours used only for marks in figures, never for text or tags. A colour with no stated meaning does not appear, apart from the photographs (H7).

Why: when a colour always means the same thing, the reader learns it once; decorative colour teaches nothing and dilutes the colours that matter.

### H7. Dark mode comes from the tokens, not from a second design

Every colour is a token with a light and a dark value; the page is white first, and a reader who has set dark mode gets it without any page doing extra work. Hues stay the same in both modes; neutrals and washes change. Photographs are shown unaltered in light mode and only dimmed slightly in dark mode.

Why: one media query once the tokens exist, and dark-first is wrong for long reading.

## Photographs

### H8. At most one photograph per tab, as a short wide band, never with anything on it

When an app uses photographs, each tab has one, fixed to that tab: a short band across the content column between the title block and the content, cropped by hand so the subject is whole. No caption, credit, text over it, border, shadow or overlay; nothing in it animates; it never appears as a thumbnail or inside rows. Its alt text describes the picture in one plain sentence. The crop is a design asset kept in the lab and copied into the app, like `tokens.css`.

Why: a tall hero pushes the content below the fold of a tool opened many times a day; text over a photograph needs an overlay and turns the picture into texture; the same photograph on the same kind of tab makes one person's tools recognisable at a glance.

## Type

### H9. Headings are never bold; size and typeface carry their rank

Headings are set at the regular weight. A heading is made more important by size, by typeface (a serif title against sans interface text) or by space above it, never by bolding it. Subheadings inside prose follow the same rule.

## Papers and notes

### H10. When an app keeps notes on papers, a paper's title opens its notes page

In an app that has a notes page for papers, the paper's title in a list opens that notes page, which exists for every paper (empty until someone writes) and links the paper itself near its top. The paper stays one click away from the row too, on the metadata line. One title, one destination: the title never goes to the notes page for some rows and the paper for others. An app without notes pages links titles to the paper.

Why: the notes are what the workspace is for; the paper is what the notes are about, and it is never more than one click away.

### H11. A citation in the text links to the app's notes page for that paper, or to the paper

A citation written as "Surname et al." links to the app's own notes page for that paper when the app has one, otherwise to the paper's landing page. It opens in a new tab. In apps that keep their papers as data, a script finds the citations and links them: a surname that is the first author's of exactly one paper is linked; a surname shared by two papers is left as text and linked by hand; headings, existing links and figure graphics are left alone; a paper's own notes page does not link to itself. The link takes the colour of the text around it with a faint underline (H5). A published essay may instead use numbered superscripts with a hover card and a reference list at the end, in the manner of a long-form blog.

Why: a citation is a promise that more is one click away, and the most useful "more" is what you already wrote about the paper. Finding citations by script means none is missed and none needs upkeep. This is about citations only: auto-linking ordinary words or concept terms stays out, since a term can appear incidentally and a citation cannot.

### H12. Links that take the reader away from what they are reading open in a new tab

A PDF, a citation, and a paper's landing page reached from inside a page someone is reading open in a new tab; moving between the app's own pages (tabs, lists, a row's title, breadcrumbs) opens in place. A link that opens a new tab is not marked with an icon; where it helps, its text says where it goes (`PDF`, `paper ↗` is allowed as text).

Why: the reader keeps their place in the note or list they were reading; inside the app, the back button already does that.

### H13. Dates are shown at the precision the data gives

A date written as a day, a month or a year in the data is shown as that: `27 May 2025`, `Oct 2026`, `2026`. Never invent a day or a month to fill a format.

Why: a conference paper has a month, not a day; a filled-in day is a wrong fact on the page.

### H14. Where a paper is published comes from the data first, the link second

The metadata line names the venue when the data gives one; otherwise it is read from the link (`arXiv <id>` for arXiv, the bare host name otherwise). It is never left blank when the link can say it.

## Long pages and controls

### H15. A long page gets a contents list built from its headings

A page with enough sections to scroll past (each app sets the threshold) shows a contents list made by script from its headings, never written by hand. If the list follows the reader down the page, it marks the section being read, in ink at a heavier weight rather than in colour; where there is no room beside the column, it sits once near the top. If the app has sidenotes in one margin, the contents list goes in the other. List pages do not get one.

Why: long notes and experiment pages are read by jumping to one part; a list written by hand drifts from the headings.

### H16. A filter is a row of text options; the chosen one is in ink at a heavier weight

A filter over a list is plain text options on the line that says how many items are shown, the chosen one in ink at a heavier weight. No pill, segmented control, underline or accent colour; it must not look like the tabs (H4). While a filter is on, the count says "N of M" and empty groups are hidden.

Why: a tab says where you are and a filter says what you are looking at, so they must not look alike; the chosen option is the one you cannot usefully press, so it does not take the press-me colour.

### H17. A heading is for what a reader looks for; lists and tables carry the rest

On a long page, a heading or a numbered item with a heading is only for something a reader jumps to or refers back to. Definitions are a plain list with the term in bold. Things compared along the same lines are a table. What a figure already shows gets a sentence under it. The contents list (H15) is built from the headings, so it stays short when the headings are few.

Why: when every list of things is a row of headings, the reader cannot tell which ones matter, and the contents list stops being a way to find anything.

## Changes

- Start of this lab: rules H1–H17.
