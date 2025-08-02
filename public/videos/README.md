# Video Assets for Matcha Specialty Section

## Required Files

Place your video files in this folder with the following names:

### Primary Video File

- **matcha-preparation.mp4** - Your HD matcha preparation video (H.264 format for best compatibility)
- **matcha-preparation.webm** - Optional WebM version for better compression and modern browser support

### Poster Image

- **matcha-poster.jpg** - A still image from your video to show before loading (recommended: JPG format, same aspect ratio as video)

## Video Requirements

- **Format**: MP4 (H.264) is the primary format, WebM is optional but recommended
- **Dimensions**: Since you mentioned HD with mobile-friendly dimensions, the video should work well in the responsive container
- **Duration**: Any length works - the scroll controls the playback position
- **Audio**: Not needed (video is muted for smooth scroll experience)

## How It Works

The video will:

1. Play forward as the user scrolls down through the specialty section
2. Play in reverse as the user scrolls up
3. Show the poster image before the video metadata loads
4. Display a "Scroll to experience the matcha journey" overlay initially
5. Be fully responsive for mobile and desktop viewing

## File Structure

```
public/
  videos/
    matcha-preparation.mp4  ← Your main video file
    matcha-preparation.webm ← Optional alternative format
    matcha-poster.jpg       ← Poster/thumbnail image
```

Simply place your video file(s) here and they will be automatically loaded by the website!
