# internal-lens-lab — intake brief

**Date:** 2026-11-23
**Status:** accepted 2026-11-23 as version one; the Research programs tab was added in later passes.
**Description given:** "A web-app called internal-lens-lab where we will manage all the research programs and projects related to creating methods for inspecting and verbalizing the informations encoded within model internal features. For now, just have the Resources tab where we will manage the papers related to the topic."
**References named:** none.
**Starting preset:** `primitives/tokens/research-reading.css`, values unchanged.

| Field | Answer | How it was filled |
|---|---|---|
| What is it | A workspace for research programs and projects on methods that inspect and verbalize what a model's internal features encode. First tab: Resources, a list of papers; later, Research programs. | from the description |
| Audience | One researcher who returns often and knows the field, sometimes a collaborator; later, challenge participants who fork it. | inferred |
| Reading mode | Scanning: open the tab, go to a method, find a paper, read its summary, open its notes, the landing page or the PDF. | inferred |
| Content types | Papers grouped by method; per paper: title, authors, first author's affiliation, venue or source, date at the data's precision, summary in our own words, landing page and PDF links. A notes page per paper. A reading-status filter. | from the description and the seed papers |
| Which meanings need a colour | None on the page. *You can press this* and *look here* kept in the tokens with fixed meanings for later. | decided by the lab |
| Density | Medium: a handful of papers growing by hand; section headings do the wayfinding; one column. | inferred |
| Tone | Quiet instrument. | decided by the lab |
| Themes | White first; dark mode from tokens and a Light/Dark switch. | decided by the lab |
| Existing material | A rejected first build (cards, pills, a server and an edit dialog). | read from disk |
| Constraints | No build step, no server, no accounts; data in one hand-edited file. | decided by the lab |

## Fields the intake could not infer

None needed asking: the reader, the content and the reading mode matched the preset's.

## Fields decided by the lab

- Reuse the research-reading preset unchanged.
- One photograph on Resources, as a short band.
- Papers edited by hand in `resources.js`; no in-app editor.
- Four sections by method; each paper's title opens its notes page.
