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

This is a Hugo static site blog using the PaperMod theme. The site is hosted on GitHub Pages with custom domain `elizandro.com.br`.

### Key Structure
- **Content**: All posts are in `content/posts/` as Markdown files with frontmatter
- **Theme**: Uses PaperMod theme as git submodule in `themes/PaperMod/`
- **Layouts**: Custom layout overrides in `layouts/` (index.html, baseof.html, partials)
- **Static files**: CSS and other assets in `static/`
- **Configuration**: Hugo settings in `hugo.toml`

### Site Configuration
- Light theme only (theme toggle disabled)
- Minimalist design with most UI elements hidden (reading time, share buttons, ToC, etc.)
- Custom domain setup with GitHub Pages
- Posts use frontmatter with title, date, draft status, and description

### Content Workflow
- Posts are created in `content/posts/` with descriptive filenames
- Use `draft: false` in frontmatter to publish
- Site rebuilds automatically on push to main branch
- Development server runs on http://localhost:1313

### MCP Integration
- Puppeteer MCP server configured in `mcp.json` for browser automation tasks