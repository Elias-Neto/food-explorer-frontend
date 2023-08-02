import { Container } from './styles'

const Input = ({ id, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </Container>
  )
}

export { Input }
