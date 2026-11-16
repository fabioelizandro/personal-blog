---
name: Fabio Elizandro
description: A white sheet of writing lifted off a barely-lavender ground, with personality kept in a full stop.
colors:
  ground: "#FCFCFE"
  sheet: "#FFFFFF"
  ink: "#231F38"
  ink-2: "#575080"
  accent: "#473B8F"
  lav-500: "#8F85C2"
  lav-300: "#C9C3E4"
  lav-200: "#DDD9EE"
  lav-100: "#F3F1FA"
  code-bg: "#F8F7FC"
  code-string: "#1F5C40"
  code-number: "#8A2B6A"
  code-type: "#1D4F7A"
  code-comment: "#4E4D63"
  hill-1: "#F9F8FC"
  hill-2: "#F6F4FA"
  hill-3: "#F2EFF8"
  hill-4: "#EEEAF5"
typography:
  display:
    fontFamily: "Literata, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2rem, 1.35rem + 2.8vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Literata, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.4375rem, 1.3rem + 0.6vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Literata, Georgia, 'Times New Roman', serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  lead-title:
    fontFamily: "Literata, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1.4vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.015em"
  list-title:
    fontFamily: "Literata, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Literata, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Hanken Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.01em"
  label-small:
    fontFamily: "'Hanken Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.02em"
  meta:
    fontFamily: "'Hanken Grotesk', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.01em"
    fontFeature: "'tnum'"
  code:
    fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
  full: "999px"
spacing:
  gutter: "clamp(0.75rem, 3vw, 2rem)"
  pad-x: "clamp(1.375rem, 7vw, 5.5rem)"
  sheet-w: "50rem"
  paragraph: "1.35em"
  row: "1.75rem"
  block: "2rem"
  section: "3.25rem"
components:
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "clamp(2rem, 6vw, 4.5rem) clamp(1.375rem, 7vw, 5.5rem) clamp(2.5rem, 6vw, 5rem)"
    width: "{spacing.sheet-w}"
  section-card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "1.125rem 0.75rem 0.875rem"
    width: "15.5rem"
  section-card-link-hover:
    backgroundColor: "{colors.lav-100}"
    rounded: "{rounded.sm}"
  section-card-link-current:
    textColor: "{colors.accent}"
  section-list-collapsed:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "2.75rem"
    padding: "0 1rem"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    height: "2.75rem"
    padding: "0 0.625rem"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-link-active:
    textColor: "{colors.ink}"
  prose-link:
    textColor: "{colors.accent}"
  continue-link:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    padding: "0.75rem 0"
  code-block:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "1.125rem 1.25rem"
  code-head:
    textColor: "{colors.ink-2}"
    typography: "{typography.label-small}"
    padding: "0.25rem 0.375rem 0.25rem 1.25rem"
  copy-button:
    textColor: "{colors.accent}"
    typography: "{typography.label-small}"
    rounded: "{rounded.sm}"
    height: "2rem"
    padding: "0 0.75rem"
  copy-button-hover:
    backgroundColor: "{colors.lav-200}"
  copy-button-active:
    backgroundColor: "{colors.lav-300}"
  inline-code:
    backgroundColor: "{colors.lav-100}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.14em 0.36em"
  blockquote:
    backgroundColor: "{colors.lav-100}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "1.375rem 1.5rem"
  tag:
    backgroundColor: "{colors.lav-100}"
    textColor: "{colors.accent}"
    rounded: "{rounded.full}"
    padding: "0.125rem 0.5rem"
  whisper:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "0.625rem 1rem"
  play-hint:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink-2}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "0.4375rem 0.875rem"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.625rem 1rem"
---

# Design System: Fabio Elizandro

## Overview

**Creative North Star: "The Sheet and the Full Stop"**

One white sheet of paper lies lifted off a ground of barely-there lavender. The writing owns the sheet: a single column of serif text, left-aligned, with nothing beside it but a small card of section links. Everything that is not white is a tone of violet, from the near-black ink to the palest tint behind a code block, so the page reads as one colour at many strengths. The mood is clean, quiet and zen; the craft is in proportion, type and small details, never in ornament.

Personality lives in one mark. The monogram is a lowercase "fe" closed by a lavender full stop, and that full stop is the only element the site repeats: it closes every page title, sits under the current page in the navigation, marks the section being read, replaces the bullets in a list, separates the items of a byline, and stands three in a row where the text takes a break. It is also the site's toy: with a pointer nearby it bobs, and it can be picked up and thrown.

The ground carries a single motif: soft layered hills across its top, like mist over a valley, fading out before the first screen ends. Below them the ground is empty. The page is still when it arrives and still while someone reads; it moves only in answer to the visitor. It is not a centred white developer-blog column with blue links, and it is not decorated.

**Key Characteristics:**
- One white sheet, about 800px wide, with real layered depth over a near-white lavender ground.
- Tones of violet only; the lavender stays very light.
- A serif reading face for titles and text, a grotesque for labels, a monospace for code.
- The full stop is the single recurring element and the only ornament.
- Hills at the top of the ground and nowhere else.
- Nothing animates on load; motion is a reply to the visitor.
- One committed light look, with no dark variant.

## Colors

A single hue family, violet, held between a near-black ink and a ground that is almost white; chroma is spent on the accent and the full stop and nowhere else.

### Primary
- **Deep Lavender** (`accent`, #473B8F): links, the letters of the monogram, code keywords, the copy button's label, the current entry in the section card, the focus ring. It is the only colour that means "this can be followed".
- **Full-Stop Lavender** (`lav-500`, #8F85C2): the full stop wherever it appears, the underline beneath links in running text, and the chevron of the collapsed section list. It is a colour for marks and strokes, never for words.

### Tertiary
- **Code Panel** (`code-bg`, #F8F7FC): the ground of a code block, a shade lighter than Pale Lavender so the text stands off it.
- **Leaf Green** (`code-string`, #1F5C40): string literals in code, and added lines in a diff.
- **Plum** (`code-number`, #8A2B6A): numbers, constants such as `nil` and `true`, and attribute names in code; removed lines in a diff.
- **Deep Blue** (`code-type`, #1D4F7A): types and built-ins in code.
- **Slate** (`code-comment`, #4E4D63): code comments, set in italic.

### Neutral
- **Violet Ink** (`ink`, #231F38): titles, body text, code, and the dark pill of the whisper note and the skip link.
- **Soft Ink** (`ink-2`, #575080): bylines, dates, reading times, navigation at rest, the footer, the labels above code blocks and beside post links.
- **Sheet White** (`sheet`, #FFFFFF): the sheet and the section card. Nothing else is pure white.
- **Mist Ground** (`ground`, #FCFCFE): the page behind the sheet, and the browser theme colour.
- **Pale Lavender** (`lav-100`, #F3F1FA): the fill behind code blocks, inline code, quotations and the tag, and the hover fill in the section card.
- **Hairline Lavender** (`lav-200`, #DDD9EE): every 1px rule and border, and the copy button's hover fill.
- **Pressed Lavender** (`lav-300`, #C9C3E4): the copy button while pressed, the underline that appears under a post title on hover, and the scrollbar thumb.
- **Hill tints** (`hill-1` #F9F8FC, `hill-2` #F6F4FA, `hill-3` #F2EFF8, `hill-4` #EEEAF5): the four layers of hills, palest at the back and deepest at the front. They are used for the hills only.

### Named Rules
**The Violet Only Rule.** Every colour is white or a tone of violet, with hue held between indigo and plum. No second hue enters for emphasis or status; difference is made with lightness and weight. Code is the one exception: inside a code block each kind of token has its own hue (violet, green, plum, blue, slate) so that it can be told from the next at a glance. Those hues are deep and muted, never bright, and they stay inside code blocks.

**The Barely There Rule.** Lavender surfaces stay very light: the ground, the pale fills and the hills all sit above 90% lightness with very little chroma. A lavender that reads as strong or vibrant is wrong, however well it matches.

**The Seven to One Rule.** Body text and code meet 7:1 contrast or better against the surface they sit on, and that includes every syntax colour on the pale code fill. Secondary text and labels meet at least 4.5:1. Full-Stop Lavender is about 3.3:1 on white, which is why it draws marks and underlines and is not used to set text. The one exception is the count in the full-stop game, which stands in for the full stop itself and is large, brief and not needed for reading.

## Typography

**Display Font:** Literata (with Georgia, Times New Roman, serif)
**Body Font:** Literata (with Georgia, Times New Roman, serif)
**Label Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo, Consolas, monospace)

**Character:** A bookish serif does all the reading and all the titling, at a medium weight that is confident without shouting. A plain, slightly warm grotesque stays small and quiet around it for everything that is interface rather than writing. All three families are self-hosted variable fonts.

### Hierarchy
- **Display** (500, clamp(2rem, 1.35rem + 2.8vw, 3rem), 1.12, -0.015em): the one title on a page: a post's title, the About title. Left-aligned, balanced wrapping, closed by a full stop. The not-found title uses the same style one step smaller (clamp(1.875rem, 1.4rem + 2vw, 2.5rem)).
- **Lead title** (500, clamp(1.625rem, 1.3rem + 1.4vw, 2rem), 1.18, -0.015em): the title of the latest post, in the first row of the list of posts. It is a row's title made larger, not a page title, so it has no full stop.
- **Headline** (600, clamp(1.4375rem, 1.3rem + 0.6vw, 1.625rem), 1.25, -0.01em): section headings inside a post.
- **Title** (600, 1.25rem, 1.3): sub-headings inside a section.
- **List title** (500, clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem), 1.25, -0.01em): a post's title in a row of the list of posts.
- **Body** (400, clamp(1.0625rem, 1rem + 0.35vw, 1.1875rem), 1.7): running text, with pretty wrapping and 1.35em between paragraphs. The sheet's width and padding give a measure of roughly 60 to 65 characters. Bold is 600. Quotations are the same face in italic.
- **Label** (Hanken Grotesk 500, 0.9375rem, 0.01em): navigation, the section card's entries, the section links in the lead, quotation attributions, tables, and "Continue reading" at weight 600.
- **Small label** (Hanken Grotesk 500 to 600, 0.8125rem, 0.02em): the heading of the section card and of the lead's sections, the language name and copy button above a code block, "Newer" and "Older".
- **Meta** (Hanken Grotesk 400, 0.875rem to 0.9375rem, 0.01em, tabular figures): bylines, dates, reading times, the footer.
- **Code** (JetBrains Mono 400, 0.875rem, 1.7, ligatures off): code blocks; 0.8125rem at phone widths. Inline code is 0.86em of the surrounding text.

### Named Rules
**The Two Voices Rule.** Literata is the writing; Hanken Grotesk is the interface. Anything the author wrote is serif, and anything the site says about it (a date, a label, a control) is sans. The two never swap.

**The Sentence Case Rule.** Labels are set in sentence case at their natural spacing, with no more than 0.02em of tracking. No label is uppercase.

## Layout

The page is a column in three parts: the header, the sheet, the footer, all sharing one width (50rem) and one pair of edges, centred on the ground with a fluid gutter (clamp(0.75rem, 3vw, 2rem)). The header holds the monogram alone at the sheet's left edge and the navigation at its right edge; the footer mirrors it with the copyright line at the left and outside links at the right. Inside the sheet, everything is left-aligned to one inner margin (clamp(1.375rem, 7vw, 5.5rem) of horizontal padding).

The home page has no title of its own: the sheet is one list of posts, newest first, and every post is a row on the same two columns. The newest row is opened up, with a larger title, the post's first paragraph and a list of its sections, so the page starts with something to read and several ways into it, and it stays a row so that it is never taken for the title of the page. On a laptop the second row is in view without scrolling.

A post with three or more sections gets a list of them. From 84rem up the sheet stays centred in the window and the list is a white card in the right margin, sticky 1.5rem from the top. Between 70rem and 84rem the sheet and the card are centred as a pair, 1.25rem apart, and the header and footer keep to the sheet's edges. Below 70rem the card is replaced by a collapsed "In this post" disclosure at the top of the sheet.

Vertical rhythm is set by a few steps: 1.35em between paragraphs, 2rem around a code block, quotation, image or table, 3.25rem above a section heading and 2.5rem above a sub-heading, 1.75rem above and below each row in the list of posts. From 48rem up, code blocks hang 1.5rem outside the text column on both sides so their code aligns with the text. In the list of posts, from 44rem up, the date moves into its own 7.25rem column to the left of the title.

At phone widths the sheet runs nearly edge to edge and its padding closes down with the fluid values; nothing is reordered or hidden except the section card. Interactive targets are at least 2.75rem tall, including the copy button on touch screens. In print, only the sheet's content remains, on plain white.

### Named Rules
**The Shared Edge Rule.** The monogram, the navigation, the sheet and the footer line up on the same two edges. Nothing on the ground sits wider than the sheet except the section card.

**The Hills At The Top Rule.** The ground's motif occupies a band 440px tall at the very top of the page and fades to nothing from about halfway down it. It scrolls away with the page. The rest of the ground is empty, and no other surface carries a pattern.

## Elevation & Depth

The site is not flat. Depth belongs to exactly two objects, the sheet and the section card, and both are lifted by layered, violet-tinted shadow with a hairline ring in place of a border. Everything inside the sheet is flat: code blocks and quotations are distinguished by a pale fill, and divisions are 1px hairlines.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 0 0 1px rgba(71, 59, 143, 0.07), 0 2px 4px rgba(53, 44, 110, 0.05), 0 12px 24px -8px rgba(53, 44, 110, 0.12), 0 40px 80px -28px rgba(53, 44, 110, 0.3)`): the sheet. A ring, a contact shadow, a mid shadow and a long soft cast that falls below it.
- **Card** (`box-shadow: 0 0 0 1px rgba(71, 59, 143, 0.07), 0 2px 4px rgba(53, 44, 110, 0.04), 0 14px 28px -14px rgba(53, 44, 110, 0.22)`): the section card. The same recipe, closer to the ground than the sheet.

### Named Rules
**The Two Lifted Things Rule.** Only the sheet and the section card cast a shadow. Nothing inside the sheet is raised, and no shadow appears or grows in response to hover.

**The Tinted Shadow Rule.** Shadows are violet, never grey or black, and always soft and layered: a wide blur with a negative spread, cast downward.

## Shapes

Corners are gently eased and small: 6px for surfaces (the sheet, the section card, code blocks, quotations, the collapsed section list), 4px for small things (inline code, the copy button, a hovered entry in the section card, images), 2px on the focus ring. The full pill (999px) is kept for the two smallest floating labels, the tag and the whisper note.

The circle belongs to the full stop: every dot on the site is that mark at a different size, always in Full-Stop Lavender. Rules and borders are single 1px hairlines in Hairline Lavender; code blocks and the collapsed section list have a hairline border, quotations have none. The hills are smooth, low sine curves with no hard edge against the ground.

The monogram is "fe" outlined from Literata at medium weight in Deep Lavender, followed by a full stop in Full-Stop Lavender, drawn in a 48-unit square with no container. The favicon is the same drawing on a pale lavender rounded tile.

### Named Rules
**The One Mark Rule.** The full stop is the single recurring element. It closes each page title, sits beneath the current navigation item, marks the current section, replaces list bullets, separates byline items, and stands three in a row as the break in a text. No second ornament, icon set or decorative shape joins it.

## Components

Components are quiet and typographic: most are text with a precise hover, and the two that are surfaces are paper.

### Monogram
- **Style:** the "fe." drawing at 2.875rem in the header, nudged left so the stem of the f meets the sheet's edge; it is the home link and carries a hidden text label. A 2rem copy closes every post.
- **Behaviour:** with a fine pointer within about 56px, its full stop bobs 5px up and down as an invitation, and the cursor becomes a grab hand over the stop itself. Pressing the stop picks it up; releasing throws it. See The Loose Full Stop.

### Navigation
- **Style:** two text links in Label type, Soft Ink at rest, 2.75rem tall, at the right end of the header.
- **States:** hover turns the text to Violet Ink and shows a full stop beneath it at half strength, scaling up from 0.4; the current page is Violet Ink with the full stop at full strength. On a post, "Writing" is the current item.
- **Footer links:** Meta type in Soft Ink with a 1.5px Full-Stop Lavender underline; on hover both text and underline turn Deep Lavender.

### Sheet
- **Corner Style:** 6px.
- **Background:** Sheet White on Mist Ground.
- **Shadow Strategy:** the Sheet shadow; no border.
- **Internal Padding:** clamp(2rem, 6vw, 4.5rem) above, clamp(1.375rem, 7vw, 5.5rem) at the sides, clamp(2.5rem, 6vw, 5rem) below.
- **Page head:** the Display title closed by a full stop, then on a post a byline in Meta type (author, date, reading time, separated by small full stops that never begin a line), then a hairline. The home page has no page head: its heading, "Writing", is there for screen readers only, and the navigation already says where the visitor is.

### Section list
- **Card (70rem and up):** a white 6px card with the Card shadow, headed "In this post" in Small label type and Soft Ink. Entries are Label type in Violet Ink, so the list reads as easily as the text. Hover fills an entry with Pale Lavender; the section being read turns Deep Lavender and gains a full stop at its left. The card is sticky and scrolls internally if it is taller than the window.
- **Collapsed (below 70rem):** a hairline-bordered 6px disclosure at the top of the sheet, 2.75rem tall, labelled "In this post" at weight 600 with a small chevron that turns over when open. It closes when a section is chosen.

### Links in text
- **Style:** Deep Lavender with a 2px Full-Stop Lavender underline offset 0.2em. On hover the underline deepens to Deep Lavender.
- **Titles as links:** a post title in the list is Violet Ink with no visible underline; on hover it turns Deep Lavender and a 2px Pressed Lavender underline appears. The "Newer" and "Older" titles at the end of a post are Deep Lavender and gain the same underline on hover.
- **Continue reading:** the one link that is a label and not writing: Label type at weight 600 in Deep Lavender, with the same 2px Full-Stop Lavender underline as a link in text, offset 0.3em, deepening to Deep Lavender on hover. It is text only, with no arrow and no fill, and its target is 2.75rem tall.

### Code
- **Block:** Pale Lavender fill, hairline border, 6px corners, 1.125rem by 1.25rem of padding, horizontal scroll for long lines. A head strip above the code names the language at the left in Small label type and holds the copy button at the right, divided from the code by a hairline.
- **Copy button:** text only, Deep Lavender at weight 600, 2rem tall (2.75rem on touch screens), 4px corners. Hover fills it with Hairline Lavender, press with Pressed Lavender. Its label changes to "Copied" for a moment.
- **Syntax:** one hue per kind of token. Keywords in bold Deep Lavender, markup tags in Deep Lavender at weight 600, strings in Leaf Green, numbers, constants and attribute names in Plum, types and built-ins in Deep Blue, comments in italic Slate, function names in bold ink, everything else in ink. All of them keep 7:1 or better on the Code Panel.
- **Inline:** Pale Lavender fill, 4px corners, 0.86em.

### Quotation
- **Style:** a Pale Lavender panel with 6px corners and no border or side stripe, text in italic Literata. A closing line that starts with a dash is the attribution, set upright in Label type and Soft Ink.

### List of posts
- **Lead:** the first row, holding the latest post. It keeps the row's shape, with the date in the same column and form as every other row, and differs in three ways: the title is in Lead title type; the description gives way to the post's first paragraph, whole and never more than the one, at the description's size but in Violet Ink because it is the writing itself; and the reading time gives way to a line with "Continue reading" followed by the reading time, separated by a small full stop.
- **Lead sections:** when the latest post has three or more sections, the lead ends with them: "In this post" in Small label type and Soft Ink, then the section titles in Label type and Violet Ink, each behind a full stop, in two columns that read down and then across (one column on a narrow phone). Each links straight to that section of the post and turns Deep Lavender on hover; nothing is filled or underlined. It is the section card's list brought into the row, so it uses the same words and the same type.
- **Row:** date in Meta type, title in List title type, a one-paragraph description in Soft Ink, reading time in Meta type; rows are divided by hairlines. From 44rem the date sits in its own left column.
- **Tag:** a small Pale Lavender pill with Deep Lavender text at weight 600 and 0.75rem; used to mark a draft.

### Whisper
- **Style:** a Violet Ink pill with white Meta text, centred 1.5rem above the bottom of the window. It rises 0.75rem and fades in, stays about three seconds, and leaves. It reports things the visitor caused: the zen mode, and a run in the full-stop game.

### The Loose Full Stop
The monogram's full stop can be picked up and thrown; nothing happens until someone does. When the pointer comes within about 56px it bobs twice as an invitation, and the cursor over it is a grab hand. It is picked up by dragging it; a plain click on it is still a click on the home link. It is never released by accident, it has no rules to read, and it is absent when reduced motion is requested.

Once it is out, it is a small game of keeping it up:
- **Every throw goes up first.** However the stop is let go, it leaves the hand upwards, so there is always time to bring the bar under it for a first bounce.
- **The field is the whole window.** The stop passes in front of the sheet and the section card. The left and right edges are walls, the top edge turns it back gently, and the bottom edge is the only way to miss.
- **The pointer carries a bar** in Full-Stop Lavender, the stop's own colour, 10px thick with rounded ends, drawn with the stop in place of the cursor. Its kicking edge is 7px wider on each side than it is drawn, and it ignores a freshly thrown stop for a quarter of a second.
- **It gets harder the longer a run lasts.** The bar starts 112px wide and loses 6% of its width with every kick, down to 26px; the pace quickens by a little over 1% per kick, up to 45% faster, with the bounce staying the same height. Every match starts with the bar wide and the pace gentle.
- **The bounce is regular in height and never straight up.** Off the top of the bar the stop always leaves at the same upward speed, a little more if the bar is on its way up, and never so hard that it leaves the window. Sideways it always goes one way or the other: towards the end of the bar it landed nearer, faster the nearer the end, and even a dead-centre hit drifts. A still bar cannot keep it up; the player has to follow. Gravity is light: a bounce lasts about a second and a third.
- **Every kick counts**, as long as the bar has moved since the last one. The count takes the full stop's place in the monogram: it is real type inside the mark, Literata 600 with lining figures, about two thirds the size of the letters, on their baseline and in Full-Stop Lavender, the colour of the stop it stands in for. It starts from 0 and lifts 3px when it goes up.
- **A miss ends the match.** The stop lies where it landed for a beat, then flies home to the monogram. To play again, pick it up again.
- **Putting it back banks the run.** Steered into its own empty place in the monogram, the stop stays there and a whisper reports the run.
- **The hills feel it.** A stop that reaches the top of the window while the hills are in view raises a swell there.
- **Feedback is small:** the stop flattens for an instant on a kick, the bar dips 5px, one faint lavender ring opens from the point of contact, and the count lifts when it goes up. There is no trail, no sound and no screen shake.
- **It ends cleanly.** Because the cursor is hidden while the stop is out, any click ends the game and activates nothing under it. Escape, scrolling, the window losing focus, or typing "zen" also send the stop home along an arc, and the bar disappears while the pointer is outside the window; a whisper is shown only for a run of five or more, or a new best of at least three; the best is remembered in the browser.

On a touch screen the game belongs to the full stop that closes a post, so the home link stays a link: a tap sends it up, each further tap keeps it there and counts, and when it reaches the bottom it goes home. There is no bar.

### Play Hint
- **Style:** a Sheet White pill with Soft Ink Meta text and the section card's shadow, centred 1.25rem above the bottom of the window. It reads "Click or Esc to stop" (on a touch screen, "Scroll to stop"), is hidden from assistive technology because the game is pointer-only, and is shown for exactly as long as the full stop is loose. While it is showing, the whisper sits above it.

### The Hills
Four layers of low hills are drawn into the page itself, so they are present and still when it loads. As the top of the page scrolls away, the layers slide sideways and sink at different rates, the nearest moving most. A click on the hills raises a swell that parts in two and travels outwards, reaching the nearest layer first. They never follow the pointer. On phones the drawing is raised 5.5rem so the hills show behind the header. With reduced motion they stay still.

### Zen
Typing "zen" anywhere fades out the header, footer, hills and section card, removes the sheet's shadow and turns the ground white, leaving only the writing. Escape, or typing it again, brings everything back.

### Motion
Transitions are short and belong to a state change the visitor made: 0.2s for colour and underline, 0.3s to 0.6s on an ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)) for the navigation's full stop, the whisper, and the zen fade. The focus ring is a 2px Deep Lavender outline offset 3px, on every focusable element.

**The Still Page Rule.** Nothing animates when a page loads or changes, and nothing moves while someone is reading. Every motion is a reply to something the visitor did: a hover, a scroll, a click, a throw.

## Do's and Don'ts

### Do:
- **Do** keep all writing on the white sheet, 50rem wide, left-aligned to one inner margin, with the header and footer on the sheet's edges.
- **Do** build every new surface from the existing tones: Sheet White for paper, `lav-100` for a quiet fill, `lav-200` for a hairline, `ink-2` for secondary text, `accent` for anything that can be followed.
- **Do** check contrast before using a colour for text: 7:1 or better for body text and code on their own background, 4.5:1 or better for labels and secondary text.
- **Do** close a page title with the full stop, and use the full stop wherever a marker, bullet or separator is needed.
- **Do** set anything the author wrote in Literata and anything the site says about it in Hanken Grotesk, in sentence case.
- **Do** separate things inside the sheet with a pale fill or a 1px `lav-200` hairline, and keep corners at 6px for surfaces and 4px for small things.
- **Do** make new motion a reply to the visitor, give it the ease-out curve, and switch it off under `prefers-reduced-motion`.
- **Do** keep interactive targets at least 2.75rem tall and give every one the 2px `accent` focus ring.

### Don't:
- **Don't** animate anything when a page loads or changes: no fade-ins, no reveals on scroll, no page transitions.
- **Don't** introduce a hue outside violet, including a blue link colour, or status colours in code.
- **Don't** strengthen the lavender. The ground, the fills and the hills stay very light; a saturated or mid-tone lavender surface is out of character.
- **Don't** set text in `lav-500`. It is for the full stop, underlines and small strokes only.
- **Don't** add a second recurring ornament, an icon set, illustrations or emoji. The full stop is the one mark.
- **Don't** put the hills, or any pattern, anywhere but the top of the ground, and don't make them follow the pointer.
- **Don't** flatten the sheet into a bordered box, and don't raise anything inside it: no shadows on code blocks, quotations or rows, and no shadow that grows on hover.
- **Don't** use grey or black shadows; shadows are violet-tinted, soft and layered.
- **Don't** centre the reading column's text or titles, and don't let anything on the ground run wider than the sheet apart from the section card.
- **Don't** add a dark theme or a theme switch. There is one look.
- **Don't** give the full-stop game instructions, a score panel or any interface, and don't let it start without a deliberate press.
