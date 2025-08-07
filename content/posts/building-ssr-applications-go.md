---
title: "A Guide to Building SSR Applications Using Go"
date: 2025-01-18
draft: false
description: "Exploring how to build simple server-side rendered web applications in Go, moving away from JSON APIs and SPA applications."
---

I recently started working on a new project, and as usual, I found myself diving into options for building web applications. This time, I wanted to move away from JSON APIs and SPA applications to something simpler: server-side rendering (SSR).

I explored frameworks like Ruby on Rails, Phoenix/Elixir, and some JavaScript ones. They all have their strengths, but somehow, I end up coming back to Go. There's something about its simplicity that makes starting a new project fun. With Go, it all begins with a humble main.go. No code generators, no mountains of dependencies, and no overwhelming configurations. You just start coding, and the application evolve as needed.

For me, the initial bloat that comes with frameworks like Phoenix gives me anxiety — unused code, unnecessary complexity, and a setup that feels too big for a project that just started. Go, by design, keeps things clean and straightforward.

In this post, I'll share how to build a simple web application in Go using server-side rendering. If you're curious about SSR in Go, this guide should give you a good starting point.

## Getting Started

Let's set up our project by creating a simple Go application with server-side rendering. For this example, I'm using Gin because it's lightweight and easy to use. To support template "inheritance", we'll use Multitemplate.

Here's the initial setup in main.go:

```go
// main.go
package main

import (
	"net/http"

	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.HTMLRender = htmlRender()

	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index", gin.H{})
	})

	r.GET("/about", func(c *gin.Context) {
		c.HTML(http.StatusOK, "about", gin.H{})
	})

	err := r.Run(":8080")
	if err != nil {
		panic(err)
	}
}

// Configure the HTML renderer
func htmlRender() multitemplate.Renderer {
	r := multitemplate.NewRenderer()
	r.AddFromFiles("index", "templates/base.gohtml", "templates/pages/index.gohtml")
	r.AddFromFiles("about", "templates/base.gohtml", "templates/pages/about.gohtml")
	return r
}
```

Now let's create the templates.

## Base Template

The base template serves as the layout for all pages:

```html
{{/*base.gohtml*/}}

<html lang="en">
<head>
    <title>{{ template "title" . }}</title>
</head>
<body>
<div>
    {{ template "body" . }}
</div>
</body>
</html>
```

## Pages

Pages "inherits" from the base template:

```html
{{/*index.gohtml*/}}

{{ define "title" }}Home Page{{ end }}

{{ define "body" }}
   <p>Hello World</p>
{{ end }}
```

```html
{{/*about.gohtml*/}}

{{ define "title" }}About{{ end }}

{{ define "body" }}
   <p>Here's a little bit about me...</p>
{{ end }}
```

At this point, you can run your application, and you'll have two routes: / (Home) and /about (About). Gin will serve the pages using the base.gohtml as the base layout.

## Why Multitemplate?

You might be wondering why we need the Multitemplate dependency. By default, Gin doesn't support multiple templates and you will need to duplicate the base layout across multiple pages. It's a bit odd to me that this isn't built-in as this is essential when building SSR applications. I guess most of the userbase of Gin is building JSON APIs for SPAs or native apps 🤷‍♂

## What About Type Safety?

Unfortunately, Go templates don't support type safety. However, if you're using GoLand, you can get type hints by saving templates with the .gohtml extension and annotating the dot type.

While this doesn't enforce type safety, it improves the development experience. If you really need type-safe templates, check out Templ. Personally, I find the extra build step annoying and it kills the simplicity and brings TypeScript memories that I prefer to avoid.

## Wrapping Up

This is just a starting point, but it's enough to get you building SSR applications in Go. From here, you can experiment with adding more routes, handling forms, or connecting to a database.

I hope this gives you the extra push to start building SSR applications in Go and skip the complex setup of the big web frameworks.

Happy coding!