# Contributing & Version Control Guidelines

This document defines the repository conventions, branching strategy, commit rules, versioning policy, and release workflow for the **AI Second Skill Guide** project.

---

## 1. Repository Naming

Use **kebab-case** for repository names. The name should be self-explanatory.

| Style       | Example                          |
| ----------- | -------------------------------- |
| Base        | `ai-second-skill-guide`         |
| With year   | `ai-second-skill-guide-2026`    |
| Multi-guide | `sunny-guides`                  |

---

## 2. Repository Structure

```text
ai-second-skill-guide/
├─ README.md
├─ LICENSE
├─ CHANGELOG.md
├─ CONTRIBUTING.md          ← you are here
├─ VERSION
├─ docs/
│  ├─ ebook/
│  │  ├─ outline.md
│  │  ├─ manuscript.md
│  │  ├─ chapters/          ← individual chapter files (ch00–ch11)
│  │  ├─ appendix/          ← appendix files
│  │  ├─ assets/            ← images, diagrams
│  │  └─ exports/           ← PDF exports (versioned filenames)
│  ├─ landing/
│  │  ├─ copy.md
│  │  └─ sections/
│  └─ templates/
│     ├─ strike-cheatsheet.md
│     ├─ 30day-plan.md
│     └─ tool-matrix.md
├─ marketing/
│  ├─ ig-carousel/
│  ├─ email/
│  └─ ads/
├─ .github/
│  ├─ PULL_REQUEST_TEMPLATE.md
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug.md
│  │  └─ content-request.md
│  └─ workflows/
└─ .gitignore
```

Key conventions:
- `docs/ebook/exports/` stores versioned PDF files (e.g. `AI_Second_Skill_Guide_v1.1.0.pdf`)
- `docs/ebook/chapters/` stores one `.md` file per chapter
- `docs/ebook/manuscript.md` is the combined full-text reference

---

## 3. Branching Strategy (Trunk-based)

This project uses a **trunk-based** workflow, ideal for content-driven repositories.

### Rules

- **`main`** is always in a publishable state (can export a valid PDF at any time).
- Work in **short-lived feature branches**, merged back to `main` promptly.
- After merging, tag and release.

### Branch Naming

Format: `<type>/<short-description>`

| Type    | When to use                          | Example                          |
| ------- | ------------------------------------ | -------------------------------- |
| `feat`  | New content, chapters, templates     | `feat/chapter-06-30day-plan`     |
| `fix`   | Typo corrections, factual fixes      | `fix/typo-landing-hero`          |
| `chore` | Reorganization, tooling, CI changes  | `chore/reorder-outline`          |

---

## 4. Versioning (Semantic Versioning)

This project follows [Semantic Versioning](https://semver.org/) (`MAJOR.MINOR.PATCH`).

| Level   | Version bump | When to use                                                    |
| ------- | ------------ | -------------------------------------------------------------- |
| MAJOR   | `v2.0.0`     | Architecture overhaul, reader path redesign, major chapter restructure |
| MINOR   | `v1.1.0`     | New chapter, new template, significant content addition         |
| PATCH   | `v1.0.1`     | Typo fixes, minor wording tweaks, no structural change          |

The current version is stored in the `VERSION` file at the repository root.

---

## 5. Commit Convention (Conventional Commits)

Every commit message follows the **Conventional Commits** format:

```text
<type>(<scope>): <message>
```

### Types

| Type       | Purpose                                                |
| ---------- | ------------------------------------------------------ |
| `feat`     | New content, chapter, template, or feature             |
| `fix`      | Correct errors, typos, inconsistencies                 |
| `docs`     | Documentation-only changes (README, CONTRIBUTING, etc) |
| `chore`    | Housekeeping: rename, move files, update CI config     |
| `refactor` | Restructure content without adding new information     |

### Scope (optional but recommended)

Common scopes: `ebook`, `landing`, `templates`, `marketing`, `repo`

### Examples

```text
feat(ebook): add Chapter 10 safety boundaries
fix(landing): refine CTA wording and pricing line
chore(repo): reorganize docs folders
docs(repo): update CONTRIBUTING with release workflow
refactor(ebook): split manuscript into individual chapter files
```

---

## 6. Changelog Format

`CHANGELOG.md` follows the [Keep a Changelog](https://keepachangelog.com/) convention.

### Template

```md
# Changelog
All notable changes to this project will be documented in this file.

## [X.Y.Z] - YYYY-MM-DD
### Added
- (new content, features, templates)

### Changed
- (modifications to existing content)

### Fixed
- (bug fixes, typo corrections)

### Removed
- (deleted content or deprecated sections)
```

Every release must have a corresponding changelog entry **before** tagging.

---

## 7. Release Workflow (SOP)

Follow these steps for every release:

### Step 1 -- Update content

- Edit files under `docs/ebook/chapters/`, `docs/templates/`, etc.
- Export the final PDF to `docs/ebook/exports/AI_Second_Skill_Guide_vX.Y.Z.pdf`

### Step 2 -- Bump version and changelog

- Update `VERSION` with the new version number
- Add a new section to `CHANGELOG.md`

### Step 3 -- Commit, tag, and push

```bash
git checkout main
git pull

git add .
git commit -m "feat(ebook): release vX.Y.Z"

git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main --tags
```

### Step 4 -- Create GitHub Release

1. Go to **Releases** > **Draft a new release**
2. Select the tag `vX.Y.Z`
3. Title: `vX.Y.Z`
4. Body: paste the relevant `CHANGELOG.md` section
5. Attach the PDF as a release asset

---

## 8. Quick Reference

| Item              | Convention                                |
| ----------------- | ----------------------------------------- |
| Repo name         | `kebab-case`                              |
| Branch name       | `<type>/<short-description>`              |
| Commit message    | `<type>(<scope>): <message>`              |
| Version file      | `VERSION` (plain text, e.g. `1.0.0`)     |
| Version scheme    | Semantic Versioning (MAJOR.MINOR.PATCH)   |
| Changelog         | `CHANGELOG.md` (Keep a Changelog format)  |
| PDF naming        | `AI_Second_Skill_Guide_vX.Y.Z.pdf`       |
| Main branch       | `main` (always publishable)               |
