import { useCallback, useEffect, useState } from 'react'
import { getInns } from '../services/getInns'
import { Inn } from '@/models/Inn.model'

export const useInns = () => {
  const [inns, setInns] = useState<Inn[]>()
  const [innsLoading, setInnsLoading] = useState<boolean>()
  const [innsError, setInnsError] = useState<Error>()

  const fetchInns = useCallback(async () => {
    setInnsLoading(true)
    try {
      const inns = await getInns()
      setInns(inns)
    } catch (error) {
      setInnsError(error as Error)
    }
    setInnsLoading(false)
  }, [])

  useEffect(() => {
    fetchInns()
  }, [fetchInns])

  return {
    inns,
    innsLoading,
    innsError,
  }
}
