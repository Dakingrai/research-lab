/* The data for the Research programs tab. One object per program, each holding its projects; edit by hand.
   Program fields: name, slug, url (optional: the program's own page outside the app; shown as its host on the
   metadata line), started (YYYY-MM-DD), status (active | paused | done), aim (what the program is trying to do,
   one paragraph), image and imageAlt (optional: the program's own illustration, a file in images/, shown whole in a
   left column, and one plain sentence describing it), projects.
   Project fields: title, slug, started, status (idea | planning | active | writing | done), question (the research
   question, one sentence), summary (one paragraph), resources (urls of entries in resources.js the project reads;
   shown under "Reading" on its page), experiments (optional; listed under "Experiments" on its page).
   Experiment fields: title, status (planned | running | done | abandoned), date (when planned, else when run;
   YYYY-MM-DD, YYYY-MM or YYYY), tags (plain words, one from each set: stage preliminary | main | replication; who
   ran it AI-run | AI-assisted | hand-run; checking unreviewed | reviewed), code (optional link to the code),
   href (its page, experiments/<slug>.html, copied from experiments/template.html; the title links to it),
   summary (what it tests and how, in plain words), progress (optional, while it runs: percent, updated as a date,
   now as one sentence on what is happening). Home lists every experiment that is running, and every one that is
   done and still tagged unreviewed; it leaves Home when the tag becomes reviewed.
   Programs appear in file order, projects in file order within their program. Slugs name the pages
   (program.html?p=<slug>, project.html?p=<slug>), so project slugs must be unique across all programs.
   The entries below are examples; replace them with the app's own. */
window.PROGRAMS = [
  {
    name: "Example program",
    slug: "example-program",
    started: "2026-01",
    status: "active",
    aim: "What this program is trying to learn, in one paragraph. A program holds several projects; open it to see them.",
    projects: [
      {
        title: "Example project",
        slug: "example-project",
        started: "2026-01",
        status: "idea",
        question: "The project's research question, as one sentence that could be answered.",
        summary: "What the project will do and why, in one paragraph. The papers it reads are listed below under Reading, as the same rows the Readings tab shows.",
        resources: ["https://arxiv.org/abs/1706.03762"],
        experiments: [
          {
            title: "Example experiment: one case first",
            status: "running",
            date: "2026-01",
            tags: ["preliminary", "AI-run", "unreviewed"],
            href: "experiments/example-experiment.html",
            summary: "What it tests and how, in plain words. Its page states the claim, the competing explanations and what we expect, before it runs.",
            progress: { percent: 40, updated: "2026-01-15", now: "One sentence on what is happening now, such as the second of five conditions running." },
          },
          {
            title: "Example of a finished experiment awaiting review",
            status: "done",
            date: "2026-01",
            tags: ["preliminary", "AI-run", "unreviewed"],
            summary: "Done, and on Home until its tag changes from unreviewed to reviewed.",
            progress: { percent: 100, updated: "2026-01-10", now: "Finished; results are on its page." },
          },
        ],
      },
    ],
  },
];
