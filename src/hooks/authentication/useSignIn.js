import { useState } from "react"

import { useAuth } from '../../contexts/AuthContext'

const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useAuth()

  const signIn = async (userData, successCallback, errorCallback) => {
    setIsLoading(true)

    try {
      await login(userData)
      successCallback()
    } catch (error) {
      setError(error)
      errorCallback(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, signIn }
}

export { useSignIn }
