# U-Track — downloads

Public home of the U-Track app's downloads, its in-app update feed, and its landing page:
**https://uiscomp.github.io/utrack-releases/**

This repository holds no source code. U-Track's source is private (`UisComp/U-Track-V3`).

| Where | Link |
|---|---|
| App Store (iPhone, iPad) | https://apps.apple.com/app/id6450457205 |
| Google Play (Android) | https://play.google.com/store/apps/details?id=com.uis.uisapprovalsystem |
| Direct APK (Android, permanent link) | https://github.com/UisComp/utrack-releases/releases/latest/download/utrack.apk |
| Latest release page | https://github.com/UisComp/utrack-releases/releases/latest |
| Update feed (read by the app) | https://github.com/UisComp/utrack-releases/releases/latest/download/update.json |

## Releases

Every production deploy of U-Track publishes a release here, tagged `v<version>-<build>`, with
`utrack-<version>-<build>.apk`, `utrack.apk` (the same file under a name that never changes) and
`update.json`. Installed download-link copies read `update.json`, download the newer APK, check its
SHA-256, and update themselves (Settings → App updates). Testing builds are published as
pre-releases, so no installed copy is offered them.

The Google Play copy and the download-link copy are signed differently, so neither updates the
other. Pick one per device. How it all works: `APP-UPDATES.md` in the app's repository.

## The landing page

- `index.html` + `assets/`: the page, in Arabic and English. Screenshots are real captures of
  the app with sample data for an invented company; no customer's data is shown.
- `config.json`: every link, the version shown, an optional banner, which sections show, and
  the footer contact. **This is the only file to edit.**
- `admin.html`: a small dashboard that edits `config.json`. Preview first, then publish with a
  fine-grained GitHub token (Contents: read and write on this repository only). The token stays in
  the browser tab and is never stored here.
