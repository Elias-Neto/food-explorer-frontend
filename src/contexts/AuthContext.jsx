import { createContext, useContext, useEffect, useState } from 'react'

import { toast } from 'react-toastify'

import api from '../services/api'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      user.isAdmin = user.isAdmin === 1

      localStorage.setItem('@foodExplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodExplorer:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível entrar')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@foodExplorer:user')
    localStorage.removeItem('@foodExplorer:token')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodExplorer:user")
    const token = localStorage.getItem("@foodExplorer:token")

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearrer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </ AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
