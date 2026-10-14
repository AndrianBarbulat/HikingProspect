import type { Trail } from '../types/trail'

/**
 * Fictional demonstration data clustered in the invented Morrow Highlands.
 * Coordinates are illustrative points only and do not describe real routes.
 */
export const trails: Trail[] = [
  {
    slug: 'fernwood-loop',
    name: 'Fernwood Loop',
    difficulty: 'Easy',
    distanceKm: 4.2,
    duration: '1 hr 30 min',
    elevationGainM: 120,
    location: 'South Morrow Woods',
    coordinates: [46.612, 10.124],
    description:
      'A gentle woodland circuit through shaded fir stands and an open fern meadow, designed as an approachable introduction to the fictional highlands.',
    terrain: ['Forest path', 'Packed earth', 'Short boardwalk'],
    highlights: ['Fern meadow', 'Morrow Brook', 'Old forester shelter'],
    accessNotes:
      'Illustrative access begins at the South Morrow information board. The final approach is shown as a narrow local lane for demonstration purposes.',
    equipment: ['Comfortable walking shoes', 'Light rain layer', 'Drinking water'],
    safetyNote:
      'Wooden surfaces may be slippery when wet. This fictional description is not a substitute for local advice.',
    featured: false,
  },
  {
    slug: 'lakeview-boardwalk',
    name: 'Lakeview Boardwalk',
    difficulty: 'Easy',
    distanceKm: 3.1,
    duration: '1 hr',
    elevationGainM: 45,
    location: 'Stillwater Basin',
    coordinates: [46.625, 10.161],
    description:
      'A compact waterside walk linking reed beds, quiet inlets and a low viewing platform above the invented Stillwater Basin.',
    terrain: ['Boardwalk', 'Gravel path', 'Lakeshore'],
    highlights: ['Reed beds', 'Stillwater outlook', 'Lichen boulders'],
    accessNotes:
      'The sample starting point is beside a fictional seasonal shuttle stop. No real access or parking information is implied.',
    equipment: ['Weatherproof shoes', 'Wind layer', 'Drinking water'],
    safetyNote:
      'Stay within signed areas near water in any real landscape; the locations shown here are illustrative.',
    featured: false,
  },
  {
    slug: 'ravens-ridge',
    name: 'Raven’s Ridge',
    difficulty: 'Moderate',
    distanceKm: 8.6,
    duration: '3 hr 20 min',
    elevationGainM: 480,
    location: 'West Morrow Escarpment',
    coordinates: [46.648, 10.101],
    description:
      'A steady fictional climb from mixed woodland to an airy ridge shelf, with broad views across the Morrow map sheet.',
    terrain: ['Rocky path', 'Forest track', 'Exposed ridge'],
    highlights: ['Raven Shelf', 'Westfold panorama', 'Juniper slopes'],
    accessNotes:
      'The illustrative trailhead sits beyond a narrow bridge. Treat all depicted transport and access details as fictional.',
    equipment: ['Hiking boots', 'Warm layer', 'Map and compass', 'Food and water'],
    safetyNote:
      'The ridge concept includes exposed ground and rapidly changing conditions. Do not use this demo for real trip planning.',
    featured: true,
  },
  {
    slug: 'heather-pass',
    name: 'Heather Pass',
    difficulty: 'Moderate',
    distanceKm: 10.4,
    duration: '4 hr',
    elevationGainM: 610,
    location: 'North Morrow Moor',
    coordinates: [46.681, 10.139],
    description:
      'An undulating moorland crossing that rises through heather benches to a broad saddle between two unnamed tops.',
    terrain: ['Moorland', 'Stone steps', 'Boggy sections'],
    highlights: ['Heather benches', 'North cairn', 'Wide saddle views'],
    accessNotes:
      'The fictional access track is described as rough and seasonally restricted. It should not be matched to any real road.',
    equipment: ['Waterproof boots', 'Full rain shell', 'Warm layer', 'Navigation tools'],
    safetyNote:
      'Moorland can be difficult to navigate in cloud. Seek authoritative local information for real outings.',
    featured: true,
  },
  {
    slug: 'old-quarry-trail',
    name: 'Old Quarry Trail',
    difficulty: 'Moderate',
    distanceKm: 7.7,
    duration: '2 hr 50 min',
    elevationGainM: 390,
    location: 'East Morrow Shelf',
    coordinates: [46.653, 10.187],
    description:
      'A fictional shelf walk past weathered stone workings, regenerating birch and a tucked-away overlook above the basin.',
    terrain: ['Stone track', 'Birch woodland', 'Uneven steps'],
    highlights: ['Quarry terraces', 'Birch hollow', 'East shelf overlook'],
    accessNotes:
      'The demonstration trail begins at a made-up heritage lay-by. No real industrial site or access route is represented.',
    equipment: ['Sturdy footwear', 'Rain layer', 'Head torch', 'Water'],
    safetyNote:
      'Never enter workings or unstable ground at real quarry sites. This page offers no location-specific guidance.',
    featured: false,
  },
  {
    slug: 'granite-crown',
    name: 'Granite Crown',
    difficulty: 'Hard',
    distanceKm: 14.8,
    duration: '6 hr 30 min',
    elevationGainM: 980,
    location: 'Upper Morrow Range',
    coordinates: [46.697, 10.171],
    description:
      'A long, strenuous fictional mountain day climbing through a high corrie to a blocky summit shoulder above the Morrow Highlands.',
    terrain: ['Steep mountain path', 'Boulder field', 'Exposed shoulder'],
    highlights: ['High corrie', 'Granite tors', 'Crown shoulder'],
    accessNotes:
      'The sample route begins at an invented upper-valley refuge reached by a seasonal service road.',
    equipment: ['Mountain boots', 'Warm insulated layer', 'Waterproofs', 'Navigation tools', 'Emergency shelter'],
    safetyNote:
      'This fictional concept implies remote, exposed mountain terrain. It is not a route guide or a statement of safe conditions.',
    featured: true,
  },
]

export const featuredTrail = trails.find((trail) => trail.slug === 'ravens-ridge')!

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

