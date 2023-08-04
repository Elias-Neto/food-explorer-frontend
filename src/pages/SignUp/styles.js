import styled from 'styled-components'
import { rightToLeft } from '../../styles/animations'

const Container = styled.div`
  margin: auto;
  overflow: hidden;
  min-height: 100vh;
  max-width: 115rem;
  padding-inline: 3.2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 7.2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  max-width: 50rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  animation: ${rightToLeft} 700ms ease-in-out;

  a {
    margin: 0 auto;
  }
  
  h2 {
    display: none;
  }

  div input {
    &:valid {
      outline: .1rem solid ${({ theme }) => theme.TINTS.MINT};
    }
  }

  @media (min-width: 769px) {
    margin: 0;
    padding: 6.4rem;
    width: min(95%, 476px);
    background-color: ${({ theme }) => theme.DARK[700]};
    
    h2 {
      display: block;

      font-weight: 500;
      font-size: 3.2rem;
      text-align: center;
      font-family: 'Poppins', sans-serif;
    }
  }
`

export { Container, Form }