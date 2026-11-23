# research-lab

A template for a research workspace: someone forks it and describes their research, and the agent builds them a lab (Home of running experiments, Resources with notes pages, Research programs with projects and experiments). The lab's look comes from a design intake that turns the description into a design system the person accepts (a brief, decisions, rules, tokens and a sample page); the lab is then built from `starter/` using only that system. Later changes go through design passes. The method was worked out on research tools and applies best to them; for other kinds of app, depart from the house rules where they do not fit and say why.

Life of Ideas (`loi`, github.com/Dakingrai/life-of-ideas) is the companion tool that backs up the coding-agent sessions behind a repo to a private local store. A lab may later show that record through an export the person runs; never read the store directly from a page, and never publish it without being asked.

## Commands

- `/new-app <description>` — a new app, from description to working site. Follows `method/intake.md`.
- `/design-pass <app> <change>` — change an app that already has an entry in `apps/`. Follows step 9 of `method/intake.md`.

If someone asks for a new app or a visual change without using a command, follow the same procedure.

## Layout

- `method/intake.md` — the procedure. Read it before any design work.
- `method/house-rules.md` — rules H1–H17 every app's system must meet or knowingly depart from.
- `method/brief-template.md` — the intake brief.
- `method/experiment-principles.md` — four principles for designing experiments, for research apps that plan them. Not part of design intake.
- `primitives/tokens/` — starting token presets. `research-reading.css` is the one there is today.
- `starter/` — the app intake copies to build a site: plain HTML, CSS and vanilla JS, no build step, data in hand-edited JS files. A Home tab of the experiments running now or waiting for review (`home.html`), a list tab with notes pages (`index.html`, `resources.js`, `papers/`), a programs tab (`programs.html`, `program.html`, `project.html`, `programs.js`) where each project lists its experiments, an experiment page per experiment (`experiments/template.html`, with sections that follow `method/experiment-principles.md`), a light/dark switch, contents lists and citation links for long pages. `starter/sample.html` is the sample page template.
- `examples/internal-lens-lab/` — a finished intake: the brief and the rules it produced, with a link to the live site.
- `apps/<name>/` — one folder per app's design entry, written by intake.
- `sites/<name>/` — the apps themselves, scaffolded by intake, unless the person asks for another location.

Serve the repo with `python3 -m http.server 8790` (or `.claude/launch.json`) to open `starter/`, sample pages and sites in a browser.

## Working rules

- Values live in `tokens.css` as CSS variables; pages use the variables, never raw hex or px.
- An accepted system is frozen: change values only through a design pass the person accepts.
- Look at every page you build or change in a browser, at full width and at 375px, in light and dark, before showing it.
- Do not add features the person did not ask for.
