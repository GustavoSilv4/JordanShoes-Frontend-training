import image from '../../assets/air-jordan-1-green.png'
import { CardContainer } from './styles'
export function Card() {
  return (
    <CardContainer>
      <img src={image} alt="" />
    </CardContainer>
  )
}
