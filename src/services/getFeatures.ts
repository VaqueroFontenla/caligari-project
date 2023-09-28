import { Feature } from '@/models/Inn.model'
import { apiClient, firebaseCollection } from 'utils/firebase'
import { apiError } from 'utils/apiError'

export const getFeatures = async () => {
  try {
    return await apiClient.get<Feature[]>(firebaseCollection.featuresCollection)
  } catch (error) {
    const typingError = apiError.typeError(error)
    throw apiError.mapError(typingError)
  }
}
