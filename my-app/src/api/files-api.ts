import Axios from 'axios'
import { apiEndpoint } from '../config'
import { FileModel } from '../types/FileModel'

export async function getFiles(): Promise<FileModel[]> {
  console.log('Fetching files')

  const response = await Axios.get(`${apiEndpoint}/files`,)
  console.log('files: ', response.data)
  return response.data
}

export async function createFile(
  newFile: Buffer
): Promise<File> {
  const response = await Axios.post(`${apiEndpoint}/files`,)
  return response.data.item
}


export async function deleteFile(
  id: string
): Promise<void> {
  await Axios.delete(`${apiEndpoint}/files/${id}`)
}
