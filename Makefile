.PHONY: help serve build clean new-post install-theme update-theme deploy-local

help: ## Show this help message
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

serve: ## Start development server with drafts
	hugo server -D --bind 0.0.0.0 --baseURL http://localhost:1313

serve-prod: ## Start server without drafts (production-like)
	hugo server --bind 0.0.0.0 --baseURL http://localhost:1313

build: ## Build site for production
	hugo --minify

build-drafts: ## Build site including drafts
	hugo -D --minify

clean: ## Clean generated files
	rm -rf public/
	rm -rf resources/_gen/

new-post: ## Create new post (usage: make new-post TITLE="My Post Title")
	@if [ -z "$(TITLE)" ]; then echo "Error: Please provide TITLE. Usage: make new-post TITLE=\"My Post Title\""; exit 1; fi
	hugo new posts/$(shell echo "$(TITLE)" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$$//g').md

install-theme: ## Install/update theme submodule
	git submodule update --init --recursive

update-theme: ## Update theme to latest version
	git submodule update --remote themes/PaperMod

deploy-local: build ## Build and serve locally (test deployment)
	@echo "Site built successfully!"
	@echo "Files generated in public/ directory"
	@echo "Run 'make serve-prod' to test the built site"

dev: ## Quick development setup (install theme + serve)
	make install-theme
	make serve

check: ## Check for common issues
	@echo "Checking Hugo installation..."
	@hugo version
	@echo "Checking theme installation..."
	@if [ ! -d "themes/PaperMod" ]; then echo "❌ PaperMod theme not found. Run 'make install-theme'"; exit 1; fi
	@echo "✅ Theme installed correctly"
	@echo "Checking content structure..."
	@if [ ! -d "content/posts" ]; then echo "❌ Posts directory not found"; exit 1; fi
	@echo "✅ Content structure looks good"
	@echo "All checks passed! ✅"