import axios from 'axios'

const getAuthToken = () => localStorage.getItem('admin_token')

export const apiClient = (baseURL) => {
  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  client.interceptors.request.use(
    (config) => {
      const token = getAuthToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  return client
}

export const uploadFile = async (baseURL, endpoint, file, additionalData = {}) => {
  const token = getAuthToken()
  const formData = new FormData()
  formData.append('file', file)
  
  Object.keys(additionalData).forEach(key => {
    if (additionalData[key] !== null && additionalData[key] !== undefined) {
      formData.append(key, additionalData[key])
    }
  })

  const response = await axios.post(`${baseURL}${endpoint}`, formData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

