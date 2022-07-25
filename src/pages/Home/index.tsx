import forceGreen from '../../assets/shoes/air-jordan-1.png'
import forcePurpleLight from '../../assets/shoes/air-jordan-2.png'
import forcePurple from '../../assets/shoes/air-jordan-3.png'
import forceGray from '../../assets/shoes/air-jordan-4.png'
import forcePink from '../../assets/shoes/air-jordan-5.png'
import forceOrange from '../../assets/shoes/air-jordan-8.png'
import forceWhite from '../../assets/shoes/air-jordan-6.png'
import forceBlack from '../../assets/shoes/air-jordan-7.png'

import { Card } from '../../components/Card'
import {
  Apresentation,
  ContentMain,
  Footer,
  HeaderBottom,
  HeaderContainer,
  HeaderTop,
  ShowCase,
  TitleMain,
} from './styles'

export function Home() {
  return (
    <div>
      <HeaderContainer>
        <HeaderTop>
          <span>Ganhe R$ 10,00 de desconto no frete</span>
        </HeaderTop>
        <HeaderBottom>
          <h1>JordanShoes</h1>
        </HeaderBottom>
      </HeaderContainer>
      <Apresentation>
        <h2>A melhor loja de Jordan</h2>
        <h3>
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </h3>
      </Apresentation>
      <ContentMain>
        <TitleMain>
          <h2>Destaques</h2>
          <span>
            Frete grátis e chinelo de brinde é aqui, aproveite por tempo
            limitado.{' '}
          </span>
        </TitleMain>
        <ShowCase>
          <Card image={forceGreen} />
          <Card image={forcePurpleLight} />
          <Card image={forcePurple} />
          <Card image={forceGray} />
          <Card image={forcePink} />
          <Card image={forceOrange} />
          <Card image={forceWhite} />
          <Card image={forceBlack} />
        </ShowCase>
      </ContentMain>
      <Footer>Todos os direitos reservados.</Footer>
    </div>
  )
}
