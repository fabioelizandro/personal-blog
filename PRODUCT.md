# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Fabio writes this blog mostly for himself: thinking in public, working out what he has learned and putting it into words. Readers are welcome guests rather than a target market. The guests who arrive are mostly fellow programmers, landing on a single post from a shared link or a search, and sometimes engineering managers and tech leads for the posts about leadership.

## Product Purpose

A personal blog at `elizandro.com.br` where Fabio Elizandro publishes long-form writing about software design, Go, testing practices, AI-assisted coding, and engineering management. It exists so that hard-won lessons get written down properly. Success is a post that is a pleasure to read from start to finish, on a site that feels unmistakably like its author's own place.

## Positioning

Real experience from someone who has been in the trenches since 2011: a Principal Software Engineer who was Head of Engineering and chose to return to hands-on work. The writing is first-person, practical, and opinionated, with working code. It is not a tutorial farm, a newsletter funnel, or a portfolio.

## Operating Context

- Posts are Markdown files in `content/posts/`, written and published by one person, a few times a year.
- Posts are long-form (roughly 650 to 1,700 words) and mix prose, Go code blocks, blockquotes with attributions, lists, and the occasional image.
- Readers usually arrive directly on a post, not on the home page. The home page is a short list of posts with no title of its own; the latest post is the first in the list and is opened up, showing its first paragraph, a link to continue reading and links to its sections. There is one static page, About.
- Reading happens on both desktop and phone.

## Capabilities and Constraints

- Hugo static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. CI pins Hugo 0.148.1 extended; layouts must build on that version.
- The site owns its layouts, styles and scripts. The PaperMod theme remains installed as a git submodule only for its Open Graph, Twitter card and schema partials.
- No build step beyond Hugo: no Node toolchain, no bundler. Styles and scripts are plain files processed by Hugo Pipes.
- Fonts are self-hosted; the only third-party request is Google Analytics (`G-CYYDDN9JBE`).
- External links open in a new tab through a custom render hook.
- One theme only: a single committed look, with no light/dark switching.
- English only.
- Not decided: tags or categories, search, comments. None exist today and none are requested.

## Brand Commitments

- Name: Fabio Elizandro. Domain: `elizandro.com.br`.
- Voice: first person, direct, warm, unpretentious. The site carries no introduction, tagline or pitch: nothing outside the About page introduces or sells the author.
- The logo is a monogram of the author's initials: lowercase "fe" followed by a lavender full stop. It stands alone in the header and is also the favicon.
- The full stop is the site's recurring element. It closes every page title, marks the current page and the current section, and stands in for bullets and separators.
- The page is a white sheet for the content, lifted clearly off a very light lavender ground. The site is not flat: the sheet has real depth. Every other element is a tone of lavender, and the lavender is barely there: light, comfortable and zen, never strong or vibrant. Code is the exception: its syntax colours are chosen for legibility first, with clearly different hues that stay deep, muted and in harmony with the rest.
- The top of the ground carries one quiet motif: soft layered hills, like mist over a valley. The rest of the ground stays empty.
- Clean and zen over decoration. The aesthetic comes from colour composition, typography and care in small details.
- The author's taste draws on simplicity, craftsmanship, art, zen and Japanese culture, and classical design meeting modern, abstract elements. These inform judgement; they are not motifs to illustrate.
- Nothing animates when a page loads or changes. Motion exists only as a response to the visitor: original, playful, impressive, meant to bring a smile. Nothing moves while someone is reading.
- The full stop is the site's toy. It invites with a subtle movement, is released only by a deliberate gesture, never by accident, and can be played with as a small hidden game. The game has no rules to read; the only words on screen say how to stop, and the cursor changes while it is on. It is forgiving, not twitchy: a hit moves the full stop a sensible distance.
- The hills are a living element: they move with scrolling and answer a click. They do not follow the pointer.
- The "In this post" menu beside the sheet is a valued way to navigate a post and must be easy to read.
- It must never look like a nerdy developer blog, a portfolio or anything salesy, or anything cute or childish.

## Evidence on Hand

- Three published posts and one draft in `content/posts/`, plus `content/about.md`.
- One image asset: `static/images/rick-rubin.jpeg`, used inside a post.
- Links: GitHub `@fabioelizandro`, LinkedIn `fabioelizandro`.
- There is no portrait, illustration, testimonial, or subscriber count. Future work must not invent any.

## Product Principles

1. Reading comes first. Every decision is judged by whether a post is easier and more pleasant to read to the end.
2. It is a place, not a pitch. Nothing on the site sells the author.
3. Simple by construction. A humble `main.go` attitude: no bloat, no machinery the content does not need.
4. Craft shows in the details. Care is demonstrated by how well small things are made, not by how many things there are.
5. Personality is found, not announced: it waits to be discovered and never competes with the text.

## Accessibility & Inclusion

Contrast and readability are a hard requirement. Body text and code meet WCAG AAA contrast (7:1 or better); secondary text and interface labels meet at least AA (4.5:1). The site is fully usable by keyboard, and all motion respects `prefers-reduced-motion`.
