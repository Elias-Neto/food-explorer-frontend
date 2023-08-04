import { H1 } from './styles'

import logo from '../../../assets/logo.svg'

const Logo = () => {
  return (
    <H1>
      <img src={logo} alt='Logo do Food Explorer' />
      food explorer
    </H1>
  )
}

export { Logo }