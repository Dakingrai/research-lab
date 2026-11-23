# design-lab

**Describe the web app you want; get a design system you approve and an app built from it.**

design-lab is a small, opinionated method for designing web apps with a coding agent such as [Claude Code](https://claude.com/claude-code). Instead of letting the agent improvise a look, it runs an *intake*: it reads your description, asks only what it can't work out, shows you a sample page built from proposed design tokens, and builds the app only after you accept that page. Everything it decides is written down: the brief, each decision with what it beat, short rules a coding agent can follow, and the reasoning for you.

It grew out of building research tools (reading lists, paper notes, research programs and projects), so its defaults are quiet and text-first: one column, serif titles over sans metadata, rows instead of cards, colour only where it means something, dark mode for free. Its starter app tracks research from reading to experiments: papers with notes, programs and projects, and a Home page of the experiments running now. You can see an app made this way at **[internal-lens-lab](https://dakingrai.github.io/internal-lens-lab/)** ([repo](https://github.com/Dakingrai/internal-lens-lab)).

## Quick start

1. **Fork** this repository and clone your fork.
2. Open it in Claude Code and describe your app:

   ```
   /new-app A reading list for my lab's robotics papers, grouped by topic, with a notes page per paper and a tab for our three ongoing projects.
   ```

3. Answer the few questions the agent asks, then look at the **sample page** it shows you. Ask for changes until you're happy, and accept it.
4. The agent writes the design system to `apps/<name>/` and builds the app in `sites/<name>/`. Serve it locally:

   ```bash
   python3 -m http.server 8790
   ```

   and open `http://localhost:8790/sites/<name>/`.

5. Later, to add a tab or change the look: `/design-pass <name> add a tab for meeting notes`.

The apps need no build step and no server code, so `sites/<name>/` can be published as it is, for example with GitHub Pages, or moved into its own repository.

## What's inside

| Path | What it is |
|---|---|
| `method/intake.md` | The procedure the agent follows, from description to working site. |
| `method/house-rules.md` | Seventeen rules every design must meet or knowingly depart from, each with its reason. |
| `method/brief-template.md` | The intake brief: audience, reading mode, content, which meanings need a colour, density, tone. |
| `method/experiment-principles.md` | Four principles for designing research experiments, for research apps that plan them. |
| `primitives/tokens/` | Starting token presets (colours, type, spacing; light and dark). |
| `starter/` | The app every site starts from: a Home tab of running experiments, a list tab with notes pages, a programs tab where projects list their experiments, an experiment page template, a light/dark switch. Open `starter/home.html` to see it. |
| `starter/sample.html` | The sample page template shown at intake. |
| `examples/` | A finished intake, for reference. |
| `apps/`, `sites/` | Where your design entries and apps go. |

## How it decides

- **Infer first, ask little.** The agent fills the brief from your description and asks at most four questions, about meaning and taste rather than values. Visual choices are shown side by side, not described.
- **A page, not a palette.** You approve a rendered sample page, not a list of hex codes.
- **Two layers of writing.** `rules.md` is short and checkable, for the agent that builds and maintains the app; `rationale.md` explains the choices, for you.
- **Frozen once accepted.** An accepted system changes only through a design pass you accept, so the app doesn't drift.

## Known limits

The house rules and the one preset were made for research-reading tools. For other kinds of app (a shop, a dashboard, a game), expect the agent to depart from several rules and generate values rather than start from the preset; it records why in the app's `decisions.md`. Contributions of new presets and rules from other kinds of app are welcome.

## License

[MIT](LICENSE).
