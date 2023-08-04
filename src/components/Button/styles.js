import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  padding: 1.2rem 2.4rem;
  background-color: ${({ theme }) => theme.TINTS.TOMATO[100]};

  color: ${({ theme }) => theme.LIGHT[100]};
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:disabled {
    opacity: 0.5;
    filter: none;
    cursor: wait;
  }
  
  svg {
    font-size: 2.4rem;
  }
`