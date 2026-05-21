
# Phill — Personal Site
=======
# Psavage.net Portfolio

A modern, minimalist portfolio website built with Astro and deployed on Cloudflare Pages. Features a collection of writings, projects, and professional experiences.

![alt text](image.png)

## Overview

This is a personal portfolio website for ByteKai, a Software Engineer and Curious Tinkerer. The site showcases blog posts, technical notes, project work, and professional experience in a clean, fast-loading format.



A minimalist personal site built with [Astro Brook](https://github.com/holger1411/astro-brook), deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Features

- Brook theme: Tailwind v4, dark/light mode, view transitions
- Blog via Astro content collections (`/posts`, `/journal`)
- RSS feed and sitemap
- Cloudflare Pages deploy via Wrangler

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Deploy

```bash
npm run deploy
```

## Content

Add posts in `src/content/posts/`:

```md
---
title: My Post
date: 2025-03-01
excerpt: Short description
tags: [tag1, tag2]
---

Post body...
```

Site metadata lives in `src/config/site.ts`.

## License

Apache License 2.0 — see [LICENSE](LICENSE).
