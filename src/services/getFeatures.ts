import { Feature } from '@/models/Inn.model'
import { apiClient } from 'utils/apiClient'
import { apiError } from 'utils/apiError'
import { firebaseCollection } from 'utils/firebaseCollection'

export const getFeatures = async () => {
  try {
    return await apiClient.get<Feature[]>(firebaseCollection.featuresCollection)
  } catch (error) {
    const typingError = apiError.typeError(error)
    throw apiError.mapError(typingError)
  }
}
