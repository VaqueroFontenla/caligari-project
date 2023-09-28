import { DocumentData, DocumentReference } from 'firebase/firestore/lite'

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
  rating: Nullable<number>
  createdAt: Date
  features: Feature[]
  image?: string
}

export interface InnFormData extends Omit<Inn, 'features' | 'createdAt' | 'id'> {
  features: string[]
}

export interface InnPayload extends Omit<Inn, 'features' | 'id'> {
  features: DocumentReference<DocumentData>[]
}

export interface InnsQueryParams {}
