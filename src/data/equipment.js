// equipment.js
// -----------------------------------------------------------------------------
// The list of equipment K1P offers for hire. This is plain DATA so the owner can
// add/remove items or change prices by editing this one file, no layout code
// needs to change. The Hire page loops over this array to draw a card per item.
//
// Each item has:
//   name        – what it's called (shown as the card title)
//   description – one short, plain sentence about it
//   imageHint   – the photo filename to drop into public/images/equipment/
//                 (shown as a label on the placeholder so it's obvious what goes
//                  where; once the file exists, set `image` to use it)
//   image       – OPTIONAL real photo path once you've added it, e.g.
//                 "/images/equipment/sound-system.jpg". Leave undefined for now.
//   price       – a FIXED price string to show (e.g. "R2 500"), or null if the
//                 price varies by event (then we show "Request a quote" instead)
//   priceNote   – small print under the price (e.g. "per standard gig")
// -----------------------------------------------------------------------------

export const equipment = [
  {
    name: 'Sound System',
    description: 'PA sound to fill any venue. Works for gigs, parties and ceremonies.',
    imageHint: 'equipment/sound-system.jpg',
    image: '/images/equipment/sound-system.jpg',
    price: null, // varies by event size/duration
    priceNote: 'Priced per event',
  },
  {
    name: 'Projector',
    description: 'Big-screen projector with head drop and laser point. Good for visuals and slideshows.',
    imageHint: 'equipment/projector.jpg',
    image: '/images/equipment/projector.jpg',
    price: null,
    priceNote: 'Priced per event',
  },
  {
    name: 'Stage Platforms',
    description: 'Sturdy modular staging to raise your performers above the crowd.',
    imageHint: 'equipment/stage-platforms.jpg',
    image: '/images/equipment/stage-platforms.jpg',
    price: null,
    priceNote: 'Priced per event',
  },
  {
    name: 'Truss',
    description: 'Aluminium truss structures for hanging lights, screens and banners.',
    imageHint: 'equipment/truss.jpg',
    // Truss and Stage & Lighting share one combined photo (truss-and-lighting.jpg).
    image: '/images/equipment/truss-and-lighting.jpg',
    price: null,
    priceNote: 'Priced per event',
  },
  {
    name: 'XDJ-RX3 Decks',
    description: 'Pioneer XDJ-RX3 all-in-one DJ system. The pro standard for live sets.',
    imageHint: 'equipment/xdj-rx3.jpg',
    image: '/images/equipment/xdj-rx3.jpg',
    price: 'R2 500', // fixed standard price from the flyers
    priceNote: 'per standard gig',
  },
  {
    name: 'XDJ-RR Decks',
    description: 'Pioneer XDJ-RR DJ system. A reliable, gig-ready setup.',
    imageHint: 'equipment/xdj-rr.jpg',
    image: '/images/equipment/xdj-rr.jpg',
    price: 'R1 500',
    priceNote: 'per standard gig',
  },
  {
    name: 'Microphones',
    description: 'Clear, dependable mics for vocals, speeches and MCs.',
    imageHint: 'equipment/microphones.jpg',
    image: '/images/equipment/microphones.jpg',
    // This photo is tall/portrait, so 'contain' shows the WHOLE mic (centred on
    // the black box) instead of cropping it to a sliver like 'cover' would.
    imageFit: 'contain',
    price: null,
    priceNote: 'Priced per event',
  },
  {
    name: 'Mic Stands',
    description: 'Adjustable stands to keep performers hands-free on stage.',
    imageHint: 'equipment/mic-stands.jpg',
    image: '/images/equipment/mic-stands.jpg',
    // Tall/portrait photo → 'contain' keeps the whole mic stand visible.
    imageFit: 'contain',
    price: null,
    priceNote: 'Priced per event',
  },
  {
    name: 'Studio Time',
    description: 'Book time in the K1P studio for recording, mixing and mastering.',
    imageHint: 'equipment/studio-time.jpg',
    image: '/images/equipment/studio-time.jpg',
    price: 'From R500', // fixed studio packages start here
    priceNote: 'recording session',
  },
  {
    name: 'Stage & Lighting',
    description: 'Full stage build with lighting rig to give your event real concert energy.',
    imageHint: 'equipment/stage-lighting.jpg',
    // Shares the combined truss + lighting photo with the Truss card above.
    image: '/images/equipment/truss-and-lighting.jpg',
    price: null,
    priceNote: 'Priced per event',
  },
];

// The kinds of events K1P sets up stage/sound/lighting for. Shown as a row of
// "chips" on the Hire page so visitors quickly see if their event fits.
export const useCases = [
  'Gigs',
  'Parties',
  'Weddings',
  'Funerals',
  'Seminars',
  'Beauty Pageants',
  'Sporting Events',
  'Cultural Events',
  'Graduations',
];

// -----------------------------------------------------------------------------
// DETAILED PRICE LISTS (from the official K1P flyers).
//
// The Hire page shows these as small price tables under the equipment grid.
// Edit a price by changing the `price` text. Add a line by copying a `{ label,
// price }` row. Each block has:
//   title   – the heading shown above the table
//   note    – OPTIONAL small print under the table
//   enquiry – the text sent to the contact form when the visitor taps "Book"
//             (it pre-fills the "What are you enquiring about?" field)
//   rows    – simple "label + price" lines
//   groups  – used for the studio, where prices are split into sub-sections
//             (each group has its own heading and its own rows)
// All amounts are in South African Rand (R).
// -----------------------------------------------------------------------------
export const pricing = {
  // Decks for hire (fixed gig rates).
  decksHire: {
    title: 'Decks For Hire',
    enquiry: 'Decks Hire',
    rows: [
      { label: 'XDJ-RX3 for a standard gig', price: 'R2 500' },
      { label: 'XDJ-RR for a standard gig', price: 'R1 500' },
      { label: '1 hour mix recording', price: 'R200' },
    ],
  },

  // DJ lessons (fixed course rates).
  decksLessons: {
    title: 'Decks Lessons (XDJ-RX3 & XDJ-RR)',
    enquiry: 'Decks Lessons',
    rows: [
      { label: '1 week (tutorless practice)', price: 'R750' },
      { label: '2 weeks (with gig plug)', price: 'R2 000' },
      { label: '1 month (with multiple gig plugs)', price: 'R3 500' },
    ],
    note: 'Group of 4 pays for only 3 people’s rates.',
  },

  // Recording studio (split into sub-sections because there are several types).
  studio: {
    title: 'Recording Studio',
    enquiry: 'Studio Booking',
    groups: [
      {
        heading: 'Recording only',
        rows: [{ label: 'Per session', price: 'R500' }],
      },
      {
        heading: 'Recording, mixing & mastering (your own beat)',
        rows: [
          { label: '1 song', price: 'R1 500' },
          { label: '5 songs', price: 'R4 000' },
          { label: '10 songs', price: 'R7 500' },
        ],
      },
      {
        heading: 'Beats only',
        rows: [
          { label: 'Remakes', price: 'R1 500' },
          { label: 'Non-exclusive', price: 'R4 000' },
          { label: 'Exclusive', price: 'R7 500' },
        ],
      },
      {
        heading: 'Recording, mixing & mastering (custom beat)',
        rows: [
          { label: '1 song', price: 'R2 500' },
          { label: '5 songs', price: 'R6 000' },
          { label: '10 songs', price: 'R11 500' },
        ],
      },
    ],
  },
};
