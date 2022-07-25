import image from '../../assets/apresentation.png'
import imagemedia from '../../assets/apresentation-768.png'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderTop = styled.div`
  width: 100%;
  height: 3.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['black-light']};

  > span {
    font-weight: 500;
    font-size: 1rem;
    color: ${(props) => props.theme.white};
  }
`

export const HeaderBottom = styled.div`
  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2;
  }
`

export const Apresentation = styled.div`
  height: 23rem;
  position: relative;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2,
  h3 {
    width: 30rem;
    margin-left: 6.25rem;
    color: ${(props) => props.theme.white};
    z-index: 9999;
  }

  > h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  > h3 {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 2;
  }

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(24, 24, 24, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    background-image: url(${imagemedia});
    background-size: cover;

    > h2,
    h3 {
      width: 22.31rem;
      margin-left: 1.25rem;
      margin-right: 2.75rem;
    }

    > h2 {
      font-size: 1.75rem;
    }
    > h3 {
      font-size: 1rem;
    }
  }
`

export const ContentMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.75rem;
`

export const TitleMain = styled.div`
  text-align: center;
  margin-top: 3.625rem;

  > h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  > span {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme.gray};
  }
`

export const ShowCase = styled.div`
  margin-bottom: 6.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.75rem;
  row-gap: 3.125rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1030px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['black-light']};
`
