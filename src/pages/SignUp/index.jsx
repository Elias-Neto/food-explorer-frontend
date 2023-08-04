import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextLink } from '../../components/TextLink'

import { Container, Form } from './styles'

import logo from '../../assets/logo.svg'

import { useCreateUser } from '../../hooks/dataCreating/useCreateUser'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isLoading, createUser } = useCreateUser()

  const navigate = useNavigate()

  const handleError = (error) => {
    if (error) {
      if (error.response) {
        return toast.error(error.response.data.message)
      } else {
        return toast.error('Não foi possível criar sua conta.')
      }
    }
  }

  const handleSuccess = () => {
    setEmail('')
    setPassword('')
    setName('')

    toast.success('Sua conta foi criada com sucesso!')

    navigate('/')
  }

  async function handleSignUp() {
    if (!name || !email || !password) {
      return toast.warn('Preencha todos os campos.')
    }

    if (!email.includes('@')) {
      return toast.warn('Informe um e-mail válido.')
    }

    if (password.length < 6) {
      return toast.warn('Informe uma senha válida.')
    }

    await createUser({ name, email, password }, handleSuccess, handleError)
  }

  return (
    <Container>
      <h1>
        <img src={logo} alt='Logo do Food Explorer' />
        food explorer
      </h1>

      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Crie sua conta</h2>

        <Input
          type='text'
          id='name'
          label='Seu nome'
          placeholder='Maria da Silva'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button
          title='Criar conta'
          onClick={handleSignUp}
          disabled={isLoading}
        />

        <TextLink name='Já tenho uma conta' to={-1} />
      </Form>
    </Container>
  )
}

export { SignUp }
