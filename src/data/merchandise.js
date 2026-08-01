// merchandise.js
// -----------------------------------------------------------------------------
// All the DATA for the Merch page (/merch), kept here so the owner can add
// photos, products and prices without touching any layout code.
//
// There are no individual product cut-out photos — only lifestyle photos of
// models wearing the merch — so the page has two parts:
//   1. THE LOOKBOOK  – a gallery of those lifestyle photos (the `lookbook` array)
//   2. SHOP THE RANGE – a simple price list (the `merchandise` + `cropTops`
//                       arrays). Ordering is by WhatsApp only (no online cart).
// -----------------------------------------------------------------------------

// ---- SECTION 1: THE LOOKBOOK ------------------------------------------------
// Lifestyle photos of the merch being worn. Each has a short caption naming the
// items in the shot. Drop the photos into public/images/merch/ using the exact
// filenames below; until then each tile shows a labelled placeholder.
//
// To ADD a photo: copy a line, give it the next filename + a caption.
export const lookbook = [
  { image: '/images/merch/lookbook-1.jpg', caption: 'Golf Shirt + Crop Top' },
  { image: '/images/merch/lookbook-2.jpg', caption: 'T-Shirt + Hoodie' },
  { image: '/images/merch/lookbook-3.jpg', caption: 'T-Shirt / Crop Top' },
  { image: '/images/merch/lookbook-4.jpg', caption: 'Cap + Hoodie + Crop Top' },
  { image: '/images/merch/lookbook-5.jpg', caption: 'Golf Shirt' },
  { image: '/images/merch/lookbook-6.jpg', caption: 'Jacket + Cap' },
  { image: '/images/merch/lookbook-7.jpg', caption: 'Long Sleeve Crop Top' },
];

// ---- SECTION 2: SHOP THE RANGE ----------------------------------------------
// The price list. Prices are plain NUMBERS in South African Rand (R), so the
// page can show "R500" and also build the WhatsApp order message from the same
// value. To change a price, just edit the number.
//
// `merchandise` is the main range; the crop tops live in their own `cropTops`
// array so the page can group them under a "Crop Tops" sub-heading.
export const merchandise = [
  { name: 'Cap', price: 150 },
  { name: 'Vest', price: 200 },
  { name: 'T-Shirt', price: 250 },
  { name: 'Long Sleeve', price: 280 },
  { name: 'Golf T-Shirt', price: 300 },
  { name: 'Hoodie', price: 500 },
  { name: 'Shorts', price: 250 },
  { name: 'Sweatpants', price: 350 },
];

// The three crop tops, grouped separately (shown under their own sub-heading).
export const cropTops = [
  { name: 'Crop Top (No Sleeve)', price: 120 },
  { name: 'Crop Top (Short Sleeve)', price: 150 },
  { name: 'Crop Top (Long Sleeve)', price: 180 },
];
