import { useState } from 'react'

import { toast } from 'react-toastify'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

import { Container, Form } from './styles'

import logo from '../../assets/logo.svg'

import { useAuth } from '../../contexts/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)

  const { signIn } = useAuth()

  async function handleSignIn() {
    if (!email || !password) {
      return toast.warn('Preencha todos os campos.')
    }

    if (!email.includes('@')) {
      return toast.warn('Informe um e-mail válido.')
    }

    if (password.length < 6) {
      return toast.warn('Informe uma senha válida.')
    }

    setBtnDisabled(true)

    await signIn({ email, password }).then(() => {
      setBtnDisabled(false)
    })
  }

  return (
    <Container>
      <h1>
        <img src={logo} alt="Logo do Food Explorer" />
        food explorer
      </h1>

      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Faça login</h2>

        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="exemplo@exemplo.com.br"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          minLength="6"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} disabled={btnDisabled} />

        <TextLink name="Criar uma conta" to="/register" />
      </Form>
    </Container>
  )
}

export { SignIn }