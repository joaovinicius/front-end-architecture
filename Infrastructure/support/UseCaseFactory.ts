import axios from 'axios'

export function UseCaseFactory (Repository: any, UseCase: any) {
  const axiosInstance = axios.create()
  const repositoryInstance = new Repository(axiosInstance)

  return new UseCase(repositoryInstance)
}
