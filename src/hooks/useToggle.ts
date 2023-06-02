import { useState, useCallback } from 'react'

export const useToggle = (initialState = false): { isVisible: boolean; toggle: () => void } => {
  const [isVisible, setIsVisibleState] = useState<boolean>(initialState)
  const toggle = useCallback(() => setIsVisibleState((isVisible) => !isVisible), [])

  return { isVisible, toggle }
}
