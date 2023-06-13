export interface Error {
  status: number
  message?: string
}

export enum ErrorCode {
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  forbidden = 403,
  network = 500,
}

export const apiError = {
  mapError: (errorStatus: any): Error => {
    switch (errorStatus) {
      case ErrorCode.badRequest:
        return {
          status: ErrorCode.badRequest,
        }
      case ErrorCode.unauthorized:
        return {
          status: ErrorCode.unauthorized,
          message: 'No tienes permisos',
        }
      case ErrorCode.notFound:
        return {
          status: ErrorCode.notFound,
        }
      case ErrorCode.forbidden:
        return {
          status: ErrorCode.notFound,
          message: 'No tienes permisos',
        }
      default:
        return {
          status: ErrorCode.network,
          message: 'Comprueba tu conexión',
        }
    }
  },
  typeError: (error: unknown) => error as Error,
  instanceIError: (data: any): data is Error => 'type' in data,
}
