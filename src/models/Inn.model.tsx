type Nullable<T> = T | null

export interface Feature {
  id: number
  name: string
}
export interface Inn {
  id: number
  name: string
  description: string
  address: string
  city: string
  lat: Nullable<number>
  lon: Nullable<number>
  rating: number
  createdAt: string
  features: Feature[]
  image?: string
}

export interface InnsQueryParams {}
