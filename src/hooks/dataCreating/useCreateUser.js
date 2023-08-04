import { useState } from 'react'

import { api } from '../../services/api'

const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const createUser = async (userData, successCallback, errorCallback) => {
    setIsLoading(true)

    try {
      await api.post("/users", userData)
      successCallback()
    } catch (error) {
      setError(error)
      errorCallback(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { isLoading, error, createUser }
}

export { useCreateUser }
