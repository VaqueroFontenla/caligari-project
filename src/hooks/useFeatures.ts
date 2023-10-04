import { useCallback, useEffect, useState } from 'react'
import { getFeatures } from '@/services/getFeatures'
import { Feature } from '@/models/Inn.model'

export const useFeatures = () => {
  const [features, setFeatures] = useState<Feature[]>()
  const [featuresLoading, setFeaturesLoading] = useState<boolean>()
  const [featuresError, setFeaturesError] = useState<Error>()

  const fetchFeatures = useCallback(async () => {
    setFeaturesLoading(true)
    try {
      const features = await getFeatures()
      setFeatures(features)
    } catch (error) {
      setFeaturesError(error as Error)
    } finally {
      setFeaturesLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchFeatures()
  }, [fetchFeatures])

  return {
    features,
    featuresLoading,
    featuresError,
  }
}
