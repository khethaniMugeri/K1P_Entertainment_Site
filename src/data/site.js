// site.js
// -----------------------------------------------------------------------------
// One small "control panel" for the whole site. The owner can edit the values
// here (contact details, social links, the nav menu) WITHOUT touching any
// layout/design code. Every component imports what it needs from this file.
// -----------------------------------------------------------------------------

// Core business + contact info (used in the header, footer, SEO, etc.).
export const site = {
  name: 'K1P Entertainment',
  tagline: 'Turning Your Musical Vision to Reality',

  // Contact details, change these in ONE place and they update everywhere.
  phone: '063 687 9489',
  // A version of the phone number with no spaces, for "tel:" links (dialler).
  phoneLink: '+27636879489',
  // The SAME number in WhatsApp's required "international, no +, no spaces"
  // format (the leading 0 becomes the 27 country code). Used to build wa.me
  // "click to chat" links. WhatsApp is our PRIMARY booking method.
  whatsappNumber: '27636879489',
  email: 'phumudzok1@k1pentertainment.co.za',

  // Social (also used in SEO "sameAs" links so Google can connect the site to
  // these profiles).
  instagramHandle: '@k1p_entertainment',
  instagramUrl: 'https://instagram.com/k1p_entertainment',
  youtubeUrl: 'https://www.youtube.com/@PianoValley-24', // the Piano Valley channel

  // Where K1P is based / the main area we serve (used across SEO + structured data).
  city: 'Thohoyandou',
  region: 'Limpopo',

  domain: 'k1pentertainment.co.za',

  // ---- CONTACT FORM SETTINGS (Web3Forms) ------------------------------------
  // The website itself can't send email, so the contact/quote form hands the
  // message to a free service called Web3Forms, which emails it to the owner.
  //
  // STATUS: configured and working. This key is currently registered to the
  // Gmail address (mugerika@gmail.com) for testing, so form submissions arrive
  // there for now.
  //
  // TO SWITCH IT TO THE BUSINESS EMAIL LATER (one-time, ~2 minutes):
  //   1. Go to https://web3forms.com and create a NEW Access Key using
  //      phumudzok1@k1pentertainment.co.za.
  //   2. Paste that new key below, replacing the one here.
  // This key is PUBLIC by design (safe to keep in the code) and rate-limited,
  // so it's fine that visitors can see it.
  web3formsKey: 'e63167da-9867-471b-bc53-de1c06ab93a4',
};

// -----------------------------------------------------------------------------
// WHATSAPP "CLICK TO CHAT" LINK BUILDER
// -----------------------------------------------------------------------------
// A static website can't send messages by itself, but WhatsApp gives us a free,
// no-setup way to start a chat: a wa.me link with the message already typed in.
// When the visitor taps it, WhatsApp opens a chat to K1P with the message ready
// to send (they just hit send). This is why WhatsApp is our primary booking
// method, it works instantly on the phones most visitors are using.
//
// Usage (in any page/component):
//   import { whatsappLink } from '../data/site.js';
//   whatsappLink('Hi K1P, I want to hire the Sound System.')
//
// Produces:
//   https://wa.me/27636879489?text=Hi%20K1P%2C%20I%20want%20to%20hire...
//
// `encodeURIComponent` safely escapes spaces, punctuation and emoji so the link
// is always valid. With no message it just opens a blank chat to K1P.
export function whatsappLink(message = '') {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// A friendly default opener used when no specific item is named (e.g. the
// floating button and the hero). Keeping it here means the wording is editable
// in one place.
export const whatsappDefaultMessage =
  'Hi K1P Entertainment 👋 I would like to make a booking / enquiry.';

// The main navigation menu, shared by the header (and easy to reorder/extend).
// `label` is what the visitor sees; `href` is the page it links to.
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Hire', href: '/hire' },
  { label: 'Services', href: '/services' },
  { label: 'Merch', href: '/merch' },
  { label: 'Artists', href: '/artists' },
  { label: 'Piano Valley', href: '/piano-valley' },
  { label: 'Contact', href: '/contact' },
];
