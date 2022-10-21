import { CardState } from '../components/card/Card'

export interface CardInfo {
    state: CardState
    cardIndex: number
    pairIndex: number
}

export function generateRandomCardPositions(pairCount: number): number[] {
    const cards = []
    for (let i = 1; i < pairCount + 1; i++) {
        cards.push(i, i)
    }

    for (let i = 0; i < pairCount * 2; i++) {
        const newIndex = randomIntFromInterval(0, pairCount * 2 - 1)
        ;[cards[i], cards[newIndex]] = [cards[newIndex], cards[i]]
    }
    return cards
}

// min and max included
export function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
