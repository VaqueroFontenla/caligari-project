import { Inn, InnFormData, InnPayload } from '@/models/Inn.model'
import { apiClient } from 'utils/firebase'
import { apiError } from 'utils/apiError'
import { firebaseCollection } from 'utils/firebase'
import { mapFeaturesToFBDocument } from 'mappers/mapFeaturesToFBDocument'

export const addInn = async (inn: InnFormData) => {
  try {
    const innDTO: InnPayload = {
      ...inn,
      features: mapFeaturesToFBDocument(firebaseCollection.features, inn.features),
      createdAt: new Date(),
    }
    return await apiClient.post<Inn>(firebaseCollection.innsCollection, innDTO)
  } catch (error) {
    const typingError = apiError.typeError(error)
    throw apiError.mapError(typingError)
  }
}
