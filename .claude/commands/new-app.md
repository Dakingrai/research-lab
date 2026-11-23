---
description: Design and build a new web app from a description, through the lab's intake
argument-hint: "<what the app is for, who uses it, what it holds>"
---

Design and build a new web app from this description:

$ARGUMENTS

Follow `method/intake.md` from step 1, in order. In short:

1. Read the description, `method/house-rules.md`, and the worked example in `examples/`.
2. Fill `method/brief-template.md` into `apps/<name>/brief.md`, marking how each field was filled.
3. Ask only what you could not infer: one round, at most four questions, with options and your recommendation first. Show variants for visual choices instead of describing them.
4. Choose token values from the closest preset in `primitives/tokens/` and write `apps/<name>/tokens.css`.
5. Record decisions and check every house rule in `apps/<name>/decisions.md`.
6. Render `apps/<name>/sample.html` from `starter/sample.html`, look at it yourself in light, dark and at 375px, then show it and wait for the person to accept it.
7. Only after acceptance: write `rules.md` and `rationale.md`, scaffold `sites/<name>/` from `starter/`, seed its data from the description, and check every page in the browser.

If the description is empty, ask what the app is for before anything else.
