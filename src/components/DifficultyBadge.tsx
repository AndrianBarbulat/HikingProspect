import type { Difficulty } from '../types/trail'

const symbols: Record<Difficulty, string> = { Easy: '●', Moderate: '◆', Hard: '▲' }

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return <span className={`difficulty difficulty--${difficulty.toLowerCase()}`}><span aria-hidden="true">{symbols[difficulty]}</span> {difficulty}</span>
}
