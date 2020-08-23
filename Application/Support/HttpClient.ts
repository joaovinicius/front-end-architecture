export interface Response {
  data: any,
  status: number,
  headers: object,
  request: object
}

export interface HttpClient {
  request(config: object): Promise<Response>,
  get(url: string, config?: object): Promise<Response>,
  delete(url: string, config?: object): Promise<Response>,
  post(url: string, data: object, config?: object): Promise<Response>,
  put(url: string, data: object, config?: object): Promise<Response>,
  patch(url: string, data: object, config?: object): Promise<Response>,
}
