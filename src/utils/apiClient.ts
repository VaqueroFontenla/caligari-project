import { isProduction } from './isProduction'

const isProdEnv = isProduction()
const getBaseUrl = (): string => {
  if (isProdEnv) {
    //TODO Url remote API
    return ''
  }
  return 'http://localhost:3000/api'
}
const baseUrl = getBaseUrl()
const HEADERS = {
  'Content-type': 'application/json',
}

export const apiClient = {
  get: <T>(path: string, params?: any): Promise<T> =>
    fetch(
      params
        ? `${baseUrl}${path}${'?' + new URLSearchParams(params).toString()}`
        : `${baseUrl}${path}`,
      {
        method: 'GET',
        headers: HEADERS,
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        throw error
      }),
}
