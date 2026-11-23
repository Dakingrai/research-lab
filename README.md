# research-lab

**A web workspace for your research, from the papers you read to the experiments you run, designed with you rather than for you.**

Fork it, describe your research to a coding agent such as [Claude Code](https://claude.com/claude-code), and it builds you a lab: a reading list with a notes page per paper, research programs with their projects, an experiment page for each experiment, and a Home page of what's running now. The look isn't a generic template. The agent runs a short *design intake*: it reads your description, asks only what it can't work out, shows you a sample page built from proposed design tokens, and builds the lab only after you accept that page. Everything it decides is written down: the brief, each decision with what it beat, short rules a coding agent can follow, and the reasoning for you.

The defaults are quiet and text-first: one column, serif titles over sans metadata, rows instead of cards, colour only where it means something, dark mode for free. You can see a lab made this way at **[internal-lens-lab](https://dakingrai.github.io/internal-lens-lab/)** ([repo](https://github.com/Dakingrai/internal-lens-lab)).

## Quick start

1. **Fork** this repository and clone your fork.
2. Open it in Claude Code and describe your lab:

   ```
   /new-app A lab for my robotics research: papers grouped by topic with a notes page each, and a tab for our three ongoing projects and their experiments.
   ```

3. Answer the few questions the agent asks, then look at the **sample page** it shows you. Ask for changes until you're happy, and accept it.
4. The agent writes the design system to `apps/<name>/` and builds the lab in `sites/<name>/`. Serve it locally:

   ```bash
   python3 -m http.server 8790
   ```

   and open `http://localhost:8790/sites/<name>/`.

5. Later, to add a tab or change the look: `/design-pass <name> add a tab for meeting notes`.

The labs need no build step and no server code, so `sites/<name>/` can be published as it is, for example with GitHub Pages, or moved into its own repository.

## What a lab holds

- **Home**: the experiments running now, and those finished but not yet reviewed, with one line on how far each has got.
- **Resources**: papers and posts grouped by topic, each with a summary in your own words and its own notes page; filter by what you've read.
- **Research programs**: each program opens onto its projects; each project has its question, its reading list and its experiments.
- **Experiment pages**: written before the experiment runs (the claim, what you do, the competing explanations, what you expect, what would make you distrust a result), then the results. The sections follow the [experiment principles](method/experiment-principles.md).

Keep what you need and drop the rest at intake.

## Life of Ideas

research-lab shows where your ideas stand. **[Life of Ideas](https://github.com/Dakingrai/life-of-ideas)** (`loi`) keeps how they got there. It backs up every coding-agent session of a repo (Claude Code and Codex) to a private store on your own disk, so the reasoning you spell out to your agent isn't lost when the agent deletes its transcripts. It never uploads anything.

```bash
uv tool install life-of-ideas   # then, in your fork:
loi init
```

The two are being built to work together: the plan is for a lab to show, from that record, how each idea evolved (what was decided, tried and abandoned) and the time behind each project, through an export you run yourself, since the record is private and a lab can be public.

## What's inside

| Path | What it is |
|---|---|
| `method/intake.md` | The procedure the agent follows, from description to working lab. |
| `method/house-rules.md` | Seventeen rules every design must meet or knowingly depart from, each with its reason. |
| `method/brief-template.md` | The intake brief: audience, reading mode, content, which meanings need a colour, density, tone. |
| `method/experiment-principles.md` | Four principles for designing research experiments. |
| `primitives/tokens/` | Starting token presets (colours, type, spacing; light and dark). |
| `starter/` | The lab every site starts from: Home, Resources with notes pages, Research programs, the experiment page template, a light/dark switch. Open `starter/home.html` to see it. |
| `starter/sample.html` | The sample page template shown at intake. |
| `examples/` | A finished intake, for reference. |
| `apps/`, `sites/` | Where your design entries and labs go. |

## How the design intake decides

- **Infer first, ask little.** The agent fills the brief from your description and asks at most four questions, about meaning and taste rather than values. Visual choices are shown side by side, not described.
- **A page, not a palette.** You approve a rendered sample page, not a list of hex codes.
- **Two layers of writing.** `rules.md` is short and checkable, for the agent that builds and maintains the lab; `rationale.md` explains the choices, for you.
- **Frozen once accepted.** An accepted design changes only through a design pass you accept, so the lab doesn't drift.

## Known limits

The house rules and the one preset were made for research tools. The intake can design other kinds of app too, but expect it to depart from several rules and generate values rather than start from the preset; it records why in the app's `decisions.md`.

## License

[MIT](LICENSE).
