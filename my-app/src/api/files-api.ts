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
  newFile: Blob
): Promise<FileModel> {
  const form = new FormData()
  form.append("file", newFile)
  const response = await Axios.post(`${apiEndpoint}/files`, form)
  return response.data
}


export async function deleteFile(
  id: string
): Promise<void> {
  await Axios.delete(`${apiEndpoint}/files/${id}`)
}
