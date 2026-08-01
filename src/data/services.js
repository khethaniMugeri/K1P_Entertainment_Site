// services.js
// -----------------------------------------------------------------------------
// The services K1P offers, shown as icon cards on the Services page. This is
// plain DATA so you edit the list here without touching layout code.
//
// Each service has:
//   name        – the service title (shown on the card)
//   description – one short, plain sentence about it
//   icon        – which icon to show. Must match a key in the icon map inside
//                 src/components/ServiceCard.astro (e.g. 'management', 'video').
//                 To use a new icon, add it to that map first.
//   enquiry     – the text sent to the contact form when the visitor taps
//                 "Get a Quote" (it pre-fills the enquiry field).
//
// To EDIT: change the text. To ADD a service: copy a block, change the values,
// and make sure `icon` matches an icon key.
// -----------------------------------------------------------------------------

export const services = [
  {
    name: 'Musician Management',
    description: 'We manage your bookings, your image and your growth so you focus on the music.',
    icon: 'management',
    enquiry: 'Musician Management',
  },
  {
    name: 'Music Promotion',
    description: 'We push your music to the right people, platforms and playlists.',
    icon: 'promotion',
    enquiry: 'Music Promotion',
  },
  {
    name: 'Track Distribution',
    description: 'We get your tracks onto streaming stores and music platforms.',
    icon: 'distribution',
    enquiry: 'Track Distribution',
  },
  {
    name: 'Event Hosting, Promotion & Management',
    description: 'We plan, promote and run your event from start to finish.',
    icon: 'event',
    enquiry: 'Event Management',
  },
  {
    name: 'Videography & Photography',
    description: 'Ground and aerial drone footage and photos for your shows and releases.',
    icon: 'video',
    enquiry: 'Videography & Photography',
  },
  {
    name: 'DJ-ing Lessons',
    description: 'Learn to mix on pro decks, from your first set to gig-ready.',
    icon: 'lessons',
    enquiry: 'DJ-ing Lessons',
  },
  {
    name: 'Mix Recording',
    description: 'Record your live mix in studio quality.',
    icon: 'mix',
    enquiry: 'Mix Recording',
  },
  {
    name: 'Graphic Design',
    description: 'Logos, covers and brand artwork for your music and events.',
    icon: 'design',
    enquiry: 'Graphic Design',
  },
  {
    name: 'Poster & Flyer Printing',
    description: 'We design and print posters and flyers to fill your event.',
    icon: 'printing',
    enquiry: 'Poster & Flyer Printing',
  },
];
