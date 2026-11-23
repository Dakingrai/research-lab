---
description: Change the design of an app that already went through intake (a new tab, page, control or look)
argument-hint: "<app name> <what should change>"
---

Make a design pass for an existing app: $ARGUMENTS

Follow step 9 of `method/intake.md`:

1. Read `apps/<name>/brief.md`, `decisions.md`, `rules.md` and `tokens.css`, and the site in `sites/<name>/` (or wherever its `CLAUDE.md` says it lives).
2. Add a dated section to `apps/<name>/decisions.md`, marked *proposed*: what was asked, each decision with what it beat, and any house rule it departs from.
3. If the choice is visual and could go either way, make `apps/<name>/variants-<topic>.html` with the options side by side and ask which.
4. Update `rules.md` (and `tokens.css` if values change), then build the change in the site using only tokens. Copy the changed `tokens.css` and `rules.md` into the site (`tokens.css`, `docs/design-rules.md`).
5. Check every changed page in the browser at full width and 375px, light and dark, then ask the person to accept the pass. On acceptance, mark the section *accepted* with the date.
