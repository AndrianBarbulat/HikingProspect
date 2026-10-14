import type { Trail } from '../types/trail'

/**
 * Published route facts from the Swiss National Park, checked 15 October 2026.
 * Coordinates identify official start points; map markers do not show route lines.
 * Current conditions and closures must always be checked with the park directly.
 */
export const trails: Trail[] = [
  {
    slug: 'margun-grimmels',
    name: 'Margun Grimmels',
    difficulty: 'Easy',
    distanceKm: 3.5,
    duration: '1 hr 15 min',
    elevationGainM: 250,
    location: 'Vallun Chafuol, Swiss National Park',
    coordinates: [46.662766, 10.170728],
    description:
      'A short circuit through the mixed mountain-pine, Scots-pine, spruce and larch woodland above the Ova Spin reservoir.',
    terrain: ['Mountain forest', 'Mountain path', 'Short circuit'],
    highlights: ['Ova Spin reservoir views', 'Margun Grimmels clearing', 'Wildlife-shaped woodland'],
    accessNotes:
      'Starts and finishes at the Vallun Chafuol P3 PostBus stop on the Ofenpass road. The Swiss National Park lists the route for May to October, subject to current conditions.',
    equipment: ['Sturdy walking shoes', 'Weatherproof layer', 'Water', 'Sun protection'],
    safetyNote:
      'The park grades this route T2/easy. Stay on marked paths and check the current route status before travel. Dogs are not permitted in the Swiss National Park, even on a lead.',
    featured: false,
    sourceLabel: 'Swiss National Park route 09',
    sourceUrl: 'https://nationalpark.ch/besuchen/routen/?offer=42350',
  },
  {
    slug: 'champloench',
    name: 'Champlönch',
    difficulty: 'Easy',
    distanceKm: 5,
    duration: '2 hr',
    elevationGainM: 250,
    location: 'Champlönch to Il Fuorn, Swiss National Park',
    coordinates: [46.679741, 10.166836],
    description:
      'A family-friendly crossing along the old Ofenpass route, through broad mountain-pine forest and the setting of the park’s children’s trail.',
    terrain: ['Mountain path', 'Historic pack trail', 'Forest'],
    highlights: ['Old Ofenpass route', 'Champlönch children’s trail', 'Ofenpass panoramas'],
    accessNotes:
      'Starts at Champlönch P1 and finishes at Il Fuorn P6; both have PostBus stops. This is a linear walk, so confirm the current timetable before setting out.',
    equipment: ['Sturdy walking shoes', 'Weatherproof layer', 'Water', 'Sun protection'],
    safetyNote:
      'The park grades this route T2/easy. Mountain weather can still change quickly. Remain on the marked route and check official status and transport information.',
    featured: false,
    sourceLabel: 'Swiss National Park route 13',
    sourceUrl: 'https://nationalpark.ch/besuchen/routen/?offer=42361',
  },
  {
    slug: 'margunet',
    name: 'Margunet Nature Trail',
    difficulty: 'Moderate',
    distanceKm: 8,
    duration: '3 hr',
    elevationGainM: 500,
    location: 'Stabelchod to Il Fuorn, Swiss National Park',
    coordinates: [46.6608, 10.2299],
    description:
      'The park’s classic nature trail climbs from Stabelchod through Ofenpass forest and alpine grassland to the Margunet viewpoint.',
    terrain: ['Mountain path', 'Forest ascent', 'Alpine grassland'],
    highlights: ['45 nature-trail panels', 'Alp Stabelchod', 'Margunet viewpoint'],
    accessNotes:
      'Starts at the Stabelchod P8 PostBus stop and finishes at Il Fuorn P6. The published route has approximately 600 m of descent as well as 500 m of ascent.',
    equipment: ['Hiking boots', 'Weatherproof layers', 'Food and water', 'Sun protection'],
    safetyNote:
      'Although technically graded T2/easy by the park, the sustained ascent and three-hour duration require reasonable fitness. Verify current conditions before departure.',
    featured: true,
    sourceLabel: 'Swiss National Park route 17',
    sourceUrl: 'https://nationalpark.ch/besuchen/routen/?offer=42087',
  },
  {
    slug: 'alp-trupchun',
    name: 'Alp Trupchun',
    difficulty: 'Moderate',
    distanceKm: 14,
    duration: '4 hr',
    elevationGainM: 550,
    location: 'Prasüras, Val Trupchun',
    coordinates: [46.617961, 10.009701],
    description:
      'A mostly gentle out-and-back valley walk known for alpine mixed woodland, varied vegetation and strong wildlife-watching opportunities.',
    terrain: ['Valley path', 'Alpine woodland', 'Occasionally slippery trail'],
    highlights: ['Alp Trupchun', 'Valley geology', 'Red deer, ibex and marmot habitat'],
    accessNotes:
      'Starts at Prasüras near S-chanf and returns from Alp Trupchun. Access is by Engadinbus or the seasonal Express Parc Naziunel; verify the separate transport timetable.',
    equipment: ['Hiking boots', 'Weatherproof layers', 'Binoculars', 'Food and water'],
    safetyNote:
      'The park grades this route T2/easy but notes that wet sections can be slippery. Observe wildlife from a distance and follow all national-park protection rules.',
    featured: true,
    sourceLabel: 'Swiss National Park route 01',
    sourceUrl: 'https://nationalpark.ch/besuchen/routen/?offer=42086',
  },
  {
    slug: 'munt-la-schera',
    name: 'Munt la Schera',
    difficulty: 'Moderate',
    distanceKm: 13,
    duration: '4 hr 45 min',
    elevationGainM: 750,
    location: 'Buffalora to Il Fuorn, Swiss National Park',
    coordinates: [46.648281, 10.267226],
    description:
      'A long mountain crossing through unusual steppe-like terrain, past traces of historic iron mining and beneath the optional Munt la Schera summit.',
    terrain: ['Mountain path', 'Steeper sections', 'Open alpine terrain'],
    highlights: ['Munt Chavagl earth flows', 'Historic mine workings', 'Views toward Stelvio National Park'],
    accessNotes:
      'Starts at Buffalora P10 and finishes at Il Fuorn P6, both served by PostBus. The published route includes about 900 m of descent.',
    equipment: ['Hiking boots', 'Warm and waterproof layers', 'Food and water', 'Sun protection'],
    safetyNote:
      'The park grades the route T2 with medium fitness demand. The summit ascent is optional; weather and exposure can materially increase the difficulty.',
    featured: true,
    sourceLabel: 'Swiss National Park route 15',
    sourceUrl: 'https://nationalpark.ch/besuchen/routen/?offer=42363',
  },
  {
    slug: 'piz-quattervals',
    name: 'Piz Quattervals',
    difficulty: 'Hard',
    distanceKm: 11,
    duration: '7 hr 30 min',
    elevationGainM: 1450,
    location: 'Chamanna Cluozza, Swiss National Park',
    coordinates: [46.66287, 10.11764],
    description:
      'A demanding alpine ascent from Chamanna Cluozza to the 3,165 m summit of Piz Quattervals, reserved for experienced mountain hikers.',
    terrain: ['Alpine route', 'Faint path above 2,500 m', 'Steep rocky slopes'],
    highlights: ['Piz Quattervals summit', 'High-alpine vegetation', 'Views across Val Cluozza'],
    accessNotes:
      'The published distance begins at Chamanna Cluozza; reaching the hut requires a separate approach. Confirm hut operation, route status and timing before planning the ascent.',
    equipment: ['Alpine hiking boots', 'Full weather protection', 'Navigation equipment', 'Emergency shelter', 'Food and water'],
    safetyNote:
      'This is a white-blue-white T5 alpine route for experienced alpinists. Above 2,500 m the path becomes indistinct, with rockfall and possible snow hazards. Seek current expert advice.',
    featured: false,
    sourceLabel: 'Swiss National Park route 04',
    sourceUrl: 'https://nationalpark.ch/besuchen/routen/?offer=42344',
  },
]

export const featuredTrail = trails.find((trail) => trail.slug === 'margunet')!

export function getTrailBySlug(slug: string | undefined) {
  return trails.find((trail) => trail.slug === slug)
}

export function getRelatedTrails(trail: Trail, count = 2) {
  return trails
    .filter((candidate) => candidate.slug !== trail.slug)
    .sort((a, b) => {
      const difficultyMatchA = a.difficulty === trail.difficulty ? 0 : 1
      const difficultyMatchB = b.difficulty === trail.difficulty ? 0 : 1
      return difficultyMatchA - difficultyMatchB || a.distanceKm - b.distanceKm
    })
    .slice(0, count)
}
