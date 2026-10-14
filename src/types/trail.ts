export type Difficulty = 'Easy' | 'Moderate' | 'Hard'

export interface Trail {
  slug: string
  name: string
  difficulty: Difficulty
  distanceKm: number
  duration: string
  elevationGainM: number
  location: string
  coordinates: [number, number]
  description: string
  terrain: string[]
  highlights: string[]
  accessNotes: string
  equipment: string[]
  safetyNote: string
  featured: boolean
  sourceLabel: string
  sourceUrl: string
}

