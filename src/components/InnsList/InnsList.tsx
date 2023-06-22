import { FC } from 'react'
import { InnCard } from '@/components/index'
import { StyledInnsList } from './InnsList.styles'
import { Inn } from '@/models/Inn.model'

interface InnsListProps {
  inns?: Inn[]
}
export const InnsList: FC<InnsListProps> = ({ inns }) => {
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
