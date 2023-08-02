import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.LIGHT[400]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  input {
    border: none;
    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.DARK[900]};
    
    color: ${({ theme }) => theme.LIGHT[400]};
    
    transition: outline 300ms;

    &:disabled {
      cursor: not-allowed;
    }

    &:focus {
      outline: .1rem solid ${({ theme }) => theme.TINTS.CAKE[300]};
    }

    &::placeholder {
      color: ${({ theme }) => theme.LIGHT[500]};
    }
  }
`
