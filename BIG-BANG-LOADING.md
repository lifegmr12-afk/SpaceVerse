# SpaceVerse Big Bang Loading Screen

The homepage now opens with a cinematic Big Bang loading screen using `public/big-bang-loading.mp4`.

## Assets
- `public/big-bang-loading.mp4` — web-optimized 1280px H.264 version of the supplied video (about 3.2 MB)
- `public/big-bang-poster.jpg` — fallback poster

## Behavior
- Autoplays muted and inline.
- Progress bar follows the video playback position.
- Automatically closes when the video ends.
- Has a Skip Intro button.
- Has a 12-second failsafe in case video playback is blocked.

The existing SpaceVerse 3D/content UI remains underneath the loader and is not replaced.
