import { Container } from './styles'

const Button = ({ icon: Icon, title, ...rest }) => {
  return (
    <Container {...rest} >
      {Icon && <Icon />}
      {title}
    </Container>
  )
}

export { Button }