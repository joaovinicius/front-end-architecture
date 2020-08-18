import { IHttpClient } from './IHttpClient'

export function UseCaseFactory (
  httpClient: IHttpClient,
  Repository: any,
  UseCase: any
) {
  const repositoryInstance = new Repository(httpClient)

  return new UseCase(repositoryInstance)
}
