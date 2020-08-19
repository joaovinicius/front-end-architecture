import { IHttpClient } from './IHttpClient'

export function UseCaseFactory (
  Repository: any,
  UseCase: any
) {
  return new UseCase(Repository)
}
