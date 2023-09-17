import { Feature, Inn } from '@/models/Inn.model'
import { mapFBDocumentToFeatures } from 'mappers/mapFBDocumentToFeatures'
import { apiClient } from 'utils/apiClient'
import { apiError } from 'utils/apiError'
import { firebaseCollection } from 'utils/firebaseCollection'

export const getInns = async () => {
  try {
    const inns = await apiClient.get<Inn[]>(firebaseCollection.innsCollection)
    const innsWithMappedFeatures = await Promise.all(
      inns.map(async (inn) => {
        const mappedFeatures = (await mapFBDocumentToFeatures(
          firebaseCollection.featuresCollection,
          inn
        )) as Feature[]
        return { ...inn, features: mappedFeatures }
      })
    )
    return innsWithMappedFeatures
  } catch (error) {
    const typingError = apiError.typeError(error)
    throw apiError.mapError(typingError)
  }
}
