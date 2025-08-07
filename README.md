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

## Domain Setup

The site is configured to use the custom domain `elizandro.com.br`. Make sure to configure your DNS settings:

1. Add an A record pointing to GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

2. Or add a CNAME record pointing to `<your-username>.github.io`

## Creating New Posts

```bash
hugo new posts/my-new-post.md
```

## License

Content is copyright Fabio Elizandro. Theme is PaperMod by Aditya Telange.