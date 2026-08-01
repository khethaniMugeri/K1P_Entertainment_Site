// artists.js
// -----------------------------------------------------------------------------
// The artists and DJs signed to / managed by K1P, shown as rich profile cards on
// the Artists page. This is plain DATA so you can edit the roster here without
// touching layout code. The Artists page loops over this array and renders one
// <ArtistCard> per person.
//
// Each DJ has:
//   stageName       – the name shown big on the card (their DJ/stage name).
//   realName        – their actual name, shown under the stage name.
//   location        – where they are based.
//   image           – photo path under public/images/artists/. If the file
//                     isn't there yet, the card shows a labelled placeholder
//                     telling you exactly which filename to drop in.
//   genres          – list of genre "chips" shown under the name.
//   bio             – an ARRAY of paragraphs (kept word-for-word as supplied).
//                     The first paragraph always shows; the rest reveal behind a
//                     "Read more" button so long bios don't overwhelm phones.
//   socials         – list of { platform, label, href } social links. `platform`
//                     must be one of: 'facebook', 'instagram', 'tiktok' (those
//                     have icons in ArtistCard).
//   mixes           – list of YouTube VIDEO IDs (the part after youtu.be/ or
//                     watch?v=). Each becomes a clickable thumbnail.
//   whatsappMessage – the message pre-filled when someone taps "Book on
//                     WhatsApp" (already includes the DJ's name).
//
// To ADD a DJ: copy a block, change the values, give them the next photo name.
// To REORDER: move the blocks up or down (they render top-to-bottom).
// -----------------------------------------------------------------------------

export const artists = [
  // ===========================================================================
  // 1) PRISE TAG
  // ===========================================================================
  {
    stageName: 'Prise Tag',
    realName: 'Surprise Mabilu',
    location: 'Thohoyandou, Limpopo, South Africa',
    image: '/images/artists/prise-tag.jpg',
    genres: ['Amapiano', 'House Music', '3-Step', 'Hip-Hop'],
    bio: [
      `Surprise Mabilu popularly known as Prise Tag is a versatile award-winning DJ based in Thohoyandou, Limpopo, South Africa. He is well known for bringing high energy sets and bringing his outstanding stage presence. His signature sound is Amapiano, but also blends in Deep House, House Music, 3-Step and Hip-Hop, making the musical experience electrifying. From Soulful grooves to crowd-shaking party anthems.`,
      `Known for his high-energy sets, Prise Tag's Amapiano Exclusives and preference in House Music have made him a rising star in the South African Nightlife and Entertainment scene. He has great abilities of crowd reading and delivering unforgettable sets. That earned him high-profile bookings and club residences. He has also gotten an opportunity to get an interview from Phalaphala FM which has hundreds of thousands of listeners.`,
      `Prise Tag has been on line-ups at prominent events and venues including but not limited to, Infinity Lounge (Cape Town), Savage Lounge (Cape Town), Dreamclub (Thohoyandou), NewsCafe (Thohoyandou), Perere (Sandton), Zouk (Melville) and many others. His rapidly growing fanbase and unwavering passion for music has made him continue to push boundaries and elevate every stage he steps on to, regardless of the size of the venue.`,
    ],
    socials: [
      { platform: 'facebook', label: 'Prise Tag', href: 'https://www.facebook.com/search/top?q=Prise%20Tag' },
      { platform: 'instagram', label: 'prise_tag1', href: 'https://instagram.com/prise_tag1' },
    ],
    mixes: ['6ARnj8uP-Qs', '5M414jVQAWI', '0DmSC--meLU'],
    whatsappMessage:
      "Hi K1P Entertainment, I'd like to book Prise Tag for an event. Please can you share availability and pricing?",
  },

  // ===========================================================================
  // 2) G-32
  // ===========================================================================
  {
    stageName: 'G-32',
    realName: 'Gundo Nenngwekhulu',
    location: 'Thohoyandou, Limpopo, South Africa',
    image: '/images/artists/g-32.jpg',
    genres: ['Amapiano', 'Deep House'],
    bio: [
      `Gundo Nenngwekhulu popularly known as G-32 is a dynamic DJ based in Thohoyandou, Limpopo, South Africa. He is well-known for his versatility within House Music. G-32 brings together Soulful grooves, Deep Rhythms, and energetic drops that connect with every crowd.`,
      `G-32 has dominated stages at venues like Dreamclub (Thohoyandou), Dar Es Salaam (Tshikhudini), Vhulelu (Thohoyandou), Migeroni (Thohoyandou), Ditike Lifestyle (Thohoyandou) and many more.`,
      `G-32 offers seamless blends, raw energy, and an unforgettable vibe. To him it is not just about playing tracks, it's about creating moments that last beyond the night.`,
    ],
    socials: [
      { platform: 'instagram', label: 'g_32.official', href: 'https://instagram.com/g_32.official' },
      { platform: 'tiktok', label: 'g_32.official', href: 'https://www.tiktok.com/@g_32.official' },
    ],
    mixes: ['HEsdQ8yfwEU', 'C0z9qUtOd78', 'M-nT3XBuAbA'],
    whatsappMessage:
      "Hi K1P Entertainment, I'd like to book G-32 for an event. Please can you share availability and pricing?",
  },

  // ===========================================================================
  // 3) DJ TECHTONIC
  // ===========================================================================
  {
    stageName: 'DJ Techtonic',
    realName: 'Tendani Ndwambi',
    location: 'Thohoyandou, Limpopo, South Africa',
    image: '/images/artists/dj-techtonic.jpg',
    genres: ['Amapiano', 'Afro House', '3-Step'],
    bio: [
      `Tendani Ndwambi commonly known as DJ Techtonic is an Amapiano DJ based in Thohoyandou, Limpopo, South Africa. Music has always been a part of DJ Techtonic's life from a young age but only started being a Disk Jockey in 2023. Since then, he has been on a mission to deliver vibrant and good energy to each set he plays.`,
      `DJ Techtonic has had the pleasure to deliver sets at prominent venues like Dreamclub (Thohoyandou), Vhulelu (Thohoyandou), Ditike Lifestyle (Thohoyandou), just to name a few. His sound is heavily inspired by industry leading pioneers like Kabza De Small, MDU aka TRP, and many more. DJ Techtonic delivers soulful melodies, percussive grooves and deep log drums to create an experience that connects people on the dancefloor. DJ Techtonic is focused on taking his sound to new places and bigger platforms, whether it is a lifestyle event, Night Club or a Festival.`,
    ],
    socials: [
      { platform: 'facebook', label: 'djtechtonic', href: 'https://www.facebook.com/djtechtonic' },
      { platform: 'instagram', label: 'djtechtonic_', href: 'https://instagram.com/djtechtonic_' },
    ],
    mixes: ['wStm5QCJGW0', 'LjtqfFBGddU'],
    whatsappMessage:
      "Hi K1P Entertainment, I'd like to book DJ Techtonic for an event. Please can you share availability and pricing?",
  },

  // ===========================================================================
  // 4) PROVRO
  // ===========================================================================
  {
    stageName: 'ProVro',
    realName: 'Orifha Kone',
    role: 'Rapper / Producer / Song Writer',
    eyebrow: 'Artist',
    location: 'Thohoyandou, Limpopo, South Africa',
    image: '/images/artists/provro.jpg',
    genres: ['Hip Hop/Rap'],
    bio: [
      `ProVro (born Orifha Kone, 22 December 2006) is a South African hip-hop artist and multidisciplinary creative from Thohoyandou, Limpopo. His sound is raw, aggressive, and emotionally charged-driven by hunger, pressure, and ambition.`,
      `Inspired by Nasty C, Ski Mask The Slump God, XXXTENTACION, and Denzel Curry, ProVro blends high-energy flows with unfiltered emotion, delivering music that cuts between rage and vulnerability. He produces his own tracks and creates his own visuals, maintaining full creative control over every release.`,
      `Rooted in the kasi mindset, ProVro represents resilience and self-belief. He's not here for validation-he's here to apply pressure, make noise, and put his city on the map.`,
    ],
    socials: [
      { platform: 'facebook', label: 'ProVro TooLitty', href: 'https://www.facebook.com/search/top?q=ProVro%20TooLitty' },
      { platform: 'instagram', label: 'provro_toolitty', href: 'https://instagram.com/provro_toolitty' },
      { platform: 'youtube', label: 'ProVro', href: 'https://www.youtube.com/channel/UCqtb4lLfmu5hHzWCe3z-I3Q' },
    ],
    links: [
      { platform: 'youtube', label: 'YouTube Channel', href: 'https://www.youtube.com/channel/UCqtb4lLfmu5hHzWCe3z-I3Q' },
    ],
    whatsappMessage:
      "Hi K1P Entertainment, I'd like to book ProVro for an event. Please can you share availability and pricing?",
  },

  // ===========================================================================
  // 5) MEGAMIND NOVA
  // ===========================================================================
  {
    stageName: 'Megamind Nova',
    // No real name supplied — the card simply shows the stage name.
    role: 'Deejay / Producer / Song Writer',
    eyebrow: 'Artist',
    location: 'Thohoyandou, Limpopo, South Africa',
    image: '/images/artists/megamind-nova.jpg',
    genres: ['Amapiano', 'Deep House', '3-Step', 'RNB', 'Soul'],
    bio: [
      `Megamind Nova is a music producer/composer, well renowned Entrepreneur, an upcoming artist and song writer. Born and bred in a small town called Shatale in Mpumalanga at the region of Bushbuckridge. Megamind Nova started pursuing music professionally since he was 16 years old.`,
      `Megamind Nova left Pretoria, Gauteng, South Africa in 2018 and relocated to Thohoyandou, Limpopo, South Africa for his music career development and he has since been based there. He is a no. 1 Amstel Amapiano winner and has worked with international acts including Chymamusique, DBN Gogo, Stixx, MXO, Roots 2000 and many other prominent artists.`,
      `His album releases include Unbound Rhythm, Bayasabela and Musical Lecture. He also gave us the Casablanca remix which ran the streets of Thohoyandou for a long time. That gave him recognition and he earned himself residences at most venues around Thohoyandou.`,
      `Megamind Nova still continues with his journey of being an artist and a music producer as it is his true passion. He plans to expand more work with more artists in and around Limpopo as well as to the National and International market. His legacy is well planned preservation.`,
    ],
    socials: [
      { platform: 'facebook', label: 'Megamind Nova', href: 'https://www.facebook.com/search/top?q=Megamind%20Nova' },
      { platform: 'instagram', label: 'megamind_nova', href: 'https://instagram.com/megamind_nova' },
      { platform: 'spotify', label: 'Megamind Nova', href: 'https://open.spotify.com/artist/1zVnf3ZQeEYaicFVZfNTzC' },
    ],
    links: [
      { platform: 'applemusic', label: 'Apple Music', href: 'https://music.apple.com/za/artist/megamind-nova/1377561881' },
      { platform: 'spotify', label: 'Spotify', href: 'https://open.spotify.com/artist/1zVnf3ZQeEYaicFVZfNTzC' },
      { platform: 'youtube', label: 'YouTube', href: 'https://youtu.be/C-H9PUU7RYk' },
    ],
    whatsappMessage:
      "Hi K1P Entertainment, I'd like to book Megamind Nova for an event. Please can you share availability and pricing?",
  },
];
