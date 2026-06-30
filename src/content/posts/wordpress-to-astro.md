---
title: "Why My Personal Site Runs on Astro (While My Clients Still Use WordPress)"
date: 2026-06-24
excerpt: "After a decade in WordPress, I shifted my personal portfolio to Astro. Here is why it's about choosing the right tool for the job."
metaTitle: "Choosing Astro Over WordPress for Developer Portfolios"
metaDescription: "A veteran WordPress developer and security contributor explains why he chose Astro for his personal site while still building with WordPress for clients."
keywords: ["Astro vs WordPress", "static site migration", "WordPress security contributor", "headless CMS migration"]
tags: ["Technical Strategy", "Web Development", "Opinion"]
---

## The Right Tool for the Job 

I’ve spent the last ten years deeply embedded in the WordPress ecosystem. It has, for as long as I can remember been the technology of choice for building client website projects. There was a point (a few years ago) where it was expected/assumed that we would use WordPres for incoming projects. I would say around 2021 was my height of interest, as during this time, we had quite a few website maintains and new projects and were finding cool ways to leverage the WordPress ecosystem (in a reliable way) to build them. It was an exciting time, WordPress had a buzz around it and many creators had moved away from the likes Envato which consistently offered future issues and were empowered by the strength of the page builders such as Elementor.

Then came AI.

I early 2023 I designed the blueprint for an events site which mimicked the functionality of a very popular San Franciso Beer company which ran a week event every year. The functionality was quite complex, but with the early advances of AI (Chat GPT at that point) I was able to refine a lot of the time spent in both planning and code evaluation to create a rock solid solution. 

But when it came time to rebuild my own personal portfolio and intelligence hub, my priorities shifted. I didn't need a heavy, dynamic database backend just to host markdown files and consulting hooks. 

It came down to choosing the absolute leanest tool for this specific job.

## to be continued...

### Looking at Infrastructure Through a Security Lens

My background with the platform goes well beyond standard design and implementation. I’ve spent years digging into its code to patch vulnerabilities. If you audit global CVE logs, you’ll find my public developer handle, **`savphill`**, attached to verified vulnerability disclosures across major intelligence networks. 

I frequently submit security discoveries and technical patches directly to the [Wordfence Threat Intel Database](https://www.wordfence.com/threat-intel/vulnerabilities/) and the [Patchstack Vulnerability Database](https://patchstack.com/database/). I’ve also engaged directly with the [WordPress Core Security Program](https://wordpress.org) to help keep the ecosystem stable for the millions of businesses running on it. 

When you spend that much time auditing dynamic web hooks and monitoring plug-in attack surfaces, you become highly protective of your own infrastructure. 

For a client project, managing a security surface with firewalls and automated updates is part of the standard operational cost of doing business. But for my solo personal site? I wanted an attack surface of exactly zero.

| Operational Layer | Client Sites (WordPress) | My Personal Site (Astro) |
| :--- | :--- | :--- |
| **Data Storage** | Dynamic MySQL database (Essential for user logins/shops). | Static text files parsed into raw HTML at build time. |
| **Maintenance** | Routine core updates, plug-in audits, and server monitoring. | Zero runtime updates. Nothing to patch on the server. |
| **Authoring Flow** | Rich block editors tailored for non-technical clients. | Fast, local text editing using standard Git and Markdown. |
| **Deployment** | Managed dynamic cloud hosting or specialized VPS. | Free, global distribution via Netlify’s edge CDN. |

### The Frictionless Developer Flow

By switching my personal portfolio to Astro, I eliminated the runtime environment entirely. 

There is no live database waiting for an query, and no open PHP execution route running on a backend server. The production build takes place once, spits out pristine, ultra-lightweight HTML and CSS, and serves it globally. 

The daily authoring workflow is completely distraction-free: