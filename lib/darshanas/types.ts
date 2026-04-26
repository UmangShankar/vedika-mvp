export type PairKey = 'nyaya-vaisheshika' | 'samkhya-yoga' | 'mimamsa-vedanta'

export type SchoolSlug =
  | 'nyaya'
  | 'vaisheshika'
  | 'samkhya'
  | 'yoga'
  | 'mimamsa'
  | 'vedanta'

export interface Tenet {
  label: string
  body: string
}

export interface Commentator {
  name: string
  period: string
  work: string
  note: string
}

export interface School {
  slug: SchoolSlug
  pair: PairKey
  name: string
  devanagari: string
  sanskrit: string
  sutraText: string
  sutraDevanagari: string
  sutraSource: string
  tagline: string
  identity: string
  epistemology: string
  ontology: string
  soteriology: string
  tenets: Tenet[]
  commentators: Commentator[]
  pairNote: string
}

export interface MatrixRow {
  topic: string
  nyaya: string
  vaisheshika: string
  samkhya: string
  yoga: string
  mimamsa: string
  vedanta: string
}
