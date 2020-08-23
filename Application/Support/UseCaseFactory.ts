export default function UseCaseFactory (
  Repository: any,
  UseCase: any
) {
  return new UseCase(Repository)
}
