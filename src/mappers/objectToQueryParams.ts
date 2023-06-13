export const objectToQueryParams = (object: Record<string, any>) =>
  `?${new URLSearchParams(object).toString()}`
