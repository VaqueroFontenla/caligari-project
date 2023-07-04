type Nullable<T> = T | null

export interface Feature {
  id: number
  name: string
}
export interface Inn {
  id?: number
  name: string
  description: string
  address: string
  city: string
  coordinates: { _lat: Nullable<number>; _long: Nullable<number> }
  rating: number
  createdAt?: string
  features: string[]
  image?: string
}

export interface InnsQueryParams {}
