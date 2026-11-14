# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (with drafts)
hugo server -D

# Build site for production
hugo

# Create new post
hugo new posts/post-name.md

# Update theme submodule
git submodule update --init --recursive
```

## Architecture Overview

This is a Hugo static site blog, hosted on GitHub Pages with the custom domain `elizandro.com.br`. The site owns its layouts, styles and scripts; the PaperMod theme submodule is kept only for its Open Graph, Twitter card and schema partials.

### Key Structure
- **Content**: All posts are in `content/posts/` as Markdown files with frontmatter
- **Layouts**: `layouts/` holds every template: `_default/baseof.html`, `_default/single.html` (posts and About), `_default/list.html`, `index.html` (home), `404.html`, and partials (`header`, `footer`, `head`, `mark`, `post-list`)
- **Styles and scripts**: `assets/css/site.css` and `assets/js/site.js`, minified and fingerprinted by Hugo Pipes in `head.html` and `baseof.html`. There is no other build step
- **Static files**: self-hosted fonts in `static/fonts/`, the favicon and touch icon, and post images in `static/images/`
- **Theme**: PaperMod as a git submodule in `themes/PaperMod/`
- **Configuration**: Hugo settings in `hugo.toml` (site description, home intro, social links, menu, syntax highlighting with CSS classes)

### Design
- `PRODUCT.md` records who the site is for and what it must be. `DESIGN.md` records the visual system: read both before changing anything visual
- One theme: a white sheet on a light lavender ground, tones of violet only, no dark mode
- The monogram (`layouts/partials/mark.html`, lowercase "fe" and a lavender full stop) is also the favicon; if the drawing changes, update `static/favicon.svg` and `static/apple-touch-icon.png` with it
- Body text and code must keep a contrast of 7:1 or better
- Design work uses the Impeccable plugin (`/impeccable:impeccable`); its project config and briefs live in `.impeccable/`

### Content Workflow
- Posts are created in `content/posts/` with descriptive filenames
- Use `draft: false` in frontmatter to publish
- Site rebuilds automatically on push to main branch
- Development server runs on http://localhost:1313

### MCP Integration
- Puppeteer MCP server configured in `mcp.json` for browser automation tasks