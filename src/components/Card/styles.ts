import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 4px;
  position: relative;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['white-200']};

  transition: bottom 0.2s;

  :hover {
    bottom: 1rem;
  }
`
