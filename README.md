# Personal Blog - Fabio Elizandro

My personal blog built with Hugo and hosted on GitHub Pages.

## Local Development

```bash
# Install Hugo (macOS)
brew install hugo

# Clone the repository
git clone <your-repo-url>
cd personal-blog

# Install theme
git submodule update --init --recursive

# Start the development server
hugo server -D
```

Visit http://localhost:1313 to see the site.

## Deployment

The site is automatically deployed to GitHub Pages when you push to the main branch.

## Creating New Posts

```bash
hugo new posts/my-new-post.md
```

## License

Content is copyright Fabio Elizandro.
