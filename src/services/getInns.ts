import { Inn } from '@/models/Inn.model'
import { apiClient } from 'utils/apiClient'
import { apiError } from 'utils/apiError'
import { firebaseCollection } from 'utils/firebaseCollection'

export const getInns = async () => {
  try {
    return await apiClient.get<Inn[]>(firebaseCollection.innsCollection)
  } catch (error) {
    const typingError = apiError.typeError(error)
    throw apiError.mapError(typingError)
  }
}
