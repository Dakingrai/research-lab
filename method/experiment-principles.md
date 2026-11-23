# Experiment principles

Four principles for designing experiments. They work together and steer the choice between designs. They are not steps to follow in sequence, and a design will not always meet all of them fully. The idea they share: the experiment should make the conclusion clear by construction, rather than requiring extensive analysis to establish what the result means.

**How they are used.**
- They are read when an experiment is planned or its design is changed. They do not go through design intake.
- Where a design departs from one, say so on the experiment's page before it runs.
- They are guides, not a prescriptive process; planning with them stays light.

## 1. State the claim clearly, then derive the experiment

State the scientific claim so precisely that it cannot reasonably be interpreted in two different ways. Design the experiment backward from that claim.

- **Write the intended conclusion first.** State the exact sentence the experiment should allow us to say. Identify the essential assumptions and evidence needed to justify it, including seemingly obvious ones.
- **Give the claim its references.** Beside the claim and each competing explanation, cite the prior work that makes it plausible, so a reader can see where each side comes from. If a side has no prior work behind it, say so.
- **Define every important term operationally.** Specify exactly what is being measured, on which model, prompts, conditions, and metrics. Avoid vague concepts that could be interpreted differently after seeing the results.
- **Draw the experiment.** Use a simple diagram showing what is intervened on, what remains unchanged, and where the outcome is measured. Sketch the predicted results under the primary and strongest competing explanations. Label every axis with the measured quantity and experimental condition. Clearly mark predictions as hypothetical, never as observed data.
- **Test the logic before implementation.** A reader seeing only the claim, experimental diagram, and predicted results should understand what evidence would support or falsify the claim. Ask whether the strongest competing explanation could produce the same positive result. If so, simplify or redesign the experiment.

The experiment should make the conclusion clear by construction, rather than requiring extensive analysis to establish what the result means.

## 2. Prefer few metrics, each readable on its own

Treat the metric as part of the design, and often its starting point. The claim, the metric and the procedure can be worked out together and revised. When they pull apart, keep the metric true to the claim and adjust the procedure.

- **Every metric has a cost:** it must be explained, it makes the logic harder, and it can disagree with the others. Start with one metric for each aspect of the claim, and add another only when what it tells us is worth that cost.
- **If the experiment seems to need many metrics, consider redesigning it.** Narrowing the claim is one way; a different procedure or a more direct metric are others.
- **Measure the claimed behaviour directly** where possible, not a stand-in that must then be checked against it.
- **Build the conditions for success into the metric**, so that known ways of faking a result do not count, instead of ruling them out with further measurements.
- **A metric can be qualitative** when that is the most direct way to see the behaviour. Decide beforehand what will be examined, what would count for and against the claim, and how the examples shown are chosen.

If reading one metric needs several other measurements beside it, look for a different metric.

## 3. Prefer simple experimental logic, even when execution is harder

- **Make competing explanations disagree.** Identify the strongest plausible explanations first, grounded in prior evidence. Choose an experiment where they predict clearly distinguishable outcomes, ideally different in kind or direction rather than only slightly different in magnitude.
- **Give them their own section.** The experiment's page has a section called "Competing explanations". It names each explanation with its reference and what it predicts, drawn where a picture helps. It then lists the other reasons each result could arise, and for each one what in the design rules it out, or a plain statement that nothing does.
- **Design away confounders.** Prefer eliminating confounding explanations through the experimental setup itself rather than adding measurements to account for them afterward. Include only the controls necessary to establish a valid conclusion, identified before running the experiment.
- **Make results interpretable by design.** The primary measurements and predefined analyses should be sufficient to determine what the experiment establishes. Do not rely on additional post-hoc analyses to make the central result convincing.

Prefer an experiment that is difficult to execute but easy to interpret over one that is easy to execute but difficult to interpret.

**For the AI agent.** Adding a control or one more analysis costs an agent little, so its habit is to keep the first design it thought of and answer every doubt with another measurement. When the list of controls keeps growing, set the design aside, look for a different logic that tests the same claim, compare the candidates by this principle, and bring the person you are working with the best one with the others and why they lost.

## 4. Prefer decisive scope over broad ambiguity

A narrow experiment that convincingly establishes one mechanistic fact is better than an ambitious experiment requiring extensive analysis and qualifications.

## One rule about running

Run one case first and have a person read it before the rest is submitted.

## Why

An experiment whose result needs many controls and analysis after the fact is slow to finish, hard to explain, and still leaves the conclusion uncertain. A design with simple logic is easier to communicate and more convincing.

