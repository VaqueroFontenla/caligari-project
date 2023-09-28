import { Inn } from '@/models/Inn.model'
import { apiClient } from 'utils/firebase'

export const mapFBDocumentToFeatures = async (firebaseCollection: string, inn: Inn) => {
  if (inn.hasOwnProperty('features') && Array.isArray(inn['features'])) {
    const { features } = inn
    const documentIds = features.map((feature) => feature.id)
    const mappedFeatures = await apiClient.getRelatedValues(firebaseCollection, documentIds)
    return mappedFeatures
  }
  return inn
}
