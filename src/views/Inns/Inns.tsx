import { InnCard } from '@/components/index'
import { useInns } from '@/hooks/useInns'

export const Inns = () => {
  const { inns, innsLoading, innsError } = useInns()
  return <>{inns && inns.map((inn) => <InnCard key={inn.id} inn={inn} />)}</>
}
