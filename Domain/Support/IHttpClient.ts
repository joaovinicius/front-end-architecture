interface IResponse {
  data: any,
  status: number,
  headers: object,
  request: object
}

export interface IHttpClient {
  request(config: object): Promise<IResponse>,
  get(url: string, config?: object): Promise<IResponse>,
  delete(url: string, config?: object): Promise<IResponse>,
  post(url: string, data: object, config?: object): Promise<IResponse>,
  put(url: string, data: object, config?: object): Promise<IResponse>,
  patch(url: string, data: object, config?: object): Promise<IResponse>,
}