# Example: internal-lens-lab

A finished intake, for reference. internal-lens-lab is a research workspace for the Looped Lens Challenge: a Resources tab listing papers on lens methods, each with a notes page, and a Research programs tab with the challenge as a program and its projects under it.

- **Live site:** https://dakingrai.github.io/internal-lens-lab/
- **Repository:** https://github.com/Dakingrai/internal-lens-lab

## Files

- `brief.md` — the intake brief, filled from the description.
- `rules.md` — the rules the intake produced, as the app's coding agent reads them (`docs/design-rules.md` in the app's repository). Compare them with what the site shows: every rule is something you can check on the page.

## What happened at intake

The first version was built without the lab, with bordered cards, coloured status pills, an accent-coloured tab and bold headings. The person disliked it. The intake that replaced it reused an accepted research-reading system almost unchanged (`primitives/tokens/research-reading.css`), and checked it against the house rules: rows not cards (H1), states as plain words (H3), ink tabs and links (H4, H5), headings never bold (H9), dates at the data's precision (H13), a text filter (H16). Later passes added the Research programs tab, replaced its banner photograph with the program's own mark in a left column, and listed programs only, with projects one click in.
