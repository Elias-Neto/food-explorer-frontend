import { createContext, useContext, useEffect, useState } from "react"

import { api } from '../services/api'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})
  const login = async (formData) => {
    const response = await api.post("/sessions", formData)
    const { user, token } = response.data

    localStorage.setItem('@foodExplorer:user', JSON.stringify(user))
    localStorage.setItem('@foodExplorer:token', token)

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    setData({ user, token })
  }

  const logout = async () => {
    localStorage.removeItem('@foodExplorer:user')
    localStorage.removeItem('@foodExplorer:token')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodExplorer:user')
    const token = localStorage.getItem('@foodExplorer:token')

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearrer ${token}`
    }

    setData({
      user: JSON.parse(user),
      token: token
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        login,
        logout
      }}
    >
      {children}
    </ AuthContext.Provider>
  )
}

export { AuthProvider }
