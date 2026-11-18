
// vgtWinners.js
// -----------------------------------------------------------------------------
// The winners of Venda's Got Talent (VGT), shown on the /vgt page.
// The page loops over this list, so you never touch the layout code.
//
// Each winner has:
//   year     - the year of the show (shown as a badge on the card).
//   name     - the winner's name.
//   image    - photo path under public/images/winners/.
//   imageAlt - short description of the photo (for screen readers and Google).
//
// TO ADD A NEW WINNER: copy one whole { ... } block, paste it at the TOP of the
// list, and change the values. Upload the photo to public/images/winners/.
// Every block must end with "}," (a closing brace and a comma).
// -----------------------------------------------------------------------------

export const vgtWinners = [
  {
    year: 2026,
    name: 'Nene',
    image: '/images/winners/nene-2026.jpg',
    imageAlt: "Nene, winner of Venda's Got Talent 2026",
  },
  {
    year: 2025,
    name: 'Nthabiseng',
    image: '/images/winners/nthabiseng-2025.jpg',
    imageAlt: "Nthabiseng, winner of Venda's Got Talent 2025",
  },
];
