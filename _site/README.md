# BizBudget Project Website

COMP 3350 — Winter 2026 — Group a01-g14

## Setup

```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000

## Adding Your Demo Video

Place your screen recording at:

```
assets/video/demo.mp4
```

Then replace the placeholder in `index.md`:

```html
<!-- Replace this: -->
<div class="demo-placeholder"> ... </div>

<!-- With this: -->
<video controls poster="assets/video/poster.jpg">
  <source src="assets/video/demo.mp4" type="video/mp4">
</video>
```

## Updating Team Members

Edit the team cards in `index.md` under the `#team` section.
Fill in real names, roles, and skills for each team member.

## Deploying to GitHub Pages

Push to your repo and enable GitHub Pages in Settings → Pages.
Set the source to the `docs/` folder or root of main branch.
