import { Inn, InnsQueryParams } from '@/models/Inn.model'
import { objectToQueryParams } from 'mappers/objectToQueryParams'
import { apiClient } from 'utils/apiClient'
import { Error, ErrorCode, apiError } from 'utils/apiError'
import { apiRouterProvider } from 'utils/routes'

export const getInns = async (innsQueryParams?: InnsQueryParams) => {
  try {
    const innsPath = innsQueryParams
      ? `${apiRouterProvider.innsPath}${objectToQueryParams(innsQueryParams)}
    `
      : apiRouterProvider.innsPath
    return await apiClient.get<Inn[]>(innsPath)
  } catch (error) {
    const typingError = apiError.typeError(error)
    throw apiError.mapError(typingError)
  }
}
