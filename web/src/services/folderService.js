import { httpClient } from '.'

export const readFolders = async () => {
  try {
    const response = await httpClient.get('/folders')
    return response?.data
  } catch (error) {
    console.error(error)
  }
}