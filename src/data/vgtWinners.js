// vgtWinners.js
// -----------------------------------------------------------------------------
// The winners of Venda's Got Talent (VGT), shown on the /vgt page.
// The page loops over this list, so you never touch the layout code.
//
// Each winner has:
//   year     - the year of the show (shown as a badge on the card).
//   name     - the name shown big on the card (stage name or first name).
//   realName - OPTIONAL. Full name, shown small under the name.
//   image    - photo path under public/images/winners/.
//   imageAlt - short description of the photo (for screen readers and Google).
//   bio      - an ARRAY of paragraphs. The first paragraph always shows. The rest
//              sit behind a "Read more" button so long bios stay tidy on phones.
//
// TO ADD A NEW WINNER: copy one whole { ... } block, paste it at the TOP of the
// list, and change the values. Upload the photo to public/images/winners/.
// Every block must end with "}," (a closing brace and a comma).
// -----------------------------------------------------------------------------

export const vgtWinners = [
  {
    year: 2026,
    name: 'Nene',
    realName: 'Neo Mphahlele',
    image: '/images/winners/nene-2026.jpg',
    imageAlt: "Nene, winner of Venda's Got Talent 2026",
    bio: [
      `Neo Mphahlele is a Grade 10 learner who is committed to her academic studies while actively pursuing her passion for music.`,
      `From a young age, Neo has shown a remarkable talent for singing and swimming. While she enjoys both, it is her exceptional vocal ability that has set her apart.`,
      `In 2026, Neo achieved a significant milestone by winning 1st place in the VGT Competition. This victory reflects her dedication, discipline, and natural gift, and marked the beginning of her promising journey as a performer.`,
      `With a clear vision for her future, Neo aspires to become one of the biggest singers of her generation. She remains focused on developing her craft, excelling in her education, and using her voice to inspire and uplift others.`,
    ],
  },
  {
    year: 2025,
    name: 'Nthabiseng',
    image: '/images/winners/nthabiseng-2025.jpg',
    imageAlt: "Nthabiseng, winner of Venda's Got Talent 2025",
    bio: [
      `Nthabiseng won the VGT competition in 2025. Congratulations!`,
    ],
  },
];
