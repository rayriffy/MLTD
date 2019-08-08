import React from "react"
import { FluidObject } from "gatsby-image"

interface ICard {
  name: string // Name of Card
  avability: string
  passive: string
  rarity: string
  stat: string
}

interface IIdol {
  node: {
    id: string
    firstName: string
    lastName: string
    tdType: string
    gmType: string
    height: string
    weight: string
    hobby: string
    hometown: string
    likes: string
    specialSkill: string
    threeSizes: number[]
    writingHand: string
    zodiacSign: string
    cv: string
    color: string
    bd: string
    age: string
    bloodType: string
    cards: ICard[]
  }
}

interface IContext {
  profile: IIdol | null
  imgs:
    | {
        id: string
        fluid: FluidObject
      }[]
    | []
    | null
}

export default React.createContext<IContext>({
  profile: null,
  imgs: null,
})
