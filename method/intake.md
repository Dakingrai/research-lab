# Intake: from a description to a web app

The procedure an agent follows when someone describes an app they want (`/new-app <description>`), or asks for a design pass on an app that already has an entry (`/design-pass <app> <change>`). Its output is a design system the person has accepted, written in two layers, and a working site built only from it.

The person's attention is the scarce resource. Infer everything you can, ask only what you cannot, and show them a page rather than a list of values.

## What intake produces

```
apps/<name>/
  brief.md        the filled brief (method/brief-template.md)
  decisions.md    dated choices, each with what it beat, and how every house rule is met
  rules.md        short, numbered, checkable rules for the coding agent, token names everywhere
  rationale.md    the reasoning, for the person
  tokens.css      every colour, size and space as a CSS variable, light and dark
  sample.html     the rendered sample page the person accepts
  variants-*.html optional: side-by-side alternatives for a choice the person makes by eye
  images/         optional: photographs or illustrations, cropped by hand
sites/<name>/     the app itself, scaffolded from starter/ (or another folder the person names)
```

## Steps

### 1. Read

Read the description. If the app already exists, read its code and data too: what it shows is better evidence than what anyone remembers. Read `method/house-rules.md` and skim `examples/` for a finished entry.

Pick a short kebab-case `<name>`. If `apps/<name>/` exists, this is a design pass (step 9), not a new intake.

### 2. Fill the brief

Copy `method/brief-template.md` to `apps/<name>/brief.md` and fill every field. In the last column say how each was filled: *from the description*, *inferred* (and from what), or *to ask*. Quote the description verbatim at the top.

### 3. Ask only what you could not infer

Ask about the fields marked *to ask*, at most four questions, in one round, each with two to four concrete options and your recommendation first. Good questions are about meaning and taste ("Should statuses be words or colours?", "Which of these three references is closest?"); bad ones are about values ("What font size?"). If a choice is visual and could go either way, do not ask in words: make a `variants-<topic>.html` with the options side by side and ask which.

Record every answer in the brief. Fields you decided yourself go under "Fields decided by the lab", each with a decision number.

### 4. Choose the values

Start from the closest preset in `primitives/tokens/` (today: `research-reading.css`, a quiet, white-first system for lists of papers and long notes), or generate from scratch when none is close. Change what the brief requires: the colours that carry meaning, type faces and scale, column widths, density, radius, motion. Keep the token *names* of the preset where they still fit, so the starter's CSS keeps working.

Write `apps/<name>/tokens.css` with a header naming the preset it came from, the date, and "proposed". Every colour gets a light and a dark value (H7). Check contrast: body text at least 4.5:1 on the background in both modes.

### 5. Check the house rules

In `apps/<name>/decisions.md`, number each decision (`<letter>1`, `<letter>2`… using a letter for this app), say what it beat, and end with a "House rules" section that goes through H1–H17 one by one: *met* (and by which rule of the app), *not applicable*, or *departs* (and the decision that says why). A departure is fine when the app is not the kind of tool the rule was written for; say so plainly.

### 6. Render the sample page

Copy `starter/sample.html` to `apps/<name>/sample.html` and adapt it to the brief: the app's own name, its real kinds of content (a real row from its data, a real heading, the figure type it will need), every colour token as a swatch with its meaning. Build it only from `tokens.css`; no raw values. Open it in the browser at full width and at 375px, in light and dark, and look at it before showing it.

Show the person the sample page and ask them to accept it or say what to change. Iterate on tokens and the sample until they accept. Do not write rules or build the site before acceptance.

### 7. Write the rules and the rationale

On acceptance, set the brief's status to *accepted <date>* and the tokens header to *accepted*. Then write:

- `rules.md`: numbered rules the coding agent can check, in the style of `examples/internal-lens-lab/rules.md`. Token names everywhere, no raw values. One rule per checkable fact. End with a "Before you ship a change" checklist.
- `rationale.md`: one or two pages for the person: why it looks this way, what was rejected, what is still open.

### 8. Scaffold the site

1. Copy `starter/` to `sites/<name>/` (or where the person asks). Copy `apps/<name>/tokens.css` over the starter's `tokens.css`, and `apps/<name>/rules.md` to `sites/<name>/docs/design-rules.md`.
2. Set the site name in every page's header and the `SITE` constant at the top of `app.js`.
3. Keep only the pages the brief names. The starter has a Home tab of running experiments (`home.html`), a list tab (`index.html`, data in `resources.js`, a notes page per item in `papers/`), a programs tab (`programs.html`, `program.html`, `project.html`, data in `programs.js`), and an experiment page per experiment (`experiments/`, copied from `experiments/template.html`). Delete what the app does not need, rename tabs, and build any new page from the same row, heading and prose styles.
4. Seed the data files with what the description gives; never invent items the person did not mention. Mark seeded prose as a first draft.
5. Write `sites/<name>/CLAUDE.md`: what the app is, where things are, how to add an item, and "read `docs/design-rules.md` before changing anything visual".
6. Open every page in the browser at full width and 375px, light and dark. Check the console for errors and that nothing scrolls sideways. Go through the rules' checklist.

### 9. Later changes: design passes

Anything visual the rules do not cover (a new tab, a new kind of page, a control, a figure) is a design pass: a dated section in `decisions.md` marked *proposed*, new or changed rules in `rules.md`, new tokens if needed, a variants page if the choice is visual, then the person's acceptance. Copy changed `tokens.css` and `rules.md` into the site. An accepted system is frozen: values change only through a pass the person accepts.

## What not to do

- Do not build the site before the sample is accepted.
- Do not ask the person for values; ask for meanings and taste, or show variants.
- Do not add features the description did not ask for. The starter has more than most apps need; delete freely.
- Do not use colour without a stated meaning (H6), and do not reach for cards, pills or badges because a generic app would have them (H1, H3).
