import { InnCard } from '@/components/index'
import { useInns } from '@/hooks/useInns'
import { StyledInnsList } from './InnsListstyles'

export const InnsList = () => {
  const { inns, innsLoading, innsError } = useInns()
  return (
    <>
      {inns && (
        <StyledInnsList>
          {inns.map((inn) => (
            <InnCard key={inn.id} inn={inn} />
          ))}
        </StyledInnsList>
      )}
    </>
  )
}
