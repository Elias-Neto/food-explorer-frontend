import { Container } from './styles'

const TextLink = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {name}
    </Container>
  )
}

export { TextLink }
