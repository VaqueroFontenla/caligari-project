import { DocumentReference } from 'firebase/firestore/lite'

type Nullable<T> = T | null

export interface Feature {
  id: string
  name: string
}
export interface Inn {
  id: number
  name: string
  description: string
  address: string
  city: string
  coordinates: { _lat: Nullable<number>; _long: Nullable<number> }
  rating: number
  createdAt: string
  features: Feature[]
  image?: string
}

export interface InnPayload extends Omit<Inn, 'id' | 'createdAt' | 'features'> {
  features: string[]
}

export interface InnsQueryParams {}
