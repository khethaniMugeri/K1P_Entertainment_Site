// topMixes.js
// -----------------------------------------------------------------------------
// Data for the Piano Valley page: the channel link + the THREE most-watched
// videos shown in the "Most Watched Mixes" section. Kept here so the owner can
// edit them without touching layout code.
// -----------------------------------------------------------------------------

// The Piano Valley YouTube channel (used by the "Subscribe on YouTube" buttons).
export const channelUrl = 'https://www.youtube.com/@PianoValley-24';

// ---- THE THREE MOST-WATCHED VIDEOS -----------------------------------------
// 👉 SWAP each `youtubeId` below for a REAL video ID. The ID is the part after
//    "watch?v=" or "youtu.be/" in the link — e.g. in
//    https://youtu.be/abc123XYZ the ID is "abc123XYZ".
//
// `title` is OPTIONAL — leave it as '' (empty) and the card shows a friendly
// fallback, or fill it in with the video's name. Order = display order (put the
// #1 most-watched first).
//
// The page builds each card's thumbnail, play button and watch-link straight
// from the `youtubeId`, so editing these three lines is all you need.
export const topMixes = [
  { youtubeId: 'y0tE6qKAu2Y', title: '' }, // #1 most watched
  { youtubeId: 'jkBwg7R2BLU', title: '' }, // #2 most watched
  { youtubeId: 'uVwxs4k9ivA', title: '' }, // #3 most watched
];
