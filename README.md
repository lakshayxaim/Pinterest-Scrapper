# Pinterest Link Scraper

A Chrome extension that automatically collects Pinterest Pin URLs as you scroll through a page, making it easier to gather content without manually copying links one by one.

## Why I Built This

While creating content for a health app, I needed to find and download health- and gym-related videos from Pinterest. I was using [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) to download videos, but collecting the Pin URLs was a tedious process.

I couldn't use `yt-dlp` to search and discover recommended Pinterest content the way I wanted, so I had to open Pinterest and copy each Pin link manually.

That got annoying pretty quickly, so I built this Chrome extension to automate the repetitive part.

## How It Works

1. Open a Pinterest page containing the content you want to collect.
2. Scroll through the page as you normally would.
3. The extension automatically collects the Pin URLs as content appears.
4. Use the collected links for your content workflow and video downloads with `yt-dlp`.

**The idea is simple:** scroll through Pinterest, collect links, and spend less time on repetitive work.

## Features

- **Automatic link collection** — Collects Pinterest Pin URLs while you scroll.
- **No manual copying** — Avoids copying each Pin link individually.
- **Built for content workflows** — Useful for gathering video references and preparing downloads with `yt-dlp`.

## Tech Stack

- JavaScript
- Chrome Extensions API
- [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) for the downstream video-download workflow

## Use Case

Originally built to speed up collecting health and fitness videos for a health app, but it can be useful for anyone who needs to gather Pinterest Pin links in bulk.

---

Built to solve a small, annoying problem in my workflow.
