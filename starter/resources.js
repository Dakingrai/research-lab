/* The data for the Readings tab. One object per paper; edit by hand.
   Fields: title, slug (names its notes page, papers/<slug>.html), url (the paper's landing page), pdf (the PDF, or
   null), authors (full list), affiliation (first author's, or null), published (YYYY-MM-DD, YYYY-MM or YYYY), venue
   (shown as where it is published; null means it is read from the link: "arXiv <id>" or the host), section (the
   heading the row is listed under; sections appear in order of first use, rows in file order, newest first),
   status (unread | reading | completed; missing means unread), summary (in your own words, one to three sentences;
   never the abstract).
   To add a paper: add an object here, then copy papers/example-paper.html to papers/<slug>.html and set its
   data-slug. The entry below is an example; replace it with the app's own. */
window.RESOURCES = [
  {
    title: "Attention Is All You Need",
    slug: "example-paper",
    url: "https://arxiv.org/abs/1706.03762",
    pdf: "https://arxiv.org/pdf/1706.03762",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Łukasz Kaiser", "Illia Polosukhin"],
    affiliation: "Google Brain",
    published: "2017-06-12",
    venue: "NeurIPS 2017",
    section: "Example section",
    status: "unread",
    summary: "An example entry. Introduces the Transformer, a sequence model built from attention alone, without recurrence or convolution, and shows it trains faster and translates better than the recurrent models of its time.",
  },
];
