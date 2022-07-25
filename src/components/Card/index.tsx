import { CardContainer } from './styles'

interface CardProps {
  image: string
}

export function Card({ image }: CardProps) {
  return (
    <CardContainer>
      <img src={image} alt="" />
    </CardContainer>
  )
}
