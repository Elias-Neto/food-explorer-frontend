import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { TextLink } from '../../components/common/TextLink'
import { Logo } from '../../components/common/Logo'

import { Container, Form } from './styles'

import { useSignIn } from '../../hooks/authentication/useSignIn'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn, isLoading } = useSignIn()

  const navigate = useNavigate()

  const handleError = (error) => {
    if (error) {
      if (error.response) {
        return toast.error(error.response.data.message)
      } else {
        return toast.error('Não foi possível entrar na sua conta.')
      }
    }
  }

  const handleSuccess = () => {
    toast.success('Você entrou na sua conta com sucesso!')

    navigate('/')
  }

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

    await signIn({ email, password }, handleSuccess, handleError)
  }


  return (
    <Container>
      <Logo />

      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Faça login</h2>

        <Input
          type='email'
          id='email'
          label='Email'
          placeholder='exemplo@exemplo.com.br'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type='password'
          id='password'
          label='Senha'
          placeholder='No mínimo 6 caracteres'
          minLength='6'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title='Entrar' onClick={handleSignIn} disabled={isLoading} />

        <TextLink name='Criar uma conta' to='/register' />
      </Form>
    </Container>
  )
}

export { SignIn }