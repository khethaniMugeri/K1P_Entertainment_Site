// tailwind.config.mjs
// -----------------------------------------------------------------------------
// Tailwind lets us style with small "utility" classes instead of writing CSS.
// This file is where we teach Tailwind about the K1P BRAND: our exact colours
// and our two fonts. After this, we can write things like:
//   class="bg-ink text-white"        -> black background, white text
//   class="text-brand-red"           -> the K1P red
//   class="font-display uppercase"   -> the bold Anton heading font
// Keeping the brand here means we never paste raw hex codes around the project.
// -----------------------------------------------------------------------------

/** @type {import('tailwindcss').Config} */
export default {
  // Which files Tailwind should scan for class names so it can build the CSS.
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx,vue,svelte}'],

  theme: {
    extend: {
      // -- BRAND COLOURS (taken straight from CLAUDE.md / the K1P logo) --------
      colors: {
        brand: {
          red: '#E10600',      // primary: buttons, links, highlights, the "1" accent
          'red-dark': '#B30500', // hover / active state of red things
        },
        ink: '#0A0A0A',        // default page background (near-black)
        surface: '#1A1A1A',    // cards, panels, modals (slightly lighter than ink)
        grey: '#B3B3B3',       // secondary text: captions, sub-text
        // (pure black #000000 and white #FFFFFF already exist in Tailwind as
        //  `black` and `white`, so we don't need to redefine them.)

        // WhatsApp's OFFICIAL green. WhatsApp is our primary booking method, so
        // its buttons use the instantly-recognisable WhatsApp green (not brand
        // red) — people know on sight that green + the logo means "chat to us".
        // `bg-whatsapp` = the green; `bg-whatsapp-dark` = the hover/active state.
        // Darkened from WhatsApp's bright #25D366 so WHITE button text meets the
        // WCAG 4.5:1 contrast ratio (the bright green only gave ~2.6:1). Still
        // clearly "WhatsApp green", just deeper. The bright green lives on in the
        // decorative glow shadow only.
        whatsapp: {
          DEFAULT: '#1A7D3C',
          dark: '#13632F',
        },
      },

      // -- BRAND FONTS --------------------------------------------------------
      // `font-display` = big bold uppercase headings (concert-poster feel).
      // `font-sans`    = normal readable body text.
      // The actual font FILES are loaded from Google Fonts in BaseLayout.astro.
      fontFamily: {
        display: ['Anton', 'Bebas Neue', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      // -- RED "NEON GLOW" -----------------------------------------------------
      // A subtle red halo we can add to key elements (buttons, the logo accent)
      // to get that high-energy stage-lighting look from the flyers.
      boxShadow: {
        glow: '0 0 18px rgba(225, 6, 0, 0.55)',       // medium red glow
        'glow-lg': '0 0 36px rgba(225, 6, 0, 0.65)',  // stronger red glow for hero bits
        // A matching GREEN halo for the WhatsApp buttons so they feel as
        // high-energy as the red ones while staying clearly "WhatsApp".
        'glow-whatsapp': '0 0 18px rgba(37, 211, 102, 0.55)',
      },
    },
  },

  plugins: [],
};
