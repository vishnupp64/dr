/**
 * Centralized utility to parse and format YouTube video URLs or IDs for iframe embedding.
 * Supports:
 * - YouTube watch URLs: https://www.youtube.com/watch?v=...
 * - Shortened URLs: https://youtu.be/...
 * - YouTube Shorts URLs: https://youtube.com/shorts/...
 * - Embed URLs: https://www.youtube.com/embed/...
 * - Raw 11-character video IDs
 * 
 * Returns a clean no-cookie embed URL string, or null if no valid video exists.
 */
export function getYouTubeEmbedUrl(urlOrId) {
  if (!urlOrId || typeof urlOrId !== 'string') return null;
  const str = urlOrId.trim();
  if (!str || str === 'null' || str === 'undefined') return null;

  // Match youtube.com/shorts/<id>
  const shortsMatch = str.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}?rel=0`;
  }

  // Match youtu.be/<id>
  const youtuBeMatch = str.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (youtuBeMatch && youtuBeMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${youtuBeMatch[1]}?rel=0`;
  }

  // Match watch?v=<id>
  const watchMatch = str.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch && watchMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${watchMatch[1]}?rel=0`;
  }

  // Match embed/<id>
  const embedMatch = str.match(/youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch && embedMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}?rel=0`;
  }

  // Raw 11-character video ID (alphanumeric, underscores, hyphens)
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) {
    return `https://www.youtube-nocookie.com/embed/${str}?rel=0`;
  }

  return null;
}
