import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.LIGHT[100]};

  display: flex;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`
