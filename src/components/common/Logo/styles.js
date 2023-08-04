import styled from 'styled-components'
import { topToBottom } from '../../../styles/animations'

const H1 = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.LIGHT[100]};
  font-size: clamp(3.2rem, 2.2rem + 3.125vw, 4.2rem);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  animation: ${topToBottom} 700ms ease-in-out;
`

export { H1 }