/* The data for the Research programs tab. One object per program, each holding its projects; edit by hand.
   Program fields: name, slug, url (optional: the program's own page outside the app; shown as its host on the
   metadata line), started (YYYY-MM-DD), status (active | paused | done), aim (what the program is trying to do,
   one paragraph), image and imageAlt (optional: the program's own illustration, a file in images/, shown whole in a
   left column, and one plain sentence describing it), projects.
   Project fields: title, slug, started, status (idea | planning | active | writing | done), question (the research
   question, one sentence), summary (one paragraph), resources (urls of entries in resources.js the project reads;
   shown under "Reading" on its page).
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
        summary: "What the project will do and why, in one paragraph. The papers it reads are listed below under Reading, as the same rows the Resources tab shows.",
        resources: ["https://arxiv.org/abs/1706.03762"],
      },
    ],
  },
];
